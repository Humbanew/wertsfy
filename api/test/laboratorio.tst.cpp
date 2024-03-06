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

struct No* cria_no(i64t x) {
  struct No *novo = (struct No*)malloc(sizeof(struct No));
  novo->valor = x;
}

struct Lista* cria_lista() {
  struct Lista *l = (struct Lista*)malloc(sizeof(struct Lista));
  l->quantidade = 0;
  l->inicio = NULL;
}

vdt insere(struct Lista *l, i64t x) {
  struct No *novo = cria_no(x);
  novo->prox = l->inicio;
  l->inicio = novo;
  l->quantidade++;
}

vdt imprime(struct Lista *l) {
  struct No *p;
  for (p = l->inicio; p != NULL; p = p->prox) {
    printf("%lld\n", p->valor);
  }
}

vdt libera(struct Lista *l) {
  struct No *p = l->inicio;
  while (p != NULL) {
    struct No *t = p->prox;
    free(p);
    p = t;
  }
  free(l);
}

int main(vdt) 
{
  return 0;
}
