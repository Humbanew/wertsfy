#include <stdio.h>
#include <stdlib.h>

void main(){

    FILE *f;

	char emails[30];

	char senhas[12];

	char app[30];

	f = fopen("dados_de_acesso.txt", "a+");

	printf("Escreva seu email:\n");
	scanf("%s", emails);

	printf("Escreva sua senha:\n");
	scanf("%s", senhas);

	printf("Escreva o aplicativo ou servico na qual foi adicionado:\n");
	scanf("%s", app);

	fprintf(f, "Email: %s | Senha: %s | Aplicativo/Servico: %s\n\n", emails, senhas, app);

	fclose(f);
}
