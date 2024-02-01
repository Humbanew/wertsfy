#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include "exponencialb2.h"

int expbdois;
int retorno3;

void ui23() {
	printf("\nVoce esta realizando uma funcao exponencial na base 2 ;]\n"
		"Insira o valor da potencia:\n");
	scanf("%d", &expbdois);
	retorno3 = exp2(expbdois);
	printf("\nResultado:%d\n", retorno3);
}