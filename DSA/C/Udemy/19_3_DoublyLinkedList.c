#include<stdio.h>
#include<stdlib.h>
struct node{
	int data;
	struct node *prev,*next;
}*first=NULL;
void create(int arr[],int n)
{
	struct node *t,*last;
	int i;
	first=(struct node *)malloc(sizeof(struct node));
	first->data=arr[0];
	first->prev=NULL;
	first->next=NULL;
	last=first;
	for(i=1;i<n;i++)
	{
	t=(struct node *)malloc(sizeof(struct node));
	t->data=arr[i];
	t->next=last->next;
	t->prev=last;
	last->next=t;
	last=t;	
	}
}
void display(struct node *p)
{
	while(p!=NULL)
	{
		printf("%d ",p->data);
		p=p->next;
	}
	printf("\n");
}
int main()
{
int arr[]={1,2,3,4,5};
create(arr,5);
display(first);	
}
