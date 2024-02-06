#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "cossecante.h"

int angulo5;
int resposta_5;

void ui37() {
	printf("\nVoce esta realizando um cossecante ;]\n"
		"Insira o valor do angulo:\n");
	scanf("%d", &angulo5);

	resposta_5 = 1 / sin(angulo5);

	printf("\nResultado:%d\n", resposta_5);
}