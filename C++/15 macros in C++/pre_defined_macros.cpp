#include <iostream>

using namespace std;

int main()
{
    cout << "This is the line " << __LINE__ << " in file " << __FILE__ << endl;
    cout << "Compiled on Date " << __DATE__ << " at Time " << __TIME__ << endl;

    return 0;
}