---
title: Python初學 I
date: 2023-06-03
categories:
  - 程式筆記
tags:
  - python
description: Python 基礎變數、字串與數字操作筆記
---

## 變數

```python
#變數
num = 25
st = "YCC1203"
bo = True
```

## 字串用法

```python
#字串用法

print("hello \nMr.Chen")
print("hello \"Mr.Chen")

##函式

phrase = "hello Mr.Chen"
print(phrase.lower())               #換大寫
print(phrase.upper())               #換小寫
print(phrase.isupper())             #判斷是否全大寫
print(phrase.islower())             #判斷是否全小寫
print(phrase.upper().isupper())
print(phrase[0])                    #0123456789
print(phrase.index("h"))
print(phrase.replace("h", "n"))     #替換
```

## 數字用法

```python
#數字用法
num = -5

print(55)
print(8/5)
print(8//5)
print((8 + 8) * 5)
print(num + 5)
print(num % 5)

print("會印出數字" + str(num))       #轉型
print(abs(num))                     #絕對值
print(pow(2,4))                     #次方
print(max(2,465,5453,32))           #最大值 不限制幾個參數
print(min(2,465,5453,32))           #最小值 不限制幾個參數
print(round(4.5))                   #四捨五入

from math import *

print(floor(5.1))                   #無條件捨去
print(ceil(5.1))                    #無條件進入
print(sqrt(36))                     #開根號
```

## 重點整理

- 字串跟數字不能相加，要轉型
- 在 `" "` 中想要印出特殊字元，要在前面加上 `\`