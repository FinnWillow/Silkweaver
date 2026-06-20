/**
 * `sw` / `inst` — bare namespaces onto the currently-executing instance.
 *
 * Object code splits the instance's surface into two engine-vocab namespaces (both auto-injected,
 * like `global`):
 *   - `sw`   — the engine's BUILT-IN instance API: `sw.x`, `sw.image_angle`, `sw.sprite_index`,
 *              `sw.place_meeting(…)`, `sw.phy_set_position(…)`, … (typed `instance`, so the IDE
 *              completes it from the real engine API).
 *   - `inst` — the instance's OWN variables (the ones the game author adds: `inst.hp`, `inst.stride`).
 *              Typed loosely so the IDE doesn't flood it with the engine API; its autocomplete is the
 *              curated "your variables" list supplied by the editor instead.
 * `this` is left to plain JS/TS — in an event buffer it is the script's global scope, which the
 * engine deliberately does not try to repurpose.
 *
 * Both names are the SAME proxy at runtime — they forward every read/write to whichever instance is
 * mid-event, so `sw.x` and `inst.x` are the same live value; the split is purely about which
 * autocomplete you get. The game loop wraps every event dispatch in `run_as`, which sets that
 * instance active for the call (restoring the previous one after, so nested create/destroy/lifecycle
 * events don't leak). Touched outside an event — where there is no current instance — they throw.
 */

import type { instance } from './instance.js'

let _active: instance | null = null   // the instance whose event code is currently running

/**
 * Runs `fn` with `target` as the active instance, then restores the previously-active one. The
 * save/restore makes nesting correct: if an event creates another instance (firing its Create event
 * under a nested `run_as`), the outer event's `sw`/`inst` is intact once that returns.
 * @param target - The instance whose event body is about to run
 * @param fn - The event body to run
 */
export function run_as(target: instance, fn: () => void): void {
    const prev = _active
    _active = target
    try { fn() } finally { _active = prev }
}

/** The instance currently mid-event, or null outside event dispatch. */
export function active_instance(): instance | null { return _active }

/** Raised when `sw`/`inst` is touched with no instance mid-event (there is nothing to refer to). */
function _no_active(): never {
    throw new Error(
        '`sw`/`inst` was used with no current instance. They refer to the instance whose event is ' +
        'running, so they are only valid inside object events (on_create, on_step, on_draw, …).',
    )
}

/** Forwards every read/write to the active instance; methods are bound so they run against it. */
const _proxy: instance = new Proxy({} as instance, {
    get(_t, prop) {
        const a = _active ?? _no_active()
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const v = (a as any)[prop]
        return typeof v === 'function' ? v.bind(a) : v
    },
    set(_t, prop, value) {
        const a = _active ?? _no_active()
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ;(a as any)[prop] = value
        return true
    },
    has(_t, prop) { return prop in (_active ?? _no_active()) },
}) as instance

/**
 * `sw` — the engine's built-in instance API for the currently-executing instance (position, motion,
 * image transform, sprite, depth, and the engine instance methods).
 */
export const sw: instance = _proxy

/**
 * `inst` — the currently-executing instance's OWN (author-defined) variables. Same object as `sw` at
 * runtime; typed loosely so its IDE autocomplete is the curated list of the object's variables rather
 * than the engine API (which lives on `sw`).
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const inst: Record<string, any> = _proxy as unknown as Record<string, any>
