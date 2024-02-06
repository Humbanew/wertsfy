#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include "log.h"

int lognat;
int resposta;

void ui19() {
	printf("\nVoce esta realizando um logaritmo natural ;]\n"
		   "Insira o valor do logaritmo natural:\n");
	scanf("%d", &lognat);
	resposta = log(lognat);
	printf("\nResultado:%d\n", resposta);
}