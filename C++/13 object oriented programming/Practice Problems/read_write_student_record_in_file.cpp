#include <iostream>
#include <fstream>

using namespace std;

class Student
{
public:
    string name;
    int age;

    void input()
    {
        cout << "Enter name and age: ";
        cin >> name >> age;
    }

    void output()
    {
        cout << "Name: " << name << ", Age: " << age << endl;
    }
};

int main()
{
    Student s1;
    s1.input();

    // writing to file
    ofstream out("student.txt");
    out << s1.name << " " << s1.age << endl;
    out.close();

    // Reading back from file
    ifstream in("student.txt");
    Student s2;
    in >> s2.name >> s2.age;
    s2.output();

    return 0;
}