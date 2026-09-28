---
title: Python初學 II
date: 2023-06-03
updated: 2026-09-28
categories:
  - 程式筆記
tags:
  - python
series: Python 初學
series_order: 2
description: Python 計算機、列表與元組基礎筆記
---

## 基本計算機

```python
#建立一個基本計算機
number1 = input("請輸入第一個數字:")
number2 = input("請輸入第二個數字:")
print(number1 + number2)    #字串的相加

number3 = input("請輸入第一個數字:")
number4 = input("請輸入第二個數字:")
print(int(number3) + int(number4))    #小數點會出錯

number5 = input("請輸入第一個數字:")
number6 = input("請輸入第二個數字:")
print(float(number5) + float(number6))    #最終
```

## 正常計算機

```python
#進階計算機
num1 = float(input("請輸入第一個數"))
op = input("請輸入運算符號")
num2 = float(input("請輸入第二個數"))

if op == "+":
    print(num1 + num2)
elif op == "-":
    print(num1 - num2)
elif op == "*":
    print(num1 * num2)
elif op == "/":
    print(num1 / num2)
else:
    print("不支援的運算符號")
```

## 列表 List

```python
#列表list
scores = [90, 70, 60, 50, 30]
friends = ["Andy", "Joy", "Oscar"]
things = [90, "Joy", True]
phrase = "Hello Mr.Oscar"

print(scores[0])
print(scores[-1])
print(scores[1:3])
print(scores[1:])
print(scores[:4])
print(phrase[:5])

print(len(scores))       #列表長度
scores[0] = 40
scores.extend(friends)   #會接在一起
scores.append(20)        #List後加30
scores.insert(2, 30)     #第2位插30的值
scores.remove(70)        #移除70
scores.clear()           #清空List
scores.pop()             #移除列表最後一位
scores.sort()            #List由小到大排列
scores.reverse()         #List反轉
scores.index(70)         #找到70的位置
scores.count(70)         #找出有幾個70
```

## 元族

```python
#元族
scores = (90, 70, 60, 50, 30)

print(scores[0])
print(scores[-1])
print(scores[1:3])
print(scores[1:])
print(scores[:4])
print(phrase[:5])

print(len(scores))       #元族長度
scores[0] = 8            #不能修改
```

---

## 重點整理

- Python 的列表從第 0 項開始
- `[1:3]` 代表從第 1 項到第 3 項，但不包括第 3 項
- `[-1]` 代表倒數第 1 項
- 元族跟列表的差別在於，元族一旦創建就不能增加、修改