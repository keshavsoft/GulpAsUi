import getUrlJson from './getUrl.json' with {type: 'json'};

const StartFunc = async () => {
    let LocalData = await LocalFetch();
    let jVarLocaldatalist = document.getElementById("ForDatalistId");

    jVarLocaldatalist.innerHTML = "";

    // Assuming LocalData is an array of strings or objects with a 'name' property
    LocalData.forEach(item => {
        let option = document.createElement("option");
        option.value = typeof item === "string" ? item : item.name || "";
        option.innerHTML = typeof item === "string" ? item : item.name || "";
        jVarLocaldatalist.appendChild(option);
    });

};
export { StartFunc };


let LocalFetch = async () => {
    let jVarLocalGetEndPoint = getUrlJson.GetEndPoint;
    let jVarLocalFetchUrl = `${jVarLocalGetEndPoint}`

    let response = await fetch(jVarLocalFetchUrl);

    let data = await response.json()

    return await data;
};