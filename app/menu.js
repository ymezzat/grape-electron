import {app} from 'electron'
import devHelper from './vendor/electron_boilerplate/dev_helper'
import showMainWindow from './showMainWindow'
import env from './env'
import state from './state'
import quit from './quit'
import {isOSX} from './utils'

let mainMenu = [{
  label: "Application",
  submenu: [{ label: "Quit", accelerator: "Command+Q", click: quit }]
  },{
  label: "Edit",
  submenu: [
      { label: "Undo", accelerator: "CmdOrCtrl+Z", role: "undo" },
      { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", role: "redo" },
      { type: "separator" },
      { label: "Cut", accelerator: "CmdOrCtrl+X", role: "cut" },
      { label: "Copy", accelerator: "CmdOrCtrl+C", role: "copy" },
      { label: "Paste", accelerator: "CmdOrCtrl+V", role: "paste" },
      { label: "Select All", accelerator: "CmdOrCtrl+A", role: "selectall" }
  ]}
]

if (isOSX()) mainMenu[0].submenu.push({type: "separator"}, {label: "About Grape", role: "about"})


export const main = env.name !== 'production' ? mainMenu.concat(devHelper.menu) : mainMenu

export const tray = [
  {label: "Open", click: showMainWindow},
  {label: "Quit", click: quit}
]