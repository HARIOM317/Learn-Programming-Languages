#include <iostream>

using namespace std;

template <class T1, class T2>

class Pair
{
    T1 a;
    T2 b;

public:
    Pair(T1 a, T2 b)
    {
        this->a = a;
        this->b = b;
    }

    void showPair()
    {
        cout << "Pair : {" << a << ", " << b << "}" << endl;
    }
};

int main()
{
    Pair<string, int> p1("Hariom", 10);
    Pair<int, int> p2(20, 10);
    Pair<float, char> p3(2.5, 'A');
    Pair<char, double> p4('A', 10.25);
    Pair<string, string> p5("Aman", "Murli");

    p1.showPair();
    p2.showPair();
    p3.showPair();
    p4.showPair();
    p5.showPair();

    return 0;
}