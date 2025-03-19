import random

print("\n***** Well-Come to the Snack-Water-Gun Game *****")
print("Note:- There will be 10 rounds between you and computer!\n")
Name = input("Enter your name: ")
option = ['S', 'W', 'G']
while True:
    i = 1
    user_score = 0
    computer_score = 0
    while i <= 10:
        computer_choice = random.choice(option)
        print("\n")
        user_choice = input(
            "Enter 'S' for Snack, 'W' for Water, and 'G' for Gun: ")

        if computer_choice == 'S' and user_choice == 'S':
            print(f"\nDraw! this round. " "You choose ", {user_choice}, "and computer choose ",
                  {computer_choice})
            print("*** BOTH THE SNAKES KILLED EACH OTHER ***")
            print(Name, "Score is: ", user_score)
            print("Computer Score is: ", computer_score)

        elif computer_choice == 'S' and user_choice == 'W':
            print(f"\nYou Lose! this round. " "You choose ", {user_choice}, "and computer choose ",
                  {computer_choice})
            print("*** THE SNAKE DRANK ALL THE WATER ***")
            computer_score += 1
            print(Name, "Score is: ", user_score)
            print("Computer Score is: ", computer_score)

        elif computer_choice == 'S' and user_choice == 'G':
            print(f"\nYou Won! this round. " "You choose ", {user_choice}, "and computer choose ",
                  {computer_choice})
            print("*** THE SNAKE WAS KILLED BY GUNSHOT ***")
            user_score += 1
            print(Name, "Score is: ", user_score)
            print("Computer Score is: ", computer_score)

        elif computer_choice == 'W' and user_choice == 'S':
            print(f"\nYou Won! this round. " "You choose ", {user_choice}, "and computer choose ",
                  {computer_choice})
            print("*** THE SNAKE DRANK ALL THE WATER ***")
            user_score += 1
            print(Name, "Score is: ", user_score)
            print("Computer Score is: ", computer_score)

        elif computer_choice == 'W' and user_choice == 'W':
            print(f"\nDraw! this round. " "You choose ", {user_choice}, "and computer choose ",
                  {computer_choice})
            print("*** WATER AND WATER BECAME ONE ***")
            print(Name, " Score is: ", user_score)
            print("Computer Score is: ", computer_score)

        elif computer_choice == 'W' and user_choice == 'G':
            print(f"\nYou Lose! this round. " "You choose ", {user_choice}, "and computer choose ",
                  {computer_choice})
            print("*** THE GUN SANK IN THE WATER ***")
            computer_score += 1
            print(Name, " Score is: ", user_score)
            print("Computer Score is: ", computer_score)

        elif computer_choice == 'G' and user_choice == 'S':
            print(f"\nYou Lose! this round. " "You choose ", {user_choice}, "and computer choose ",
                  {computer_choice})
            print("*** THE SNAKE WAS KILLED BY GUNSHOT ***")
            computer_score += 1
            print(Name, " Score is: ", user_score)
            print("Computer Score is: ", computer_score)

        elif computer_choice == 'G' and user_choice == 'W':
            print(f"\nYou Won! this round. " "You choose ", {user_choice}, "and computer choose ",
                  {computer_choice})
            print("*** THE GUN SANK IN THE WATER ***")
            user_score += 1
            print(Name, " Score is: ", user_score)
            print("Computer Score is: ", computer_score)

        elif computer_choice == 'G' and user_choice == 'G':
            print(f"\nDraw! this round. " "You choose ", {user_choice}, "and computer choose ",
                  {computer_choice})
            print("*** BOTH THE GUNS WERE BURNT TO ASHES AMONG THEMSELVES ***")
            print(Name, " Score is: ", user_score)
            print("Computer Score is: ", computer_score)

        else:
            print("\nInvalid input")

        i += 1

    if user_score > computer_score:
        print(f"\nCongratulation You won this game" "\nyour score is: ", {user_score},
              "\nComputer score is: ", {computer_score})

    elif user_score < computer_score:
        print(f"\nOpps! You lose this game" "\nyour score is: ", {user_score}, "\nComputer score is: ",
              {computer_score})

    else:
        print(f"\nMatch draw!" "\nyour score is: ", {
              user_score}, "\nComputer score is: ", {computer_score})

    replay = input("\nDo you want to play again? (Y/N): ")

    if replay == 'y' or replay == 'Y':
        continue
    elif replay == 'n' or replay == 'N':
        break
    else:
        print("Invalid input")
