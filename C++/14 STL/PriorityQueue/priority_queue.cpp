#include <iostream>
#include <queue>
#include <vector>

using namespace std;

int main()
{
    priority_queue<int> pq;                             // highest element = max priority (default)
    priority_queue<int, vector<int>, greater<int>> pq2; // smallest element = max priority

    pq.push(5);
    pq.push(3);
    pq.push(8);
    pq.push(10);
    pq.push(4);

    pq2.push(5);
    pq2.push(3);
    pq2.push(8);
    pq2.push(10);
    pq2.push(4);

    while (!pq.empty())
    {
        cout << pq.top() << " ";
        pq.pop();
    }
    cout << endl;

    while (!pq2.empty())
    {
        cout << pq2.top() << " ";
        pq2.pop();
    }
    cout << endl;

    return 0;
}