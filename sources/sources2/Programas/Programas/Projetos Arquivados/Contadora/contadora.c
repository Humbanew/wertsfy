#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int qtdNotas;
int qtdMoedas;
float total;

int bancoDeDados(float v) {
    FILE* b;

    b = fopen("banco_de_dados_1.txt", "a+");

    fprintf(b, "Saldo Atual: R$ %.2f\n\n", v);

    fclose(b);
}

int contador(int n, int m) {
    int nota;
    float moeda;
    float divisor = 100.0;

    for(int r = 1; r <= n; r++) {
        printf("Insira um valor de uma ou mais notas de dinheiro: - (em reais) - valor: %d de %d\n", r, n);
        scanf("%d", &nota);

        total = total + nota;     
    }

    for(int t = 1; t <= m; t++) {
        printf("Insira um valor de uma ou mais moedas de dinheiro: - (em reais) - valor: %d de %d\n", t, m);
        scanf("%f", &moeda);

        total = total + (moeda / divisor);  
    }
    
    printf("R$ %.2f", total);

    bancoDeDados(total);
}

int exe() {
    printf("Seja bem vindo a contadora!\n");

    printf("Insira o numero de notas de dinheiro:\n");
    scanf("%d", &qtdNotas);

    printf("Insira o numero de moedas de dinheiro:\n");
    scanf("%d", &qtdMoedas);

    contador(qtdNotas, qtdMoedas);
}


int main(void) {
    exe();
}