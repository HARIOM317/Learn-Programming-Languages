#include <iostream>

using namespace std;

// Base class
class Person
{
protected:
    string name;
    int age;

public:
    // Constructor
    Person(string name, int age)
    {
        this->name = name;
        this->age = age;
        cout << "Person Constructor Called!" << endl;
    }

    void showPersonInfo()
    {
        cout << "Name: " << name << ", Age: " << age << endl;
    }
};

// Intermediate derived class
class Employee : public Person
{
protected:
    string employeeId;
    string department;

public:
    // Constructor chaining to Person
    Employee(string name, int age, string empId, string dept) : Person(name, age) // Chain to base class Person
    {
        this->employeeId = empId;
        this->department = dept;
        cout << "Employee Constructor Called!" << endl;
    }

    void showEmployeeInfo()
    {
        showPersonInfo();
        cout << "Employee ID : " << employeeId << ", Departement: " << department << endl;
    }
};

// Final Derived class
class Manager : public Employee
{
    int teamSize;

public:
    // Constructor Chaining: Manager -> Employee -> Person
    Manager(string name, int age, string empId, string dept, int teamSize)
        : Employee(name, age, empId, dept) // Chain to Employee Constructor
    {
        this->teamSize = teamSize;
        cout << "Manager Constructor Called" << endl;
    }

    void showManagerInfo()
    {
        showEmployeeInfo(); // show base + employee info
        cout << "Team Size: " << teamSize << endl;
    }
};

int main()
{
    Manager mgr("Hariom Singh", 30, "E12345", "Engineering", 10);

    cout << "\n___ Manager Info ___\n";
    mgr.showManagerInfo();

    return 0;
}