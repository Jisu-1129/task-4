let counter = 0
input.onButtonPressed(Button.A, function () {
    counter = 0
    while (counter <= 4) {
        led.plot(counter, 0)
        basic.pause(1000)
        basic.clearScreen()
        counter += 1
    }
})
