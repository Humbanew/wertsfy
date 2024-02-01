#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <ctype.h>
#include "calcula.h"
#include "estrutura.h"

	int* opcoes;
	int* opcoes2;
	int* opcoes3;
	int* opcoes4;
	int* opcoes5;
	int* opcoes6;
	int* opcoes7;
	int* opcoes8;
	char resposta[8];
	char ch;



void estruturapag() {	
		do {
			layoutpadrao();
			selecionainterfacemenu();
		} while (pergunta());
				ui0();
}

void ui0(){

	printf("\nFIM!\n");
	exit (1);
}

int pergunta() {
	char resposta[8];
	char ch;
				
	do {
		printf("\nQuer fazer outra operacao, voltando ao menu iniciar? - (S/N)\n");
		scanf("%s", resposta);
		ch = toupper(*resposta);
		} while(ch != 'S' && ch != 'N');
		return ch == 'S';
	}
	
