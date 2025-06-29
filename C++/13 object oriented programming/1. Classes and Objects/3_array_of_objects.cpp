#include <iostream>

using namespace std;

class Employee
{
    int id;
    int salary = 50000; // fixed salary

public:
    char name;

    // setters
    void setId(int id)
    {
        this->id = id;
    }

    void setName(char name)
    {
        this->name = name;
    }

    // getters
    int getId(void)
    {
        return id;
    }

    char getName()
    {
        return name;
    }

    int getSalary()
    {
        return salary;
    }
};

int main()
{
    Employee emp[5];

    char ch = 'A';
    int id = 10001;
    for (int i = 0; i < 5; i++)
    {
        // set details
        emp[i].setId(id++);
        emp[i].setName(ch++);

        // get details
        cout << "\nName : " << emp[i].getName() << endl;
        cout << "Id : " << emp[i].getId() << endl;
        cout << "Salary : Rs. " << emp[i].getSalary() << endl;
    }

    return 0;
}