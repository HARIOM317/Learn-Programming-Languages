#include <iostream>

using namespace std;

class Student
{
private:
    string name = "Hariom Singh";
    int age = 22;

public:
    void setName(string name)
    {
        this->name = name;
    }

    void setAge(int age)
    {
        this->age = age;
    }

    string getName()
    {
        return this->name;
    }

    int getAge()
    {
        return this->age;
    }

    int operator+(Student &obj)
    {
        int age1 = this->age;
        int age2 = obj.age;

        return age1 + age2;
    }
};

int main()
{
    Student s1, s2;
    s1.setAge(15);
    s2.setAge(10);
    cout << "Name: " << s1.getName() << endl;
    cout << "Age: " << s1.getAge() << endl;

    cout << s1 + s2 << endl;

    return 0;
}