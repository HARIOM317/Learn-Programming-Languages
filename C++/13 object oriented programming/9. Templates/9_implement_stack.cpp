#include <iostream>
using namespace std;

template <class T>
class Stack
{
private:
    T arr[100];
    int top = -1;

public:
    void push(T val)
    {
        arr[++top] = val;
    }

    void pop()
    {
        if (top >= 0)
            top--;
    }

    T peek()
    {
        return arr[top];
    }
};

int main()
{
    Stack<int> st;

    st.push(10);
    st.push(20);
    cout << st.peek() << endl;

    st.pop();
    cout << st.peek() << endl;

    return 0;
}