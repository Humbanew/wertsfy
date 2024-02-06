#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "potenciacao.h"

void ui5() {
	printf("\nVoce esta realizando uma potenciacao ;]\n");
	int baserecebida;
	int potenciarecebida;
	printf("Digite a base da sua potencia:\n");
	scanf("%d", &baserecebida);
	printf("Digite a potencia:\n");
	scanf("%d", &potenciarecebida);
	calculapotencia(baserecebida, potenciarecebida);
}

void calculapotencia(int b, int p){

	int base = b;
	int potencia = p;
	int teste = pow(base, potencia);

	printf("\nResultado:\n%d\n", teste);
}