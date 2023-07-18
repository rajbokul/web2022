#include <stdio.h>
#include <ctype.h>

int main (){
    char unit;
    float temp;

    printf("\nIs the Temperature in (F) or (C):?");
    scanf("%c", &unit);
    unit = toupper(unit);

    if (unit == 'C')
    {
        printf("\nEnter the temperature in Celsius: ");
        scanf("%f", &temp);
        temp = (temp * 9 /5)+32;
        printf("\nThe Temerature in Farenheit is: %.1f", temp);
    }
    else if (unit == 'F')
    {
        printf("\nEnter the temperature in Farenheit: ");
        scanf("%f", &temp);
        temp = ((temp -32) *5 )/9;
        printf("\nThe Temerature in Celsius is: %.1f", temp);
        
    }
    else{
        printf("\n %c is not a valid unit of meausurment", unit);
    }    

    return 0;    
}