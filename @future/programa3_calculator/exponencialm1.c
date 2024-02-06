#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include "exponencialm1.h"

int expm_um;
int retorno4;

void ui24() {
	printf("\nVoce esta realizando uma funcao exponencial na base E menos um ;]\n"
		"Insira o valor da potencia:\n");
	scanf("%d", &expm_um);
	retorno4 = expm1(expm_um);
	printf("\nResultado:%d\n", retorno4);
}