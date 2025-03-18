#include <iostream>
#include <queue>

using namespace std;

int main()
{
    queue<int> q;

    // push() - To push element in the queue
    q.push(10);
    q.push(20);
    q.push(30);
    q.push(40);
    q.push(50);

    while (!q.empty())
    {
        // to get front element
        cout << q.front() << " ";

        // to remove element from queue
        q.pop();
    }
    cout << endl;

    return 0;
}