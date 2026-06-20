export class obj_paddle extends gm_object {
    static sprite = 'spr_paddle';
    static physics = true;
    static physics_shape = 'box';
    static physics_density = 0;
    static physics_restitution = 0;
    static physics_friction = 0;

    on_create(): void {
        inst.mouse_delta = 0.0;
        inst.last_mouse_x = mouse_x;
        sw.x = mouse_x;
    }
    
    on_step(): void {
        // delta
        inst.mouse_delta = mouse_x - inst.last_mouse_x;

        // motion
        sw.phy_set_position(sw.x + inst.mouse_delta, sw.y);

        // complete
        inst.last_mouse_x = mouse_x;
    }
}
