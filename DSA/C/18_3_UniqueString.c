#include<stdio.h>
int main()
{
int i;
char f[26]={0};
char s[]="joell";
for(i=0;s[i]!='\0';i++)
{
f[s[i]-'a']++;
}
for(i=0;i<26;i++)
{
if(f[i]>1)
{
printf("not Unique");
return 0;
}
}
printf("Unique");

}
