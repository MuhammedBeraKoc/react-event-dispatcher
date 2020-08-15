#!/usr/bin/env node
class Colorize {

    constructor() {
        this.OPTIONS = {
            RESET: '\x1b[0m',
            BRIGHT: '\x1b[1m',
            DIM: '\x1b[2m',
            UNDERSCORE: '\x1b[3m',
            BLINK: '\x1b[4m',
            REVERSE: '\x1b[5m',
            HIDDEN: '\x1b[6m'
        }
        this.FOREGROUND_COLOR = {
            BLACK: '\x1b[30m',
            RED: '\x1b[31m',
            GREEN: '\x1b[32m',
            YELLOW: '\x1b[33m',
            BLUE: '\x1b[34m',
            MAGENTA: '\x1b[35m',
            CYAN: '\x1b[36m',
            WHITE: '\x1b[37m'
        }
        this.BACKGROUND_COLOR = {
            BLACK: '\x1b[40m',
            RED: '\x1b[41m',
            GREEN: '\x1b[42m',
            YELLOW: '\x1b[43m',
            BLUE: '\x1b[44m',
            MAGENTA: '\x1b[45m',
            CYAN: '\x1b[46m',
            WHITE: '\x1b[47m'
        }
    }

    print(message, fColor = '', bColor = '', option = '') {
        console.log(`${option}${bColor}${fColor}${message}${this.OPTIONS.RESET}`)
    }
}

const colorize = new Colorize()

const shell = require('shelljs')
const path = require('path')
const fs = require('fs')

const MainFile = {
    src: 'src/index.js',
    dist: 'dist/event-dispatcher.js'
}

const newMainFile = (() => {
    console.log(__dirname)
    const packageJSON = JSON.parse(fs.readFileSync('package.json', {encoding: "utf-8"}))
    const mainFile = packageJSON.main
    const newMainFile = mainFile === MainFile.src ? MainFile.dist : MainFile.src
    packageJSON.main = newMainFile
    fs.writeFileSync('package.json', JSON.stringify(packageJSON, null, 2))
    return newMainFile
})()

colorize.print(`New root file: ${newMainFile}`, colorize.FOREGROUND_COLOR.GREEN)