import { StartFunc as Status200 } from "./Status200.js";
import { StartFunc as Status500 } from "./Status500.js";

const StartFunc = async (response) => {

    if (response.status === 200) {
        Status200(await response.json());
    };
    if (response.status === 500) {
        Status500(await localResponse.text());
    };


};

export { StartFunc };