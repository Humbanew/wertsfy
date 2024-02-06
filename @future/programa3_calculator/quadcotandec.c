#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "quadcotandec.h"

float valorx3;
float valory3;
float resposta_29;

void ui60() {
	printf("\nVoce esta realizando uma determinante de quadrante pela cotangente com numeros decimais ;]\n"
		"Insira o valor do x:\n");
	scanf("%f", &valorx3);

	printf("Insira o valor do y:\n");
	scanf("%f", &valory3);

	resposta_29 = 1 / atan2(valory3, valorx3);

	printf("\nResultado:%.4f\n", resposta_29);
}