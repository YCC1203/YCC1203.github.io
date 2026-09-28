---
title: 泡沫排序法(Bubble Sort)
date: 2023-05-29
updated: 2026-09-28
categories:
  - 程式筆記
tags:
  - 排序法
series: 排序法
series_order: 1
description: 泡沫排序法 Bubble Sort 的基本原理與 C++ 實作
---

## 運作原理

> 將相鄰的兩筆資料比較後做排序。

---

## 學習影片

[109學年度資訊科技學科中心加深加廣課程影片－進階程式設計－搜尋排序](https://youtu.be/bfn4cEgBgU4)

<iframe width="560" height="315" src="https://www.youtube.com/embed/bfn4cEgBgU4" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

---

## 程式碼

```cpp
#include <iostream>

using namespace std;

int main()
{
    int data[5] = {55, 23, 87, 62, 16};

    cout << "氣泡排序法:\n 原始資料為:";

    for(int i=0; i<5; i++)
        cout << " " << data[i];

    cout << endl;

    for(int i=4; i>0; i--) {
        for(int j=0; j<i; j++) {
            if(data[j] > data[j+1]) {
                int tmp;

                tmp = data[j];
                data[j] = data[j+1];
                data[j+1] = tmp;
            }
        }

        cout << "第" << 5-i << "次排序後的結果:";

        for(int k=0; k<5; k++)
            cout << " " << data[k];

        cout << endl;
    }

    cout << "排序後結果為:";

    for(int i=0; i<5; i++)
        cout << " " << data[i];

    cout << endl;

    return 0;
}
```