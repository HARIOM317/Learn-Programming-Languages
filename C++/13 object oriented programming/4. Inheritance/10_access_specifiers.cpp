#include <iostream>

using namespace std;

// Base class
class Employee
{
private:
    int employeeID; // Private: Only accessible inside Employee class

protected:
    string department; // Protected: Accessible in derived classes also

public:
    string name; // Public: Accessible from anywhere

    // Constructor
    Employee(string name, int id, string dept)
    {
        this->name = name;
        this->employeeID = id;
        this->department = dept;
    }

    // Public function to access private data
    void showDetails()
    {
        cout << "\nName: " << name << endl;
        cout << "Employee ID: " << employeeID << endl;
        cout << "Department: " << department << endl;
    }

private:
    void secretMethod()
    {
        cout << "This is a confidential HR operation." << endl;
    }
};

// Derived class
class Manager : public Employee
{
private:
    int teamSize;

public:
    Manager(string name, int id, string dept, int size) : Employee(name, id, dept)
    {
        teamSize = size;
    }

    void showMangerDetails()
    {
        cout << "\nManager name: " << name << endl;
        cout << "Manager department: " << department << endl; // accessible
        cout << "Team size: " << teamSize << endl;

        // Not accessible
        // cout << "Employee id: " << employeeID << endl;
    }
};

int main()
{
    Employee e1("Harsh", 101, "Sales");
    e1.showDetails();
    // e1.secretMethod(); // Not accessible

    Manager m1("Anand", 201, "IT", 5);
    m1.showMangerDetails();

    return 0;
}