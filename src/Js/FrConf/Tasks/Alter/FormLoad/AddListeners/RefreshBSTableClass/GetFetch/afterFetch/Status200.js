const StartFunc = (data) => {

    var $table = $('#table');
    let jVarLocalSortByAccountName = data.sort((a, b) => a.value - b.value);

    $table.bootstrapTable("load", jVarLocalSortByAccountName);
};

export { StartFunc };