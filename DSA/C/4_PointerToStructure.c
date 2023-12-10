#include<stdio.h>
#include<stdlib.h>
struct rectangle{
	int a;
	int b;
};
int main()
{
//	struct rectangle e1={30,40
//	};;
//	struct rectangle *r=&e1;
//	printf("%d %d",r->a,r->b);

struct rectangle *re;
re=(struct rectangle*)malloc(sizeof(struct rectangle));
re->a=10;
re->b=10;
printf("%d %d\n",re->a,re->b);
int *de;
char *demo;
printf("%d  %d %d\n",sizeof(*re),sizeof(*de),sizeof(*demo));/*This prints the size of (*datatype),so 
it is accessing the datatypes value i.e int,char,struct, so it prints the datatypes size*/

printf("%d  %d %d\n",sizeof(re),sizeof(de),sizeof(demo));
/*The size of pointer in a 64-bit compiler is same (8 bytes) 
regardless of the datatype(int,float,struct)*/
}
