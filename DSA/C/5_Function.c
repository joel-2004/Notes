<<<<<<< HEAD
#include<stdio.h>
#include<stdlib.h>
int add(int a,int b)
{
return a+b;	
}
void swap(int *x,int *y)
{
	int temp=*x;
	*x=*y;
	*y=temp;
}
void print(int *arr,int n)
{
	int i;
	for(i=0;i<n;i++)
	printf("%d ",arr[i]);
	
	printf("\n");
	arr[0]=69;

}
int *arra(int n)
{
	int *p;
	p=(int*)malloc(sizeof(int));
	int i;
	for(i=0;i<n;i++)
	p[i]=i+1;
	return p;
}
int main()
{
	int a=20;
	int b=30;
	printf("%d\n",add(a,b));
		printf("%d %d\n",a,b);

		swap(&a,&b);
	printf("%d %d\n",a,b);
	
	int arr[]={1,2,3,4};
	int n=4;
	print(arr,n);
	printf("%d\n",arr[0]);
	
	int i,*p;
	p=arra(n);
	for(i=0;i<n;i++)
	printf("%d ",p[i]);
}
=======
#include<stdio.h>
#include<stdlib.h>
int add(int a,int b)
{
return a+b;	
}
void swap(int *x,int *y)
{
	int temp=*x;
	*x=*y;
	*y=temp;
}
void print(int *arr,int n)
{
	int i;
	for(i=0;i<n;i++)
	printf("%d ",arr[i]);
	
	printf("\n");
	arr[0]=69;

}
int *arra(int n)
{
	int *p;
	p=(int*)malloc(sizeof(int));
	int i;
	for(i=0;i<n;i++)
	p[i]=i+1;
	return p;
}
int main()
{
	int a=20;
	int b=30;
	printf("%d\n",add(a,b));
		printf("%d %d\n",a,b);

		swap(&a,&b);
	printf("%d %d\n",a,b);
	
	int arr[]={1,2,3,4};
	int n=4;
	print(arr,n);
	printf("%d\n",arr[0]);
	
	int i,*p;
	p=arra(n);
	for(i=0;i<n;i++)
	printf("%d ",p[i]);
}
>>>>>>> 42a15ff59682403a4fea53e5355b02541d87fffb
