from playsound import playsound
import time

CLEAR ="\033[2J"
CLEAR_AND_RETURN = "\033[H"

repeat = int(input ("How many repeat do you want: "))
minutes = int(input ("How many minutes do you want: "))
seconds = int(input ("How many seconds do you want: "))
total_seconds = minutes*60+seconds

def alarm(seconds):
    time_elapsed = 0

    print (CLEAR)
    while time_elapsed < seconds:
        time.sleep(1)
        time_elapsed +=1

        time_left = seconds-time_elapsed
        minutes_left = time_left//60
        seconds_left = time_left % 60

        print(f"{CLEAR_AND_RETURN}{minutes_left:02d}:{seconds_left:02d}")
    playsound("alarm.mp3")
    

while repeat !=0:
    alarm(total_seconds)
    repeat = repeat-1
