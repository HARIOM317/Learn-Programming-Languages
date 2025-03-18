#include <iostream>

#define CLERK 100
#define WORKER CLERK // WORKER -> CLERK -> 100

using namespace std;

int main()
{
    cout << "Clerk = " << CLERK << endl;
    cout << "Worker = " << WORKER << endl;

    return 0;
}