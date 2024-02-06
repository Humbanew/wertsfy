#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "arccossecante.h"

int angulo11;
int resposta_11;

void ui43() {
	printf("\nVoce esta realizando um arco da cossecante ;]\n"
		"Insira o valor de 1 a -1:\n");
	scanf("%d", &angulo11);

	resposta_11 = 1 / asin(angulo11);

	printf("\nResultado:%d\n", resposta_11);
}