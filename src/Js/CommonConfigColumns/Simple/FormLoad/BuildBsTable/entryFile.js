import optionsJson from './options.json' with { type: 'json' };
import commonConfig from '../../../commonConfig.json' with { type: 'json' };
import commonColumns from '../../../commonColumns.json' with { type: 'json' };

import { StartFunc as ForColumns } from "./ForColumns/entryFile.js";

const StartFunc = () => {
    const $table = $('#table');

    const finalOptions = {
        ...commonConfig,
        ...optionsJson,
        columns: commonColumns
    };

    ForColumns({ inColumns: finalOptions.columns });
    $table.bootstrapTable(finalOptions);
};

export { StartFunc };
