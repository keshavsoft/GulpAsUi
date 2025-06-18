import { StartFunc as StartFuncNav } from "./Nav/EntryFile.js";
const StartFunc = (row, $element, field) => {

        
    if (field === "KS-Opts") {
        StartFuncNav({ inRowpk: row.UuId });
    };
};

export { StartFunc };