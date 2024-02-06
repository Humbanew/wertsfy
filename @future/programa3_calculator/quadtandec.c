#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "quadtandec.h"

float valorx2;
float valory2;
float resposta_28;

void ui59() {
	printf("\nVoce esta realizando uma determinante de quadrante pela tangente com numeros decimais ;]\n"
		"Insira o valor do x:\n");
	scanf("%f", &valorx2);

	printf("Insira o valor do y:\n");
	scanf("%f", &valory2);

	resposta_28 = atan2(valory2, valorx2);

	printf("\nResultado:%.4f\n", resposta_28);
}