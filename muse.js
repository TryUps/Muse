const { app, BrowserWindow } = require('electron')

let win

const createWin = () => {
    win = new BrowserWindow({
        width: 500,
        height: 500
    })

    win.loadFile('index.html')

}

app.on('ready', createWin)

