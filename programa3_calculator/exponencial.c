#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include "exponencial.h"

int exp1;
int retorno5;

void ui25() {
	printf("\nVoce esta realizando uma funcao exponencial na base E ;]\n"
		"Insira o valor da potencia:\n");
	scanf("%d", &exp1);
	retorno5 = exp(exp1);
	printf("\nResultado:%d\n", retorno5);
}