#include <iostream>
#include <map>

using namespace std;

int main()
{
    map<string, int> m;

    m["TV"] = 12000;
    m["Laptop"] = 50000;
    m["Mobile"] = 20000;
    m["Headphone"] = 500;
    m["Watch"] = 1000;
    m["Tablet"] = 25000;

    // erase() - To remove the data
    m.erase("TV");

    // insert(), emplace() - to insert the data in map
    m.emplace("AC", 20000);
    m.insert({"Camera", 100000});

    for (auto item : m)
    {
        cout << item.first << ": " << item.second << endl;
    }

    // count() - Return the no. of keys mapped with given value.
    cout<<"Count: "<<m.count("Laptop")<<endl;

    // find() - To find the key value pair in the map
    if (m.find("Camera") != m.end())
    {
        cout << "Camera is found in the map" << endl;
    }
    

    return 0;
}