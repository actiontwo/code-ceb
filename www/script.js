$(document).ready(function () {
  var player = document.getElementById('player');
  var linkplay = 'http://staging-fcdn.fimplus.io/1acd59e1-72ea-4589-9fe3-242b56d57d95/dev-ark-6c3/7/b4315af087e191e9dd841de962ad26c3/smooth_plrd.ism/Manifest-plrd-web-auto';
  var laUrl = 'https://lic.staging.drmtoday.com/license-proxy-headerauth/drmtoday/RightsManager.asmx';
  var drm = {
    userId: "ef9afdb3-dcee-41ee-b947-667b53fac4a5",
    sessionId: "production_87dbbfd9-2fba-11e7-9ff7-0242ac110009",
    merchant: 'fimplus',
    assetId: "aa6cc057-32a3-48d2-b061-1324435e27da"
  };
  player.onloadedmetadata = function () {
    console.log('onload')
  }
  var kid = 'SVFyRVlSiFW1A+V4treAcA==';
  var customData = 'ew0KICAgICJ1c2VySWQiOiAicmVudGFsMSIsDQogICAgInNlc3Npb25JZCI6ICJ0ZXN0IiwNCiAgICAibWVyY2hhbnQiOiAiZmltcGx1cyINCn0NCg==';// Base64.encode(JSON.stringify(drm));
  var xml =
    '<?xml version="1.0" encoding="utf-8"?>' +
    '<PlayReadyInitiator xmlns="http://schemas.microsoft.com/DRM/2007/03/protocols/">' +
    '<LicenseAcquisition>' +
    '<Header>' +
    '<WRMHEADER xmlns="http://schemas.microsoft.com/DRM/2007/03/PlayReadyHeader" version="4.0.0.0">' +
    '<DATA>' +
    '<PROTECTINFO>' +
    '<KEYLEN>16</KEYLEN>' +
    '<ALGID>AESCTR</ALGID>' +
    '</PROTECTINFO>' +
    '<LA_URL>' + laUrl + '</LA_URL>' +
    '<KID>' + kid + '</KID>' +
    '</DATA>' +
    '</WRMHEADER>' +
    '</Header>' +
    '<CustomData>' + customData + '</CustomData>' +
    '<Content>' + linkplay + '</Content>' +
    '</LicenseAcquisition>' +
    '</PlayReadyInitiator>';
  var file = 'data:text/xml;charset=utf-8,' + encodeURIComponent(xml);
  // window.open('data:text/xml;charset=utf-8,' + encodeURIComponent(xml));
  source = document.createElement('source');
  file = 'http://dev.fimplus.io:1351/dataurl.xml';
  source.setAttribute('src', file);
  source.setAttribute('type', 'application/vnd.ms-playready.initiator+xml');
  // player.appendChild(source);
  console.log(xml);
});