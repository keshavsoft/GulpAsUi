import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";
import { StartFunc as RowDataGetFetch } from "./RowDataGetFetch/entryFile.js";
import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";

const StartFunc = async () => {
    StartFuncBuildBsTable();
    RowDataGetFetch();
    StartFuncAddListeners();
};

export { StartFunc };
