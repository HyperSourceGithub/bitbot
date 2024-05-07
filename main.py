def Mr_Walkers_Class():
    Exit_Class()
    Forward__Speed__Time_s(50, 6)
    Turn_Left__Time_s(1)
    Forward__Speed__Time_s(60, 6)
    Turn_Right__Time_s(0.2)
    Forward__Speed__Time_s(60, 3.5)

def on_received_number(receivedNumber):
    if True:
        pass
    else:
        pass
radio.on_received_number(on_received_number)

def Mrs_Lottas_Class():
    Exit_Class()
    Forward__Speed__Time_s(50, 5)
    Turn_Right__Time_s(3.5)
    Forward__Speed__Time_s(60, 8)
    Turn_Left__Time_s(1.5)
    Forward__Speed__Time_s(60, 3.5)
    end()
def Reverse__Speed__Time_s(speed: number, time: number):
    cakLandMotor.drive(speed * -1, speed * -1)
    basic.pause(time * 1000)
    cakLandMotor.stop()
def Turn_Right__Time_s(time2: number):
    cakLandMotor.drive(-60, 100)
    basic.pause(time2 * 1000)
    cakLandMotor.stop()
def end():
    music.set_volume(255)
    music.stop_all_sounds()
    for index in range(2):
        music.play(music.string_playable("C D B C5 C D B C5 ", 120),
            music.PlaybackMode.UNTIL_DONE)
def Turn_Left__Time_s(time3: number):
    cakLandMotor.drive(100, -60)
    basic.pause(time3 * 1000)
    cakLandMotor.stop()
def Mrs_Lelekas_Class():
    Exit_Class()
    Forward__Speed__Time_s(100, 5)
    Turn_Left__Time_s(3)
    Forward__Speed__Time_s(100, 6)
    Turn_Left__Time_s(2)
    Forward__Speed__Time_s(100, 9)
    end()
def Exit_Class():
    Forward__Speed__Time_s(50, 4)
    Turn_Left__Time_s(1)
    Forward__Speed__Time_s(60, 2)
    music.set_volume(127)

def on_received_string(receivedString):
    if receivedString == "Leleka":
        Mrs_Lelekas_Class()
    else:
        if receivedString == "Lotta":
            Mrs_Lottas_Class()
        else:
            if receivedString == "Walker":
                Mr_Walkers_Class()
            else:
                for index2 in range(2):
                    music.play(music.tone_playable(262, music.beat(BeatFraction.BREVE)),
                        music.PlaybackMode.UNTIL_DONE)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    cakLandMotor.stop()
    music.stop_all_sounds()
input.on_button_pressed(Button.B, on_button_pressed_b)

def Forward__Speed__Time_s(speed2: number, time4: number):
    cakLandMotor.drive(speed2, speed2)
    basic.pause(time4 * 1000)
    cakLandMotor.stop()
radio.set_group(42)

def on_forever():
    images.create_big_image("""
        # . . . . . . . . #
        . # . . . . . . # .
        . . # . . . . # . .
        . . . # . . # . . .
        . . . . # # . . . .
        """).scroll_image(1, 80)
basic.forever(on_forever)
