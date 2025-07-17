const fse = require("fs-extra");
const CommonColumns = require("../schema.json");

const StartFunc = ({ inDistPath }) => {
    LocalFuncReplaceSchema({ inDistPath });
    LocalFuncReplaceInSubTable({ inDistPath });
    LocalFuncFromConfig({ inDistPath });
    LocalFuncForCrudStaticColumn({ inDistPath });
    LocalFuncForCrudDynamicCol({ inDistPath });
    LocalFuncForCalendar({ inDistPath });
    LocalFuncForCrudOnObject({ inDistPath });
};

const LocalFuncReplaceSchema = ({ inDistPath }) => {
    const LocalDistPath = inDistPath;

    const filePath = `${LocalDistPath}/Js/CommonConfigColumns/Config.json`;

    const content = fse.readFileSync(filePath, 'utf-8');
    const contentAsJson = JSON.parse(content);
    contentAsJson.columns = CommonColumns.columns;
    contentAsJson.TableName = contentAsJson.TableName.replace("$TableName", CommonColumns.tableName);
    contentAsJson.TableName = contentAsJson.TableName.replace("$ApiVersion", process.env.VERSION);

    fse.writeFileSync(filePath, JSON.stringify(contentAsJson), 'utf-8');
};

const LocalFuncReplaceInSubTable = ({ inDistPath }) => {
    const LocalDistPath = inDistPath;

    const filePath = `${LocalDistPath}/Js/SubTable/Config.json`;
    const content = fse.readFileSync(filePath, 'utf-8');
    const contentAsJson = JSON.parse(content);

    contentAsJson.columns = CommonColumns.columns;
    contentAsJson.TableName = contentAsJson.TableName.replace("$TableName", CommonColumns.tableName);
    contentAsJson.TableName = contentAsJson.TableName.replace("$ApiVersion", process.env.VERSION);

    fse.writeFileSync(filePath, JSON.stringify(contentAsJson), 'utf-8');
};

const LocalFuncFromConfig = ({ inDistPath }) => {
    const LocalDistPath = inDistPath;

    const filePath = `${LocalDistPath}/Js/FromConfig/Config.json`;

    const content = fse.readFileSync(filePath, 'utf-8');
    const contentAsJson = JSON.parse(content);
    contentAsJson.columns = CommonColumns.columns;
    contentAsJson.TableName = contentAsJson.TableName.replace("$TableName", CommonColumns.tableName);
    contentAsJson.TableName = contentAsJson.TableName.replace("$ApiVersion", process.env.VERSION);


    fse.writeFileSync(filePath, JSON.stringify(contentAsJson), 'utf-8');
};

const LocalFuncForCrudStaticColumn = ({ inDistPath }) => {
    const LocalDistPath = inDistPath;

    const filePath = `${LocalDistPath}/Js/CrudStaticColumn/Config.json`;

    const content = fse.readFileSync(filePath, 'utf-8');
    const contentAsJson = JSON.parse(content);
    contentAsJson.columns = CommonColumns.columns;
    contentAsJson.TableName = contentAsJson.TableName.replace("$TableName", CommonColumns.tableName);
    contentAsJson.TableName = contentAsJson.TableName.replace("$ApiVersion", process.env.VERSION);


    fse.writeFileSync(filePath, JSON.stringify(contentAsJson), 'utf-8');
};

const LocalFuncForCrudDynamicCol = ({ inDistPath }) => {
    const LocalDistPath = inDistPath;

    const filePath = `${LocalDistPath}/Js/CrudDynamicCol/Config.json`;

    const content = fse.readFileSync(filePath, 'utf-8');
    const contentAsJson = JSON.parse(content);
    contentAsJson.columns = CommonColumns.columns;
    contentAsJson.TableName = contentAsJson.TableName.replace("$TableName", CommonColumns.tableName);
    contentAsJson.TableName = contentAsJson.TableName.replace("$ApiVersion", process.env.VERSION);


    fse.writeFileSync(filePath, JSON.stringify(contentAsJson), 'utf-8');
};

const LocalFuncForCalendar = ({ inDistPath }) => {
    const LocalDistPath = inDistPath;

    const filePath = `${LocalDistPath}/Js/Calendar/Config.json`;

    const content = fse.readFileSync(filePath, 'utf-8');
    const contentAsJson = JSON.parse(content);
    contentAsJson.columns = CommonColumns.columns;
    contentAsJson.TableName = contentAsJson.TableName.replace("$TableName", CommonColumns.tableName);
    contentAsJson.TableName = contentAsJson.TableName.replace("$ApiVersion", process.env.VERSION);


    fse.writeFileSync(filePath, JSON.stringify(contentAsJson), 'utf-8');
};

const LocalFuncForCrudOnObject = ({ inDistPath }) => {
    const LocalDistPath = inDistPath;

    const filePath = `${LocalDistPath}/Js/CrudOnObject/Config.json`;

    const content = fse.readFileSync(filePath, 'utf-8');
    const contentAsJson = JSON.parse(content);
    contentAsJson.columns = CommonColumns.columns;
    contentAsJson.TableName = contentAsJson.TableName.replace("$TableName", CommonColumns.tableName);
    contentAsJson.TableName = contentAsJson.TableName.replace("$ApiVersion", process.env.VERSION);


    fse.writeFileSync(filePath, JSON.stringify(contentAsJson), 'utf-8');
};

module.exports = { StartFunc };