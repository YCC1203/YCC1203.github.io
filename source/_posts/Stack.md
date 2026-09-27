---
title: 堆疊(Stack)
date: 2023-05-29
categories:
  - 程式筆記
tags:
  - 堆疊佇列
description: 堆疊 Stack 的 LIFO 原理，以及 push、pop 基本操作與常見應用
---

## 定義及介紹

> 堆疊具有後進先出（LIFO）的特性。
> 堆疊有兩大基本動作：push、pop。
> 當需要加入資料到頂端時可以使用 push，而當需要移除資料時，可以使用 pop 將資料從頂端移除。

---

## 學習影片

[109學年度資訊科技學科中心加深加廣課程影片－進階程式設計－堆疊佇列](https://youtu.be/2kR42B5zk-c)

<iframe width="560" height="315" src="https://www.youtube.com/embed/2kR42B5zk-c" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

---

## 程式碼

```cpp
#include <iostream>

using namespace std;

//自定義資料型態
struct Node {
    int data;
    Node *next;
};

//stack有三個動作
Node* push(struct Node*, int);
Node* pop(struct Node*);
void displayList(struct Node*);

//主程式
int main()
{
    struct Node* head = NULL;

    head = push(head, 20);
    displayList(head);

    head = push(head, 30);
    displayList(head);

    head = pop(head);

    cout << "Final steak:" << endl;
    displayList(head);

    return 0;
}

//輸出堆疊中的資料
void displayList(struct Node *node) {
    while (node != NULL) {
        cout << node->data << "-->";
        node = node->next;
    }

    if (node == NULL) {
        cout << "null" << endl;
    }
}

//推入之動作
Node* push(struct Node* head, int node_data) {
    struct Node* newNode = new Node;

    newNode->data = node_data;
    newNode->next = head;
    head = newNode;

    return head;
}

//移出之動作
Node* pop(struct Node* head) {
    if (head == NULL) {
        return NULL;
    }

    struct Node* tempNode = head;

    head = head->next;
    delete tempNode;

    return head;
}
```

---

## 應用及實例

### 1. 改變序列的順序

例如進入堆疊的順序為 1、2、3，經由：

`Push → Pop → Push → Push → Pop → Pop`

取出堆疊的先後順序將變成：

`1、3、2`

### 2. 副程式的呼叫

### 3. 處理遞迴式呼叫

### 4. 算術式之轉換

### 5. 二元樹的追蹤