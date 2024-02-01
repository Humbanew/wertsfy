#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "arcsecantedec.h"

float angulo22;
float resposta_25;

void ui56() {
	printf("\nVoce esta realizando um arco de secante com numeros decimais ;]\n"
		"Insira o valor de 1.0 a -1.0:\n");
	scanf("%f", &angulo22);

	resposta_25 = 1 / acos(angulo22);

	printf("\nResultado:%.4f\n", resposta_25);
}