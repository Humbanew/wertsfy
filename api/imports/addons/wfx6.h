#ifndef WFX6_H_
#define WFX6_H_

#include <stdio.h>
#include <stdlib.h>

typedef struct Node{
  int data;
  struct Node* next;
}Node;

typedef struct List{
  int size;
  struct Node* tail;
}List;

namespace wfx6_structures {

  void createNode() {
    Node* node = (Node*) malloc(sizeof(Node));
  };

  void createList() {
    List* list = (List*) malloc(sizeof(List));
  }

  void addNode(List* l, int v) {
    
    if(l == NULL){
      return;
    }

    Node* node = (Node*) malloc(sizeof(Node));
    node->data = v;
    node->next = NULL;

    if(l->tail == NULL){
      l->tail = node;
      l->size++;
    }

    l->tail->next = node;
    l->size++;

  }

  void printList(List* l) {
    
    if(l == NULL){
      return;
    }

    Node* node = l->tail->next;
    while(node != NULL){
      printf("%d ", node->data);
      node = node->next;
    }

  }

}

#endif  // WFX6_H_
