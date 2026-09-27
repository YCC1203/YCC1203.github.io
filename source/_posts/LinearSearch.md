---
title: 線性搜尋法(Linear Search)
date: 2023-05-28
updated: 2026-09-28
categories:
  - 程式筆記
tags:
  - 搜尋法
description: 線性搜尋法 Linear Search 的運作原理、優缺點與 C++ 實作
---

## 運作原理

> 又稱循序搜尋法，是最簡單的搜尋法。
> 原理是在資料列中從頭開始逐一搜尋，一筆一筆將資料值與搜尋目標值做比對，直到找到為止。
>
> 優點是搜尋前不需要將資料做任何排序，因為都是從頭開始搜尋。
>
> 缺點是若目標資料剛好排在最後一筆，則需要作 n 次比對，因此不適合資料量過大的搜尋。

---

## 學習影片

[109學年度資訊科技學科中心加深加廣課程影片－進階程式設計－搜尋排序](https://youtu.be/bfn4cEgBgU4)

<iframe width="560" height="315" src="https://www.youtube.com/embed/bfn4cEgBgU4" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

---

## 程式碼

```cpp
#include <iostream>

using namespace std;

int LinearSearch(int data[], int);

int main()
{
    int search, ans;

    int data[] = {3, 7, 14, 20, 23, 32, 41, 44, 56, 57, 73, 89, 93};

    cout << "原始資料有:" << endl;

    for(int i=0; i<13; i++)
        cout << data[i] << ",";

    cout << data[12] << endl;

    cout << "請輸入欲搜尋的資料:";
    cin >> search;

    ans = LinearSearch(data, search);

    if(ans == -1) {
        cout << "找不到資料" << search << endl;
    }
    else {
        cout << "在第" << ans+1 << "筆資料找到" << search << endl;
    }

    return 0;
}

int LinearSearch(int data[], int search) {
    for(int i=0; i<13; i++) {
        if(data[i] == search) {
            return i;
        }
    }

    return -1;
}
```