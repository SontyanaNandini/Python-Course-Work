#Half length of string
a="Airplane"
length=len(a)
half_length=length/2
print(half_length)

# prints 1st letter of the word and stars instead of other letters
a="Password"
length_a=len(a)
first_char=a[0]
no_of_char=length-1 
result=first_char+"*"*no_of_char
print(result)

#excluding 1st and last chars
a="Blockchain"
len_a=len(a)
a_excl=len_a-2
print(a_excl)

#last char of the word
a="January"
len_a=len(a)
last_index=len_a-1
last_char=a[last_index]
print(last_char)

#index of last char of word
a="Python"
len_a=len(a)
last_char=len_a-1
print(last_char)

#1st part of the string having numbers
word="10y"
length=len(word)
end_index=length-1
part=word[:end_index]
part=int(part)
print(part)

#2nd part of string have numbers
word="ab395"
start_index=2
num=word[start_index:]
num=int(num)
print(num)

#last N characters of word
word="Password"
no_of_char=4
word_len=len(word)
start_index=word_len-no_of_char
part=word[start_index:]
print(part)

#first N characters
word="Superman"
no_of_char=5
end_index=no_of_char
end_index=word[:end_index]
print(end_index)

#Part of a string
word="goodnight"
start_index=4
part=word[start_index:]
print(part)

#part of string-2
x="Growing"
s_i=3
e_i=6
part=x[s_i:e_i+1]
print(part)

# b is greater than a by one
a=7
b=6
c=b-a
c=c==1
print(c)
# second word in first word
w1="Unkind"
w2="Un"
length_w1=len(w1)
length_w2=len(w2)
print(length_w2-1)
# print * instead of 1st &last chars
a="qwerty@2020"
length_a=len(a)
first_char=a[0]
last_char=a[-1]
result=first_char+ "* "*(length_a-2 )+ last_char
print(result)
#half string
n="amazon"
length=len(n)