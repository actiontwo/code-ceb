$(document).ready(function () {
  var player = document.getElementById('player');
  var linkplay = 'http://a01-fcdn.fimplus.io/ef9afdb3-dcee-41ee-b947-667b53fac4a5/ark-8f7/6/0c003b2ac6aca164f0964b579168a8f7/smooth_plrd.ism/Manifest-plrd-web-auto';
  var laUrl = 'https://lic.drmtoday.com/license-proxy-headerauth/drmtoday/RightsManager.asmx';
  var drm = {
    userId: "ef9afdb3-dcee-41ee-b947-667b53fac4a5",
    sessionId: "production_a9ca05eb-07c5-11e7-b944-0242ac11000e",
    merchant: 'fimplus',
    assetId: "60412eb4-8c5d-43ea-a983-944f019db812"
  };
  var customData = Base64.encode(JSON.stringify(drm));
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
  source.setAttribute('src', file);
  source.setAttribute('type', 'application/vnd.ms-playready.initiator+xml');
  player.appendChild(source);
  console.log(xml);
});