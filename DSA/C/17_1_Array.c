<<<<<<< HEAD
#include<stdio.h>
int main()
{
	int f[5];
	int ff[5];
	int f1[5]={1,2};
	int f2[5]={0};
	int i;
	for(i=0;i<5;i++)
	printf("%d ",f[i]);//garbage value
	printf("\n");
	
		for(i=0;i<5;i++)
	printf("%d ",*(ff+i));//using pointer to print, prints garbage since it is not initialised
	printf("\n");
	
	
	for(i=0;i<5;i++)
	printf("%d ",f1[i]);//rest numbers initialised to 0
	printf("\n");
	
	for(i=0;i<5;i++)
	printf("%d ",i[f2]);//can put index outside and variable inside

}
=======
#include<stdio.h>
int main()
{
	int f[5];
	int ff[5];
	int f1[5]={1,2};
	int f2[5]={0};
	int i;
	for(i=0;i<5;i++)
	printf("%d ",f[i]);//garbage value
	printf("\n");
	
		for(i=0;i<5;i++)
	printf("%d ",*(ff+i));//using pointer to print, prints garbage since it is not initialised
	printf("\n");
	
	
	for(i=0;i<5;i++)
	printf("%d ",f1[i]);//rest numbers initialised to 0
	printf("\n");
	
	for(i=0;i<5;i++)
	printf("%d ",i[f2]);//can put index outside and variable inside

}
>>>>>>> 42a15ff59682403a4fea53e5355b02541d87fffb
