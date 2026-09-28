---
title: 選擇排序法(Select Sort)
date: 2023-05-29
updated: 2026-09-28
categories:
  - 程式筆記
tags:
  - 排序法
series: 排序法
series_order: 3
description: 選擇排序法 Selection Sort 的基本原理與 C++ 實作
---

## 運作原理

> 選擇排序法 Selection Sort 的原理，是先在所有資料中挑選出一個最小的數值放在第一個位置。
> 再從第二個到尾端的資料中挑選出最小值放在第二個位置，如此持續迭代，最終得到由小到大的排序結果。

---

## 學習影片

[109學年度資訊科技學科中心加深加廣課程影片－進階程式設計－搜尋排序](https://youtu.be/bfn4cEgBgU4)

<iframe width="560" height="315" src="https://www.youtube.com/embed/bfn4cEgBgU4" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

---

## 程式碼

```cpp
#include <iostream>

using namespace std;

void select(int *);
void showdata(int *);

int main()
{
    int data[5] = {55, 23, 87, 62, 16};

    cout << "選擇排序法:\n原始資料為:";

    showdata(data);
    select(data);

    cout << "排序後結果為:";

    showdata(data);

    return 0;
}

void showdata(int data[]) {
    for(int i=0; i<5; i++)
        cout << " " << data[i];

    cout << endl;
}

void select(int data[]) {
    for(int i=0; i<4; i++) {
        int pos = i;

        for(int j=i+1; j<5; j++) {
            if(data[j] < data[pos]) {
                pos = j;
            }
        }

        int tmp;

        tmp = data[i];
        data[i] = data[pos];
        data[pos] = tmp;

        cout << "第" << i+1 << "次排序結果:";

        showdata(data);
    }
}
```