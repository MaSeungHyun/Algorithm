#include <stdio.h>

using namespace std;

int main(void) {
    double A;
    double B;
    
    scanf("%lf %lf", &A, &B);
    
    printf("%.13lf", A / B);
}
