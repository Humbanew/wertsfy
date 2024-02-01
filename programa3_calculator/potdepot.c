#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "potdepot.h"

int base;
int potencia;
int qtdp;
int potenciat;
int resultado;

void ui9(){
	printf("\nVoce esta realizando uma potencia de potencia ;]\n");

	printf("\nInsira o valor da base:\n");
	scanf("%d", &base);

	printf("\nInsira a quantidade de valores de potencia:\n");
	scanf("%d", &qtdp); 
	
	printf("\nInsira a potencia:\n");
	scanf("%d", &potenciat);
	for (int i = 1; i < qtdp; i++) {
		printf("\nInsira a potencia superior:\n");
		scanf("%d", &potencia);

		potenciat = potencia * potenciat;
	}
	
	resultado = pow(base, potenciat);

	printf("\nResultado:\n%d\n", resultado);

}

