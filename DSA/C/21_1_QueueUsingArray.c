<<<<<<< HEAD
#include<stdio.h>
#include<stdlib.h>
struct Queue{
	int rear;
	int front;
	int size;
	int *p;
};
void create(struct Queue *q,int size)
{
	q->p=(int*)malloc(q->size*sizeof(int));
	q->front=-1;
	q->rear=-1;	
}
void enqueue(struct Queue *q,int x)
{
	if(q->rear==q->size-1){
	printf("Queue is full");
}
else{
q->rear++;
q->p[q->rear]=x;
}
}
int dequeue(struct Queue *q)
{
	int x=-1;
	if(q->front==q->rear)
	printf("Queue is empty");
	else{
	q->front++;
	x=q->p[q->front];
	
}
return x;
}
void display(struct Queue *q)
{
	int i;
	for(i=q->front+1;i<=q->rear;i++)//+1 for front because the front points to the index before an element
	{
		printf("%d ",q->p[i]);
	}
	printf("\n");
}
int main()
{
	struct Queue q;
	int size;
	create(&q,7);
	enqueue(&q,1);
	enqueue(&q,2);
	enqueue(&q,3);
	enqueue(&q,4);
	enqueue(&q,5);
	display(&q);
		printf("%d\n",dequeue(&q));
	printf("%d\n",dequeue(&q));
		display(&q);
	

}
=======
#include<stdio.h>
#include<stdlib.h>
struct Queue{
	int rear;
	int front;
	int size;
	int *p;
};
void create(struct Queue *q,int size)
{
	q->p=(int*)malloc(q->size*sizeof(int));
	q->front=-1;
	q->rear=-1;	
}
void enqueue(struct Queue *q,int x)
{
	if(q->rear==q->size-1){
	printf("Queue is full");
}
else{
q->rear++;
q->p[q->rear]=x;
}
}
int dequeue(struct Queue *q)
{
	int x=-1;
	if(q->front==q->rear)
	printf("Queue is empty");
	else{
	q->front++;
	x=q->p[q->front];
	
}
return x;
}
void display(struct Queue *q)
{
	int i;
	for(i=q->front+1;i<=q->rear;i++)//+1 for front because the front points to the index before an element
	{
		printf("%d ",q->p[i]);
	}
	printf("\n");
}
int main()
{
	struct Queue q;
	int size;
	create(&q,7);
	enqueue(&q,1);
	enqueue(&q,2);
	enqueue(&q,3);
	enqueue(&q,4);
	enqueue(&q,5);
	display(&q);
		printf("%d\n",dequeue(&q));
	printf("%d\n",dequeue(&q));
		display(&q);
	

}
>>>>>>> 42a15ff59682403a4fea53e5355b02541d87fffb
