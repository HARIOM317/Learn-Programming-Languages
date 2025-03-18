#include <iostream>
#include <vector>

using namespace std;

int main()
{
    // pair of two data type (int, char)
    pair<int, char> p;
    pair<int, string> p2 = {1, "Hariom"};
    pair<int, pair<char, int>> p3 = {1, {'a', 5}}; // pair of pair

    // accessing pair using first and second
    p.first = 4;
    p.second = 'H';

    cout << p.first << endl;
    cout << p.second << endl;
    cout << p3.first << endl;
    cout << p3.second.first << endl;

    vector<pair<string, int>> v = {{"hariom", 1}, {"ajay", 2}, {"abhishek", 3}, {"pooja", 4}};
    v.push_back({"aman", 5});
    v.emplace_back("murli", 6); // in-place objects create

    // iterating vector of pair
    cout << "Iterating vector of pair - \n";

    for (pair<string, int> val : v)
    {
        cout << val.first << " " << val.second << endl;
    }

    return 0;
}