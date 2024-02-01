#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "tangentedec.h"

float angulo15;
float resposta_18;

void ui49() {
	printf("\nVoce esta realizando uma tangente com numeros decimais ;]\n"
		"Insira o valor do angulo:\n");
	scanf("%f", &angulo15);

	resposta_18 = tan(angulo15);

	printf("\nResultado:%.4f\n", resposta_18);
}