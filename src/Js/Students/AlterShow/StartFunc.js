import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";

const StartFunc = () => {
    StartFuncFormLoad();
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        StartFuncShowOnDom();
    };
};

StartFunc();