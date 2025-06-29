#include <iostream>

using namespace std;

// Wrapping up data (variables) and methods (functions) into ansingle unit
class Student
{
private:
    string name;
    int age;

public:
    // Setters
    void setName(string name)
    {
        this->name = name;
    }

    void setAge(int age)
    {
        this->age = age;
    }

    // Getters
    string getName()
    {
        return name;
    }

    int getAge()
    {
        return age;
    }
};

int main()
{
    Student s1;

    // set student details
    s1.setName("Hariom Mewada");
    s1.setAge(22);

    // get student details
    cout << "Student Name: " << s1.getName();
    cout << "Student Age: " << s1.getAge();

    return 0;
}