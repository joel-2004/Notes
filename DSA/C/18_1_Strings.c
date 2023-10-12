#include<stdio.h>
#include<string.h>
int main()
{
	char c='A';//Ascii code for A - 65
	char c1='a';//Ascii code for a - 97
	printf("%d %d\n",c,c1);
	char s[50]="AbCdEfGhIjKlMnOpQrStUvWxYz";
	int i;
	for(i=0;s[i]!='\0';i++)// '\0' only in c and c++
	{
		if(s[i]>=97&&s[i]<=122)
		printf("%c",s[i]-32);
		else
		printf("%c",s[i]+32);
	}
}
