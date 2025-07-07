import optionsJson from './options.json' with {type: 'json'};
import commonConfigJson from '../../../Config.json' with {type: 'json'};
// import { StartFunc as ForColumns } from "./ForColumns/entryFile.js";
import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/entryFile.js";

const StartFunc = () => {
    var $table = $('#table');
    commonConfigJson.onClickRow = StartFuncOnClickRowFunc;
    // ForColumns({ inColumns: optionsJson.columns });

    $table.bootstrapTable(commonConfigJson);
};

export { StartFunc };

