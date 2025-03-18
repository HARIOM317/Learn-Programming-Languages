#include <iostream>
#include <set>

using namespace std;

int main()
{
    set<int> s1;
    s1.insert(7);
    s1.insert(9);
    s1.insert(3);
    s1.insert(7);
    s1.insert(8);
    s1.insert(1);
    s1.insert(8);
    s1.insert(3);

    cout << "Lower Bound: " << *(s1.lower_bound(3)) << endl; // value should not be less then given key
    cout << "Upper Bound: " << *(s1.upper_bound(3)) << endl; // value should be greater then given key

    for (auto i : s1)
    {
        cout << i << " ";
    }
    cout << endl;

    // erase() - to remove an element from set
    set<int>::iterator it = s1.begin();
    it++;
    s1.erase(it);
    s1.erase(9);

    for (auto i : s1)
    {
        cout << i << " ";
    }
    cout << endl;

    // count() - count the number of times an element occurs in the set (return 1 if element present otherwise 0).
    cout << "3 is present or not -> " << (s1.count(9) ? "Yes" : "No") << endl;

    // size() - to get no. of element available in the set
    cout << "Size of set: " << s1.size() << endl;

    // empty() - to check whether the set is empty or not
    cout << "Is set empty? " << (s1.empty() ? "Yes" : "No") <<endl;

    // find() - to check that the given element is available in set or not?
    set<int>::iterator isFind = s1.find(7);
    cout << "Element Find: " << (*isFind ? "Found" : "Not Found") << endl;

    return 0;
}