#include<stdio.h>
int main()
{
	int m=30;
	int n=18;
	while(n>0)
	{
		int r=m%n;
		m=n;
		n=r;
	}
	printf("%d",m);
}
