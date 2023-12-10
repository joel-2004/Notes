<<<<<<< HEAD
#include <stdio.h>
#include <stdlib.h>
struct array {
  int *a;
  int size;
  int length;
};
void display(struct array ar) {
  int i;
  for (i = 0; i < ar.length; i++)
    printf("%d ", ar.a[i]);
}
void dlt(struct array *ar, int index) {
  if (index >= 0 && index < ar->length) {
    int x = ar->a[index];
    printf("Deleted Element:%d\n", x);
    int i;
    for (i = index; i <= ar->length; i++)
      ar->a[i] = ar->a[i + 1];

    ar->length--;

  } else {
    printf("Index is invalid");
  }
}
void add(int x, struct array *ar)
 // if we dont use pointer than it changes only locaaly inside fun()
{
  if (ar->length < ar->size) {
    ar->a[ar->length] = x;
    ar->length++;
  } else
    printf("Array size is exceeded");
}

void insert(struct array *ar, int n, int index, int x) {
  if ((ar->length < ar->size) && (index >= 0 && index <= ar->length)) {

    int i;
    for (i = n; i > index; i--)
      ar->a[i] = ar->a[i - 1];

    ar->a[index] = x;
    ar->length++;
  } else
    printf("Array size is exceeded\n");
}
int get(struct array *ar, int index) {
  if (index >= 0 && index <= ar->length) {
    return ar->a[index];
  }
  return -1;
}

void set(struct array *ar, int x,int index) {
  if (index >= 0 && index <= ar->length) {
    ar->a[index]=x;
  }
  else{
  	printf("invalid index");
  }
}
int max(struct array *ar)
{
	int max=ar->a[0];
	int i;
	for(i=0;i<ar->length;i++)
	{
		if(ar->a[i]>max)
		max=ar->a[i];
	}
	return max;
}

int main() {
  struct array arr;
  int n, i;
  printf("Array size:");
  scanf("%d", &arr.size);
  arr.a = (int *)malloc(arr.size * sizeof(int)); // storing in heap
  arr.length = 0;
  printf("N:");
  scanf("%d", &n);
  for (i = 0; i < n; i++)
    scanf("%d", &arr.a[i]);
  arr.length = n;
  printf("%d\n", arr.length);
  display(arr);

  printf("\nEnter element to add:");
  int x;
  scanf("%d", &x);
  add(x, &arr);
  display(arr);

//  printf("\nEnter element to add and index:");
//  int xx, index;
//  scanf("%d %d", &xx, &index);
//  insert(&arr, arr.size, index, xx);
//  display(arr);
//
//  printf("\nEnter index to delete:");
//  int delt;
//  scanf("%d", &delt);
//  dlt(&arr, delt);
//
//  display(arr);
//  printf("\nEnter index to get:");
//  int elementToGet;
//  scanf("%d", &elementToGet);
//  printf("%d",get(&arr, elementToGet));
printf("\nEnter element & index to set:\n");
int setElement,setIndex;
scanf("%d %d",&setElement,&setIndex);
set(&arr,setElement,setIndex);
display(arr);
printf("\nMax:%d",max(&arr));

}
=======
#include <stdio.h>
#include <stdlib.h>
struct array {
  int *a;
  int size;
  int length;
};
void display(struct array ar) {
  int i;
  for (i = 0; i < ar.length; i++)
    printf("%d ", ar.a[i]);
}
void dlt(struct array *ar, int index) {
  if (index >= 0 && index < ar->length) {
    int x = ar->a[index];
    printf("Deleted Element:%d\n", x);
    int i;
    for (i = index; i <= ar->length; i++)
      ar->a[i] = ar->a[i + 1];

    ar->length--;

  } else {
    printf("Index is invalid");
  }
}
void add(int x, struct array *ar)
 // if we dont use pointer than it changes only locaaly inside fun()
{
  if (ar->length < ar->size) {
    ar->a[ar->length] = x;
    ar->length++;
  } else
    printf("Array size is exceeded");
}

void insert(struct array *ar, int n, int index, int x) {
  if ((ar->length < ar->size) && (index >= 0 && index <= ar->length)) {

    int i;
    for (i = n; i > index; i--)
      ar->a[i] = ar->a[i - 1];

    ar->a[index] = x;
    ar->length++;
  } else
    printf("Array size is exceeded\n");
}
int get(struct array *ar, int index) {
  if (index >= 0 && index <= ar->length) {
    return ar->a[index];
  }
  return -1;
}

void set(struct array *ar, int x,int index) {
  if (index >= 0 && index <= ar->length) {
    ar->a[index]=x;
  }
  else{
  	printf("invalid index");
  }
}
int max(struct array *ar)
{
	int max=ar->a[0];
	int i;
	for(i=0;i<ar->length;i++)
	{
		if(ar->a[i]>max)
		max=ar->a[i];
	}
	return max;
}

int main() {
  struct array arr;
  int n, i;
  printf("Array size:");
  scanf("%d", &arr.size);
  arr.a = (int *)malloc(arr.size * sizeof(int)); // storing in heap
  arr.length = 0;
  printf("N:");
  scanf("%d", &n);
  for (i = 0; i < n; i++)
    scanf("%d", &arr.a[i]);
  arr.length = n;
  printf("%d\n", arr.length);
  display(arr);

  printf("\nEnter element to add:");
  int x;
  scanf("%d", &x);
  add(x, &arr);
  display(arr);

//  printf("\nEnter element to add and index:");
//  int xx, index;
//  scanf("%d %d", &xx, &index);
//  insert(&arr, arr.size, index, xx);
//  display(arr);
//
//  printf("\nEnter index to delete:");
//  int delt;
//  scanf("%d", &delt);
//  dlt(&arr, delt);
//
//  display(arr);
//  printf("\nEnter index to get:");
//  int elementToGet;
//  scanf("%d", &elementToGet);
//  printf("%d",get(&arr, elementToGet));
printf("\nEnter element & index to set:\n");
int setElement,setIndex;
scanf("%d %d",&setElement,&setIndex);
set(&arr,setElement,setIndex);
display(arr);
printf("\nMax:%d",max(&arr));

}
>>>>>>> 42a15ff59682403a4fea53e5355b02541d87fffb
