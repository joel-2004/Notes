<<<<<<< HEAD
#include<stdio.h>
int sumOfN(int n)
{
	if(n==0)
	return 0;
	if(n==1)
	return 1;
	else return n+sumOfN(n-1);
}
int sumOf(int n)
{
	return n*(n+1)/2;
}
int main()
{
	int i;
	int x=5;
	int sum=0;
	for(i=0;i<=x;i++)
	sum+=i;
	printf("%d\n",sum);//O(n)
	printf("%d\n",sumOf(x));//O(1)
	printf("%d",sumOfN(x));//O(n)
}
=======
#include<stdio.h>
int sumOfN(int n)
{
	if(n==0)
	return 0;
	if(n==1)
	return 1;
	else return n+sumOfN(n-1);
}
int sumOf(int n)
{
	return n*(n+1)/2;
}
int main()
{
	int i;
	int x=5;
	int sum=0;
	for(i=0;i<=x;i++)
	sum+=i;
	printf("%d\n",sum);//O(n)
	printf("%d\n",sumOf(x));//O(1)
	printf("%d",sumOfN(x));//O(n)
}
>>>>>>> 42a15ff59682403a4fea53e5355b02541d87fffb
