#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include <complex.h>
#include "estrutura.h"
#include "soma.h"
#include "subtracao.h"
#include "divisao.h"
#include "multiplicacao.h"
#include "potenciacao.h"
#include "radiciacao2.h"
#include "radiciacao3.h"
#include "mediarit.h"
#include "potdepot.h"

int opcoes2;

void selecionainterfaceint() {

	scanf("%d", &opcoes2);

	switch (opcoes2) {
	case 0:
		estruturapag();
		break;
	case 1:
		ui1();
		break;
	case 2:
		ui2();
		break;
	case 3:
		ui3();
		break;
	case 4:
		ui4();
		break;
	case 5:
		ui5();
		break;
	case 6:
		ui6();
		break;
	case 7:
		ui7();
		break;
	case 8:
		ui8();
		break;
	case 9:
		ui9();
		break;
	default:
		puts("Opcao invalida ou inexistente!\n");
	}
}

void layoutsecundario() {
	printf("Escolha uma operacao matematica com inteiros!\n");
	printf("Opcoes: 0  => Voltar ao menu principal!\n");
	printf("        1  => Soma,\n");
	printf("        2  => Subtracao,\n");
	printf("        3  => Divisao,\n");
	printf("        4  => Multiplicacao,\n");
	printf("        5  => Potenciacao,\n");
	printf("        6  => Radiciacao de Grau 2,\n");
	printf("        7  => Radiciacao de Grau 3,\n");
	printf("        8  => Media Aritmetica de N termos,\n");
	printf("        9  => Potencia de Potencia,\n");
	selecionainterfaceint();
}