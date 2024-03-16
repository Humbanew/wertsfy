import { listaVersoes, DescontinuosVersions } from '../View/docsgen.js';

// Controle de geração de elementos na árvore DOM
let criadorDeItens = new DescontinuosVersions();
listaVersoes.appendChild(criadorDeItens.criaElementoLista("prereboot/v1.0.0-alpha"));
listaVersoes.appendChild(criadorDeItens.criaElementoLista("prereboot/v1.0.0-beta-i"));
listaVersoes.appendChild(criadorDeItens.criaElementoLista("prereboot/v1.0.0-beta-ii"));
listaVersoes.appendChild(criadorDeItens.criaElementoLista("prereboot/v1.0.0"));
listaVersoes.appendChild(criadorDeItens.criaElementoLista("prereboot/v1.1.0"));
listaVersoes.appendChild(criadorDeItens.criaElementoLista("prereboot/v1.1.1"));
listaVersoes.appendChild(criadorDeItens.criaElementoLista("prereboot/v1.1.2"));
listaVersoes.appendChild(criadorDeItens.criaElementoLista("prereboot/v1.1.3"));
listaVersoes.appendChild(criadorDeItens.criaElementoLista("prereboot/v1.2.0-1"));
listaVersoes.appendChild(criadorDeItens.criaElementoLista("prereboot/v1.2.0-2"));
listaVersoes.appendChild(criadorDeItens.criaElementoLista("prereboot/v1.2.0-3"));
listaVersoes.appendChild(criadorDeItens.criaElementoLista("prereboot/v1.2.0-4"));
listaVersoes.appendChild(criadorDeItens.criaElementoLista("prereboot/v1.2.0-5"));
listaVersoes.appendChild(criadorDeItens.criaElementoLista("prereboot/v1.2.0"));
listaVersoes.appendChild(criadorDeItens.criaElementoLista("prereboot/v2.0.0-R"));
listaVersoes.appendChild(criadorDeItens.criaElementoLista("prereboot/v2.0.0-RM"));
listaVersoes.appendChild(criadorDeItens.criaElementoLista("prereboot/v2.0.0-outsider-alpha"));
listaVersoes.appendChild(criadorDeItens.criaElementoLista("prereboot/v2.0.0-outsider-beta"));
listaVersoes.appendChild(criadorDeItens.criaElementoLista("prereboot/v2.0.0-outsider-development"));
listaVersoes.appendChild(criadorDeItens.criaElementoLista("prereboot/v2.0.0"));
listaVersoes.appendChild(criadorDeItens.criaElementoLista("v0.0.1"));
listaVersoes.appendChild(criadorDeItens.criaElementoLista("v0.1.0-rc"));
listaVersoes.appendChild(criadorDeItens.criaElementoLista("v0.2.0"));
