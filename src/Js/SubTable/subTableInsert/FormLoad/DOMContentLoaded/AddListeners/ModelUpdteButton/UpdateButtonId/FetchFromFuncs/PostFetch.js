import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/entryFile.js";
import UrlJson from "../../../../../../config.json" with { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = UrlJson.AlterEndPoint;
    
    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "pk" });
    
    let jVarModelPk = jFLocalModalPkInput();
    
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    
    let jVarLocalFetchUrl = `${LocalroutePath}/${jVarLocalFilterString}/ITEMS/${jVarModelPk}`;
    
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

let jFLocalModalPkInput = () => {
    let jVarLocalModalPkInput = 'ModalPkInput'
    let jVarLocalHtmlId = document.getElementById(jVarLocalModalPkInput);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };

