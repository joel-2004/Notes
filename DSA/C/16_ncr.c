<<<<<<< HEAD
#include<stdio.h>
int fact(int n)
{
	if(n==0||n==1)
	return 1;
    else
    return n*fact(n-1);
}
int ncr(int n,int r)//O(n)
{
	int t1=fact(n);
	int t2=fact(r);
	int t3=fact(n-r);
	return t1/(t2*t3);
	
}
int ncr1(int n,int r)//pascals triangle (see written notes)
{
	if(r==0||n==r)
	return 1;
	else return ncr1(n-1,r-1)+ncr1(n-1,r);
}
int main()
{
	printf("%d\n",fact(5));
	printf("%d\n",ncr(5,2));
	printf("%d",ncr1(5,2));
}
=======
#include<stdio.h>
int fact(int n)
{
	if(n==0||n==1)
	return 1;
    else
    return n*fact(n-1);
}
int ncr(int n,int r)//O(n)
{
	int t1=fact(n);
	int t2=fact(r);
	int t3=fact(n-r);
	return t1/(t2*t3);
	
}
int ncr1(int n,int r)//pascals triangle (see written notes)
{
	if(r==0||n==r)
	return 1;
	else return ncr1(n-1,r-1)+ncr1(n-1,r);
}
int main()
{
	printf("%d\n",fact(5));
	printf("%d\n",ncr(5,2));
	printf("%d",ncr1(5,2));
}
>>>>>>> 42a15ff59682403a4fea53e5355b02541d87fffb
