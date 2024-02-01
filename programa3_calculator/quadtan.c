#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "quadtan.h"

int valorx;
int valory;
int resposta_13;

void ui45() {
	printf("\nVoce esta realizando uma determinante de quadrante pela tangente ;]\n"
		"Insira o valor do x:\n");
	scanf("%d", &valorx);

	printf("Insira o valor do y:\n");
	scanf("%d", &valory);

	resposta_13 = atan2(valory, valorx);

	printf("\nResultado:%d\n", resposta_13);
}