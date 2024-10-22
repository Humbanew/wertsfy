# wertsfy 
<!--
[![PT-BR](./readme_docs/seletor_pt-br__pt-br.svg)](./README.md)
[![EN-US](./readme_docs/seletor_pt-br__en-us.svg)](./README.en_us.md)|
-->
<br><br>
<div align="center"> 

  ![wertsfy-icon](https://github.com/user-attachments/assets/ff5bfd34-3bfa-4f0c-a0e9-51abe5c2c7f7)
  
  ![Typescript](https://img.shields.io/badge/typescript-111111.svg?style=for-the-badge&logo=typescript&logoColor=steelblue)
  ![Javascript](https://img.shields.io/badge/javascript-111111.svg?style=for-the-badge&logo=javascript&logoColor=yellow)

</div>

## História

<div align="justify">

```Agosto de 2019```<br><br>
&nbsp;&nbsp;O início da concepção do que viria a ser incorporado no projeto maior, a Rax Calculator *(ou Calculadora Rax, em português)*. Uma calculadora modular onde seria possível usar ela normalmente como uma calculadora convencional, como temos em sistemas operacionais e outros formatos físicos. Mas também como **com as funções delas dividas em partes como se fossem peças de LEGO**, podendo tanto ativar como desativar conjuntamente várias delas dentro da base da calculadora. Em uma primeira análise de projeto foi subdivido em particionamentos de **funcionalidades Comuns** (Soma, Subtração, Divisão, Multiplicação, Potências, Raízes, Constantes e Porcentagem, além das suas constantes), **funcionalidades Científicas** (Logarítmos, Antilogarítmos, Cologarítmos, Exponenciais, Trigonométricos, Arcos Trigonométricos, Números Complexos, as suas contantes associadas), **funcionalidades Supremas** (Equações Matemáticas, Físicas, Químicas, Biológicas, Geográficas, Históricas, Econômicas e outros, e suas constantes associadas) e as **funcionalidades de Conversão de Unidades de Medida** (Unidades de Medida de Comprimento, Unidades de Medida de Área, Unidades de Medida de Volume, Unidades de Medida de 4 Dimensões, Unidades de Medida de 5 Dimensões, Unidades de Medida de 6 Dimensões, Unidades de Medida de Temperatura, Unidades de Medida do Sistema Internacional, Unidades de Medida Imperial e outros diversos modelos, além de suas constantes associadas).

```Fevereiro a Agosto de 2021```<br><br>
&nbsp;&nbsp;A partir do desenvolvimento do projeto inicial, testes de arquitetura de software inspiradas pelas conexões por cabos (sendo as importações e exportações entre arquivos sepadados) com a Calculadora Rax e o **desejo de um projeto que a incorporasse integralmente como um serviço matemático, juntamente com a união de várias ferramentas de desenvolvimento Javascript**, surgiu a Wertsfy, um projeto que internamente possuia a Calculadora Rax e mais outros algoritmos úteis para o desenvolvimento. Infelizmente, não chegou a um modelo que seria agradável para embarcar tantas soluções e ser leve simultaneamente para ser importado como um pacote NPM. Alguns meses depois, a fim de testes da plataforma online do Node Package Modules, a Wertsfy foi adicionada lá.<br>
&nbsp;&nbsp;Nas primeiras impressões o pacote foi bem recebido, com o passar do primeiro mês da divulgação e depois de algumas atualizações, de maneira interna foi notado que a solução não era a mais eficiente possível, com uma manutenção complicada de ser efetuada em uma atualização. Dessa forma o pacote foi descontinuado e removido do NPM para um remanejamento de ideias e montagem satisfatória de software, além de seguro. Deixando infelizmente muitos usuários do projeto desamparados pelo sumiço da dependência, houve um equívoco ao notificar no README dentro do NPM que era um pacote em teste na plataforma. Internamente, durante o desenvolvimento, a Wertsfy foi **reiniciada 4 vezes até os dias atuais**, mas o núcleo do código-fonte continua em partes o mesmo desde o começo, aquele de 2019. 

```Março de 2022 até os diais atuais```<br><br>
&nbsp;&nbsp;Após insafisfações com o uso do NPM, foi introduzido o início dos estudos para colocar no Github Modules, juntamente de seu repositório e código-fonte, unificando tudo em apenas uma localidade. Ao decorrer dos meses de estudo e reorgalização do projeto, sob sua arquitetura de software, modelo de escalabilidade, modelo de testes e debug e outras nuances. Em **junho de 2023** foi publicado o primeiro teste da versão existente da Wertsfy, ficou por um tempo, até que foi necessário reorganizar em fragmentos o projeto incorporado da Calculadora Rax, para em **setembro de 2024** ser reintroduzido denovo em seu repositório como um pacote associado. Para você que leu até aqui a história confusa desse repositório, por aqui será estabelecida uma das melhores ferramentas de desenvolvimento Javascript.

<div>

## Instalação

  &nbsp;&nbsp;O procedimento de instalação é rápido e prático, só é necessário **seguir os passos** a seguir.

1. Crie o arquivo ``.npmrc`` no *diretório do seu projeto* com o seguinte conteúdo:

```
@humbanew:registry=https://npm.pkg.github.com
```

2. Instale o pacote normalmente usando **Node Package Modules [npm]**:

``` shell
$ npm install @humbanew/wertsfy
```

3. Crie um arquivo de código fonte **Javascript ou Typescript**, como preferir. E adicione o seguinte conteúdo para começar a usar esta ferramenta:

``` javascript
import wertsfy from "wertsfy";

// A linha abaixo é opcional, foi adiciona para fins didáticos.
// Caso use Typescript: const artfact: typeof wertsfy;
const artfact = wertsfy;
```
Pronto, aproveite 😄

## Futuras Adições

- Suporte a modificações de terceiros.
- Suporte a mais Interfaces de Aplicação de Programas.
- Suporte a outros projetos incorporados.
- Suporte a tratamento de exceções.
- Suporte a tratamento de vunerabilidades.

## Termos de Licença & Suporte

[Termos de Licença (HN License v5, MIT License Modified)](./LICENSE.md)<br> [Suporte de Versões](./SUPPORT.md)

## Fale Conosco

Caso queira abrir uma _issue_ entre [aqui](https://github.com/humbanew/wertsfy/issues).

Caso queira abrir um _pull request_ e contribuir com o projeto, entre nesse outro link [aqui](https://github.com/humbanew/wertsfy/pulls).

Caso queria abrir uma discussão no repositório, entre [aqui](https://github.com/humbanew/wertsfy/discussions).

## Documentação & Changelog

``v0.0.1``

▤ The Changelog ▤

```diff
+ Adicionado bloco _Aritmeticos_.
```
<br>

▤ Documentação ▤

> ``wertsfy``**: object**<br>
> Raiz do kit de desenvolvimento.
> > ``aritmeticos``<br>
> > Bloco de propriedades aritméticas.
> > > ``AVOGADRO``**: number**<br>
> > > Constante de avogadro.
> > >
> > > ``CBRT_01B02``**: number**<br>
> > > Constante da raiz cúbica de 1/2.
> > >
> > > ``CBRT_01B04``**: number**<br>
> > > Constante da raiz cúbica de 1/4.
> > >
> > > ``CBRT_01B06``**: number**<br>
> > > Constante da raiz cúbica de 1/6.
> > >
> > > ``CBRT_01B08``**: number**<br>
> > > Constante da raiz cúbica de 1/8.
> > >
> > > ``CBRT_01``**: number**<br>
> > > Constante da raiz cúbica de 1.
> > >
> > > ``CBRT_02``**: number**<br>
> > > Constante da raiz cúbica de 2.
> > >
> > > ``CBRT_03``**: number**<br>
> > > Constante da raiz cúbica de 3.
> > >
> > > ``CBRT_04``**: number**<br>
> > > Constante da raiz cúbica de 4.
> > >
> > > ``CBRT_05``**: number**<br>
> > > Constante da raiz cúbica de 5.
> > >
> > > ``CBRT_06``**: number**<br>
> > > Constante da raiz cúbica de 6.
> > >
> > > ``CBRT_07``**: number**<br>
> > > Constante da raiz cúbica de 7.
> > >
> > > ``CBRT_08``**: number**<br>
> > > Constante da raiz cúbica de 8.
> > >
> > > ``CBRT_09``**: number**<br>
> > > Constante da raiz cúbica de 9.
> > >
> > > ``CBRT_10``**: number**<br>
> > > Constante da raiz cúbica de 10.
> > >
> > > ``COULOMB``**: number**<br>
> > > Constante de coulomb.
> > >
> > > ``EULER``**: number**<br>
> > > Constante de euler.
> > >
> > > ``LOG2``**: number**<br>
> > > Constante do logarítmo de 2.
> > >
> > > ``LOG2E``**: number**<br>
> > > Constante do logarítmo de 2 na base Euler.
> > >
> > > ``LOG10``**: number**<br>
> > > Constante do logarítmo de 10.
> > >
> > > ``LOG10E``**: number**<br>
> > > Constante do logarítmo de 10 na base Euler.
> > >
> > > ``MAXVALUE``**: number**<br>
> > > Constante de valor máximo.
> > >
> > > ``MINVALUE``**: number**<br>
> > > Constante de valor mínimo.
> > >
> > > ``NEWTON``**: number**<br>
> > > Constante de newton.
> > >
> > > ``PI``**: number**<br>
> > > Constante de pi.
> > >
> > > ``PLANK``**: number**<br>
> > > Constante de plank.
> > >
> > > ``SQRT_01B02``**: number**<br>
> > > Constante da raiz quadrada de 1/2.
> > >
> > > ``SQRT_01B04``**: number**<br>
> > > Constante da raiz quadrada de 1/4.
> > >
> > > ``SQRT_01B06``**: number**<br>
> > > Constante da raiz quadrada de 1/6.
> > >
> > > ``SQRT_01B08``**: number**<br>
> > > Constante da raiz quadrada de 1/8.
> > >
> > > ``SQRT_01``**: number**<br>
> > > Constante da raiz quadrada de 1.
> > >
> > > ``SQRT_02``**: number**<br>
> > > Constante da raiz quadrada de 2.
> > >
> > > ``SQRT_03``**: number**<br>
> > > Constante da raiz quadrada de 3.
> > >
> > > ``SQRT_04``**: number**<br>
> > > Constante da raiz quadrada de 4.
> > >
> > > ``SQRT_05``**: number**<br>
> > > Constante da raiz quadrada de 5.
> > >
> > > ``SQRT_06``**: number**<br>
> > > Constante da raiz quadrada de 6.
> > >
> > > ``SQRT_07``**: number**<br>
> > > Constante da raiz quadrada de 7.
> > >
> > > ``SQRT_08``**: number**<br>
> > > Constante da raiz quadrada de 8.
> > >
> > > ``SQRT_09``**: number**<br>
> > > Constante da raiz quadrada de 9.
> > >
> > > ``SQRT_10``**: number**<br>
> > > Constante da raiz quadrada de 10.
> > >
> > > ``TESLA``**: number**<br>
> > > Constante de tesla.
> > >
> > > ``ZERO``**: number**<br>
> > > Constante de zero.
> > > 
> > > ``$``<br>
> > > Símbolo de acesso a todas as funções disponíveis na biblioteca.
> > > > _(a lista de funções disponíveis para uso, em breve uma documentação mais detalhada)_
