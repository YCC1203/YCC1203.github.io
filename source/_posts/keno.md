---
title: 大樂透
date: 2023-05-30
updated: 2026-09-28
categories:
  - 程式筆記
tags:
  - 大樂透
description: 使用 C++ 模擬大樂透亂數開獎、排序與號碼查詢功能
---

## 抽籤 / 取亂數

大樂透最核心的部分其實就是產生一組兌獎號碼。雖然沒辦法寫出一模一樣的程式，但是可以簡單模擬一下。

---

## 目標

抽出十期對獎號碼，且使用者可以選擇期別和號碼查詢有無中獎，最後再詢問要不要繼續查詢。

---

## 程式碼

```cpp
#include <iostream>
#include <time.h>
#include <stdlib.h>

using namespace std;

int main()
{
    int result[10][7];

    for(int i = 0; i < 10; i++) {
        for(int j = 0; j < 7; j++) {
            result[i][j] = 0;
        }
    }

    for(int i = 0; i < 10; i++) {
        for(int j = 0; j < 7; j++) {
            result[i][j] = rand() % 50 + 1;    //取亂數

            for(int k = 0; k < j; k++) {       //不重複亂數
                if(result[i][j] == result[i][k]) {
                    j--;
                    break;
                }
            }
        }
    }

    for(int i = 0; i < 10; i++) {
        for (int j = 0; j < 5; j++) {
            for (int k = 0; k < 5-j; k++) {
                if(result[i][k] > result[i][k+1])
                    swap(result[i][k], result[i][k+1]);   //泡沫排序
            }
        }
    }

    for(int i = 0; i < 10; i++) {
        cout << "第 " << i+1 << " 期中獎號碼:";

        for(int j = 0; j < 6; j++) {
            cout << result[i][j] << " \t";
        }

        cout << "特別號: " << result[i][6] << endl;
    }

    char yn = 'y';

    while(yn == 'y' || yn == 'Y') {
        cout << "\n請問要查詢第幾期\n";

        int w, number;

        cin >> w;

        cout << "請問要查詢什麼號碼\n";
        cin >> number;

        for(int i = 0; i < 7; i++) {
            if(result[w-1][i] == number) {
                cout << "第" << w << "期中獎號碼/ "
                     << number << ":中獎\n是否要繼續(Y/N)";
                break;
            }
            else {
                cout << "第" << w << "期中獎號碼/ "
                     << number << ":未中獎\n是否要繼續(Y/N)";
                break;
            }
        }

        cin >> yn;

        while(yn != 'y' && yn != 'Y' && yn != 'n' && yn != 'N') {
            cout << "請重新輸入(Y/N)\n";
            cin >> yn;
        }
    }
}
```

---

## 運作原理

1. 宣告一個大小為 `10 × 7` 的二維陣列，用來儲存每期七個號碼，共十期。
2. 產生每期不重複的亂數，範圍為 1～50。
3. 利用泡沫排序法把每期前六個數字由小到大排序，第七個數字作為特別號。
4. 列出每一期的號碼。
5. 輸入欲查詢的期別與號碼，並判斷是否中獎。