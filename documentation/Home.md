<div align="center">

# Bem-vindo à Wertsfy Wiki!

</div>


## Introdução

<div align="justify">

  *Olá, seja bem-vindo, forasteiro.*&nbsp;

  &nbsp;&nbsp;A Wertsfy é uma ferramenta/conjunto de artefatos computacionais ainda em processo de consolidação de infraestrutura, idealizada em 2021, busca unificar tanto modelos de abstração próprios da Humbanew como de terceiros também ao longo do tempo. Além de traçar outras diretrizes de entrega de "serviços", como a geração e construção de arquivos com simples comandos submetidos em linha de comando pelo terminal ou por código escrito usando o *WOM (Wertsfy Object Model)*. E com diversos formatos de arquivo, os mais relevantes sendo XML/HTML, SQL e SVG.

<!-- &nbsp; -->

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

## Fale Conosco

Caso queira abrir uma _issue_ entre [aqui](https://github.com/humbanew/wertsfy/issues).

Caso queira abrir um _pull request_ e contribuir com o projeto, entre nesse outro link [aqui](https://github.com/humbanew/wertsfy/pulls).

## Documentação

### v1.0.x _(Arithmetic Update)_

<div align="justify">

   &nbsp;&nbsp;O primeiro leque de versões do projeto, contendo a primeira biblioteca de recursos de natureza aritmética. É o começo da construção da arquitetura que será incrementada nas próximas atualizações.

</div>


#### 📚 Bibliotecas

&nbsp;&nbsp;&nbsp;&nbsp;[Aritmeticos](https://github.com/humbanew/wertsfy/wiki/Bibliotecas#aritmeticos)

#### 🖇️ Changelog

* Adicionada biblioteca ``Aritmeticos``, suas constantes e métodos.
* Adicionado suporte de uso para Javascript.
* Adicionado hotfix de build.

___