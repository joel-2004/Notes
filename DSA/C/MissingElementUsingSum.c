#include<stdio.h>
int main()
{
	int arr[]={1,2,4,5,6,7};
	int i,sum=0;
	for(i=0;i<6;i++)
	{
		sum+=arr[i];
	}
	int sumOfN=7*(7+1)/2;
	printf("%d",sumOfN-sum);
}
