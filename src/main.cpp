#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int main()
{
    srand(time(0));
    cout << "Я ПРОГРАММА ОТ МАКАНА БРАТ\n\n\nМАКАН  ПРЕДСТАВЛЯЕТ....\n\n\n";
    int size;
    cout << "Брат, сколько элементов в массиве? ";
    cin >> size;

    int *arr = new int[size];

    int min, max;
    cout << "Брат, давай минимальное и максимальное число через пробел: ";
    cin >> min >> max;

    for (int i = 0; i < size; i++)
    {
        arr[i] = rand() % (max - min + 1) + min;
    }

    cout << "Брат, вот твой массив: ";
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    delete[] arr;
    return 0;
}