#include<stdio.h>
#include<stdlib.h>

int main()
{
	int n=4;
	int m=3;
	int i,j,k;
	int arr[]={1,3,5,7};
	int brr[]={2,4,6};
	int crr[n+m];
	i=0,j=0,k=0;
	while(i<n&&j<m)
	{
		if(arr[i]<brr[j])
			crr[k++]=arr[i++];
			
		
		else 
		crr[k++]=brr[j++];
		
	
		
	}
	
	while(i<n)
	{
		crr[k++]=arr[i++];
	}
	while(j<m)
	{
		crr[k++]=brr[j++];
	}
int y;
	for(y=0;y<n+m;y++)
	printf("%d ",crr[y]);
	
	int len=n+m;
	int newLen=len/2;
	if(newLen%2!=0)
	printf("Median:%d",crr[newLen]);
	
	else
	printf("Median:%d",(crr[newLen-1]+crr[newLen])/2);
}
