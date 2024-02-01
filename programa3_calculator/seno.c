#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "seno.h"

int angulo;
int resposta_1;

void ui33() {
	printf("\nVoce esta realizando um seno ;]\n"
		"Insira o valor do angulo:\n");
	scanf("%d", &angulo);

	resposta_1 = sin(angulo);

	printf("\nResultado:%d\n", resposta_1);
}