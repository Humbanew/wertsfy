#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "cotangentedec.h"

float angulo18;
float resposta_21;

void ui52() {
	printf("\nVoce esta realizando uma cotangente com numeros decimais ;]\n"
		"Insira o valor do angulo:\n");
	scanf("%f", &angulo18);

	resposta_21 = 1 / tan(angulo18);

	printf("\nResultado:%.4f\n", resposta_21);
}