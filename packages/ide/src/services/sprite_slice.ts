/**
 * Canvas2D-friendly sprite scale-mode slicing for the IDE editors (room WYSIWYG preview).
 *
 * Mirrors the engine's `sprite_scale_cells` but returns source/destination rectangles in *pixels*
 * (what ctx.drawImage wants) instead of UVs. Destination cells are relative to the filled area's
 * top-left (0,0)…(w·xscale, h·yscale); the caller positions that area (origin, rotation).
 */

export type scale_mode = 'stretch' | 'tile' | 'nineslice'

/** One ctx.drawImage cell: a source rect (native px) → a destination rect (area-relative px). */
export interface slice_cell {
    sx: number; sy: number; sw: number; sh: number   // source rectangle in the native frame
    dx: number; dy: number; dw: number; dh: number   // destination rectangle, relative to area top-left
}

const _TILE_CAP = 4096   // guard against an extreme scale spamming cells

/**
 * Decomposes a w×h sprite drawn at (xscale, yscale) into drawImage cells for its scale mode.
 * @returns one cell for 'stretch', a grid of native tiles for 'tile', or 9 cells for 'nineslice'.
 */
export function sprite_slice_cells(
    mode: scale_mode,
    w: number, h: number,
    xscale: number, yscale: number,
    sl: number, st: number, sr: number, sb: number,
): slice_cell[] {
    const W = w * xscale, H = h * yscale

    if (mode === 'tile' && w > 0 && h > 0) {
        const cols = Math.min(_TILE_CAP, Math.ceil(W / w))
        const rows = Math.min(_TILE_CAP, Math.ceil(H / h))
        const cells: slice_cell[] = []
        for (let j = 0; j < rows; j++) {
            const dh = Math.min(h, H - j * h)
            for (let i = 0; i < cols; i++) {
                const dw = Math.min(w, W - i * w)
                // Tiles draw 1:1 (no stretch within a tile), so source size = dest size.
                cells.push({ sx: 0, sy: 0, sw: dw, sh: dh, dx: i * w, dy: j * h, dw, dh })
            }
        }
        return cells
    }

    if (mode === 'nineslice' && w > 0 && h > 0) {
        let cl = Math.max(0, sl), cr = Math.max(0, sr)
        let ct = Math.max(0, st), cb = Math.max(0, sb)
        if (cl + cr > W && cl + cr > 0) { const f = W / (cl + cr); cl *= f; cr *= f }
        if (ct + cb > H && ct + cb > 0) { const f = H / (ct + cb); ct *= f; cb *= f }
        const sxs = [0, sl, w - sr, w]          // source column seams (native px)
        const sys = [0, st, h - sb, h]          // source row seams
        const dxs = [0, cl, W - cr, W]          // destination column seams (area-relative px)
        const dys = [0, ct, H - cb, H]          // destination row seams
        const cells: slice_cell[] = []
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                const sw = sxs[c + 1]! - sxs[c]!, sh = sys[r + 1]! - sys[r]!
                const dw = dxs[c + 1]! - dxs[c]!, dh = dys[r + 1]! - dys[r]!
                if (sw <= 0 || sh <= 0 || dw <= 0 || dh <= 0) continue
                cells.push({ sx: sxs[c]!, sy: sys[r]!, sw, sh, dx: dxs[c]!, dy: dys[r]!, dw, dh })
            }
        }
        return cells
    }

    return [{ sx: 0, sy: 0, sw: w, sh: h, dx: 0, dy: 0, dw: W, dh: H }]
}
