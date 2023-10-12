#include<stdio.h>
int main()
{
	char s[100];
	scanf("%[^\n]s",s);
	int i,vc=0,wc=0;
	for(i=0;s[i]!='\0';i++)
	{
		if(s[i]==' '&&s[i-1]!=' ')
		wc++;
		if(s[i]=='a'||s[i]=='e'||s[i]=='i'||s[i]=='o'||s[i]=='u'||
		s[i]=='A'||s[i]=='E'||s[i]=='I'||s[i]=='O'||s[i]=='U')
		vc++;
	}
printf("VowelCount:%d WordCount:%d",vc,wc+1);/* we use plus once cuz wc counts no of spaces 
                                            the last word needs to be added*/
}
