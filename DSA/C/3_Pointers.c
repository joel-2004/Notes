#include<stdio.h>
#include<stdlib.h>
struct Demo{
	int a;
	int b;
};
int main()
{
//	int a[]={1,2,3};
	int *p;
//	p=a;
	int i;
//	p=&n;
//	printf("%d\n",p);
//	printf("%d",*p);
p=(int *)malloc(3*sizeof(int));
p[0]=1;
p[1]=2;
p[2]=3;

for(i=0;i<3;i++){
printf("%d ",p[i]);
}	
printf("\n");
int *p1;
char *p2;
struct Demo *p3;
printf("%d %d %d",sizeof(p1),sizeof(p2),sizeof(p3));

}
