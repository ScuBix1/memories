import { SIZE, ICONS } from "../settings.js";
import { Card, VISIBLE, DONE, HIDDEN } from "./card.js";

export class Board {
  cards = [];
  state = 0;

  // Notifications
  onChange = [];  // array of handlers

  constructor() {
    const volum = SIZE*SIZE;
    const modulo = ICONS.length;
    let i = Math.floor(Math.random()*modulo);
    this.cards = [];
    while (this.cards.length < volum) {
      if (this.cards.length+1 < volum) {
        this.cards.push(new Card(ICONS[i]), new Card(ICONS[i]));
      } else {
        this.cards.push(new Card());
      }
      i += 1;
      i %= modulo;
    }
    this.shuffle();
  }

  shuffle() {
    const volum = SIZE*SIZE;
    const cycles = volum*volum;
    for (let cycle=0; cycle<cycles; cycle++) {
      const i = Math.floor(volum*Math.random());
      const j = Math.floor(volum*Math.random());
      // On échange les i et j
      const x = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = x;
    }
  }
  clic(row, col) {
    const card = this.cards[row*SIZE+col];
    if (card && card.style == HIDDEN) {
      card.style = VISIBLE;
      this.state += 1;
      if (this.state == 2) {
        const cards = this.cards.filter(card => card.style == VISIBLE);
        if (cards[0].icon == cards[1].icon) {
          cards[0].style = DONE;
          cards[1].style = DONE;
          this.change();
        } else {
          this.change();
          setTimeout(() => {
            cards[0].style = HIDDEN;
            cards[1].style = HIDDEN;
            this.onChange.forEach(listener => listener());
          }, 1000);
        }
        this.state = 0;
      } else {
        this.change();
      }
    }
  }
  
  change() {
    this.onChange.forEach(listener => listener());
  }
}
