#include <iostream>

using namespace std;

class base1
{
public:
    void greet()
    {
        cout << "How are you?" << endl;
    }

    void reply()
    {
        cout << "I am great." << endl;
    }
};

class base2
{
public:
    void greet()
    {
        cout << "Kaise ho Aap?" << endl;
    }

    void reply()
    {
        cout << "I am fine." << endl;
    }
};

class derived : public base1, public base2
{
public:
    void greet()
    {
        base2::greet(); // No ambiguity now
    }
};

int main()
{
    derived obj;

    obj.greet();
    obj.base1::reply(); // No ambiguity now

    return 0;
}