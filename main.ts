function Mr_Walkers_Class () {
    Exit_Class()
    Forward__Speed__Time_s(50, 6)
    Turn_Left__Time_s(1)
    Forward__Speed__Time_s(60, 6)
    Turn_Right__Time_s(0.2)
    Forward__Speed__Time_s(60, 3.5)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        cakLandMotor.drive(100, -100)
    } else {
        if (receivedNumber == 2) {
            cakLandMotor.drive(-100, 100)
        } else {
            if (receivedNumber == 12) {
                cakLandMotor.drive(100, 100)
            } else {
                if (receivedNumber == 0) {
                    cakLandMotor.stop()
                } else {
                    for (let index = 0; index < 2; index++) {
                        music.play(music.tonePlayable(262, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
                    }
                }
            }
        }
    }
})
function Mrs_Lottas_Class () {
    Exit_Class()
    Forward__Speed__Time_s(50, 5)
    Turn_Right__Time_s(3.5)
    Forward__Speed__Time_s(60, 8)
    Turn_Left__Time_s(1.5)
    Forward__Speed__Time_s(60, 3.5)
    end()
}
function Reverse__Speed__Time_s (speed: number, time: number) {
    cakLandMotor.drive(speed * -1, speed * -1)
    basic.pause(time * 1000)
    cakLandMotor.stop()
}
function Turn_Right__Time_s (time: number) {
    cakLandMotor.drive(-60, 100)
    basic.pause(time * 1000)
    cakLandMotor.stop()
}
function end () {
    music.setVolume(255)
    music.stopAllSounds()
    for (let index = 0; index < 2; index++) {
        music.play(music.stringPlayable("C D B C5 C D B C5 ", 120), music.PlaybackMode.UntilDone)
    }
}
function Turn_Left__Time_s (time: number) {
    cakLandMotor.drive(100, -60)
    basic.pause(time * 1000)
    cakLandMotor.stop()
}
function Mrs_Lelekas_Class () {
    Exit_Class()
    Forward__Speed__Time_s(100, 5)
    Turn_Left__Time_s(3)
    Forward__Speed__Time_s(100, 6)
    Turn_Left__Time_s(2)
    Forward__Speed__Time_s(100, 9)
    end()
}
function Exit_Class () {
    Forward__Speed__Time_s(50, 4)
    Turn_Left__Time_s(1)
    Forward__Speed__Time_s(60, 2)
    music.setVolume(127)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Leleka") {
        Mrs_Lelekas_Class()
    } else {
        if (receivedString == "Lotta") {
            Mrs_Lottas_Class()
        } else {
            if (receivedString == "Walker") {
                Mr_Walkers_Class()
            } else {
                for (let index = 0; index < 2; index++) {
                    music.play(music.tonePlayable(262, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    cakLandMotor.stop()
    music.stopAllSounds()
})
function Forward__Speed__Time_s (speed: number, time: number) {
    cakLandMotor.drive(speed, speed)
    basic.pause(time * 1000)
    cakLandMotor.stop()
}
radio.setGroup(42)
basic.forever(function () {
    images.createBigImage(`
        # . . . . . . . . #
        . # . . . . . . # .
        . . # . . . . # . .
        . . . # . . # . . .
        . . . . # # . . . .
        `).scrollImage(1, 80)
})
