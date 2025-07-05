import { StartFunc as StartFuncTableFooterSaveButtonId } from "./TableFooterSaveButtonId/EntryFile.js";

let StartFunc = () => {
    StartFuncTableFooterSaveButtonId();
    // jFLocalPullFarmers();
    
    // const jVarLocalTodayDate = jFLocalTodayDate();

    // jFLocalToInputTableFooterDateInputId(jVarLocalTodayDate);

    // LocalFuncForTableFooterPartyNameInputIdFocus();
};

let LocalFuncForTableFooterPartyNameInputIdFocus = () => {
    let jVarLocalHtmlId = 'TableFooterPartyNameInputId';
    let jVarLocalTableFooterPartyNameInputId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTableFooterPartyNameInputId === null === false) {
        jVarLocalTableFooterPartyNameInputId.focus();
    };
};

let jFLocalToInputTableFooterDateInputId = (inValue) => {
    let jVarLocalHtmlId = 'TableFooterDateInputId';
    let jVarLocalTableFooterDateInputId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTableFooterDateInputId === null === false) {
        jVarLocalTableFooterDateInputId.value = inValue;
    };
};

const jFLocalTodayDate = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1
    const day = String(today.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
};

let jFLocalPullFarmers = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("HeaderItemFarmersId");
    jVarLocalRefreshBSTableId.click();
};

export { StartFunc };