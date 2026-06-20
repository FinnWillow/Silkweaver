/**
 * Reflection helpers for reading/writing instance and global variables by
 * name, mirroring GMS's variable_instance_* and variable_global_* families.
 *
 * Globals live in `global_store`, also exposed as `global` (GMS `global.score`);
 * user/generated code can read/write them directly (e.g. `global.score += 1`) and
 * the variable_global_* functions stay in sync with it.
 */

import { get_score, set_score, get_lives, set_lives, get_health, set_health } from './game_state.js'

/** Shared key/value store backing the variable_global_* functions. */
export const global_store: Record<string, any> = {}

/**
 * The GMS `global.` namespace — the same object as `global_store`, so `global.x` and the
 * variable_global_* reflection share one store. The built-in `score` / `lives` / `health` are
 * accessor properties that delegate to game_state, so `global.lives -= 1` still arms the
 * No More Lives / No More Health events. (ESM imported bindings can't be reassigned, which is why
 * GMS's bare writable `score` becomes `global.score` here.)
 */
export const global = global_store
for (const [key, getter, setter] of [
    ['score',  get_score,  set_score],
    ['lives',  get_lives,  set_lives],
    ['health', get_health, set_health],
] as const) {
    Object.defineProperty(global, key, { get: getter, set: setter, enumerable: false, configurable: true })
}

// =========================================================================
// Instance variables
// =========================================================================

/** Returns the value of a named variable on an instance. */
export function variable_instance_get(inst: object, name: string): any {
    return (inst as any)[name]
}

/** Sets a named variable on an instance. */
export function variable_instance_set(inst: object, name: string, value: any): void {
    (inst as any)[name] = value
}

/** True if the instance has the named variable. */
export function variable_instance_exists(inst: object, name: string): boolean {
    return name in (inst as any)
}

/** Returns the names of an instance's own enumerable variables. */
export function variable_instance_get_names(inst: object): string[] {
    return Object.keys(inst as any)
}

// =========================================================================
// Global variables
// =========================================================================

/** Returns the value of a named global variable. */
export function variable_global_get(name: string): any {
    return global_store[name]
}

/** Sets a named global variable. */
export function variable_global_set(name: string, value: any): void {
    global_store[name] = value
}

/** True if the named global variable exists. */
export function variable_global_exists(name: string): boolean {
    return Object.prototype.hasOwnProperty.call(global_store, name)
}

/** Returns the names of all defined global variables. */
export function variable_global_get_names(): string[] {
    return Object.keys(global_store)
}
