"""
Created by: Ashlyn
Created on: Mar 2026
This module will generate two random numbers, use an if else statement and compare values when shook.
"""

from microbit import *
import random

display.show(Image.HAPPY)

# variables
first_Number = random.randint(0, 99)
second_Number = random.randint(0, 99)

# button a
while True:
    if button_a.was_pressed():
        display.scroll("# 1 :" + str(first_Number))
        display.show(Image.HAPPY)
    # button b
    if button_b.was_pressed():
        display.scroll("# 2 :" + str(second_Number))
        display.show(Image.HAPPY)
    # shake
    if accelerometer.was_gesture("shake"):
        if first_Number < second_Number:
            display.scroll(str(first_Number) + " < " + str(second_Number))
        else:
            display.scroll(str(first_Number) + " > " + str(second_Number))
            display.show(Image.HAPPY)
