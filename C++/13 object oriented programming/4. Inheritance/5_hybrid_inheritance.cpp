#include <iostream>

using namespace std;

// Base class
class Person
{
    string name = "Hariom";

public:
    void showName()
    {
        cout << "Name = " << name << endl;
    }
};

// Child class 1 (Single Inheritance)
class Employee : public Person
{
public:
    void work()
    {
        cout << "Working as Developer" << endl;
    }
};

// Child class 2 (Multi-level Inheritance)
class Student : public Person
{
public:
    void study()
    {
        cout << "Studing C++" << endl;
    }
};

// Derived from both Employee and Student (Multiple Inheritance)
class WorkingStudent : public Employee, public Student
{
public:
    void balanceLife()
    {
        cout << "Balancing work and study" << endl;
    }
};

int main()
{
    WorkingStudent ws;

    // Ambiguty: showName() from Person is Inherited twise
    // ws.showName(); //Error: ambiguous

    ws.Employee::showName(); // Resolved by scope
    ws.study();
    ws.work();
    ws.balanceLife();

    return 0;
}