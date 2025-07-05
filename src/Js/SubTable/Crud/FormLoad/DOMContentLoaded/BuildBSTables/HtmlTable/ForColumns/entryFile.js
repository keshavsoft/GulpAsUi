let StartFunc = ({ inColumns }) => {
    let LocalColumns = JSON.parse(JSON.stringify(inColumns));

    LocalColumns.splice(0, 0, jFLocalFuncForSerialColumn());
    LocalColumns.push(jFLocalFuncForOptionsColumn());
    // debugger;
    LocalColumns.forEach(element => {
        element.footerFormatter = (data) => {
            return jFLocalFooterFormatterFunc({
                inData: data,
                inColumnInfo: element
            });
        };
    });

    return LocalColumns;
};

const jFLocalFuncForOptionsColumn = () => {
    return {
        field: "Opts",
        title: "Opts ",
        formatter: "jFLocalOptsFormater"
    };
};

const jFLocalFuncForSerialColumn = () => {
    return {
        "field": "KS-Serial",
        "title": "#",
        "formatter": "jFLocalSerialColumn"
    };
};

const jFLocalFooterFormatterFunc = ({ inData, inColumnInfo }) => {
    console.log("data : ", inData, inColumnInfo);

    return `<input class="form-control" name="${inColumnInfo.field}" type="text">`;
};

export { StartFunc };