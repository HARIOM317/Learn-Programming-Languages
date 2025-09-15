#include <iostream>
#include <vector>

using namespace std;

int main()
{
    // _____ vector of pair _____
    vector<pair<int, int>> v = {{1, 2}, {3, 4}, {5, 6}};

    vector<pair<int, int>>::iterator it1 = v.begin();
    auto it2 = v.end() - 1;

    cout << it1->first << " " << it1->second << endl;
    cout << it2->first << " " << it2->second << endl;

    // _____ vector of int _____
    vector<int> arr = {10, 20, 30, 40, 50};
    vector<int>::iterator it;
    for (it = arr.begin(); it != arr.end(); it++)
    {
        cout << (*it) << " ";
    }

    return 0;
}