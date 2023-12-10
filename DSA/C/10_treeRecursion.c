<<<<<<< HEAD
#include<stdio.h>
int fun(int n)
{
	if(n>0)
	{
		printf("%d ",n);
		fun(n-1);
		fun(n-1);//It is a tree recursion beacuse a function is called more than once
	}
}
int main()
{
	fun(3);//see notes for the trace
}
=======
#include<stdio.h>
int fun(int n)
{
	if(n>0)
	{
		printf("%d ",n);
		fun(n-1);
		fun(n-1);//It is a tree recursion beacuse a function is called more than once
	}
}
int main()
{
	fun(3);//see notes for the trace
}
>>>>>>> 42a15ff59682403a4fea53e5355b02541d87fffb
