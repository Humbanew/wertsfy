#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "cossenodec.h"

float angulo14;
float resposta_17;

void ui48() {
	printf("\nVoce esta realizando um cosseno com numeros decimais ;]\n"
		"Insira o valor do angulo:\n");
	scanf("%f", &angulo14);

	resposta_17 = cos(angulo14);

	printf("\nResultado:%.4f\n", resposta_17);
}