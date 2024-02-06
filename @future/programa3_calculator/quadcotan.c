#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "quadcotan.h"

int valorx1;
int valory1;
int resposta_14;

void ui46() {
	printf("\nVoce esta realizando uma determinante de quadrante pela tangente ;]\n"
		"Insira o valor do x:\n");
	scanf("%d", &valorx1);

	printf("Insira o valor do y:\n");
	scanf("%d", &valory1);

	resposta_14 = 1 / atan2(valory1, valorx1);

	printf("\nResultado:%d\n", resposta_14);
}