string = "abcde"
indexes = [4, 3, 2, 1, 0]

shuffle_string = ""
for index in indexes:
    shuffle_string += string[index]

print(shuffle_string)
