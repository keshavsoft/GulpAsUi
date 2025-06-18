import { StartFunc as StartFuncFetchFuncs } from './fetchFuncs.js';
import { StartFunc as afterFetch } from './afterFetch/EntryFile.js';

const StartFunc = async () => {
    jFLocalShowLoading();
    let localResponse = await StartFuncFetchFuncs();

    afterFetch({ inResponse: localResponse });
    jFLocalHideLoading();
};
const jFLocalShowLoading = () => {
    let jVarLocalLoadingButtonId = document.getElementById('LoadingButtonId');
    jVarLocalLoadingButtonId?.classList.remove('d-none');

    let jVarLocalRefreshATagId = document.getElementById('RefreshATagId');
    jVarLocalRefreshATagId?.classList.add('d-none');
};

const jFLocalHideLoading = () => {
    let jVarLocalLoadingButtonId = document.getElementById('LoadingButtonId');
    jVarLocalLoadingButtonId?.classList.add('d-none');

    let jVarLocalRefreshATagId = document.getElementById('RefreshATagId');
    jVarLocalRefreshATagId?.classList.remove('d-none');
};
export { StartFunc };
