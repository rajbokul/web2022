#include <stdio.h>
#include <string.h>
int main(){

    char name[25];
    int age;

    printf("What's your name?");
    fgets(name, 25, stdin);
    name[strlen(name)-1] = '\0';
    printf("How old are you?");
    scanf("%d", &age);
    
    printf("\nHello %s, how are you?", name);
    printf("\nyou are %d years old", age);
    return 0;
}