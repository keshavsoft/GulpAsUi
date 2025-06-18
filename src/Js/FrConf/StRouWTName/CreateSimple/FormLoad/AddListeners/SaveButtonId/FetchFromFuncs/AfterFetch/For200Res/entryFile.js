import UrlJson from './url.json' with {type: 'json'};
import ConfigJson from '../../../../../../Config.json' with {type: 'json'};

let StartFunc = ({ inRowPk }) => {
    let LocalRowPk = inRowPk;

    if (LocalRowPk === undefined) {
        window.location.href = `${UrlJson.RedirectToUrl}`;

        return;
    };

    if (LocalFuncForSingleTable({ inRowPk: LocalRowPk }) === false) {
        LocalFuncForAllTables({ inRowPk: LocalRowPk });
    };
};

const LocalFuncForSingleTable = ({ inRowPk }) => {
    let LocalRowPk = inRowPk;

    if (window.location.pathname.endsWith(`/${UrlJson.PresentUrl}`)) {
        window.location.href = `${UrlJson.RedirectToUrl}?inRowPk=${LocalRowPk}`;
        return true;
    };

    return false;
};

const LocalFuncForAllTables = ({ inRowPk }) => {
    let LocalRowPk = inRowPk;
    const jVarGlobalTableName = ConfigJson.tableName;

    window.location.href = `${jVarGlobalTableName}${UrlJson.RedirectToUrl}?inRowPk=${LocalRowPk}`;
};


export { StartFunc }