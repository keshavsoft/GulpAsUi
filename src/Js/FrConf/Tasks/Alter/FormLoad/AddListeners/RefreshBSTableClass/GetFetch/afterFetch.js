const StartFunc = (data) => {

    data.forEach(element => {
        jFLocalAddToItems({ inItemName: element.ItemType });
    });
};

const jFLocalAddToItems = ({ inItemName }) => {
    const option = `<option value="${inItemName}">${inItemName}</option>`
    // var option = $('<option value="' + inItemName + '"></option>');
    $('#ItemTypeSelectId').append(option);
};

export { StartFunc };