#include<stdio.h>
struct rectangle{
	int a;
	int b;
};
void initialize(struct rectangle *r,int l,int m)
{
	r->a=l;
	r->b=m;
}
int area(int l,int m)
{
	return l*m;
}
void changeLength(struct rectangle *r,int l)
{
	r->a=l;
}
int main()
{
	struct rectangle r;
	initialize(&r,10,20);
	printf("%d\n",area(r.a,r.b));
	changeLength(&r,30);
	printf("%d\n",r.a);	
}
