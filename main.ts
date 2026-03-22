/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ashlyn
 * Created on: Mar 2026
 * This program will generate two random numbers, use an if else statement and compare values when shook. 
*/

basic.showIcon(IconNames.Happy)

// variables 
let firstNumber = 0
let secondNumber = 0 

// generate random number
firstNumber = randint(0,99) 
secondNumber = randint(0,99) 

// button a
input.onButtonPressed(Button.A, function() {
    basic.showString("# 1 : " + firstNumber)
    basic.showIcon(IconNames.Happy)
})

// button b
input.onButtonPressed(Button.B, function() {
    basic.showString("# 2 :" + secondNumber)
    basic.showIcon(IconNames.Happy)
})

// shake
input.onGesture(Gesture.Shake, function () {
    if (firstNumber < secondNumber) {
        basic.showNumber(firstNumber)
        basic.showString("<")
        basic.showNumber(secondNumber)
    } else {
        basic.showNumber(firstNumber)
        basic.showString(">")
        basic.showNumber(secondNumber)
    }
    basic.showIcon(IconNames.Happy)
})
