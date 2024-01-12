#include<stdio.h>
int main()
{
	
	//it uses the hashing technique
	int arr[]={6,3,9,10,15,6,8,12,3,6};
    int n=10;
	
	int freq[16]={0};
	//freq size till max no + 1 
	int i;
	for(i=0;i<n;i++)
	freq[arr[i]]++;
   //hashing
	
	for(i=0;i<16;i++)
	printf("%d ",freq[i]);
	
	
	printf("\n");
	
	int k=0;
	for(i=0;i<16;i++)
	{
		if(freq[i]>0)
		{
			while(freq[i]!=0)
			{
				arr[k++]=i;
				freq[i]--;///reducing the value at that index
			}
		}
	}
	
	for(i=0;i<n;i++)
	printf("%d ",arr[i]);
}
