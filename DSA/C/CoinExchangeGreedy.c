<<<<<<< HEAD
#include<stdio.h>
int cmp(const void *a,const void *b){
	int *c=(int *)a;
	int *d=(int *)b;
	return *d - *c;
}
int main()
{
	int amount;
	int count=0;
	scanf("%d",&amount);
	int arr[]={1,2,5,10};
	qsort(arr,4,sizeof(int),cmp);
	int i=0;
	while(amount>0&&i<4)
	{
		if(amount>=arr[i])
		{
			amount-=arr[i];
			count++;
		}
		else{
			i++;
		}
	}
	printf("Total coins:%d",count);
}
=======
#include<stdio.h>
int cmp(const void *a,const void *b){
	int *c=(int *)a;
	int *d=(int *)b;
	return *d - *c;
}
int main()
{
	int amount;
	int count=0;
	scanf("%d",&amount);
	int arr[]={1,2,5,10};
	qsort(arr,4,sizeof(int),cmp);
	int i=0;
	while(amount>0&&i<4)
	{
		if(amount>=arr[i])
		{
			amount-=arr[i];
			count++;
		}
		else{
			i++;
		}
	}
	printf("Total coins:%d",count);
}
>>>>>>> 42a15ff59682403a4fea53e5355b02541d87fffb
