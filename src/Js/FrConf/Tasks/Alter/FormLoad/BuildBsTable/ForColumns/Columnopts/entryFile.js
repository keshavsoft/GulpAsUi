let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jFLocalOptsFormater;
};

function jFLocalOptsFormater(value, row, index) {
    return [
      `<a class="like btn" href="#" title="Alter">`,
        '<i class="bi bi-pencil-square" style="color: #DC143C;"></i>',
        '</a>',
    ].join('');
};



export { StartFunc };