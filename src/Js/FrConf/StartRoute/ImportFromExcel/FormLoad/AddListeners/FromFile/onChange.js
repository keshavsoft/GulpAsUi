import { StartFunc as showInTable } from "./showInTable.js";

let StartFunc = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        reader.onload = (e) => {
            var data = e.target.result;
            var workbook = XLSX.read(data, {
                type: 'binary'
            });

            workbook.SheetNames.forEach(function (sheetName) {
                // Here is your object
                var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                // var json_object = JSON.stringify(XL_row_object);
                // console.log(JSON.parse(json_object));
                showInTable({ inData: XL_row_object });
                // jQuery('#xlx_json').val(json_object);
            });
        };

        reader.readAsBinaryString(file);
    };
};

export { StartFunc };