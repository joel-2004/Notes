#include<stdio.h>
#include<stdlib.h>
struct node{
	int data;
	struct node *next;
}*head;

void create(int arr[],int n)
{
	int i;
	struct node *t,*last;
	head=(struct node*)malloc(sizeof(struct node));
	head->data=arr[0];
	head->next=head;
	last=head;//so we can insert in last also
	for(i=1;i<n;i++){
	
	t=(struct node*)malloc(sizeof(struct node));
	t->data=arr[i];
	t->next=last->next;
	last->next=t;
	last=t;
}
	
}
void displayCircular(struct node *p)
{
  //using do while because when we use while(p!=head) in while loop, then the condition is false in the first iteration and wil not enter loop.
  do{
    printf("%d ",p->data);
    p=p->next;
  }while(p!=head);
  printf("\n");
}

void displayCircularRec(struct node *p)
{
  static int flag=0;
  //static is a global variable only for the function.
  //using like this bcause if i use int flag=0,it creates flag again and again, can also declare flag as a global variable as a solution
  if(flag==0 || p!=head)
  //using flag==0 condition to escape the first occurence where p==head,and thus it will not enter the if condition
  {
  
    flag=1;
printf("%d ",p->data);
    displayCircularRec(p->next);
  }

  flag=0;
}
void insert(int data,int index)
{
	struct node *temp,*p;
	p=head;
	temp=(struct node *)malloc(sizeof(struct node));
	temp->data=data;
	int i;
	for(i=0;i<index-1;i++)
	{
		p=p->next;
	}
	temp->next=p->next;
	p->next=temp;
}
void insertBfrHead(int data)
{
	struct node *p,*temp;
	p=head;
	temp=(struct node *)malloc(sizeof(struct node));
	temp->data=data;
	temp->next=head;
while(p->next!=head){
		p=p->next;
}
p->next=temp;
head=temp;//optional since it is a circular linked list
}

void dltAtPos(int index)
{
struct node *p,*q;
p=head;

int i;
for(i=0;i<index-2;i++){
p=p->next;
}
q=p->next;
p->next=q->next;
	free(q);
}
void dltHead()
{
	struct node *p;
	p=head;
	while(p->next!=head)
	{
		p=p->next;
	}
	p->next=head->next;
	free(head);
	
	head=p->next;
	
}
int main()
{
	int arr[]={1,2,3,4,5};
    create(arr,5);
	displayCircular(head);
	insert(6,5);
	displayCircularRec(head);
	printf("\n");
	insertBfrHead(7);
	displayCircular(head);
dltAtPos(6);
	displayCircular(head);
	dltHead();
		displayCircular(head);
}
