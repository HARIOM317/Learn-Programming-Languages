#include <iostream>

using namespace std;

// default
enum Color
{
    RED,
    GREEN,
    BLUE
};

// assigning custom values
enum Level
{
    EASY = 10,
    MEDIUM = 20,
    HIGH = 30
};

int main()
{
    Color c1 = RED;
    Color c2 = GREEN;
    Color c3 = BLUE;

    cout << "c1 = " << c1 << endl;
    cout << "c2 = " << c2 << endl;
    cout << "c3 = " << c3 << endl;

    Level l1 = MEDIUM;

    switch (l1)
    {
    case EASY:
        cout << "You are a beginner!" << endl;
        break;

    case MEDIUM:
        cout << "You are a achiever!" << endl;
        break;

    case HIGH:
        cout << "You are a champion!" << endl;
        break;

    default:
        cout << "Let's start!";
        break;
    }

    return 0;
}