import { StartFunc as StartFuncFormLoad } from "./FormLoad/entryFile.js";

const StartFunc = () => {
    let jVarLocalFromAdmin = true;
    console.log("this is crud");
    
    if (jVarLocalFromAdmin) {
        StartFuncFormLoad();
    };
};

StartFunc();