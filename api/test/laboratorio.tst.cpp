// Nova Arquitetura de Pastas
#include "./../includes/core/wtsfy_tipos.hpp"

// este modelo pode ser usado em qualquer lugar...
struct No
{
  i64t valor;
  struct No *prox;
};

struct Lista
{
  i64t quantidade;
  struct No *inicio;
};

vdt cria_no(i64t x) {
  struct No *novo = (struct No*)malloc(sizeof(struct No));
  novo->valor = x;
}

vdt cria_lista() {
  struct Lista *l = (struct Lista*)malloc(sizeof(struct Lista));
  l->quantidade = 0;
  l->inicio = NULL;
}

int main(vdt) 
{
  return 0;
}
