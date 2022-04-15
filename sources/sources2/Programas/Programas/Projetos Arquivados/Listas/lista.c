#include <stdio.h>
#include <stdlib.h>
#include <Windows.h>
#include "lista.h"

int escritor() {
    FILE *f;

    char titulo[500];

    char item[800];

    f = fopen("pecas.txt", "a+");

    int qtd;

    printf("Insira o titulo da lista:\n\n");
    scanf("%s", titulo);
    fprintf(f, "%s\n", titulo);

    printf("Insira a quantidade de itens da lista:\n\n");
    scanf("%d", &qtd);

    for (int i = 1; i <= qtd; i++) {
        printf("Insira o texto do item:\n\n");
        scanf("%s", item);
        fprintf(f, "\t%s\n", item);
    }

    if (f == NULL) {
        printf("Arquivo Indisponível!");
    }

    fclose(f);
}

int ler() {}

int ocorrencias() {
    FILE* g;

    g = fopen("lista-log.txt", "a+");

    fprintf(g, "1");

    fclose(g);
}

int main(void) {
    escritor();
    ocorrencias();
}