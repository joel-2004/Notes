#include<stdio.h>
#include<stdlib.h>
struct node{
	int data;
	struct node *next;
}*top=NULL;
void push(int x)
{
	struct node *n;
	n=(struct node*)malloc(sizeof(struct node));
	if(n==NULL)//happens if a new node cannot be created i.e when the heap memory is full
	{
		printf("Stack overflow");
	
	}
	else{
		n->data=x;
		n->next=top;
		top=n;
	}
	
}
void pop()
{
	int x;
	if(top==NULL)
	{
	printf("Empty");
	return;	
	}else{
		struct node *temp;
		temp=top;
		top=top->next;
		x=temp->data;
		free(temp);
	}
	printf("%d is popped\n",x);
}
void display()
{
	struct node *p;
	p=top;
	while(p!=NULL){

	printf("%d ",p->data);
	p=p->next;
}
	printf("\n");
}
int main()
{
push(10);
push(20);
push(30);
push(40);
display();	

pop();
pop();
display();
}

