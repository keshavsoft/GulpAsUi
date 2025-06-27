let StartFunc = ({ inResponse }) => {
   let jVarLocalData = inResponse;

   jFLocalToInputFarmerNameId({ inFarmerNameId: jVarLocalData.DateTime });
   jFLocalToInputFarmerMobileId({ inFarmerMobileId: jVarLocalData.TreeName });
   jFLocalToInputFarmerCityId({ inFarmerCityId: jVarLocalData.Latitude });
   jFLocalToInputFarmerFieldId({ inFarmerFieldId: jVarLocalData.Longitude })

};

let jFLocalToInputFarmerNameId = ({ inFarmerNameId }) => {
   let jVarLocalHtmlId = 'DateTimeId';
   let jVarLocalFarmerNameId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalFarmerNameId === null === false) {
      jVarLocalFarmerNameId.value = inFarmerNameId;
   };
};

let jFLocalToInputFarmerMobileId = ({ inFarmerMobileId }) => {
   let jVarLocalHtmlId = 'TreeNameId';
   let jVarLocalFarmerMobileId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalFarmerMobileId === null === false) {
      jVarLocalFarmerMobileId.value = inFarmerMobileId;
   };
};

let jFLocalToInputFarmerCityId = ({ inFarmerCityId }) => {
   let jVarLocalHtmlId = 'LatitudeId';
   let jVarLocalFarmerCityId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalFarmerCityId === null === false) {
      jVarLocalFarmerCityId.value = inFarmerCityId;
   };
};

let jFLocalToInputFarmerFieldId = ({ inFarmerFieldId }) => {
   let jVarLocalHtmlId = 'LongitudeId';
   let jVarLocalFarmerFieldId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalFarmerFieldId === null === false) {
      jVarLocalFarmerFieldId.value = inFarmerFieldId;
   };
};

export { StartFunc };