/**
 * Hover tooltips — a single floating help bubble, shown after a delay when the pointer rests on an
 * element a tooltip is attached to. Used so settings/preferences items can explain themselves on
 * demand instead of with inline text under every option (which made spacing lumpy and ambiguous).
 *
 * Honors the user's editor prefs: `tooltips` (on/off) and `tooltipDelay` (ms before showing), both
 * read live at hover time. One reused node, positioned next to the target and clamped to the viewport.
 */

import { editor_prefs_get } from '../editor_prefs.js'

let _tip:   HTMLDivElement | null = null
let _timer: ReturnType<typeof setTimeout> | null = null

function _node(): HTMLDivElement {
    if (_tip) return _tip
    _tip = document.createElement('div')
    _tip.className = 'sw-tooltip'
    _tip.style.display = 'none'
    document.body.appendChild(_tip)
    return _tip
}

/** Cancels a pending show and hides the bubble. */
function _hide(): void {
    if (_timer) { clearTimeout(_timer); _timer = null }
    if (_tip) _tip.style.display = 'none'
}

/** Positions and shows the bubble next to `target`, flipping/clamping to stay on screen. */
function _show(target: HTMLElement, text: string): void {
    if (!target.isConnected) return
    const tip = _node()
    tip.textContent = text
    tip.style.display = 'block'
    tip.style.visibility = 'hidden'   // measure before placing

    const r = target.getBoundingClientRect()
    const tw = tip.offsetWidth, th = tip.offsetHeight
    const vw = window.innerWidth, vh = window.innerHeight
    const M = 8

    let x = r.left
    if (x + tw > vw - M) x = vw - M - tw
    if (x < M) x = M

    let y = r.bottom + 6
    if (y + th > vh - M) y = r.top - th - 6   // not enough room below → flip above
    if (y < M) y = M

    tip.style.left = `${Math.round(x)}px`
    tip.style.top  = `${Math.round(y)}px`
    tip.style.visibility = 'visible'
}

/**
 * Attaches a hover help tooltip to an element. Hovering it (respecting the user's delay + on/off
 * prefs) shows `text`; leaving or interacting hides it. No-op for empty text.
 * @param target - The element to explain
 * @param text   - The explanation shown on hover
 */
export function tooltip_attach(target: HTMLElement, text: string): void {
    if (!text) return
    target.addEventListener('mouseenter', () => {
        const p = editor_prefs_get()
        if (!p.tooltips) return
        if (_timer) clearTimeout(_timer)
        _timer = setTimeout(() => _show(target, text), Math.max(0, p.tooltipDelay))
    })
    target.addEventListener('mouseleave', _hide)
    target.addEventListener('mousedown', _hide)
}
