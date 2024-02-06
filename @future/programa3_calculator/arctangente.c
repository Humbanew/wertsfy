#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "arctangente.h"

int angulo9;
int resposta_9;

void ui41() {
	printf("\nVoce esta realizando um arco da tangente ;]\n"
		"Insira o valor de 1 a -1:\n");
	scanf("%d", &angulo9);

	resposta_9 = atan(angulo9);

	printf("\nResultado:%d\n", resposta_9);
}