let Distance = 0
basic.forever(function () {
    Distance = sonar.ping(
    DigitalPin.P3,
    DigitalPin.P4,
    PingUnit.Centimeters
    )
    basic.showString("" + (Distance))
    if (Distance > 0 && Distance < 24) {
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(100)
    } else {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(100)
    }
    basic.pause(100)
})
