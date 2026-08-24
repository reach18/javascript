#include <stdio.h>

int main()
{
    int userInput;
    int secret = 5;
    int attempts = 3;

    printf("Guess the secret");

    while (attempts > 0)
    {
        scanf("%d", &userInput);

        if (userInput == secret)
        {
            printf("You won!\n");
            break;
        }
        else
        {
            attempts--;

            if (userInput > secret)
            {
                printf("Too high! ");
            }
            else
            {
                printf("Too low! ");
            }

            if (attempts > 0)
            {
                printf("%d more tries\n", attempts);
            }
            else
            {
                printf("You lost!\n");
            }
        }
    }

    return 0;
}