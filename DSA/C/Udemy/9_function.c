#include<stdio.h>
int y=0;//Global variable also does not reste,once created it occupies its memory
int fun(n)
{
	static int x=0;/*once created the value of the 
	static value does not reset every time the function is called*/
	 
	if(n>0)
	{
		x++;//the value increses every time,but the value doesnt get reset
		return fun(n-1)+x;
	}
	return 0;
}
int main()
{
	int x=5;
	int ans=fun(x);
	printf("%d",ans);
}
