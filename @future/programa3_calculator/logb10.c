#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include "logb10.h"

int logbdez;
int retorno;

void ui21() {
	printf("\nVoce esta realizando um logaritmo na base 10 ;]\n"
		"Insira o valor do logaritmo natural:\n");
	scanf("%d", &logbdez);
	retorno = log10(logbdez);
	printf("\nResultado:%d\n", retorno);
}