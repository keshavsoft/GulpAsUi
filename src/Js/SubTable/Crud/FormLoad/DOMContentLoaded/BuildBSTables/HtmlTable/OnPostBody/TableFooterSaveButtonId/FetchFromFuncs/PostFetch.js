import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../../../../../Config.json" with { type: "json" };
let StartFunc = async () => {
    let jVarLocalPostUrl = ConfigJson.PostEndPoint;
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `${jVarLocalPostUrl}`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

