#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "senodec.h"

float angulo13;
float resposta_16;

void ui47() {
	printf("\nVoce esta realizando um seno com numeros decimais ;]\n"
		"Insira o valor do angulo:\n");
	scanf("%f", &angulo13);

	resposta_16 = sin(angulo13);

	printf("\nResultado:%.4f\n", resposta_16);
}