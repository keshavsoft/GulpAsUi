import { StartFunc as StartFuncTableFooterSaveButtonId } from "./TableFooterSaveButtonId/EntryFile.js";

let StartFunc = () => {
    StartFuncTableFooterSaveButtonId();

    const table = document.querySelector("#table");
    const $table = $('#table');
    const footer = table.querySelector("tfoot");
    const firstInput = footer?.querySelector("input");

    firstInput?.focus();
    if (!footer) return;

    const data = $table.bootstrapTable('getData');
    const headerCells = table.querySelectorAll("thead th");

    footer.querySelectorAll("tr").length > 1 && footer.removeChild(footer.querySelectorAll("tr")[1]);

    const totalRow = document.createElement("tr");

    headerCells.forEach(th => {
        const td = document.createElement("td");
        const field = th.dataset.field;

        if (field === "Amount") {
            const total = data.reduce((sum, row) => sum + (parseFloat(row[field]) || 0), 0);
            td.textContent = `₹ ${total.toFixed(2)}`;
            td.className = "fw-bold text-end";
        }

        totalRow.appendChild(td);
    });

    footer.appendChild(totalRow);
};

export { StartFunc };
