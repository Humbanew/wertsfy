#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "arccosseno.h"

int angulo8;
int resposta_8;

void ui40() {
	printf("\nVoce esta realizando um arco do cosseno ;]\n"
		"Insira o valor de 1 a -1:\n");
	scanf("%d", &angulo8);

	resposta_8 = acos(angulo8);

	printf("\nResultado:%d\n", resposta_8);
}