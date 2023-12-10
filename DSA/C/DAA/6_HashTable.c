#include<stdio.h>

int main()
{
	int arr[]={2,3,1,4,1,2,5,1,1};
	int freq[100]={0};
	int i;
	for(i=0;i<9;i++)
	freq[arr[i]]++;
	
	for(i=0;i<100;i++)
	{
		if(freq[i]>1)
		printf("%d %d\n",i,freq[i]);
	}
}


