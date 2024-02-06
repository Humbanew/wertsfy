#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include "senohiper.h"

int angulohiper;
int retornohiper;

void ui61() {
	printf("\nVoce está realizando um seno hiperbolico ;]\n"
	        "Insira o angulo:\n");
	scanf("%d", angulohiper);

	retornohiper = sinh(angulohiper);

	printf("\nResultado:\n%d\n", retornohiper);
}