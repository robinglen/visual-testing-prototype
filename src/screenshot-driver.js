const webdriverio = require('webdriverio');
const fs = require('fs');
const options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};
const url = process.env.URL || 'http://localhost:8080';

setTimeout(getScreenshot, 5000);

function getScreenshot() {
    console.log('Getting screenshot');
    webdriverio.remote(options)
        .init()
        .windowHandleSize({width: 1366, height: 768})
        .url(url)
        .saveScreenshot('./snapshots/snapshot.png')
        .end();
}
