import { SIZE } from "../settings.js";

export default class Grid {
  tbody;
  constructor(tbody) {
    this.tbody = tbody;
  }

  render(board) {
    this.tbody.innerHTML = "";
    for (let row=0; row<SIZE; row++) {
      const tr = document.createElement("tr");
      for (let col=0; col<SIZE; col++) {
        const td = document.createElement("td");
        const card = board.cards[row*SIZE+col];
        if (card.icon) {
          
          // Ajout d'une image
          const icon = document.createElement("span");
          icon.innerHTML = card.icon || "";
          icon.classList.add("material-symbols-outlined", "icon");
          td.addEventListener('click', () => board.clic(row,col));
          td.append(icon);
        }
        td.classList.add(card.style);
        tr.append(td);
      }

      // Ajout d'une ligne
      this.tbody.append(tr);
    }
  }
}
