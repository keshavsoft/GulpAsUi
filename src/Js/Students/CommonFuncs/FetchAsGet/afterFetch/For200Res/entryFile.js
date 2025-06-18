let StartFunc = ({ inResponseAsJson }) => {
    console.log("inResponseAsJson : ", inResponseAsJson);
    jFLocalToInputRowsCountId(inResponseAsJson);
};

let jFLocalToInputRowsCountId = (inValue) => {
    let jVarLocalHtmlId = 'RowsCountId';
    let jVarLocalRowsCountId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalRowsCountId === null === false) {
        jVarLocalRowsCountId.innerHTML = inValue;
    };
};

export { StartFunc };