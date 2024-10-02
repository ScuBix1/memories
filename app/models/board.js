import { SIZE, ICONS } from "../settings.js";

export class Board {
    icons;
    
    constructor() {
        const volum = SIZE*SIZE;
        const modulo = ICONS.length;
        let i = Math.floor(Math.random()*modulo);
        this.icons = [];
        while (this.icons.length < volum) {
            if (this.icons.length + 1 < volum) {
                this.icons.push(ICONS[i], ICONS[i]);
            } else {
                this.icons.push(null);
            }
            i += 1;
            i %= modulo;
        }
        this. shuffle();
    }

    shuffle() {
        const volum = SIZE*SIZE;
        const cycles = volum*volum;
        for (let cycle=0; cycle<cycles; cycle++) {
            const i = Math.floor(volum*Math.random());
            const j = Math.floor(volum*Math.random());
            // On échange Les i et j
            const x = this.icons[i];
            this.icons[i] = this.icons[j];
            this.icons[j] = x;
        }
    }
}