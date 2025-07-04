let StartFunc = ({ inColumns }) => {
    inColumns.forEach(element => {
        element.footerFormatter = (data) => {
            return jFLocalFooterFormatterFunc({
                inData: data,
                inColumnInfo: element
            });
        };
    });
};

const jFLocalFooterFormatterFunc = ({ inData, inColumnInfo }) => {
    console.log("data : ", inData, inColumnInfo);

    return `<input class="form-control" name="${inColumnInfo.field}" type="text">`;
};

export { StartFunc };