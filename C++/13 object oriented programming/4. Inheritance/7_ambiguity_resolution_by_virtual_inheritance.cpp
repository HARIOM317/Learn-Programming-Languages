#include <iostream>

using namespace std;

// NOTE: Virtual Inheritance can resolve ambiguity in only Diamond Problem Scenario
/*
            (Base class)
              /       \
             /         \
            /           \
        (Child 1)   (Child 2)
            \            /
             \          /
              \        /
            (Devived Class)
*/

// Base class
class Person
{
public:
    void identity()
    {
        cout << "I am a person." << endl;
    }
};

// Child class 1
class Teacher : virtual public Person
{
};

// Child class 2
class Engineer : virtual public Person
{
};

// Occur Diamond Problem Scenario
class TeachingEngineer : public Teacher, public Engineer
{
};

int main()
{
    TeachingEngineer te;
    te.identity(); // No ambiguity due to virtual inheritance

    return 0;
}