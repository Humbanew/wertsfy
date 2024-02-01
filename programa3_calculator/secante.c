#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "secante.h"

int angulo4;
int resposta_4;

void ui36() {
	printf("\nVoce esta realizando uma secante ;]\n"
		"Insira o valor do angulo:\n");
	scanf("%d", &angulo4);

	resposta_4 = 1 / cos(angulo4);

	printf("\nResultado:%d\n", resposta_4);
}