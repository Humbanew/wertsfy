#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "mediaritdec.h"

float vtotaldec = 0;
float valordec;
int qtdvdec;

void ui17() {

	printf("\nVoce esta realizando uma media aritimetica com numeros decimais ;]\n");
	printf("\nInsira a quantidade de valores que serao inseridos na media:\n");
	scanf("%d", &qtdvdec);
	for (int w = 0; w < qtdvdec; w++) {
		printf("\nInsira um valor para a media:\n");
		scanf("%f", &valordec);
		vtotaldec = vtotaldec + valordec;
	}
	calculamediadec();

}

void calculamediadec() {
	vtotaldec = vtotaldec / qtdvdec;
	printf("\nResultado:\n%.4f\n", vtotaldec);
}