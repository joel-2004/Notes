<<<<<<< HEAD
#include<stdio.h>
struct node {
int a;
int b;
};
int add(struct node *s,int l,int m)// use pointer(*s) to access address 
{
	s->a=l;//assign value of l to s->a	
	s->b=m;
	
	return s->a+s->b;
}
int main()
{
	struct node ans;
	int l=20;
	int m=30;
	printf("%d",add(&ans,l,m));//use & to send address

}
=======
#include<stdio.h>
struct node {
int a;
int b;
};
int add(struct node *s,int l,int m)// use pointer(*s) to access address 
{
	s->a=l;//assign value of l to s->a	
	s->b=m;
	
	return s->a+s->b;
}
int main()
{
	struct node ans;
	int l=20;
	int m=30;
	printf("%d",add(&ans,l,m));//use & to send address

}
>>>>>>> 42a15ff59682403a4fea53e5355b02541d87fffb
