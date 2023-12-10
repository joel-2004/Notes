<<<<<<< HEAD
#include<stdio.h>
int f[10];
int fib(int n)
{
	if(n<=1)
	{
		f[n]=n;
		return n;
	}
	else{
		if(f[n-2]==-1)
		f[n-2]=fib(n-2);
		if(f[n-1]==-1)
		f[n-1]=fib(n-1);
		return f[n-2]+f[n-1];
	}
}
int main()
{
	int i;
	int n;
	scanf("%d",&n);
	for(i=0;i<n;i++)
	f[i]=-1;
	printf("%d\n",fib(n));
	for(i=0;i<n;i++)
	printf("%d ",f[i]);
}
=======
#include<stdio.h>
int f[10];
int fib(int n)
{
	if(n<=1)
	{
		f[n]=n;
		return n;
	}
	else{
		if(f[n-2]==-1)
		f[n-2]=fib(n-2);
		if(f[n-1]==-1)
		f[n-1]=fib(n-1);
		return f[n-2]+f[n-1];
	}
}
int main()
{
	int i;
	int n;
	scanf("%d",&n);
	for(i=0;i<n;i++)
	f[i]=-1;
	printf("%d\n",fib(n));
	for(i=0;i<n;i++)
	printf("%d ",f[i]);
}
>>>>>>> 42a15ff59682403a4fea53e5355b02541d87fffb
