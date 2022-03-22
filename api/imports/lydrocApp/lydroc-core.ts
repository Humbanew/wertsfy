import { base } from "./components/base-element";
import { head } from "./components/head-element";
import { html } from "./components/html-element";
import { link } from "./components/link-element";
import { meta } from "./components/meta-element";

export let lydrocCore = {

  ferramentas: {

    html: html(),

    base: base(),

    head: head(),

    link: link(),

    meta: meta()

  }


};