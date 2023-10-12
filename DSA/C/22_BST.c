#include <stdio.h>
#include <stdlib.h>
struct node {
  int data;
  struct node *left;
  struct node *right;
};

// insert
struct node *insert(struct node *root, int key) {
  if (root == NULL) {
    struct node *newNode = (struct node *)malloc(sizeof(struct node));
    newNode->data = key;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
  }

  else if (key < root->data)
    root->left = insert(root->left, key);
  else if (key > root->data)
    root->right = insert(root->right, key);
}

// inorder
void inorder(struct node *root) {
  if (root != NULL) {
    inorder(root->left);
    printf("%d ", root->data);
    inorder(root->right);
  }
}

// preoreder
void preorder(struct node *root) {
  if (root == NULL)
    return;
  printf("%d ", root->data);
  preorder(root->left);
  preorder(root->right);
}

// max
int max(struct node *root) {
  if (root->right == NULL)
    return root->data;
  max(root->right);
}

// min
int min(struct node *root) {
  if (root->left == NULL)
    return root->data;
  min(root->left);
}

// printLeaf
void leaf(struct node *root) {
  if (root == NULL)
    return;

  if (root->left == NULL && root->right == NULL)
    printf("%d ", root->data);
  leaf(root->left);
  leaf(root->right);
}

// search
struct node *search(struct node *root, int key) {
  if (root == NULL) {
    printf("Not in tree");
    return NULL;
  }
  if (key == root->data) {
    printf("%d is found", root->data);
    return root;
  } else if (key < root->data)
    search(root->left, key);

  else if (key > root->data)
    search(root->right, key);
}

// leftView
void leftView(struct node *root) {
  if (root == NULL)
    return;
  printf("%d ", root->data);
  leftView(root->left);
}

// Inorer predescissor
struct node *InPre(struct node *root) {
  while (root && root->right != NULL)
    root = root->right;

  return root;
}

// Inorer Successor
struct node *InSuc(struct node *root) {
  while (root && root->left != NULL)
    root = root->left;

  return root;
}

// delete
struct node *deleteNode(struct node *root, int key) {
  if (root == NULL)
    return NULL;

  if (root->left == NULL && root->right == NULL) // for leaf node
  {
    free(root);
    return NULL;
  }
  // for middle nodes && root
  if (key < root->data)
    root->left = deleteNode(root->left, key);
  else if (key > root->data)
    root->right = deleteNode(root->right, key);
  // else meaning the key is found, so we need to delete it now
  else {
    struct node *q;
    if (height(root->left) >
        height(root->right)) /* seleecting to replace with inorder succesor or
                                predicisor based on height*/
    {
      q = InPre(root->left);
      root->data = q->data;
      root->left = deleteNode(root->left, q->data);
    } else {
      q = InSuc(root->right);
      root->data = q->data;
      root->right = deleteNode(root->right, q->data);
    }
  }
  return root;
}

//height
int height(struct node *root) {
  int x, y;
  if (root == NULL)
    return 0;
  x = height(root->left);
  y = height(root->right);

  return x > y ? x + 1 : y + 1;
}

// countNodes
int countNodes(struct node *root) {
  int x, y;
  if (root == NULL)
    return 0;

  x = countNodes(root->left);
  y = countNodes(root->right);

  return x + y + 1;
}

//print ancestors (similar to search,search the node, along the pth print its val)
void printAncestors(struct node *root,int key)
{
	if(root==NULL)
	return;
//	if(root->data==key)
//	{
//		printf("It is the root");
//		return;
//	}
	if(key<root->data){
	
	printf("%d ",root->data);
	printAncestors(root->left,key);
}
else if(key>root->data){
		printf("%d ",root->data);
	 printAncestors(root->right,key);
}
}

//depth count of a node
int count=0;
void depthCount(struct node *root,int key)
{
	if(root==NULL)
	return;

	if(key<root->data)
	{
			count++;
		depthCount(root->left,key);
	 } 
	 else if(key>root->data)
	 {
	 	 count++;
	 depthCount(root->right,key);
	
	 }
}

/*
Printing aroud BST
void leaf(struct node *root)
{
        if(root==NULL)
        return;

                if(root->left==NULL&&root->right==NULL)
        printf("%d ",root->data);
                leaf(root->right);
                leaf(root->left);
}

void leftView(struct node *root)
{
        if(root->left==NULL)
        return;
                leftView(root->left);
        printf("%d ",root->data);

}
void rightView(struct node *root)
{
        if(root->right==NULL)
        return;

        printf("%d ",root->data);
                rightView(root->right);

}
*/


int main() {
  struct node *root = NULL;
  root = insert(root, 4);
  insert(root, 2);
  insert(root, 6);
  insert(root, 1);
  insert(root, 3);
  insert(root, 5);
  insert(root, 7);
  printf("inorder:\n");
  inorder(root);
//  printf("\nMax:%d", max(root));
//  printf("\n");
//  printf("Min:%d\n", min(root));
//  printf("leaf:");
//  leaf(root);
//  printf("\nSearch:");
//  search(root, 3);
//  printf("\nLeftView:");
//  leftView(root);
//  printf("\nNodes count:%d", countNodes(root));
//  deleteNode(root, 4);
//  printf("\ninorder:\n");
//  inorder(root);
//  printf("\npreorder:\n");
//  preorder(root);
//  printf("\nNodes count:%d\n", countNodes(root));
//  printf("Delete:\n");
//  deleteNode(root,7);
//  inorder(root);
//   printf("\nDelete:\n");
//  deleteNode(root,2);
//  inorder(root);
  printf("\nAncestors:\n");
 printAncestors(root,1);
 printf("\nDepth count of a node:\n");
depthCount(root,4);
printf("%d\n",count);
}
