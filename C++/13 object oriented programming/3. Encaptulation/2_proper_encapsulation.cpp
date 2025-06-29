#include <iostream>

using namespace std;

class Employye
{
private:
    int empId;
    double salary;

public:
    // Constructor (Proper Encapsulation)
    Employye(int id, double sal)
    {
        setId(id);
        setSalary(sal);
    }

    // Setters with validation
    void setId(int id)
    {
        if (id > 0)
        {
            this->empId = id;
        }
        else
        {
            cout << "Invallid Id!" << endl;
        }
    }

    void setSalary(double sal)
    {
        if (sal >= 0)
        {
            this->salary = sal;
        }
        else
        {
            cout << "Invalid salary!" << endl;
        }
    }

    // Getters
    int getId() const
    {
        return empId;
    }

    double getSalary() const
    {
        return salary;
    }
};

int main()
{
    Employye emp1(1001, 100000);

    cout << "Id = " << emp1.getId() << endl;
    cout << "Salary = " << emp1.getSalary() << endl;

    return 0;
}