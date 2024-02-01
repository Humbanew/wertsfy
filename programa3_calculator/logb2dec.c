#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include "logb2dec.h"

float logbdoisd;
float volta;

void ui29() {
	printf("\nVoce esta realizando um logaritmo na base 2 com numeros decimais ;]\n"
		"Insira o valor do logaritmo:\n");
	scanf("%f", &logbdoisd);
	volta = log2f(logbdoisd);
	printf("\nResultado:%.4f\n", volta);
}