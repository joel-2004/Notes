#include<stdio.h>
int main()
{
	int arr[10]={1,3,5,6,7,8,9,10};
	int f[11]={0};
	int i;
	for(i=0;i<10;i++)
	f[arr[i]]++;
	
	for(i=0;i<11;i++)
	{
		if(f[i]==0)
		printf("%d ",i);
	}
}
