#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include <complex.h>
#include "estrutura.h"
#include "seno.h"
#include "cosseno.h"
#include "tangente.h"
#include "secante.h"
#include "cossecante.h"
#include "cotangente.h"
#include "arcseno.h"
#include "arccosseno.h"
#include "arctangente.h"
#include "arcsecante.h"
#include "arccossecante.h"
#include "arccotangente.h"
#include "quadtan.h"
#include "quadcotan.h"
#include "senodec.h"
#include "cossenodec.h"
#include "tangentedec.h"
#include "secantedec.h"
#include "cossecantedec.h"
#include "cotangentedec.h"
#include "arcsenodec.h"
#include "arccossenodec.h"
#include "arctangentedec.h"
#include "arcsecantedec.h"
#include "arccossecantedec.h"
#include "arccotangentedec.h"
#include "quadtandec.h"
#include "quadcotandec.h"

int opcoes5;

void selecionainterfacetrig() {

		scanf("%d", &opcoes5);

	   switch (opcoes5) {
		   case 0:
			   estruturapag();
			   break;
		   case 1:
			   ui33();
			   break;
		   case 2:
			   ui34();
			   break;
		   case 3:
			   ui35();
			   break;
		   case 4:
			   ui36();
			   break;
		   case 5:
			   ui37();
			   break;
		   case 6:
			   ui38();
			   break;
		   case 7:
			   ui39();
			   break;
		   case 8:
			   ui40();
			   break;
		   case 9:
			   ui41();
			   break;
		   case 10:
			   ui42();
			   break;
		   case 11:
			   ui43();
			   break;
		   case 12:
			   ui44();
			   break;
		   case 13:
			   ui45();
			   break;
		   case 14:
			   ui46();
			   break;
		   case 15:
			   ui47();
			   break;
		   case 16:
			   ui48();
			   break;
		   case 17:
			   ui49();
			   break;
		   case 18:
			   ui50();
			   break;
		   case 19:
			   ui51();
			   break;
		   case 20:
			   ui52();
			   break;
		   case 21:
			   ui53();
			   break;
		   case 22:
			   ui54();
			   break;
		   case 23:
			   ui55();
			   break;
		   case 24:
			   ui56();
			   break;
		   case 25:
			   ui57();
			   break;
		   case 26:
			   ui58();
			   break;
		   case 27:
			   ui59();
			   break;
		   case 28:
			   ui60();
			   break; 
		   default:
			   puts("Opcao invalida ou inexistente!\n");
	   }
}

void layoutsecundario4() {
	printf("Escolha uma operacao matematica com funcoes trigonometricas!\n");
	printf("Opcoes: 0  => Voltar ao menu principal!\n");
	printf("        1  => Seno\n");
	printf("        2  => Cosseno\n");
	printf("        3  => Tangente\n");
	printf("        4  => Secante\n");
	printf("        5  => Cossecante\n");
	printf("        6  => Cotangente\n");
	printf("        7  => Arco Seno\n");
	printf("        8  => Arco Cosseno\n");
	printf("        9  => Arco Tangente\n");
	printf("        10  => Arco Secante\n");
	printf("        11  => Arco Cossecante\n");
	printf("        12  => Arco Cotangente\n");
	printf("        13  => Arco Tangente para determinar Quadrantes\n");
	printf("        14  => Arco Cotangente para determinar Quadrantes\n");
	printf("        15  => Seno com numeros decimais\n");
	printf("        16  => Cosseno com numeros decimais\n");
	printf("        17  => Tangente com numeros decimais\n");
	printf("        18  => Secante com numeros decimais\n");
	printf("        19  => Cossecante com numeros decimais\n");
	printf("        20  => Cotangente com numeros decimais\n");
	printf("        21  => Arco Seno com numeros decimais\n");
	printf("        22  => Arco Cosseno com numeros decimais\n");
	printf("        23  => Arco Tangente com numeros decimais\n");
	printf("        24  => Arco Secante com numeros decimais\n");
	printf("        25  => Arco Cossecante com numeros decimais\n");
	printf("        26  => Arco Cotangente com numeros decimais\n");
	printf("        27  => Arco Tangente para determinar Quadrantes com numeros decimais\n");
	printf("        28  => Arco Cotangente para determinar Quadrantes com numeros decimais\n");
	selecionainterfacetrig();
}