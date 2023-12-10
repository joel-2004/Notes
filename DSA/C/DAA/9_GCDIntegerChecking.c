#include<stdio.h>
int main()
{
	int m=30;
	int n=18;
	int t=m;
	if(n<m)
	t=n;
	while(1)
	{
		if(m%t==0&&n%t==0)
		{
				printf("%d",t);
				break;
		}
		else
		t--;
	}

}
