cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-ionic-keyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-keyboard/www/ios/keyboard.js",
    "pluginId": "cordova-plugin-ionic-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "cordova-plugin-ionic-webview.ios-wkwebview-exec",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/ios/ios-wkwebview-exec.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "cordova.exec"
    ]
  },
  {
    "id": "cordova-plugin-sim.Sim",
    "file": "plugins/cordova-plugin-sim/www/sim.js",
    "pluginId": "cordova-plugin-sim",
    "merges": [
      "window.plugins.sim"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-uniquedeviceid.UniqueDeviceID",
    "file": "plugins/cordova-plugin-uniquedeviceid/www/uniqueid.js",
    "pluginId": "cordova-plugin-uniquedeviceid",
    "merges": [
      "window.plugins.uniqueDeviceID"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic",
    "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.js",
    "pluginId": "cordova.plugins.diagnostic",
    "clobbers": [
      "cordova.plugins.diagnostic"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-device": "2.0.1",
  "cordova-plugin-ionic-keyboard": "2.0.5",
  "cordova-plugin-ionic-webview": "1.1.16",
  "cordova-plugin-sim": "1.3.3",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-uniquedeviceid": "1.3.2",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova.plugins.diagnostic": "3.9.2"
};
// BOTTOM OF METADATA
});