#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "radiciacao2.h"


void ui6() {
	printf("\nVoce esta realizando uma raiz quadrada ;]\n");
	int raiz;
	printf("Digite o valor que estara dentro da raiz:\n");
	scanf("%d", &raiz);
	calcularaiz(raiz);
}

void calcularaiz(int r){
	int raizquad = r;
	int teste = sqrt(raizquad);

	printf("\nResultado:\n%d\n", teste);
}