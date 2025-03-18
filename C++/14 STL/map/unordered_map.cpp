#include <iostream>
#include <unordered_map>

using namespace std;

int main()
{
    unordered_map<string, int> m;

    m.emplace("tv", 1000);
    m.emplace("laptop", 1000);
    m.emplace("fridge", 1000);
    m.emplace("watch", 1000);
    m.emplace("watch", 1000);

    for (auto p : m)
    {
        cout << p.first << ": " << p.second << endl;
    }

    return 0;
}