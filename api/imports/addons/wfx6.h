#ifndef WFX6_H_
#define WFX6_H_

#include <stdio.h>
#include <stdlib.h>

typedef struct Node{
  int data;
  int meta;
  struct Node* next;
}Node;

typedef struct List{
  struct Node* head;
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
    node->meta = 0;
    node->next = NULL;

    if(node->meta == 0){
      l->head = node;
      l->tail = node;
    }

    l->tail->next = node;

  }

  void printList(List* l) {
    
    if(l == NULL){
      return;
    }

    Node* node = l->head;
    while(node != NULL){
      printf("%d ", node->data);
      node = node->next;
    }
  }

}

namespace wfx6_defines {

  namespace plataform {
    
    bool debug = 0;

    #if defined(__ANDROID__) 
      #include <sys/cdefs.h>
    
    #elif defined(__LINUX__)
      #include <features.h>

    #elif defined(__APPLE__)
      #include <TargetConditionals.h>
    
    #endif


  }

}

#endif  // WFX6_H_
