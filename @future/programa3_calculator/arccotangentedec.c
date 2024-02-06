#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "arccotangentedec.h"

float angulo24;
float resposta_27;

void ui58() {
	printf("\nVoce esta realizando um arco de cotangente com numeros decimais ;]\n"
		"Insira o valor de 1.0 a -1.0:\n");
	scanf("%f", &angulo24);

	resposta_27 = 1 / asin(angulo24);

	printf("\nResultado:%.4f\n", resposta_27);
}