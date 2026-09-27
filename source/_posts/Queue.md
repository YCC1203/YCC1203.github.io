---
title: 佇列(Queue)
date: 2023-05-29
updated: 2026-09-28
categories:
  - 程式筆記
tags:
  - 堆疊佇列
description: 佇列 Queue 的 FIFO 原理，以及 Enqueue、Dequeue 操作與常見應用
---

## 定義及介紹

> 佇列具有先進先出（FIFO）的特性。
> 佇列有兩大基本動作：Enqueue、Dequeue。
> 當需要新增資料時，使用 Enqueue 會在尾端新增資料；當需要刪除資料時，使用 Dequeue 會在前端刪除資料。

---

## 學習影片

[109學年度資訊科技學科中心加深加廣課程影片－進階程式設計－堆疊佇列](https://youtu.be/2kR42B5zk-c)

<iframe width="560" height="315" src="https://www.youtube.com/embed/2kR42B5zk-c" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

---

## 程式碼

```cpp
#include <iostream>

using namespace std;

struct Node {
    int data;
    Node *next;
};

Node* enqueue(struct Node*, int);
Node* dequeue(struct Node*);
void displayList(struct Node*);

int main()
{
    struct Node* head = NULL;

    head = enqueue(head, 1);
    head = enqueue(head, 3);
    head = enqueue(head, 5);
    head = enqueue(head, 7);

    head = dequeue(head);
    head = dequeue(head);

    head = enqueue(head, 10);
    head = enqueue(head, 15);
    head = enqueue(head, 16);

    head = dequeue(head);

    head = enqueue(head, 20);

    cout << "Final queue:" << endl;

    displayList(head);

    return 0;
}

Node* enqueue(struct Node* head, int node_data) {
    Node* newNode = new Node;
    Node* current = head;

    newNode->data = node_data;
    newNode->next = NULL;

    if (head == NULL) {
        head = newNode;
        return head;
    }

    while (current->next != NULL) {
        current = current->next;
    }

    current->next = newNode;

    return head;
}

Node* dequeue(struct Node* head) {
    if (head == NULL) {
        return NULL;
    }

    struct Node* tempNode = head;

    head = head->next;

    delete tempNode;

    return head;
}

void displayList(struct Node *node) {
    while (node != NULL) {
        cout << node->data << "-->";
        node = node->next;
    }

    if (node == NULL) {
        cout << "null" << endl;
    }
}
```

---

## 應用實例介紹

### 1. 作業系統的工作排序

### 2. 用於印表機或作業系統的 Spooling

### 3. 計算機的模擬