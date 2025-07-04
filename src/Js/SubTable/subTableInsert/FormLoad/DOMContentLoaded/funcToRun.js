import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";
import { StartFunc as RowDataGetFetch } from "./RowDataGetFetch/Entry.js";
import { StartFunc as StartFuncshowOnDom } from "./showOnDom.js";
import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";

const StartFunc = async () => {
    StartFuncBuildBsTable();
    StartFuncAddListeners();
    RowDataGetFetch();
    StartFuncshowOnDom();
};

export { StartFunc };
