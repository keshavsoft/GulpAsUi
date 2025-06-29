import optionsJson from './options.json' with { type: 'json' };
import commonConfig from '../../../commonConfig.json' with { type: 'json' };
import commonColumns from '../../../commonColumns.json' with { type: 'json' };
import { StartFunc as ForColumns } from "./ForColumns/entryFile.js";
import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/entryFile.js";

const StartFunc = () => {
    const $table = $('#table');
    optionsJson.onClickRow = StartFuncOnClickRowFunc;

    const mergedColumns = [...commonColumns, ...optionsJson.columns];

    const finalOptions = {
        ...commonConfig,
        ...optionsJson,
        columns: mergedColumns
    };


    ForColumns({ inColumns: finalOptions.columns });
    $table.bootstrapTable(finalOptions);
};

export { StartFunc };
