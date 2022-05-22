import { $abbr, $acronym, $address, $anchor, $applet, $area, $article, $aside, $audio } from './components/separadorAElements'
import { $b, $base, $basefont, $bdi, $bdo, $bgsound, $big, $blink, $blockquote, $body, $br, $button } from './components/separadorBElements'
import { $canvas, $caption, $center, $cite, $code, $col, $colgroup, $content } from './components/separadorCElements'
import { $data, $datalist, $dd, $del, $details, $dfn, $dialog, $dir, $div, $dl, $dt } from './components/separadorDElements'
import { $em, $embed } from './components/separadorEElements'
import { $fieldset, $figcaption, $figure, $font, $footer, $form, $frame, $frameset } from './components/separadorFElements'
import { $h1, $h2, $h3, $h4, $h5, $h6, $head, $header, $hgroup, $hr, $html } from './components/separadorHElements'
import { $i, $iframe, $image, $img, $input, $ins } from './components/separadorIElements'
import { $kbd, $keygen } from './components/separadorKElements'
import { $label, $legend, $li, $link } from './components/separadorLElements'
import { $main, $map, $mark, $marquee, $menu, $menuitem, $meta, $meter } from './components/separadorMElements'
import { $nav, $nobr, $noembed, $noframes, $noscript } from './components/separadorNElements'
import { $object, $ol, $optgroup, $option, $output } from './components/separadorOElements'
import { $paragraph, $param, $picture, $plaintext, $portal, $pre, $progress } from './components/separadorPElements'
import { $q } from './components/separadorQElements'
import { $rb, $rp, $rt, $rtc, $ruby } from './components/separadorRElements'
import { $s, $samp, $script, $section, $select, $shadow, $slot, $small, $source, $spacer, $span, $strike, $strong, $style, $sub, $summary, $sup } from './components/separadorSElements'
import { $table, $tbody, $td, $template, $textarea, $tfoot, $th, $thead, $time, $title, $tr, $track, $tt } from './components/separadorTElements'
import { $u, $ul } from './components/separadorUElements'
import { $var, $video } from './components/separadorVElements'
import { $wbr } from './components/separadorWElements'
import { $xmp } from './components/separadorXElements'

