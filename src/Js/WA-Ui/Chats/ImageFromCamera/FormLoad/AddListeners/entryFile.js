import { StartFunc as SaveButtonId } from "./SaveButtonId/EntryFile.js";
import { StartFunc as StartFuncFromStartButtonId } from "./StartButtonId/EntryFile.js";
import { StartFunc as StartFuncFromCameraId } from "./CameraId/EntryFile.js";

let StartFunc = () => {
    SaveButtonId();
    StartFuncFromStartButtonId();
    StartFuncFromCameraId();
};

export { StartFunc };