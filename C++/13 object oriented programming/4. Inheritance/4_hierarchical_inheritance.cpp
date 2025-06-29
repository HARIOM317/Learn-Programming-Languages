#include <iostream>

using namespace std;

// Parent class
class Animal
{
public:
    void eat()
    {
        cout << "\nEating food." << endl;
    }
};

// Child class 1
class Dog : public Animal
{
public:
    void bark()
    {
        cout << "Dog barks." << endl;
    }
};

// Child class 2
class Cat : public Animal
{
public:
    void meow()
    {
        cout << "Cat meows." << endl;
    }
};

int main()
{
    Dog d;
    Cat c;

    d.eat();
    d.bark();

    c.eat();
    c.meow();

    return 0;
}