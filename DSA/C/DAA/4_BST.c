#include<stdio.h>
#include<stdlib.h>
struct node{
	int data;
	struct node *left,*right;
};

struct node *insert(struct node *root,int key)
{
	if(root==NULL)
	{
		struct node *newNode=(struct node*)malloc(sizeof(struct node));
		newNode->data=key;
		newNode->left=NULL;
		newNode->right=NULL;
		return newNode;
	}
	if(key<root->data)
	root->left=insert(root->left,key);
	else
	root->right=insert(root->right,key);
}

void inorder(struct node *root)
{
	if(root==NULL) return;
	inorder(root->left);
	printf("%d ",root->data);
	inorder(root->right);
}

int main()
{
	struct node *root=NULL;
	root=insert(root,5);
	insert(root,4);
	insert(root,6);
	insert(root,3);
	insert(root,7);
	inorder(root);
}
