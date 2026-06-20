export class obj_player extends gm_object {

    on_step(): void {
        // inputs
        let key_up = keyboard_check(ord("W"));
        let key_down = keyboard_check(ord("S"));
        let key_left = keyboard_check(ord("A"));
        let key_right = keyboard_check(ord("D"));

        //direction
        let dir: vector2 = new vector2(0,0);
        if (key_up) {
            dir.y = -1;
        }

        if (key_down) {
            dir.y = 1;
        }

        if (key_left) {
            dir.x = -1;
        }

        if (key_right) {
            dir.x = 1;
        }

        // motion
        let motion_x = dir.x * inst.spd;
        let motion_y = dir.y * inst.spd;

        if (!sw.place_meeting(sw.x + motion_x, sw.y, _col)) {
            sw.x += motion_x;
        }

        if (!sw.place_meeting(sw.x, sw.y + motion_y, _col)) {
            sw.y += motion_y;
        }
    }

    static sprite = 'spr_player'
    spd = 3
}
