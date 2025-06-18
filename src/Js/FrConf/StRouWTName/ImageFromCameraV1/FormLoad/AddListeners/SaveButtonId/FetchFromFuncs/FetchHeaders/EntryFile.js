import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");

    let jVarLocalData = jFLocalserializeFormData(jVarLocalForm);

    jVarLocalData.image = jFLocalImageToUrl();
    KeysJson.body = JSON.stringify(jVarLocalData);

    return KeysJson;
};

function jFLocalserializeFormData(form) {
    var formData = new FormData(form);
    var serializedData = {};

    for (var [name, value] of formData) {
        if (serializedData[name]) {
            if (!Array.isArray(serializedData[name])) {
                serializedData[name] = [serializedData[name]];
            }
            serializedData[name].push(value);
        } else {
            serializedData[name] = value;
        }
    }

    return serializedData;
};

const jFLocalImageToUrl = () => {
    var c = document.createElement('canvas');
    var img = document.getElementById('photoPreview'); 
    c.height = img.naturalHeight;
    c.width = img.naturalWidth;
    var ctx = c.getContext('2d');

    ctx.drawImage(img, 0, 0, c.width, c.height);
    var base64String = c.toDataURL();
    // console.log("base64Strings : ", base64String);

    return base64String;
};


export { StartFunc }