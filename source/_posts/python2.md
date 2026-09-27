---
title: Python初學 III
date: 2023-06-04
updated: 2026-09-28
categories:
  - 程式筆記
tags:
  - python
description: Python 函式與 if 判斷句基礎筆記
---

## 函式

```python
#函式 function
def test():         #定義
    print("hello")

test()              #呼叫

def test1(name, age):    #有傳入值
    print("hello" + name + "你今年" + str(age) + "歲")

test1("Oscar", 17)

def add(num1, num2):
    print(num1 + num2)

add(2,3)

def add1(num3, num4):
    return num3 + num4    #return會覆蓋掉呼叫

print(add1(2,3))           #需要return的原因是因為後續還有很多處理

def add2(num5, num6):
    print(num5 + num6)
    return 10

value = add2(2,3)
print(value)             #輸出5,10

def add2(num5, num6):
    print(num5 + num6)

value = add2(2,3)
print(value)             #輸出5, None
```

## if 判斷句

```python
#if判斷句

## if
hungry = True
if hungry:
    print("我就去吃飯")

## if else
rainy = False
if rainy:
    print("我就不去學校")
else:
    print("我就去學校上課")

## if else elif
score = 100
if score == 100:
    print("我給你1000元")
elif score >= 80:
    print("我給你100元")
else:
    print("你給我100元")

## and
score = 100
rainy = True

if rainy and score == 100:
    print("我給你1000元")
else:
    print("你給我100元")

## or
score = 90
rainy = True

if rainy or score == 100:
    print("我給你1000元")
else:
    print("你給我100元")

## not
score = 90
rainy = True

if not(rainy) or score != 100:
    print("我給你1000元")
else:
    print("你給我100元")

## 結合函式 練習判斷最大值
def max_num(num1, num2, num3):
    if num1 >= num2 and num1 >= num3:
        return num1
    elif num2 >= num1 and num2 >= num3:
        return num2
    else:
        return num3

print(max_num(2, 3, 5))
```