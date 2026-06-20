export class obj_tracker extends gm_object {
    static sprite = 'spr_tracker';
    static visible = false;
    on_draw_gui(): void {
        draw_text(sw.x, sw.y, "SCORE: " + get_score());
    }
}
