#include <iostream>
#include <list>

using namespace std;

int main()
{
    // initializing a list
    list<int> l;
    list<int> l2 = {1, 2, 3, 4, 5};

    // push_back() - to push elements from back
    l.push_back(10);
    l.push_back(20);
    l.push_back(30);
    l.push_back(40);
    l.push_back(50);

    // push_front() - to push elements from front
    l.push_front(60);
    l.push_front(70);
    l.push_front(80);
    l.push_front(90);
    l.push_front(100);

    // pop_back() - to delete element from back
    l.pop_back();
    l.pop_back();

    // pop_front() - to delete element from front
    l.pop_front();
    l.pop_front();

    // iterating the list using for-each loop
    for (int val : l)
    {
        cout << val << " ";
    }

    return 0;
}