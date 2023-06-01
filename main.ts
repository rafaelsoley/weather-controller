radio.onReceivedValue(function (name, value) {
    pins.digitalWritePin(DigitalPin.P0, 1)
    if (name == "temp") {
        temp = value
    }
    if (name == "light") {
        lightlevel = value
    }
    if (name == "dir") {
        compass = value
    }
})
let compass = 0
let lightlevel = 0
let temp = 0
radio.setGroup(255)
temp = 999
let min = 15
let mid = 24
let max = 35
basic.forever(function () {
    while (temp == 999) {
        basic.showIcon(IconNames.No)
    }
    basic.clearScreen()
    basic.showString("" + (temp))
    if (temp > max || temp < min) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.clearScreen()
        basic.showIcon(IconNames.Skull)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        if (temp == mid) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.clearScreen()
            basic.showIcon(IconNames.Giraffe)
        } else {
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.clearScreen()
            basic.showIcon(IconNames.Heart)
        }
    }
})
