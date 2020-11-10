const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");
let mainWindow;

app.on("window-all-closed", function () {
  if (process.platform != "darwin") {
    app.quit();
  }
});

app.on("ready", function () {
  mainWindow = new BrowserWindow({
    width: 265,
    height: 460,
    icon: __dirname + "/img/system.png",
    webPreferences: {
      nodeIntegration: true,
      worldSafeExecuteJavaScript: true,
      allowRunningInsecureContent: true,
    },
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true,
    })
  );

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
});
