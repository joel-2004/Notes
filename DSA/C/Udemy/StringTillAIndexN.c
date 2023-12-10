#include<stdio.h>
int main()
{
	char s[100];
	int n;
	scanf("%s %d",s,&n);
	s[n]='\0';
	printf("%s",s);
}
