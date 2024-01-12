#include<stdio.h>
int gcd(int a,int b)
{
	if(a==b)
	return a;
	if(a==0) return b;
	if(b==0) return a;
	if(a>b)
	return gcd(a-b,b);
	else
	return gcd(a,b-a);
}

int gcdOptimised(int a,int b)
{
	if(b==0)
	return a;
	//euclids algorithm
	gcdOptimised(b,a%b);
}

int main()

{
	int a=72,b=21;
	printf("%d\n",gcd(a,b));
		printf("%d",gcdOptimised(a,b));
}
