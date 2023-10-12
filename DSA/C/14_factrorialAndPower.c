#include<stdio.h>
int fact(int n)
{
	if(n==0||n==1)
	return 1;
	else
	return n*fact(n-1);
}
int power(int m,int n)
{
	if(n==0)
	return 1;
	else
	return power(m,n-1)*m;
}
int main()
{
	int x=5;
	printf("%d\n",fact(x));
	int m=2,n=3;
	printf("%d\n",power(m,n));
	
}
