#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "caracteres.h"
#include "soma.h"

void ui1() {
	printf("Voce esta realizando uma soma ;]\n");
	int valorecebido = 0;
	int incremento;
	int qtd;
	printf("Digite a quantidade de valores que deseja somar:\n");
	scanf("%d", &qtd);
	for(int i = 0; i < qtd; i++){
		printf("Digite o valor:\n");
		scanf("%d", &incremento);
		valorecebido = valorecebido + incremento;
	}
	printf("\nResultado:\n%d\n", valorecebido);
}