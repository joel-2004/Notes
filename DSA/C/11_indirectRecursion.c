<<<<<<< HEAD
#include<stdio.h>
int funA(int n)
{
	if(n>0)
	{
		printf("%d ",n);
		funB(n-1);
	}
}
int funB(int n)
{
		if(n>1)
	{
		printf("%d ",n);
		funA(n/2);
	}
}
int main()
{
	funA(20);//look at handwritten notes for trace
}
=======
#include<stdio.h>
int funA(int n)
{
	if(n>0)
	{
		printf("%d ",n);
		funB(n-1);
	}
}
int funB(int n)
{
		if(n>1)
	{
		printf("%d ",n);
		funA(n/2);
	}
}
int main()
{
	funA(20);//look at handwritten notes for trace
}
>>>>>>> 42a15ff59682403a4fea53e5355b02541d87fffb
