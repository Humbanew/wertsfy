#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include <complex.h>
#include "estrutura.h"
#include "somadec.h"
#include "subtracaodec.h"
#include "divisaodec.h"
#include "multiplicacaodec.h"
#include "potenciacaodec.h"
#include "radiciacao2dec.h"
#include "radiciacao3dec.h"
#include "mediaritdec.h"
#include "potdepotdec.h"

int opcoes3;

void selecionainterfacedec() {

	scanf("%d", &opcoes3);

	switch (opcoes3) {
	case 0:
		estruturapag();
		break;
	case 1:
		ui10();
		break;
	case 2:
		ui11();
		break;
	case 3:
		ui12();
		break;
	case 4:
		ui13();
		break;
	case 5:
		ui14();
		break;
	case 6:
		ui15();
		break;
	case 7:
		ui16();
		break;
	case 8:
		ui17();
		break;
	case 9:
		ui18();
		break;
	default:
		puts("Opcao invalida ou inexistente!\n");
	}
}

void layoutsecundario2() {
	printf("Escolha uma operacao matematica com decimais!\n");
	printf("Opcoes: 0  => Voltar ao menu principal!\n");
	printf("        1  => Soma com numeros decimais,\n");
	printf("        2  => Subtracao com numeros decimais,\n");
	printf("        3  => Divisao com numeros decimais,\n");
	printf("        4  => Multiplicacao com numeros decimais,\n");
	printf("        5  => Potencia com numeros decimais,\n");
	printf("        6  => Radiciacao de Grau 2 com numeros decimais,\n");
	printf("        7  => Radiciacao de Grau 3 com numeros decimais,\n");
	printf("        8  => Media Aritmetica de N termos com numeros decimais,\n");
	printf("        9  => Potencia de Potencia com numeros decimais,\n");
	selecionainterfacedec();
}