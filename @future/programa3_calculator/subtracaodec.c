#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "subtracaodec.h"

void ui11() {
	printf("\nVoce esta realizando uma subtracao com numeros decimais;]\n");
	float valorecebido = 0;
	float incremento;
	float valorprincipal;
	int qtd;

	printf("Digite o valor que sera subtraido:\n");
	scanf("%f", &valorprincipal);

	printf("Digite a quantidade de valores que deseja subtrair:\n");
	scanf("%d", &qtd);
	for(int i = 0; i < qtd; i++){
		printf("Digite o valor:\n");
		scanf("%f", &incremento);
		valorecebido = valorprincipal - incremento;
	}

	printf("\nResultado:\n%.4f\n", valorecebido);
}