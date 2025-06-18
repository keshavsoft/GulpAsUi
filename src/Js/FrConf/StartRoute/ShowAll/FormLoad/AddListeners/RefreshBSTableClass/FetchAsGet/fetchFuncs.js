import CommonConfig from '../../../../../CommonConfig.json' with {type: 'json'};
import getUrlJson from './getUrl.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalCommonConfig = CommonConfig.CommonRoutePath;
    let jVarLocalPath = getUrlJson.GetEndPoint;
    let jVarLocalFetchUrl = `/${jVarLocalCommonConfig}/${jVarLocalPath}`;

    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

