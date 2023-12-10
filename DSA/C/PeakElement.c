#include<stdio.h>
int main()
{
	int n,i;
	scanf("%d",&n);
	int arr[n];
	for(i=0;i<n;i++)
	scanf("%d",&arr[i]);
	printf("Peak Element:");
	for(i=0;i<n;i++)
	{
			if(arr[i]>arr[i-1]&&arr[i]>arr[i+1])
			printf("%d ",arr[i]);
	}
}
