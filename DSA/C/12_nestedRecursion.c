<<<<<<< HEAD
#include<stdio.h>
int fun(int n)
{
	if(n>100)
    return n-10;
	else
	return fun(fun(n+11));
}
int main()
{
	int n=90;
	printf("%d",fun(n));//look at notes for trace
}
=======
#include<stdio.h>
int fun(int n)
{
	if(n>100)
    return n-10;
	else
	return fun(fun(n+11));
}
int main()
{
	int n=90;
	printf("%d",fun(n));//look at notes for trace
}
>>>>>>> 42a15ff59682403a4fea53e5355b02541d87fffb
