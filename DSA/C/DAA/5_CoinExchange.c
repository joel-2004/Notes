#include<stdio.h>
#include<stdlib.h>
int cmp(const void *a,const void *b)
{
	int *x=(int*)a;
	int *y=(int*)b;
	return *y-*x;
}
int main()
{
	int arr[]={1,2,5,10};
	int amount=43;
	qsort(arr,4,sizeof(int),cmp);
	int i;
	for(i=0;i<4;i++)
	printf("%d ",arr[i]);
	i=0;
	int count=0;
	while(amount>0)
	{
		if(amount-arr[i]>=0){
		amount-=arr[i];
	printf("Coin used:%d\n",arr[i]);
		count++;
	}
		else
		i++;
	}
	printf("\nAmount:%d \nCount:%d",amount,count);
}
