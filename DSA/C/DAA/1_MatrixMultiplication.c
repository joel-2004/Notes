#include<stdio.h>
int main()
{
	int arr[3][3]={{1,1,1},{2,2,2},{3,3,3}};
		int brr[3][3]={{1,1,1},{2,2,2},{3,3,3}};
		int ans[3][3];
		int i,j,k;
	for(i=0;i<3;i++)
	{
		for(j=0;j<3;j++)
		{
			ans[i][j]=0;
			for(k=0;k<3;k++)
			{
				ans[i][j]+=arr[i][k]*brr[k][j];
			}
		}
	}
	
		for(i=0;i<3;i++)
	{
		for(j=0;j<3;j++)
		{
			printf("%d ",ans[i][j]);
		}
		printf("\n");
	}
}
