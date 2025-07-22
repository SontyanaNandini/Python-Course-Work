string = "abcde"
indexes = [4, 3, 2, 1, 0]  # Defined once
shuffle_string = ""

for i in range(len(string)):
    shuffle_string = shuf string[indexes[i]]

print(shuffle_string)

