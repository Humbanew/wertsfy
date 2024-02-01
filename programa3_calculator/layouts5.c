#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include "estrutura.h"
#include "senohiper.h"

int opcoes6;

void selecionainterfacehiper() {

		scanf("%d", &opcoes6);

	   switch (opcoes6) {
		   case 0:
			   estruturapag();
			   break;
		   case 1:
			   ui61();
			   break;
	/*	   case 2:
			   ui62();
			   break;
		   case 3:
			   ui63();
			   break;
		   case 4:
			   ui64();
			   break;
		   case 5:
			   ui65();
			   break;
		   case 6:
			   ui66();
			   break;
		   case 7:
			   ui67();
			   break;
		   case 8:
			   ui68();
			   break;
		   case 9:
			   ui69();
			   break;
		   case 10:
			   ui70();
			   break;
		   case 11:
			   ui71();
			   break;
		   case 12:
			   ui72();
			   break;
		   case 13:
			   ui73();
			   break;
		   case 14;
			   ui74();
			   break;
		   case 15:
			   ui75();
			   break;
		   case 16:
			   ui76();
			   break;
		   case 17:
			   ui77();
			   break;
		   case 18:
			   ui78();
			   break;
		   case 19:
			   ui79();
			   break;
		   case 20:
			   ui80();
			   break;
		   case 21:
			   ui81();
			   break;
		   case 22:
			   ui82();
			   break;
		   case 23:
			   ui83();
			   break;
		   case 24:
			   ui84();
			   break; */
		   default:
			   puts("Opcao invalida ou inexistente!\n");
	   }
}

void layoutsecundario5() {
	printf("Escolha uma operacao matematica com funcoes hiperbolicas!\n");
	printf("Opcoes: 0  => Voltar ao menu principal!\n");
	printf("        1  => Seno hiperbolico\n");
	printf("        2  => Cosseno hiperbolico\n");
	printf("        3  => Tangente hiperbolica\n");
	printf("        4  => Secante hiperbolica\n");
	printf("        5  => Cossecante hiperbolica\n");
	printf("        6  => Cotangente hiperbolica\n");
	printf("        7  => Arco Seno hiperbolico\n");
	printf("        8  => Arco Cosseno hiperbolico\n");
	printf("        9  => Arco Tangente hiperbolica\n");
	printf("        10  => Arco Secante hiperbolica\n");
	printf("        11  => Arco Cossecante hiperbolica\n");
	printf("        12  => Arco Cotangente hiperbolica\n");
	printf("        13  => Seno hiperbolico com numeros decimais\n");
	printf("        14  => Cosseno hiperbolico com numeros decimais\n");
	printf("        15  => Tangente hiperbolica com numeros decimais\n");
	printf("        16  => Secante hiperbolica com numeros decimais\n");
	printf("        17  => Cossecante hiperbolica com numeros decimais\n");
	printf("        18  => Cotangente hiperbolica com numeros decimais\n");
	printf("        19  => Arco Seno hiperbolico com numeros decimais\n");
	printf("        20  => Arco Cosseno hiperbolico com numeros decimais\n");
	printf("        21  => Arco Tangente hiperbolica com numeros decimais\n");
	printf("        22  => Arco Secante hiperbolica com numeros decimais\n");
	printf("        23  => Arco Cossecante hiperbolica com numeros decimais\n");
	printf("        24  => Arco Cotangente hiperbolica com numeros decimais\n");
	selecionainterfacehiper();
}
