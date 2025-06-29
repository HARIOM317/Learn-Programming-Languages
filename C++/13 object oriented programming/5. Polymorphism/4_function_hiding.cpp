#include <iostream>

using namespace std;

class Animal
{
public:
    void makeSound()
    {
        cout << "Some animal sound!" << endl;
    }
};

class Dog : public Animal
{
public:
    // function hiding
    void makeSound()
    {
        cout << "Bark!" << endl;
    }
};

class Cat : public Animal
{
public:
    // function hiding
    void makeSound()
    {
        cout << "Meow!" << endl;
    }
};

int main()
{
    Dog d;
    d.makeSound();

    Cat c;
    c.makeSound();

    return 0;
}