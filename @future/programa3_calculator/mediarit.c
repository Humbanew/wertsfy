#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "mediarit.h"

int vtotal = 0;
int valor;
int qtdv;

void ui8(){
	printf("\nVoce esta realizando uma media aritimetica ;]\n");
	printf("\nInsira a quantidade de valores que serao inseridos na media:\n");
	scanf("%d", &qtdv);	
	for(int w = 0; w < qtdv; w++){
		printf("\nInsira um valor para a media:\n");
		scanf("%d", &valor);
		vtotal = vtotal + valor;
	}
	calculamedia();
}

void calculamedia(){
	vtotal = vtotal / qtdv;
	printf("\nResultado:\n%d\n", vtotal);
}