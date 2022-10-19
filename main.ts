let counter2 = 0
let counter = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(0, counter2)
        basic.pause(100)
        counter2 += 1
    }
    if (counter2 == 5) {
        counter2 = 0
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(counter, 0)
        basic.pause(100)
        counter += 1
    }
    if (counter == 5) {
        counter = 0
    }
})
