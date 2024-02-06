#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "radiciacao3dec.h"

void ui16() {

	printf("\nVoce esta realizando uma raiz cubica com numeros decimais ;]\n");
	float raiz;
	printf("Digite o valor que estara dentro da raiz:\n");
	scanf("%f", &raiz);
	calcularaizdoisdec(raiz);

}

void calcularaizdoisdec(float r) {

	float raizcub = r;
	float teste = cbrt(raizcub);

	printf("\nResultado:\n%.4f\n", teste);
}