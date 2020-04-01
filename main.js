//
//  ELECTRON INIT AND WINDOW CREATION
//

const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 700,
    height: 310,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html');
}

app.whenReady().then(createWindow)



//
// UDP DATAGRAM INIT AND LISTENER
// 

var dgram = require('dgram');
var port = 44044;
socket = dgram.createSocket('udp4');

socket.on('message', function (msg, info){
  let message = msg.toString();
  let key = message.split(":")[0];
  let action = message.split(":")[1];
  console.log(key);
  console.log(action);
  win.webContents.send()
  
});

socket.on('listening', function(){
    var address = socket.address();
    console.log("listening on :" + address.address + ":" + address.port);
});

socket.bind(port);






function evaluateKeyAction(key,action){
  if(key=='a'){
    console.log('Evaluated to: ' + key);
  }
}