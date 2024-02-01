#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "cosseno.h"

int angulo2;
int resposta_2;

void ui34() {
	printf("\nVoce esta realizando um cosseno ;]\n"
		"Insira o valor do angulo:\n");
	scanf("%d", &angulo2);

	resposta_2 = cos(angulo2);

	printf("\nResultado:%d\n", resposta_2);
}