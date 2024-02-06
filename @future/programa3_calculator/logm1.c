#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include "logb10.h"

int logbm1;
int retorno1;

void ui20() {
	printf("\nVoce esta realizando um logaritmo na base 10 ;]\n"
		"Insira o valor do logaritmo natural:\n");
	scanf("%d", &logbm1);
	retorno1 = log1p(logbm1);
	printf("\nResultado:%d\n", retorno1);
}