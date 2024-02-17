#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include <complex.h>
#include "estrutura.h"

int opcoes7;

void selecionainterfacefat() {

	/*	scanf("%d", &opcoes7);

	   switch (opcoes7) {
		   case 0:
			   estruturapag();
			   break;
		   case 1:
			   ui85();
			   break;
		   case 2:
			   ui86();
			   break;
		   case 3:
			   ui87();
			   break;
		   case 4:
			   ui88();
			   break;
		   case 5:
			   ui89();
			   break;
		   case 6:
			   ui90();
			   break;
		   default:
			   puts("Opcao invalida ou inexistente!\n");
	   }*/
}


void layoutsecundario6() {
	printf("Escolha uma operacao matematica com calculos avancados!\n");
	printf("Opcoes: 0  => Voltar ao menu principal!\n");
	printf("        1  => Fatorial de N termos\n");
	printf("        2  => Raiz Biquadratica\n");
	printf("        3  => Raiz Bicubica\n");
	printf("        4  => Fatorial de N termos com numeros decimais\n");
	printf("        5  => Raiz Biquadratica com numeros decimais\n");
	printf("        6  => Raiz Bicubica com numeros decimais\n");
	selecionainterfacefat();
}