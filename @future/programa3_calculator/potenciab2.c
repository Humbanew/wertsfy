#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include "logb10.h"

int potbdois;
int retorno3;

void ui23() {
	printf("\nVoce esta realizando uma funcao exponencial na base 2 ;]\n"
		"Insira o valor do exponencial:\n");
	scanf("%d", &potbdois);
	retorno3 = exp2(potbdois);
	printf("\nResultado:%d\n", retorno3);
}