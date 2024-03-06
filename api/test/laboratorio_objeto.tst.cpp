// Nova Arquitetura de Pastas
#include "./../includes/core/wtsfy_tipos.hpp"

int main(vdt)
{

  // Vetores Multidimensionais
  i8t modelo_json_3nivels_4slots[4][4][4][4]= 
  {
    // Camada 1
    {
      // Camada 2
      {
        // Camada 3
        {},
        {},
        {},
        {}
      },
      {
        {},
        {},
        {},
        {}
      },
      {
        {},
        {},
        {},
        {}
      },
      {
        {},
        {},
        {},
        {}
      }
    },
    {
      {
        {},
        {},
        {},
        {}
      },
      {
        {},
        {},
        {},
        {}
      },
      {
        {},
        {},
        {},
        {}
      },
      {
        {},
        {},
        {},
        {}
      }
    },
    {
      {
        {},
        {},
        {},
        {}
      },
      {
        {},
        {},
        {},
        {}
      },
      {
        {},
        {},
        {},
        {}
      },
      {
        {},
        {},
        {},
        {}
      },   
    },
    {
      {
        {},
        {},
        {},
        {}
      },
      {
        {},
        {},
        {},
        {}
      },
      {
        {},
        {},
        {},
        {}
      },
      {
        {},
        {},
        {},
        {}
      }
    }
  };

  // Regra de Negócio de Uso da Estrutura
  modelo_json_3nivels_4slots[0][0][0][0] = 1;
  modelo_json_3nivels_4slots[0][0][0][1] = 2;

  // Sempre libera o espaço usado para melhor performance, no final da função
  free(modelo_json_3nivels_4slots);

}
