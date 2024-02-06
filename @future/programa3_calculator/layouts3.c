#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include <complex.h>
#include "estrutura.h"
#include "log.h"
#include "logm1.h"
#include "logb10.h"
#include "logb2.h"
#include "logdec.h"
#include "logm1dec.h"
#include "logb10dec.h"
#include "logb2dec.h"
#include "exponencial.h"
#include "exponencialb2.h"
#include "exponencialm1.h"
#include "exponencialdec.h"
#include "exponencialb2dec.h"
#include "exponencialm1dec.h"

int opcoes4;

void selecionainterfacelog() {

		scanf("%d", &opcoes4);

	   switch (opcoes4) {
		   case 0:
			   estruturapag();
			   break;
		   case 1:
			   ui19();
			   break;
		   case 2:
			   ui20();
			   break;
		   case 3:
			   ui21();
			   break;
		   case 4:
			   ui22();
			   break;
		   case 5:
			   ui23();
			   break;
		   case 6:
			   ui24();
			   break;
		   case 7:
			   ui25();
			   break;
		   case 8:
			   ui26();
			   break;
		   case 9:
			   ui27();
			   break;
		   case 10:
			   ui28();
			   break;
		   case 11:
			   ui29();
			   break;
		   case 12:
			   ui30();
			   break;	
		   case 13:
			   ui31();
			   break;
		   case 14:
			   ui32();
			   break; 
		   default:
			   puts("Opcao invalida ou inexistente!\n");
	   }
}

void layoutsecundario3() {
	printf("Escolha uma operacao matematica com funcoes exponenciais!\n");
	printf("Opcoes: 0  => Voltar ao menu principal!\n");
	printf("        1  => Logaritmo natural\n");
	printf("        2  => Logaritmo natural mais 1\n");
	printf("        3  => Logaritmo na base 10\n");
	printf("        4  => Logaritmo na base 2\n");
	printf("        5  => Exponencial na base 2\n");
	printf("        6  => Exponencial na base E menos um\n");
	printf("        7  => Exponencial na base E\n");
	printf("        8  => Logaritmo natural com numeros decimais\n");
	printf("        9  => Logaritmo natural mais 1 com numeros decimais\n");
	printf("        10  => Logaritmo na base 10 com numeros decimais\n");
	printf("        11  => Logaritmo na base 2 com numeros decimais\n");
	printf("        12  => Exponencial na base 2 com numeros decimais\n");
	printf("        13  => Exponencial na base E menos um com numeros decimais\n");
	printf("        14  => Exponencial na base E com numeros decimais\n");
	selecionainterfacelog();
}