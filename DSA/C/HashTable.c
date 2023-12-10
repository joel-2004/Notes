#include<stdio.h>
int main()
{
	int i;
	int arr[5];
	for(i=0;i<5;i++)
	scanf("%d",&arr[i]);
	int k,j;
	int ans[5];
	for(k=0;k<5;k++)
	{
		ans[arr[k]]++;
	}
	
	for(i=0;i<5;i++)
{
	printf("%d is %d times\n",i,ans[i]);
}

	
}
