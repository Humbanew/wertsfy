#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "potdepotdec.h"

float basedec;
float potenciadec;
int qtdpd;
float potenciatdec;
float resultadodec;
float resultado;

void ui18() {
	printf("\nVoce esta realizando uma potencia de potencia com numeros decimais ;]\n");

	printf("\nInsira o valor da base:\n");
	scanf("%f", &basedec);

	printf("\nInsira a quantidade de valores de potencia:\n");
	scanf("%d", &qtdpd);

	printf("\nInsira a potencia:\n");
	scanf("%f", &potenciatdec);
	for (int i = 1; i < qtdpd; i++) {
		printf("\nInsira a potencia superior:\n");
		scanf("%f", &potenciadec);

		potenciatdec = potenciadec * potenciatdec;
	}

	resultado = pow(basedec, potenciatdec);

	printf("\nResultado:\n%.4f\n", resultado);

}