#include <bits/stdc++.h>

using namespace std;

void print(multiset<string> &s)
{
    for (auto &element : s)
    {
        cout << element << " ";
    }
    cout << endl;
}

int main()
{
    multiset<string> s; // allow duplicates

    s.insert("abc");
    s.insert("abc");
    s.insert("pqr");
    s.insert("pqr");
    s.insert("abc");
    s.insert("xyz");
    s.insert("abc");
    s.insert("abc");

    print(s);

    // delete element using iterator
    auto itr = s.find("abc");
    if (itr != s.end())
        s.erase(itr); // remove one abc pointed by itr
    print(s);

    // delete element using value
    s.erase("abc"); // remove all abc
    print(s);

    return 0;
}