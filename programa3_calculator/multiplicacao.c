#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "multiplicacao.h"

void ui4() {
	printf("\nVoce esta realizando uma multiplicacao ;]\n");
	int valorecebido = 0;
	int incremento;
	int valorprincipal;
	printf("Digite o valor que sera multiplicado:\n");
	scanf("%d", &valorprincipal);
	printf("Digite o valor que vai multiplicar:\n");
	scanf("%d", &incremento);
	valorecebido = valorprincipal * incremento;
	
	printf("\nResultado:\n%d\n", valorecebido);
}