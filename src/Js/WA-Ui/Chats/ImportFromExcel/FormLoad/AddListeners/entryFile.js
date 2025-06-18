import { StartFunc as StartFuncRefreshBSTableClass } from "./RefreshBSTableClass/EntryFile.js";
import { StartFunc as StartFuncFromFromFile } from "./FromFile/entryFile.js";
import { StartFunc as StartFuncFromBuildBsTable } from "./BuildBsTable/entryFile.js";

let StartFunc = () => {
    StartFuncRefreshBSTableClass();
    StartFuncFromFromFile();
    StartFuncFromBuildBsTable();
};

export { StartFunc };