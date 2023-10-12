 #include<stdio.h>
#include<stdlib.h>
struct node{
	int data;
	struct node *next;
}*first,*last;
void create(int arr[],int n)
{
	struct node *temp,*last;
	int i;
	first=(struct node*)malloc(sizeof(struct node));
    first->data=arr[0];
    first->next=NULL;
    last=first;
    
    for(i=1;i<n;i++)
    {
    	temp=(struct node*)malloc(sizeof(struct node));
    	temp->data=arr[i];
    	temp->next=NULL;
    	last->next=temp;
    	last=temp;
	}
}
void display(struct node *n)//using iterative
{
	 while(n!=NULL)
	 {
	 	printf("%d ",n->data);
	 	n=n->next;
	 	//printf("%d ",n);
	 }
	 printf("\n");
}
void displayRec(struct node *n)
{
	if(n!=NULL){
	printf("%d ",n->data);
	displayRec(n->next);
}
}
int count(struct node *n)
{
	int c=0;
	while(n!=NULL)
	{
		c++;
		n=n->next;
	}
	return c;
}
int sum(struct node *n)
{
	int sum=0;
	while(n!=NULL)
	{
		sum+=n->data;
		n=n->next;
	}
	return sum;
}
int max(struct node *n)
{
	int max=INT_MIN;
	while(n!=NULL)
	{
		if(n->data>max)
		{
			max=n->data;
		}
		n=n->next;
	}
	return max;
}
int search(struct node *n,int key)
{
	while(n!=NULL)
	{
		if(n->data==key)
		return n->data;
		n=n->next;
	}
	return -1;
}
int searchRec(struct node *n,int key)
{
	if(n==NULL)
	return -1;
	if(n->data==key)
	return n->data;
	return searchRec(n->next,key);
}
void insertFirst(struct node *t,int key)
{
	t=(struct node*)malloc(sizeof(struct node));//creating a new node
	 t->data=key;//assigning the value to it
	 t->next=first;	//pointing the address of new node to first
	 first=t;//making the new node as first
	 //tc(O(1))
}
void insert(struct node *p,int index,int x)
{
struct node *t;
if(index<0||index>count(p))
return;
t=(struct node*)malloc(sizeof(int));
t->data=x;
if(index==0)
{
	t->next=first;
	first=t;
}
else{
	int i;
	for(i=0;i<index-1;i++)
	{
		p=p->next;
	}
		t->next=p->next;
		p->next=t;
		
	
}
}
void insertLast(int x)
{
	struct node *t;
	t=(struct node*)malloc(sizeof(struct node));
	t->data=x;
	t->next=NULL;
	if(first==NULL)
	{
		last=t;
		first=t;
	}
	else{
	last->next=t;
	last=t;
	}
}
void deleteFirst()
{
	struct node *p;
	p=(struct node*)malloc(sizeof(struct node));
	p=first;
	first=first->next;
free(p);
}
void deleteAtIndex(	struct node *p,int index)
{
	if(index==1)
	{
		deleteFirst();
		return;
	}
struct node *q;
	int i=0;
	for(i=0;i<index-1;i++){
	
q=p;
p=p->next;
}

q->next=p->next;

free(p);


}
int isSorted()
{
	struct node *p;
	p=first;
	int i;
	int x=INT_MIN;
	int c=count(p);
	for(i=0;i<c;i++)
	{
		if(p->data<x)
		return 0;
		
	x=p->data;
	p=p->next;
		
	}

	return 1;

}
int dltDuplicateFromSorted()
{
	struct node *p;
	struct node *q;
	p=first;
	q=first->next;
	while(q!=NULL)
	{
		if(p->data!=q->data)
		{
			p=q;
			q=q->next;
		}
		else
		{
		p->next=q->next;
		free(q);
		q=p->next;
		}		
	}
	printf("unique\n");
}
void reverseUsingArray()
{
	struct node *p;
	p=first;
	int size=count(first);
	int arr[size];
	int i=0;
	while(p!=NULL)
	{
		arr[i]=p->data;
		p=p->next;
		i++;
	}
	p=first;
	int j;
	i--;//so that it comes back to the last index
	while(p!=NULL){
		p->data=arr[i];
		p=p->next;
		i--;
}
	
}
void reverseUsingSlidingPointer(){
	struct node *p,*q,*r;
p=first;
q=NULL;
r=NULL;
while(p!=NULL)
{
	r=q;
	q=p;
	p=p->next;
	q->next=r;
}
first=q;
}
int main()
{
//	int arr[]={1,2,3,4,5};
	//create(arr,5);
//		display(first); 
//		printf("\n");
//		insertFirst(first,0);
//insert(first,0,0);
//insert(first,1,1);
//insert(first,2,2);
//insert(first,3,3);
//		display(first); 
//		printf("\n");


    insertLast(0);
    insertLast(1);
    insertLast(2);
    insertLast(3); 
   insertLast(4);
  //  insertLast(4);
     insertLast(5); 
     // insertLast(5); 
//    displayRec(first);
//	printf("\n");
//	deleteFirst();

	displayRec(first);
	printf("\n");
//		deleteAtIndex(first,2);
//		   displayRec(first);
//int sorted=isSorted();
//if(sorted)
//printf("Sorted\n");
//else
//printf("Not sorted\n");
//	dltDuplicateFromSorted();
//	display(first);
	
	reverseUsingArray();
	display(first);
	 
	reverseUsingSlidingPointer();
	display(first);
		
//		printf("Count:%d\n",count(first));
//		printf("Sum:%d\n",sum(first));
//		printf("Max:%d\n",max(first));
//		int find=search(first,9);
//		if(find==-1)
//		printf("Not found\n");
//		else
//		printf("%d is found\n",find);
//		int findRec=searchRec(first,9);
//		if(find==-1)
//		printf("Not found\n");
//		else
//		printf("%d is found\n",find);
}
