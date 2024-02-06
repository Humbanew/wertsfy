#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include <complex.h>
#include "calcula.h"
#include "estrutura.h"
#include "caracteres.h"
#include "layouts1.h"
#include "layouts2.h"
#include "layouts3.h"
#include "layouts4.h"
#include "layouts5.h"
#include "layouts6.h"
#include "layouts7.h"
#include "layouts8.h"

int opcoes;

void layoutpadrao() {
	printf("Seja bem vindo ao calcula!\n");
	printf("Opcoes: 0  => Sair do calcula!\n");
	printf("        1  => Operacoes com numeros inteiros\n");
	printf("        2  => Operacoes com numeros decimais\n");
	printf("        3  => Operacoes com funcoes exponenciais\n");
	printf("        4  => Operacoes com funcoes trigonometricas\n");
	printf("        5  => Operacoes com funcoes hiperbolicas\n");
	printf("        6  => Operacoes com calculos avancados\n");
	printf("        7  => Operacoes com numeros complexos inteiros\n");
	printf("        8  => Operacoes com numeros complexos decimais\n");
}

void selecionainterfacemenu() {

	scanf("%d", &opcoes);

	switch (opcoes) {
		case 0:
			ui0();
			break;
		case 1:
			layoutsecundario();
			break;
		case 2:
			layoutsecundario2();
			break;
		case 3:
			layoutsecundario3();
			break;
		case 4:
			layoutsecundario4();
			break;
		case 5:
			layoutsecundario5();
			break;
		case 6:
			layoutsecundario6();
			break;
		case 7:
			layoutsecundario7();
			break;
		case 8:
			layoutsecundario8();
			break;
		default:
			puts("Opcao invalida ou inexistente!\n");
	}
}

int main() {
	
	estruturapag();

}