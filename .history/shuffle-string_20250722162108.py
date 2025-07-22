string = "abcde"
len_string=len(string)
indexes= [4, 3, 2, 1, 0]

shuffle_string = ""
for i in range (len_string):
    shuffle_string = shuffle_string+ string[indexes]

print(shuffle_string)
