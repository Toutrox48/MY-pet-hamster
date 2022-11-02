input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.giggle.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.OnceInBackground)
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    }
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.twinkle), SoundExpressionPlayMode.InBackground)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # # .
            . . . . #
            . . . . #
            # # # # #
            . # # # .
            `)
        basic.showLeds(`
            . . # # .
            . . # . #
            . . . . #
            # # # # #
            . # # # .
            `)
        basic.showLeds(`
            . . # # .
            . . . . #
            . . # . #
            # # # # #
            . # # # .
            `)
    }
    basic.showIcon(IconNames.Happy)
    soundExpression.giggle.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
basic.showIcon(IconNames.Asleep)
