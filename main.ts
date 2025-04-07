bluetooth.onBluetoothConnected(function () {
    Bluetooth = true
    while (Bluetooth == true) {
        basic.showIcon(IconNames.Yes)
    }
})
bluetooth.onBluetoothDisconnected(function () {
    Bluetooth = false
    while (Bluetooth == false) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
    }
})
input.onButtonPressed(Button.A, function () {
    keyboard.sendString("" + keyboard.modifiers(keyboard._Modifier.control) + keyboard.modifiers(keyboard._Modifier.alt) + "t")
    basic.pause(2750)
    keyboard.sendString("You have been hacked")
})
input.onButtonPressed(Button.B, function () {
    keyboard.sendString("" + keyboard.modifiers(keyboard._Modifier.control) + keyboard.modifiers(keyboard._Modifier.shift) + "q")
    keyboard.sendString("" + keyboard.modifiers(keyboard._Modifier.control) + keyboard.modifiers(keyboard._Modifier.shift) + "q")
})
let Bluetooth = false
keyboard.startKeyboardService()
while (Bluetooth == false) {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
}
