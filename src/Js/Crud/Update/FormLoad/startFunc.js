import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";
import { StartFunc as UserDetails } from "./UserDetails/Entry.js";
// import { StartFunc as ToDataList } from "./ToDataList/startFunc.js";

const StartFunc = async () => {
    StartFuncAddListeners();
    UserDetails();
    // ToDataList();
};

export { StartFunc };
