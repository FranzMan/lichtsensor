basic.forever(function () {
    if (input.lightLevel() < 110) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
