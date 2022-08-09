import { WLydroc } from "../library/wlydroc.lib";

document.querySelector("html").id = "@wtfy-gh-pg-root";
WLydroc.adicionaVinculoAoElemento("@wtfy-gh-pg-root", "@wtfy-gh-pg-cab");
WLydroc.criaElementoComum("head", "@wtfy-gh-pg-cab");
WLydroc.criaElementoComum("link", "@wtfy-gh-pg-icon");
WLydroc.adicionaVinculoAoElemento("@wtfy-gh-pg-cab", "@wtfy-gh-pg-icon");
WLydroc.adicionaAtributoAoElemento("rel", "@wtfy-gh-pg-icon", "icon");
WLydroc.adicionaAtributoAoElemento("href", "@wtfy-gh-pg-icon", "./icons/favicon.png");
