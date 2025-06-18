let StartFunc = ({ inDataToShow }) => {
    let jVarLocalData = inDataToShow;
    
    jFLocalToInnerHtmlyourAddOnRateTextId({ inyourAddOnRate: jVarLocalData.AddOnRate })
    jFLocalToInnerHtmlyourAddOnServiceTextId({ inyourAddOnService: jVarLocalData.AddOnService });
    
};

let jFLocalToInnerHtmlyourAddOnRateTextId = ({ inyourAddOnRate }) => {
    let jVarLocalHtmlId = 'AddOnRate';
    let jVarLocalVoucherNumberTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalVoucherNumberTextId.value = inyourAddOnRate;
};
let jFLocalToInnerHtmlyourAddOnServiceTextId = ({ inyourAddOnService }) => {
    let jVarLocalHtmlId = 'AddOnServices';
    let jVarLocalVoucherNumberTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalVoucherNumberTextId.value = inyourAddOnService;
};


export { StartFunc };