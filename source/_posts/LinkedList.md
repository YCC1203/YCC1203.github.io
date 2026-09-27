---
title: 鏈結串列(LinkedList)
date: 2023-05-29
categories:
  - 程式筆記
description: 鏈結串列 LinkedList 的基本概念，以及節點新增、插入、刪除與走訪操作
---

## 定義及介紹

> 可以把鏈結串列想像成一輛火車，車廂稱為「節點」。
> 節點包含資料與連結，資料就是這個節點所儲存的資料，連結儲存的是下一個節點的位址，數個節點連接起來就成為鏈結串列。

---

## 學習影片

[109學年度資訊科技學科中心加深加廣課程影片－進階程式設計－串列](https://youtu.be/VtrrLX4rif8)

<iframe width="560" height="315" src="https://www.youtube.com/embed/VtrrLX4rif8" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

---

## 程式碼

```cpp
#include <iostream>
using namespace std;

struct Node* push(struct Node* head, int node_data);
struct Node* append(struct Node* head, int node_data);
struct Node* insert(struct Node* head, int num, int node_data);
struct Node* deleteFirstNode(struct Node* head);
struct Node* deleteLastNode(struct Node* head);
struct Node* deleteMiddleNode(struct Node* head, int num);
void displayList(struct Node* node);

struct Node {
    int data;
    Node *next;
};

int main(){
    Node * head = NULL;

    head = append(head, 10);
    displayList(head);

    head = push(head, 20);
    displayList(head);

    head = push(head, 30);
    displayList(head);

    head = append(head, 40);
    displayList(head);

    head = insert(head, 2, 50);
    displayList(head);

    head = deleteFirstNode(head);
    displayList(head);

    head = deleteLastNode(head);
    displayList(head);

    head = deleteMiddleNode(head,1);
    displayList(head);

    return 0;
}

//增加在頭
Node* push(struct Node* head, int node_data) {
    struct Node* newNode = new Node;

    newNode->data = node_data;
    newNode->next = head;
    head = newNode;

    return head;
}

//增加在尾
Node* append(struct Node* head, int Node_data) {
    Node* newNode = new Node;
    Node* current = head;

    newNode->data = Node_data;
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

//插入到某位置
Node* insert(struct Node* head, int num, int node_data) {
    if (head == NULL) {
        cout << "不能是空的" << endl;
        return NULL;
    }

    int listlen = 0;

    struct Node* newNode = new Node;
    struct Node* count_list = head;
    struct Node* current = head;

    newNode->data = node_data;

    while (count_list != NULL) {
        listlen++;
        count_list = count_list->next;
    }

    if (num == 0 || num >= listlen) {
        cout << "位置輸入錯誤" << endl;
    }
    else {
        for (int i=1; i<num; i++)
            current = current->next;

        newNode->next = current->next;
        current->next = newNode;
    }

    return head;
}

//刪除開頭
Node* deleteFirstNode(struct Node* head) {
    if (head == NULL) {
        return NULL;
    }

    Node* tempNode = head;
    head = head->next;

    delete tempNode;

    return head;
}

//刪除結尾
Node* deleteLastNode(struct Node* head) {
    if (head == NULL) {
        return NULL;
    }

    if (head->next == NULL) {
        delete head;
        return NULL;
    }

    Node* second_last = head;

    while (second_last->next->next != NULL) {
        second_last = second_last->next;
    }

    delete (second_last->next);
    second_last->next = NULL;

    return head;
}

//刪除中間位置
Node* deleteMiddleNode(struct Node* head, int num) {
    if (head == NULL) {
        cout << "不能是空的" << endl;
        return NULL;
    }

    int listlen = 0;

    struct Node* count_list = head;
    struct Node* remove_pre = head;
    struct Node* remove;

    while (count_list != NULL) {
        listlen++;
        count_list = count_list->next;
    }

    if (num == 0 || num >= listlen) {
        cout << "位置輸入錯誤" << endl;
    }
    else {
        for (int i=1; i<num; i++)
            remove_pre = remove_pre->next;

        remove = remove_pre->next;
        remove_pre->next = remove->next;

        delete remove;
    }

    return head;
}

//顯示鏈結串列
void displayList(struct Node* node) {
    while (node != NULL) {
        cout << node->data << "-->";
        node = node->next;
    }

    if (node == NULL)
        cout << "null" << endl;
}
```

---

## 應用及實例介紹