export const lydrocCore = {

  elementos: {

    separadorA: {
      
      /** @method Gera um elemento abbr */
      abbr: $abbr,

      /** @method Gera um elemento acronym */
      acronym: $acronym,

      /** @method Gera um elemento address */
      address: $address,
      
      /** @method Gera um elemento anchor */
      anchor: $anchor,

      /** @method Gera um elemento applet */
      applet: $applet,

      /** @method Gera um elemento area */
      area: $area,

      /** @method Gera um elemento article */
      article: $article,

      /** @method Gera um elemento aside */
      aside: $aside,

      /** @method Gera um elemento audio */
      audio: $audio

    },
    
    separadorB: {

      /** @method Gera um elemento b */
      b: $b,

      /** @method Gera um elemento base */
      base: $base,

      /** @method Gera um elemento basefont */
      basefont: $basefont,

      /** @method Gera um elemento bdi */
      bdi: $bdi,

      /** @method Gera um elemento bdo */
      bdo: $bdo,

      /** @method Gera um elemento bgsound */
      bgsound: $bgsound,

      /** @method Gera um elemento big */
      big: $big,

      /** @method Gera um elemento blink */
      blink: $blink,

      /** @method Gera um elemento blockquote */
      blockquote: $blockquote,

      /** @method Gera um elemento br */
      br: $br,

      /** @method Gera um elemento button */
      button: $button,

      /** @method Gera um elemento body */
      body: $body

    },
    
    separadorC: {

      /** @method Gera um elemento canvas */
      canvas: $canvas,

      /** @method Gera um elemento caption */
      caption: $caption,

      /** @method Gera um elemento center */
      center: $center,

      /** @method Gera um elemento cite */
      cite: $cite,

      /** @method Gera um elemento code */
      code: $code,

      /** @method Gera um elemento col */
      col: $col,

      /** @method Gera um elemento colgroup */
      colgroup: $colgroup,

      /** @method Gera um elemento content */
      content: $content

    },
    
    separadorD: {

      /** @method Gera um elemento data */
      data: $data,

      /** @method Gera um elemento datalist */
      datalist: $datalist,

      /** @method Gera um elemento dd */
      dd: $dd,

      /** @method Gera um elemento del */
      del: $del,

      /** @method Gera um elemento details */
      details: $details,

      /** @method Gera um elemento dfn */
      dfn: $dfn,

      /** @method Gera um elemento dialog */
      dialog: $dialog,

      /** @method Gera um elemento dir */
      dir: $dir,

      /** @method Gera um elemento div */
      div: $div,

      /** @method Gera um elemento dl */
      dl: $dl,

      /** @method Gera um elemento dt */
      dt: $dt

    },
    
    separadorE: {

      /** @method Gera um elemento em */
      em: $em,

      /** @method Gera um elemento embed */
      embed: $embed,

    },
    
    separadorF: {

      /** @method Gera um elemento fieldset */
      fieldset: $fieldset,

      /** @method Gera um elemento figcaption */
      figcaption: $figcaption,

      /** @method Gera um elemento figure */
      figure: $figure,

      /** @method Gera um elemento font */
      font: $font,

      /** @method Gera um elemento footer */
      footer: $footer,

      /** @method Gera um elemento form */
      form: $form,

      /** @method Gera um elemento frame */
      frame: $frame,

      /** @method Gera um elemento frameset */
      frameset: $frameset,

    },
    
    separadorG: {},

    separadorH: {

      /** @method Gera um elemento h1 */
      h1: $h1,

      /** @method Gera um elemento h2 */
      h2: $h2,

      /** @method Gera um elemento h3 */
      h3: $h3,

      /** @method Gera um elemento h4 */
      h4: $h4,

      /** @method Gera um elemento h5 */
      h5: $h5,

      /** @method Gera um elemento h6 */
      h6: $h6,

      /** @method Gera um elemento head */
      head: $head,

      /** @method Gera um elemento header */
      header: $header,

      /** @method Gera um elemento hgroup */
      hgroup: $hgroup,

      /** @method Gera um elemento hr */
      hr: $hr,

      /** @method Gera um elemento html */
      html: $html

    },
    
    separadorI: {

      /** @method Gera um elemento i */
      $i: $i,

      /** @method Gera um elemento iframe */
      iframe: $iframe,

      /** @method Gera um elemento image */
      image: $image,

      /** @method Gera um elemento img */
      img: $img,

      /** @method Gera um elemento input */
      input: $input,

      /** @method Gera um elemento ins */
      ins: $ins

    },
    
    separadorJ: {},

    separadorK: {

      /** @method Gera um elemento kbd */
      kbd: $kbd,

      /** @method Gera um elemento keygen */
      keygen: $keygen

    },
    
    separadorL: {

      /** @method Gera um elemento label */
      label: $label,

      /** @method Gera um elemento legend */
      legend: $legend,

      /** @method Gera um elemento li */
      li: $li,

      /** @method Gera um elemento link */
      link: $link

    },
    
    separadorM: {

      /** @method Gera um elemento main */
      main: $main,

      /** @method Gera um elemento map */
      map: $map,

      /** @method Gera um elemento mark */
      mark: $mark,

      /** @method Gera um elemento menu */
      marquee: $marquee,

      /** @method Gera um elemento menu */
      menu: $menu,

      /** @method Gera um elemento meta */
      menuitem: $menuitem,

      /** @method Gera um elemento meta */
      meta: $meta,

      /** @method Gera um elemento meter */
      meter: $meter

    },
    
    separadorN: {

      /** @method Gera um elemento nav */
      nav: $nav,

      /** @method Gera um elemento noscript */
      nobr: $nobr,

      /** @method Gera um elemento noscript */
      noembed: $noembed,

      /** @method Gera um elemento noframes */
      noframes: $noframes,

      /** @method Gera um elemento noscript */
      noscript: $noscript

    },
    
    separadorO: {

      /** @method Gera um elemento object */
      object: $object,

      /** @method Gera um elemento ol */
      ol: $ol,

      /** @method Gera um elemento optgroup */
      optgroup: $optgroup,

      /** @method Gera um elemento option */
      option: $option,

      /** @method Gera um elemento output */
      output: $output

    },
    
    separadorP: {

      /** @method Gera um elemento p */
      paragraph: $paragraph,

      /** @method Gera um elemento param */
      param: $param,

      /** @method Gera um elemento picture */
      picture: $picture,

      /** @method Gera um elemento plaintext */
      plaintext: $plaintext,

      /** @method Gera um elemento portal */
      portal: $portal,

      /** @method Gera um elemento pre */
      pre: $pre,

      /** @method Gera um elemento progress */
      progress: $progress

    },
    
    separadorQ: {

      /** @method Gera um elemento q */
      q: $q

    },
    
    separadorR: {

      /** @method Gera um elemento rp */
      rb: $rb,

      /** @method Gera um elemento rp */
      rp: $rp,

      /** @method Gera um elemento rt */
      rt: $rt,

      /** @method Gera um elemento rtc */
      rtc: $rtc,

      /** @method Gera um elemento ruby */
      ruby: $ruby

    },
    
    separadorS: {

      /** @method Gera um elemento s */
      s: $s,

      /** @method Gera um elemento samp */
      samp: $samp,

      /** @method Gera um elemento script */
      script: $script,

      /** @method Gera um elemento section */
      section: $section,

      /** @method Gera um elemento select */
      select: $select,

      /** @method Gera um elemento shadow */
      shadow: $shadow,

      /** @method Gera um elemento slot */
      slot: $slot,

      /** @method Gera um elemento small */
      small: $small,

      /** @method Gera um elemento source */
      source: $source,

      /** @method Gera um elemento spacer */
      spacer: $spacer,

      /** @method Gera um elemento span */
      span: $span,

      /** @method Gera um elemento strong */
      strike: $strike,

      /** @method Gera um elemento strong */
      strong: $strong,

      /** @method Gera um elemento style */
      style: $style,

      /** @method Gera um elemento sub */
      sub: $sub,

      /** @method Gera um elemento summary */
      summary: $summary,

      /** @method Gera um elemento sup */
      sup: $sup
    
    },
    
    separadorT: {

      /** @method Gera um elemento table */
      table: $table,

      /** @method Gera um elemento tbody */
      tbody: $tbody,

      /** @method Gera um elemento td */
      td: $td,

      /** @method Gera um elemento template */
      template: $template,

      /** @method Gera um elemento textarea */
      textarea: $textarea,

      /** @method Gera um elemento tfoot */
      tfoot: $tfoot,

      /** @method Gera um elemento th */
      th: $th,

      /** @method Gera um elemento thead */
      thead: $thead,

      /** @method Gera um elemento time */
      time: $time,

      /** @method Gera um elemento title */
      title: $title,

      /** @method Gera um elemento tr */
      tr: $tr,

      /** @method Gera um elemento track */
      track: $track,

      /** @method Gera um elemento tt */
      tt: $tt

    },
    
    separadorU: {

      /** @method Gera um elemento u */
      u: $u,

      /** @method Gera um elemento ul */
      ul: $ul

    },
    
    separadorV: {

      /** @method Gera um elemento video */
      var: $var,

      /** @method Gera um elemento video */
      video: $video

    },

    separadorW: {

      /** @method Gera um elemento wbr */
      wbr: $wbr

    },

    separadorX: {

      /** @method Gera um elemento xmp */
      xmp: $xmp

    },
    
    separadorY: {},
    
    separadorZ: {},
    
  }

};