input.onButtonPressed(Button.A, function () {
    basic.showNumber(Schrittzahl)
})
function startNummer () {
    basic.showString("#18")
    basic.pause(500)
    basic.clearScreen()
    basic.pause(200)
}
input.onButtonPressed(Button.AB, function () {
    if (starten) {
        starten = false
        basic.showNumber(Schrittzahl)
        basic.pause(1000)
        Schrittzahl = 0
    } else {
        starten = true
    }
})
let laufzeit_davor = 0
let Schrittzahl = 0
let starten = false
starten = false
Schrittzahl = 0
startNummer()
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    if (starten) {
        basic.setLedColor(Colors.Green)
        if (input.acceleration(Dimension.Strength) > 1100) {
            basic.showIcon(IconNames.Heart)
            if (input.runningTime() - laufzeit_davor > 100) {
                Schrittzahl += 1
                basic.clearScreen()
                laufzeit_davor = input.runningTime()
                music.playTone(262, music.beat(BeatFraction.Sixteenth))
            }
        }
    } else {
        basic.setLedColor(0xff0000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
