import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalForm = document.getElementById("FormId");
    var formData = new FormData(jVarLocalForm);

    formData.append("image", document.getElementById('formFile').files[0]);

    KeysJson.body = formData;

    return await KeysJson;
};

let StartFunc_Keshav_15Apr2025 = async () => {
    let jVarLocalForm = document.getElementById("FormId");
    let formData = new FormData(jVarLocalForm);

    // Append file input
    const fileInput = document.getElementById('formFile');
    if (fileInput?.files?.length > 0) {
        formData.append("image", fileInput.files[0]);
    }

    // Set phone number using intl-tel-input
    const phoneInputField = document.getElementById('MobileId');
    if (phoneInputField) {
        const phoneInput = window.intlTelInputGlobals.getInstance(phoneInputField);
        const phoneNumber = phoneInput?.getNumber();
        if (phoneNumber) {
            formData.set("Mobile", phoneNumber);
        }
    }

    // Serialize all form data to JSON
    const serializedData = jFLocalSerializeFormData(jVarLocalForm);

    // Add both serialized JSON and FormData to KeysJson
    KeysJson.body = {
        rawFormData: formData,
        serializedJson: JSON.stringify(serializedData)
    };

    return KeysJson;
};

function jFLocalSerializeFormData(form) {
    var formData = new FormData(form);
    var serializedData = {};

    for (var [name, value] of formData) {
        value = value.trim();

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
}

export { StartFunc };
