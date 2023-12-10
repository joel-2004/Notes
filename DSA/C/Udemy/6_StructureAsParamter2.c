#include<stdio.h>
struct demo{
	int arr[5];
	int n;
};
void fun(struct demo d)
{
	d.arr[0]=20;
}
int main()
{
	struct demo d={{1,2,3,4,5},6};
		printf("%d \n",d.arr[0]);
	/*
	An array cannot called by value in a function,
	but using structure it is possible
	*/
	fun(d);
	printf("%d \n",d.arr[0]);//note that the number does not change since it is call by value
}
