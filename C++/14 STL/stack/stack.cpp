#include <iostream>
#include <stack>

using namespace std;
// FILO-First In Last Out
int main()
{
    stack<int> s;

    // push() - to push an element
    s.push(10);
    s.push(20);
    s.push(30);
    s.push(40);
    s.push(50);

    // pop() - to pop an element
    s.pop(); // remove 50
    s.pop(); // remove 40

    // top() - to get top element of stack
    cout << "Top element = " << s.top() << endl;

    // size() - to get size of the stack
    cout << "Size of stack s = " << s.size() << endl;

    // empty() - to check that stack is empty or not?
    cout << "Is stack s empty? " << (s.empty() ? "Yes" : "No") << endl;

    // swap two stacks
    stack<int> s2;
    stack<int> s3;

    // inserting elements in s2
    s2.push(5);
    s2.push(10);
    s2.push(15);
    s2.push(20);
    s2.push(25);

    // swap s2 and s3
    s3.swap(s2);

    cout << "s2.size() after swap operation: " << s2.size() << endl;
    cout << "s3.size() after swap operation: " << s3.size() << endl;

    return 0;
}