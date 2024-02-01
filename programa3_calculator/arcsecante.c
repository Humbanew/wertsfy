#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "arcsecante.h"

int angulo10;
int resposta_10;

void ui42() {
	printf("\nVoce esta realizando um arco da secante ;]\n"
		"Insira o valor de 1 a -1:\n");
	scanf("%d", &angulo10);

	resposta_10 = 1 / acos(angulo10);

	printf("\nResultado:%d\n", resposta_10);
}