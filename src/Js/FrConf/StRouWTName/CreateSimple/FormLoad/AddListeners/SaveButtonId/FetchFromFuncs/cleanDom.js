let StartFunc = () => {
    jFLocalDisplayNoneServerErrorId();

    LocalFuncChangeCardColour();
};

let jFLocalDisplayNoneServerErrorId = () => {
    let jVarLocalHtmlId = 'ServerErrorId';
    let jVarLocalServerErrorId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalServerErrorId === null === false) {
        jVarLocalServerErrorId.style.display = 'none';
    };
};

const LocalFuncChangeCardColour = () => {
    let jVarLocalCardHtmlId = document.getElementById('CardHtmlId');
    jVarLocalCardHtmlId.classList.remove("bg-yellow-100");
};

export { StartFunc };