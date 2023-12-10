#include <stdio.h>
#include <stdlib.h>
struct node {
  int data;
  struct node *next;
} *front = NULL, *rear = NULL;

void enqueue(int x) {
  struct node *newNode = (struct node *)malloc(sizeof(struct node));
  if (newNode == NULL) // in case the memory is full
  {
    printf("Queue is full");
    return;
  } else {
    newNode->data = x;
    newNode->next = NULL;
    if (front == NULL) // creating first element
    {
      front = rear = newNode;
    } else {
      rear->next = newNode;
      rear = newNode;
    }
  }
}
int dequeue() {
  int x = -1;
  if (front == NULL) {
    printf("Queue is empty");
    return 0;
  }
  struct node *p = (struct node *)malloc(sizeof(struct node));
  p = front;
  x = front->data;
  front = front->next;
  free(p);

  return x;
}
void display() {
  struct node *t = front;
  while (t != NULL) {
    printf("%d ", t->data);
    t = t->next;
  }
  printf("\n");
}
int main() {
  enqueue(1);
  enqueue(2);
  enqueue(3);
  enqueue(4);
  display();
  printf("Dequeue:%d\n", dequeue());
  display();
  printf("Dequeue:%d\n", dequeue());
  display();
}

