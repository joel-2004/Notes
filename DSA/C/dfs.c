#include<stdio.h>
int visited[100]={0},adj[100][100]={0};
void dfs(int v,int n)
{
	int i;
	visited[v]=1;
	printf("%d ",v);
	for(i=0;i<n;i++)
	if(adj[v][i]==1)
	if(visited[i]==0)
	dfs(i,n);
}
void graph(int n)
{
	int i,j;
	for(i=0;i<n;i++)
	{
		for(j=0;j<n;j++)
	{
		scanf("%d",&adj[i][j]);
	}
	printf("\n");
	}
}
int main()
{
	int n;
	scanf("%d",&n);
	graph(n);
	int i;
	for(i=0;i<n;i++)
	{
		if(visited[i]==0)
		dfs(i,n);
	}
}
