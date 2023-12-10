#include<stdio.h>
#include<stdlib.h>
int cmp(const void *a,const void *b)
{
	int *x=(int*)a;
	int *y=(int*)b;
	return *x-*y;
}
int main()
{
	int arr[]={4,3,2,1,5,7,6};
	qsort(arr,7,sizeof(int),cmp);
	int i;
	for(i=0;i<7;i++)
	printf("%d ",arr[i]);
}
