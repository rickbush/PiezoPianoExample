pins.setAudioPinEnabled(true)
music.rest(music.beat(BeatFraction.Whole))
/**
 * If using micro:bit V2 with built-in speaker, set built-in speaker to OFF. Otherwise, set to ON to send to built-in speaker.
 */
basic.forever(function () {
	
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    } else if (pins.digitalReadPin(DigitalPin.P5) == 1) {
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    } else if (pins.digitalReadPin(DigitalPin.P8) == 1) {
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    } else if (pins.digitalReadPin(DigitalPin.P11) == 1) {
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    } else {
    	
    }
})
