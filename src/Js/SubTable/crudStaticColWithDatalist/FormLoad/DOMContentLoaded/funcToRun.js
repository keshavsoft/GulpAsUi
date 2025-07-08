import { StartFunc as StartFuncFromAddListeners } from "./AddListeners/entryFile.js";
import { StartFunc as StartFuncFromBuildBSTables } from "./BuildBSTables/entryFile.js";
import { StartFunc as StartFuncFromShowOnDom } from "./showOnDom.js";
import { StartFunc as StartFuncDatalist } from "./Datalist/etryFile.js";

let StartFunc = () => {
    StartFuncFromAddListeners();
    StartFuncFromBuildBSTables();
    StartFuncFromShowOnDom();
    StartFuncDatalist()
};

export { StartFunc };