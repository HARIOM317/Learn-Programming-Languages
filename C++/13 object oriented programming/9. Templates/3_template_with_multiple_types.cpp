#include <iostream>
using namespace std;

template <class T1, class T2>

class Pair
{
    T1 first;
    T2 second;

public:
    Pair(T1 f, T2 s) : first(f), second(s) {}

    void display()
    {
        cout << "First: " << first << ", Second: " << second << endl;
    }
};

int main()
{
    Pair<int, string> p1(1, "Hariom");
    p1.display();

    Pair<char, int> p2('A', 1);
    p2.display();

    return 0;
}