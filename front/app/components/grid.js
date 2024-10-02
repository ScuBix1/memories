import { SIZE } from "../settings.js";

export default class Grid {
    tbody;
    constructor(tbody) {
        this.tbody = tbody;
    }

    render(board) {
        for (let row=0; row<SIZE; row++) {
            const tr = document.createElement("tr");
            for(let col=0; col<SIZE; col++) {

                const td = document.createElement("td");
                const icon = document.createElement("span");
                icon.classList.add("material-symbols-outlined");
                icon.innerHTML=board.icons[row*SIZE+col]||"";
                td.append(icon);
                tr.append(td);
            }
            this.tbody.append(tr);
        }
    }
}
