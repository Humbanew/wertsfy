#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "subtracao.h"

void ui2() {

	printf("\nVoce esta realizando uma subtracao ;]\n");
	int valorecebido = 0;
	int incremento;
	int valorprincipal;
	int qtd;

	printf("Digite o valor que sera subtraido:\n");
	scanf("%d", &valorprincipal);

	printf("Digite a quantidade de valores que deseja subtrair:\n");
	scanf("%d", &qtd);
	for(int i = 0; i < qtd; i++){
		printf("Digite o valor:\n");
		scanf("%d", &incremento);
		valorecebido = valorprincipal - incremento;
	}
	
	printf("\nResultado:\n%d\n", valorecebido);
}