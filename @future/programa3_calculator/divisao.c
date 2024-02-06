#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "divisao.h"

void ui3() {
	printf("\nVoce esta realizando uma divisao ;]\n");
	int valorecebido = 0;
	int incremento;
	int valorprincipal;
	printf("Digite o valor que sera dividido:\n");
	scanf("%d", &valorprincipal);
	printf("Digite o valor que vai dividir:\n");
	scanf("%d", &incremento);
	valorecebido = valorprincipal / incremento;
	
	printf("\nResultado:\n%d\n", valorecebido);
}