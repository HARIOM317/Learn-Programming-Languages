#include <iostream>
#include <deque>

using namespace std;

int main()
{
    deque<int> d1;
    deque<int> d2 = {1, 2, 3, 4, 5};

    d1.push_front(10);
    d1.push_front(20);
    d1.push_front(30);
    d1.push_front(40);
    d1.push_front(50);

    d1.push_back(60);
    d1.push_back(70);
    d1.push_back(80);
    d1.push_back(90);
    d1.push_back(100);

    d1.pop_front();
    d1.pop_front();

    d1.pop_back();
    d1.pop_back();

    for (int val : d1)
    {
        cout << val << " ";
    }

    cout << "\nd1[0] = " << d1[0];
    cout << "\nd1[1] = " << d1[1];
    cout << "\nd1 size = " << d1.size();
    cout << "\nd1 begin = " << *(d1.begin());
    cout << "\nd1 end = " << *(d1.end());
    cout << "\nd1 rbegin = " << *(d1.rbegin());
    cout << "\nd1 rend = " << *(d1.rend());

    return 0;
}