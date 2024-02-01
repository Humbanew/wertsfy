#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "estrutura.h"
#include "divisaodec.h"

void ui12() {
	printf("\nVoce esta realizando uma divisao ;]\n");
	float valorecebido = 0;
	float incremento;
	float valorprincipal;
	printf("Digite o valor que sera dividido:\n");
	scanf("%f", &valorprincipal);
	printf("Digite o valor que vai dividir:\n");
	scanf("%f", &incremento);
	valorecebido = valorprincipal / incremento;

	printf("\nResultado:\n%.4f\n", valorecebido);
	
	
}