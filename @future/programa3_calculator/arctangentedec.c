#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "arctangentedec.h"

float angulo21;
float resposta_24;

void ui55() {
	printf("\nVoce esta realizando um arco de tangente com numeros decimais ;]\n"
		"Insira o valor de 1.0 a -1.0:\n");
	scanf("%f", &angulo21);

	resposta_24 = atan(angulo21);

	printf("\nResultado:%.4f\n", resposta_24);
}