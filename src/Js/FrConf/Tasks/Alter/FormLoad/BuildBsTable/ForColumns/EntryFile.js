import { StartFunc as StartFuncColumnopts } from "./Columnopts/entryFile.js";
import { StartFunc as StartFuncColumnSerial } from "./SerialColumn/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnopts = LocalColumns.find(element => element.field === "Alter");
    let LocalColumnSerial = LocalColumns.find(element => element.field === "KS-Serial");
    
    if (LocalColumnopts === undefined === false) {
        StartFuncColumnopts({ inFindColumn: LocalColumnopts });  
    };
    if (LocalColumnSerial === undefined === false) {
        StartFuncColumnSerial({ inFindColumn: LocalColumnSerial });
    };
}

export { StartFunc };