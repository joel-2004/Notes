#include<stdio.h>
#include<stdlib.h>
struct stack{
	int size;
	int top;
	int *p; //to dynamically create an array
};

void push(struct stack *st,int x)//call by reference to change the value in that stack
{
	if(st->top==st->size-1){
	printf("Stack overflow");
	return;
}
else{
		st->top++;//initially top=-1,++ and insert at [0] th position
	st->p[st->top]=x;

}
}
int pop(struct stack *st)
{
	int x=-1;
if(st->top==-1)
{
	printf("Stack underflow");
	return;
}
else{
  x=st->p[st->top];
	st->top--;
}
return x;
}


int peek(struct stack st,int pos) //call by value because no need for change in the stack
{
	int x=-1;
	/*top-pos+1 to get the 
	index because we are accessing the array from the top in a stack so using index will not work*/
	if(st.top-pos+1<0)
	printf("Invalid position");
	
	x=st.p[st.top-pos+1];
	
	return x;
}

void display(struct stack s)
{
	int i;
	for(i=s.top;i>=0;i--)
	printf("%d ",s.p[i]);
	
	printf("\n");
}
int main()
{
	struct stack st;
	printf("Enter the size:");
	scanf("%d",&st.size);
	st.p=(int *)malloc(st.size*sizeof(int));//creating array in heap
	st.top=-1;
	push(&st,1);
	push(&st,2);
	push(&st,3);
	push(&st,4);
		push(&st,5);
			push(&st,6);
	display(st);
//	printf("%d\n",pop(&st));
//		printf("%d\n",pop(&st));
//			printf("%d\n",pop(&st));
			
			printf("Peek:%d\n",peek(st,3));
}
