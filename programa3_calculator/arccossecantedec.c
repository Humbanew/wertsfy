#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "arccossecantedec.h"

float angulo23;
float resposta_26;

void ui57() {
	printf("\nVoce esta realizando um arco de cossecante com numeros decimais ;]\n"
		"Insira o valor de 1.0 a -1.0:\n");
	scanf("%f", &angulo23);

	resposta_26 = 1 / asin(angulo23);

	printf("\nResultado:%.4f\n", resposta_26);
}