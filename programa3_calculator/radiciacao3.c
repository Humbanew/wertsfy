#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "radiciacao3.h"

void ui7() {
	printf("\nVoce esta realizando uma raiz cubica ;]\n");
	int raiz;
	printf("Digite o valor que estara dentro da raiz:\n");
	scanf("%d", &raiz);
	calcularaizdois(raiz);
}

void calcularaizdois(int r){
	int raizcub = r;
	int teste = cbrt(raizcub);

	printf("\nResultado:\n%d\n", teste);
}