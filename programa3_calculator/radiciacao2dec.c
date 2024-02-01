#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "radiciacao2dec.h"

void ui15() {

	printf("\nVoce esta realizando uma raiz quadrada com numeros decimais ;]\n");
	float raiz;
	printf("Digite o valor que estara dentro da raiz:\n");
	scanf("%f", &raiz);
	calcularaizdec(raiz);

}

void calcularaizdec(float r) {
	float raizquad = r;
	float teste = sqrt(raizquad);

	printf("\nResultado:\n%.4f\n", teste);
}