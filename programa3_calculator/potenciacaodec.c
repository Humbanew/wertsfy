#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "potenciacaodec.h"

void ui14() {

	printf("\nVoce esta realizando uma potenciacao com numeros decimais ;]\n");
	float baserecebida;
	float potenciarecebida;
	printf("Digite a base da sua potencia:\n");
	scanf("%f", &baserecebida);
	printf("Digite a potencia:\n");
	scanf("%f", &potenciarecebida);
	calculapotenciadec(baserecebida, potenciarecebida);
}

void calculapotenciadec(float b, float p) {

	float base = b;
	float potencia = p;
	float teste = pow(base, potencia);

	printf("\nResultado:\n%.4f\n", teste);
}