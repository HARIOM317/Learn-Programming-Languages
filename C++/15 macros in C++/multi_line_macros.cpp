#include <iostream>
// multi line macro
#define PRINT_RECTANGLE(width, height)  \
    cout << endl;                       \
    for (int i = 0; i < height; i++)    \
    {                                   \
        for (int j = 0; j < width; j++) \
        {                               \
            cout << "* ";               \
        }                               \
        cout << endl;                   \
    }                                   \
    cout << endl;

using namespace std;

int main()
{
    PRINT_RECTANGLE(10, 5);

    return 0;
}