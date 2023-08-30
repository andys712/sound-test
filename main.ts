input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.createSoundExpression(WaveShape.Sine, 3585, 4189, 255, 0, 1000, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(WaveShape.Sine, 3585, 4189, 0, 255, 1000, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    255,
    true
    )
})
