export class obj_paddle extends gm_object {
    static sprite = 'spr_paddle';
    static physics = true;
    static physics_shape = 'box';
    static physics_density = 0;
    static physics_restitution = 0;
    static physics_friction = 0;
    on_create(): void {
        this.last_mouse_x = mouse_x;
        this.x = mouse_x;
        this.mouse_delta = 0.0;
        this.hover = this.y;
    }
    on_step(): void {
        // delta
        this.mouse_delta = mouse_x - this.last_mouse_x;

        // motion
        this.phy_set_position(this.x + this.mouse_delta, this.y);

        // complete
        this.last_mouse_x = mouse_x;
    }
}
