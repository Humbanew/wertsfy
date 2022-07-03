#include <stdio.h>
#include <stdlib.h>

int escrever() {

	FILE* f;

	char nome[200];

	char receita[1000];

	int qtd;

	f = fopen("wiki.txt", "a+");

	printf("Escreva a quantidade de itens para adicionar na Wiki Local de Minecraft:\n");
	scanf("%d", &qtd);

	for (int i = 1; i <= qtd; i++) {
		printf("Escreva o nome do item:\n");
		scanf("%s", nome);

		printf("Escreva a receita do item:\n");
		scanf("%s", receita);

		printf("\n");

		fprintf(f, "Bloco/Item: %s | Receita: %s\n\n", nome, receita);
	}

	fclose(f);
}

int ler() {

	FILE *f;

	f = fopen("wiki.txt", "r");

	char opcoes[1];

	char dados[200000];

	printf("Deseja ver as informacoes da wiki? - (s/n)\n");
	scanf("%s", opcoes);

	if (opcoes == "s" || "S") {
		fscanf(f, dados);
	}	else if(opcoes == "n" || "N") {
		printf("Voltamos ao editor!");
		exit(0);
	}

	fclose(f);
}

char *ler_tudo(char *nome_arquivo) {

	FILE* f = fopen(nome_arquivo, "rb");
	int tamanho;
	char* texto;

	if(!f) {
		fprintf(stderr, "Nao foi possivel abrir o arquivo \"%s\" para leitura!\n", nome_arquivo);
		return NULL;
	}

	fseek(f, 0, SEEK_END);
	tamanho = ftell(f);
	fseek(f, 0, SEEK_SET);
	texto = (char*)malloc(tamanho + 1);
	if(texto) {
		fread(texto, 1, tamanho, f);
		texto[tamanho] = '\0';
	}
	fclose(f);

	return texto;
}


int main() {

	char* texto = ler_tudo("wiki.txt");

	if (texto) {
		puts(texto);
		free(texto);
	}
	escrever();

    return 0;
}