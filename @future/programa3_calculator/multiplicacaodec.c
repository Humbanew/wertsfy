#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "multiplicacaodec.h"

void ui13() {
	printf("\nVoce esta realizando uma multiplicacao com numeros decimais ;]\n");
	float valorecebido = 0;
	float incremento;
	float valorprincipal;
	printf("Digite o valor que sera multiplicado:\n");
	scanf("%f", &valorprincipal);
	printf("Digite o valor que vai multiplicar:\n");
	scanf("%f", &incremento);
	valorecebido = valorprincipal * incremento;

	printf("\nResultado:\n%.4f\n", valorecebido);
}