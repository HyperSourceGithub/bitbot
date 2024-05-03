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
input.onButtonPressed(Button.A, function () {
    Mr_Walkers_Cass()
})
function Turn_Left__Time_s (time: number) {
    cakLandMotor.drive(100, -60)
    basic.pause(time * 1000)
    cakLandMotor.stop()
}
function Mr_Walkers_Cass () {
    Forward__Speed__Time_s(60, 15)
    Turn_Left__Time_s(2)
    Forward__Speed__Time_s(60, 5.5)
    Turn_Right__Time_s(1.5)
    Forward__Speed__Time_s(60, 3)
}
input.onButtonPressed(Button.B, function () {
    cakLandMotor.stop()
    music.stopAllSounds()
})
function Forward__Speed__Time_s (speed: number, time: number) {
    cakLandMotor.drive(speed - 2, speed)
    basic.pause(time * 1000)
    cakLandMotor.stop()
}
basic.forever(function () {
    images.createBigImage(`
        # . . . . . . . . #
        . # . . . . . . # .
        . . # . . . . # . .
        . . . # . . # . . .
        . . . . # # . . . .
        `).scrollImage(1, 80)
})
