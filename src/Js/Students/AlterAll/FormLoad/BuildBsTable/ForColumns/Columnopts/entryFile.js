let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jFLocalOptsFormater;
    // inFindColumn.footerFormatter = jFLocalFooterFormatterFunc;
};

function jFLocalOptsFormater(value, row, index) {
    return [
        `<a href="#" class="link btn" style="background: #435ebe; color: white;" title="Edit">`,
        `<i class="bi bi-pencil-fill"></i>`,
        `</a>`

    ].join('');
};



export { StartFunc };