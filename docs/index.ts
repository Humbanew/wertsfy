import { WLydroc } from "../library/wlydroc.lib";

WLydroc.criaElementoComum("head", "@wtfy-gh-pg-cabecalho");
WLydroc.criaElementoComum("link", "@wtfy-gh-pg-icon");
WLydroc.adicionaAtributoAoElemento("rel", "@wtfy-gh-pg-icon", "icon");
WLydroc.adicionaAtributoAoElemento("href", "@wtfy-gh-pg-icon", "./icons/favicon.png");
