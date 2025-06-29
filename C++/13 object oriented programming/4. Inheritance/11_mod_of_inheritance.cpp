#include <iostream>

using namespace std;

class Person
{
private:
    string SSN;

protected:
    int age;

public:
    string name;

    Person(string name, int age, string ssn)
    {
        this->name = name;
        this->age = age;
        this->SSN = ssn;
    }

    void showInfo()
    {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
        cout << "SSN: " << SSN << endl;
    }
};

// Public Inheritance
class Student : public Person
{
public:
    Student(string name, int age, string ssn) : Person(name, age, ssn) {}

    void showStudent()
    {
        cout << "\nStudent Name: " << name << endl; // Public --> accessible ✅
        cout << "Age: " << age << endl;             // Protected --> accessible ✅
        // cout << "SSN: " << SSN << endl; // Private --> Not accessible ❌
    }
};

// Protected Inheritance
class Staff : protected Person
{
public:
    Staff(string name, int age, string ssn) : Person(name, age, ssn) {}

    void showStaff()
    {
        cout << "\nStaff Name: " << name << endl; // ✅ public --> becomes protected
        cout << "Age: " << age << endl;           // ✅ protected --> stays protected
    }
};

// Private Inheritance
class Contractor : private Person
{
public:
    Contractor(string name, int age, string ssn) : Person(name, age, ssn) {}

    void showContractor()
    {
        cout << "\nContractor name: " << name << endl; // ✅ public --> becomes private
        cout << "Age: " << age << endl;                // ✅ protected --> becomes private
    }
};

int main()
{
    Student student("Hariom", 20, "STD123");
    student.showStudent();
    cout << student.name << endl; // ✅ (Public)

    Staff staff("Ravi", 30, "STF101");
    staff.showStaff();
    // cout << staff.name << endl; // ❌ (Now Protected)

    Contractor contractor("Sourabh", 35, "CTR555");
    contractor.showContractor();
    // cout << staff.name << endl; // ❌ (Now Private)

    return 0;
}