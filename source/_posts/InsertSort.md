---
title: 插入排序法(InsertSort)
date: 2023-05-29
categories:
  - 程式筆記
tags:
  - 排序法
description: 插入排序法 Insertion Sort 的基本原理與 C++ 實作
---

## 運作原理

> 構建有序序列，對於未排序數據，在已排序序列中從後向前掃描，找到相應位置並插入。

---

## 學習影片

[109學年度資訊科技學科中心加深加廣課程影片－進階程式設計－搜尋排序](https://youtu.be/bfn4cEgBgU4)

<iframe width="560" height="315" src="https://www.youtube.com/embed/bfn4cEgBgU4" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

---

## 程式碼

```cpp
#include <iostream>

using namespace std;

#define SIZE 5

void insert(int *);
void showdata(int *);
void inputarr(int *, int);

int main()
{
    int data[SIZE];

    inputarr(data, SIZE);

    cout << "插入排序法:\n您輸入的原始陣列為:";

    showdata(data);
    insert(data);

    cout << "排序結果為:";

    showdata(data);

    return 0;
}

void showdata(int data[]) {
    for(int i=0; i<SIZE; i++) {
        cout << " " << data[i];
    }

    cout << endl;
}

void inputarr(int data[], int size) {
    for(int i=0; i<size; i++) {
        cout << "請輸入第 " << i+1 << " 個元素";
        cin >> data[i];
    }
}

void insert(int data[]) {
    for(int i=1; i<SIZE; i++) {
        int tmp;

        tmp = data[i];

        int j = i-1;

        while(j >= 0 && tmp < data[j]) {
            data[j+1] = data[j];
            j--;
        }

        data[j+1] = tmp;

        cout << "第" << i << "次排序:";

        showdata(data);
    }
}
```