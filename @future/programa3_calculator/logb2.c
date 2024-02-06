#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include "logb2.h"

int logbdois;
int retorno2;

void ui22() {
	printf("\nVoce esta realizando um logaritmo na base 2 ;]\n"
		"Insira o valor do logaritmo natural:\n");
	scanf("%d", &logbdois);
	retorno2 = log2(logbdois);
	printf("\nResultado:%d\n", retorno2);
}