#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "tangente.h"

int angulo3;
int resposta_3;

void ui35() {
	printf("\nVoce esta realizando uma tangente ;]\n"
		"Insira o valor do angulo:\n");
	scanf("%d", &angulo3);

	resposta_3 = tan(angulo3);

	printf("\nResultado:%d\n", resposta_3);
}