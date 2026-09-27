---
title: Python初學 IV
date: 2023-06-04
categories:
  - 程式筆記
tags:
  - python
description: Python 字典、while 與 for 迴圈、二維列表基礎筆記
---


## 字典 dictionary

```python
# 字典dictionary
#  key  value
#   鍵    值

dic = {"蘋果":"apple", "貓":"cat", "狗":"dog"}
print(dic["貓"])

dic = {0:"apple", 1:"cat", 2:"dog"}
print(dic[1])
```

## while、for 迴圈

```python
#while迴圈
i = 1

while i <= 5:
    print(i)       #印出1 2 3 4 5
    i += 1

#for迴圈
for letter in "Oscar你好":
    print(letter)

for num in [2, 3, 4, 5, 6]:
    print(num)

for num in range(100):
    print(num)

for num in range(2, 7):
    print(num)

def power(base_num, pow_num):       #計算次方練習
    result = base_num

    for i in range(pow_num - 1):
        result = result * base_num

    return result

print(power(4,2))
```

## 二維列表 & 巢狀迴圈

```python
#2維列表 巢狀迴圈
#row = 行
#col = 列

nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10]
]

print(nums[3][0])        #印出10

for col in nums:
    for row in col:
        print(row)       #印出1~10
```

---

## 重點整理