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
        let paddle = instance_nearest(this.x, this.y, obj_paddle);

        if (this.place_meeting(this.x, this.y + this.phy_speed_y, obj_paddle)) {
            global.score += 1;
            this.phy_speed_y = -this.bouce;
            this.phy_speed_x = (paddle.x - this.x) * -this.stride;
        }

        if (this.y > 1000) {
            game_restart();
        }
    }
}
