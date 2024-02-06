#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "arcsenodec.h"

float angulo19;
float resposta_22;

void ui53() {
	printf("\nVoce esta realizando um arco de seno com numeros decimais ;]\n"
		"Insira o valor de 1.0 a -1.0:\n");
	scanf("%f", &angulo19);

	resposta_22 = asin(angulo19);

	printf("\nResultado:%.4f\n", resposta_22);
}