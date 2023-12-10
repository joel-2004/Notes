<<<<<<< HEAD
#include<stdio.h>
#include<string.h>
int main()
{
char s[]="decimal";
char s1[]="medical";
if(strlen(s)!=strlen(s1))
{
printf("Not Anagram");
return 0;
}
  int f[26]={0};
int i;
for(i=0;i<strlen(s1);i++)
{
f[s[i]-'a']++;
f[s1[i]-'a']++;

}
int count=0;
for(i=0;i<26;i++)
{
if(f[i]==2)
{
count++;
}
}
if(count==strlen(s1))
printf("Anagram");
else
printf("Not anagram");
}
=======
#include<stdio.h>
#include<string.h>
int main()
{
char s[]="decimal";
char s1[]="medical";
if(strlen(s)!=strlen(s1))
{
printf("Not Anagram");
return 0;
}
  int f[26]={0};
int i;
for(i=0;i<strlen(s1);i++)
{
f[s[i]-'a']++;
f[s1[i]-'a']++;

}
int count=0;
for(i=0;i<26;i++)
{
if(f[i]==2)
{
count++;
}
}
if(count==strlen(s1))
printf("Anagram");
else
printf("Not anagram");
}
>>>>>>> 42a15ff59682403a4fea53e5355b02541d87fffb
