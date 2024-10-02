export const EMPTY = 'empty';
export const HIDDEN = 'hidden';
export const VISIBLE = 'visible';
export const DONE = 'done';
export class Card {
  icon;
  style;
  constructor(icon){
    this.icon = icon
    this.style = !!icon?HIDDEN:EMPTY
  }
}
