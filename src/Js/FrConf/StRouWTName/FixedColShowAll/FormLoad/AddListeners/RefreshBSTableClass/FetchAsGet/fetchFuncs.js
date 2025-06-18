import getUrlJson from './getUrl.json' with {type: 'json'};
import CommonConfigJson from '../../../../../CommonConfig.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchUrl = getUrlJson.GetEndPoint;
    const jVarLocalRoutePath = CommonConfigJson.CommonRoutePath;
    const jVarLocalTableName = CommonConfigJson.CommonTableName;

    let response = await fetch(`/${jVarLocalRoutePath}/${jVarLocalTableName}/${jVarLocalFetchUrl}`);

    return await response;
};

export { StartFunc };

