#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "arcseno.h"

int angulo7;
int resposta_7;

void ui39() {
	printf("\nVoce esta realizando um arco do seno ;]\n"
		"Insira o valor de 1 a -1:\n");
	scanf("%d", &angulo7);

	resposta_7 = asin(angulo7);

	printf("\nResultado:%d\n", resposta_7);
}