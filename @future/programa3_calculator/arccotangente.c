#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "arccotangente.h"

int angulo12;
int resposta_12;

void ui44() {
	printf("\nVoce esta realizando um arco da cotangente ;]\n"
		"Insira o valor de 1 a -1:\n");
	scanf("%d", &angulo12);

	resposta_12 = 1 / atan(angulo12);

	printf("\nResultado:%d\n", resposta_12);
}