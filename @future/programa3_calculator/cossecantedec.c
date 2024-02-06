#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "cossecantedec.h"

float angulo17;
float resposta_20;

void ui51() {
	printf("\nVoce esta realizando uma cossecante com numeros decimais ;]\n"
		"Insira o valor do angulo:\n");
	scanf("%f", &angulo17);

	resposta_20 = 1 / sin(angulo17);

	printf("\nResultado:%.4f\n", resposta_20);
}