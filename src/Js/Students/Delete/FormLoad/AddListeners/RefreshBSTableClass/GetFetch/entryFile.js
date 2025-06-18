import { StartFunc as GetFetch } from './GetFetch.js';
import { StartFunc as afterFetch } from './afterFetch/EntryFile.js';

const StartFunc = async () => {
    let localResponse = await GetFetch();

    afterFetch(localResponse);
};

export { StartFunc };
