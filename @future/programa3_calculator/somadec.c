#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "somadec.h"

void ui10() {
	printf("Voce esta realizando uma soma com numeros decimais;]\n");
	float valorecebido = 0.0;
	float incremento;
	int qtd;
	printf("Digite a quantidade de valores que deseja somar:\n");
	scanf("%d", &qtd);
	for(int i = 0; i < qtd; i++){
		printf("Digite o valor:\n");
		scanf("%f", &incremento);
		valorecebido = valorecebido + incremento;
	}
	printf("\nResultado:\n%.4f\n", valorecebido);
}