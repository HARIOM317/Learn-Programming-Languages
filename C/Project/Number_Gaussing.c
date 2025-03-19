#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
    int number, guess, nguesses = 1, life_line = 10;
    srand(time(0));
    number = rand() % 100 + 1;

    do
    {
        printf("\nGuesses = %d,  Life ines = %d", nguesses-1, life_line);
        printf("\n[GUESS THE NUMBER BETWEEN 1-100] :  ");
        scanf("%d", &guess);
        printf("\n\n");

        if (nguesses >= 10)
        {
            printf("Guesses = %d,  Life ines = %d", nguesses, life_line-1);
            printf("\nOho! You have been used all lifelines!");
            break;
        }
        else
        {
            if (guess > number)
            {
                printf("\nLOWER NUMBER PLEASE !\n");
            }
            else if (guess < number)
            {
                printf("\nHIGHER NUMBER PLEASE !\n");
            }
            else
            {
                printf(">>> Congratulation! You guessed correct number in %d attempts\n", nguesses);
            }
        }

        nguesses++;
        life_line--;

    } while (guess != number);

    return 0;
}