input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # # # .
        . . . . .
        `)
    Hunger += 1
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let Hunger = 2
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    . # # # .
    . . . . .
    `)
basic.forever(function () {
    Hunger += -1
})
