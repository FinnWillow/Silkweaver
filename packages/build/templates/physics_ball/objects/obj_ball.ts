export class obj_ball extends gm_object {
    static sprite = 'spr_ball';
    static physics = true;
    static physics_shape = 'circle';
    static physics_density = 0.2;
    static physics_restitution = 0.9;
    static physics_friction = 0;
    bouce = 30;
    stride = 0.2;
    on_step(): void {
        // collide and bounce
        let paddle = instance_nearest(sw.x, sw.y, obj_paddle);

        if (sw.place_meeting(sw.x, sw.y + sw.phy_speed_y, obj_paddle)) {
            global.score += 1;
            sw.phy_speed_y = -inst.bouce;
            sw.phy_speed_x = (paddle.x - sw.x) * -inst.stride;
        }

        if (sw.y > 1000) {
            game_restart();
        }
    }
}
