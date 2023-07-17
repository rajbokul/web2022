#include <stdio.h>
int main(){
// variable = Allocate space in memory to store a value.
// we refer to a variable's name to access the stored value.
// That variable now behaves as if it was the value it contains.
// But we need to declare what type of data we are storing.


int x;          //declaration
x = 123;        //initialization
int y = 321;    //declaration + intialization

int age = 21;       //integer
float gpa = 2.05;   //floating point number
char grade = 'C';   //single charcter
char name[] = "Bro"; //array of charcters

printf("Hello %s\n", name);
printf("You are %d years old\n", age);
printf("your average grade is %c\n", grade);
printf("Your gpa is %f\n", gpa);
return 0;
}