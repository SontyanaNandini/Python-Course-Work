string = input()
n = len(string)

shuffle_string = ""
for i in range(n):
    index = int(input())
    shuffle_string = shuffle_string+string[index]
print(shuffle_string)