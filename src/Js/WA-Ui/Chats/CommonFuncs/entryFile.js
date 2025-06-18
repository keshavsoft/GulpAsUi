import { StartFunc as StartFuncFromFetchAsGet } from "./FetchAsGet/entryFile.js";

const StartFunc = () => {
    StartFuncFromFetchAsGet().then();
};

StartFunc();
