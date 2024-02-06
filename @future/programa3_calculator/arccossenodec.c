#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "arccossenodec.h"

float angulo20;
float resposta_23;

void ui54() {
	printf("\nVoce esta realizando um arco de cosseno com numeros decimais ;]\n"
		"Insira o valor de 1.0 a -1.0:\n");
	scanf("%f", &angulo20);

	resposta_23 = acos(angulo20);

	printf("\nResultado:%.4f\n", resposta_23);
}