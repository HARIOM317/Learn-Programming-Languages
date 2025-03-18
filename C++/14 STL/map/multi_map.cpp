#include <iostream>
#include <map>

using namespace std;

int main()
{
    multimap<string, int> m;
    m.insert(make_pair("apple", 1));
    m.insert(make_pair("papaya", 3));
    m.insert(make_pair("banana", 4));
    m.emplace("banana", 5);
    m.emplace("banana", 6);

    m.erase(m.find("banana"));

    for (auto item : m)
    {
        cout << item.first << ": " << item.second << endl;
    }

    return 0;
}