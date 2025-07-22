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
num=start_index[:2]