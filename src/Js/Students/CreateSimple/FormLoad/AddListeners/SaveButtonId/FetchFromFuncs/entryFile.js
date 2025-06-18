import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as CheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
import { StartFunc as StartFuncFromCleanDom } from "./cleanDom.js";

let StartFunc = async () => {
    StartFuncFromCleanDom();

    let jVarLocalFromCheck = CheckFunc();

    if (jVarLocalFromCheck) {
        let jVarLocalResponse = await StartFuncFetchFuncs();

        StartFuncAfterFetch({ inResponse: jVarLocalResponse });
    };
};

export { StartFunc }