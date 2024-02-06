#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "cotangente.h"

int angulo6;
int resposta_6;

void ui38() {
	printf("\nVoce esta realizando um cotangente ;]\n"
		"Insira o valor do angulo:\n");
	scanf("%d", &angulo6);

	resposta_6 = 1 / tan(angulo6);

	printf("\nResultado:%d\n", resposta_6);
}