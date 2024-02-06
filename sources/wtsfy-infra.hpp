/**
 * @author Humbanew Project ©️ 2021-2024. Todos os direitos reservados.
 * @copyright Humbanew Wertsfy ©️ 2021-2024.
 * @copyright Humbanew Calculator ©️ 2019-2024. 
 * { Notas de Desenvolvimento }
 * Afim de facilitar o desenvolvimento das lógicas o nome "Wertsfy" será abreviado para "Wtsfy". 
 */

#ifndef WTSFY_INFRA_HPP
#define WTSFY_INFRA_HPP


#define WTSFY_VMAJOR 2
#define WTSFY_VMINOR 0
#define WTSFY_VPATCH 0
#define WTSFY_VBUILD 0

#define WTSFY_EDEVL 0
#define WTSFY_ETEST 1
#define WTSFY_EPROD 2

#define WTSFY_MEM_UP_E 1024
#define WTSFY_MEM_UP_D 2048

struct Registro 
{
  struct Modelo {};
  struct Registro *prox;
  struct Registro *ante;
};


#endif
