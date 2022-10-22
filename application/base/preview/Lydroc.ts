/** 
 * 
 * // links //
 * - https://developer.mozilla.org/en-US/docs/Web/HTML/Element;
 * - https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes;
 * - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques;
 * 
 * html elements
 * 
 * \_ event handler attributes:
 *    \\ onabort, 
 *    \\ onautocomplete, 
 *    \\ onautocompleteerror, 
 *    \\ onblur, 
 *    \\ oncancel, 
 *    \\ oncanplay, 
 *    \\ oncanplaythrough, 
 *    \\ onchange,
 *    \\ onclick,
 *    \\ onclose,
 *    \\ oncontextmenu,
 *    \\ oncuechange,
 *    \\ ondblclick,
 *    \\ ondrag,
 *    \\ ondragend,
 *    \\ ondragenter,
 *    \\ ondragleave,
 *    \\ ondragover,
 *    \\ ondragstart,
 *    \\ ondrop,
 *    \\ ondurationchange,
 *    \\ onemptied,
 *    \\ onended,
 *    \\ onerror,
 *    \\ onfocus,
 *    \\ oninput,
 *    \\ oninvalid,
 *    \\ onkeydown,
 *    \\ onkeypress,
 *    \\ onkeyup,
 *    \\ onload,
 *    \\ onloadeddata,
 *    \\ onloadedmetadata,
 *    \\ onloadstart,
 *    \\ onmousedown,
 *    \\ onmouseenter,
 *    \\ onmouseleave,
 *    \\ onmousemove,
 *    \\ onmouseout,
 *    \\ onmouseover,
 *    \\ onmouseup,
 *    \\ onmousewheel,
 *    \\ onpause,
 *    \\ onplay,
 *    \\ onplaying,
 *    \\ onprogress,
 *    \\ onratechange,
 *    \\ onreset,
 *    \\ onresize,
 *    \\ onscroll,
 *    \\ onseeked,
 *    \\ onseeking,
 *    \\ onselect,
 *    \\ onshow,
 *    \\ onsort,
 *    \\ onstalled,
 *    \\ onsubmit,
 *    \\ onsuspend,
 *    \\ ontimeupdate,
 *    \\ ontoggle,
 *    \\ onvolumechange,
 *    \\ onwaiting.
 */ 
 /** 
 * \_ global attributes:
 *    \\ accesskey,
 *    \\ autocapitalize [off or none, on or sentences, words, characters],
 *    \\ autofocus,
 *    \\ class,
 *    \\ contenteditable [true, false],
 *    \\ contextmenu (deprecated),
 *    \\ data-*,
 *    \\ dir [ltr, rtl, auto],
 *    \\ draggable [true, false],
 *    \\ enterkeyhint,
 *    \\ exportparts (experimental),
 *    \\ hidden, 
 *    \\ id,
 *    \\ inputmode,
 *    \\ is,
 *    \\ itemid,
 *    \\ itemprop,
 *    \\ itemref,
 *    \\ itemscope,
 *    \\ itemtype,
 *    \\ lang,
 *    \\ nonce,
 *    \\ part,
 *    \\ role,
 *    \\ slot,
 *    \\ spellcheck,
 *    \\ style,
 *    \\ tabindex,
 *    \\ title,
 *    \\ translate.
 */ 
 /**
 *  \_ aria attributes:
 *    \\_ roles:
 *        \\\_ widget roles:
 *            \\ button,
 *            \\ checkbox,
 *            \\ gridcell,
 *            \\ link,
 *            \\ menuitem,
 *            \\ menuitemcheckbox,
 *            \\ menuitemradio,
 *            \\ option,
 *            \\ progressbar,
 *            \\ radio,
 *            \\ scrollbar,
 *            \\ searchbox,
 *            \\ separator (when focusable),
 *            \\ slider,
 *            \\ spinbutton,
 *            \\ switch,
 *            \\ tab,
 *            \\ tabpanel,
 *            \\ textbox,
 *            \\ treeitem.
 * 
 *        \\\_ composite roles:
 *            \\ combobox,
 *            \\ grid, 
 *            \\ row, 
 *            \\ gridcell, 
 *            \\ rowheader, 
 *            \\ columnheader,
 *            \\ listbox,
 *            \\ option,
 *            \\ menu,
 *            \\ menubar,
 *            \\ radiogroup,
 *            \\ radio,
 *            \\ tablist,
 *            \\ tab,
 *            \\ tabpanel,
 *            \\ tree,
 *            \\ treegrid.
 * 
 *         \\\_ document structure roles:
 *            \\ application,
 *            \\ article,
 *            \\ cell,
 *            \\ columnheader,
 *            \\ definition,
 *            \\ directory,
 *            \\ document,
 *            \\ feed,
 *            \\ figure,
 *            \\ group,
 *            \\ heading,
 *            \\ img,
 *            \\ list,
 *            \\ listitem,
 *            \\ math,
 *            \\ none,
 *            \\ note,
 *            \\ presentation,
 *            \\ row,
 *            \\ rowgroup,
 *            \\ rowheader,
 *            \\ separator,
 *            \\ table,
 *            \\ term,
 *            \\ toolbar,
 *            \\ tooltip.
 * 
 *         \\\_ landmark roles:
 *            \\ banner,
 *            \\ complementary,
 *            \\ contentinfo,
 *            \\ form,
 *            \\ main,
 *            \\ navigation,
 *            \\ region,
 *            \\ search.
 *
 *        \\\_ live region roles:
 *            \\ alert,
 *            \\ log,
 *            \\ marquee,
 *            \\ status,
 *            \\ timer.
 * 
 *        \\\_ rindow roles:
 *            \\ alertdialog,
 *            \\ dialog.
 *      
 *    \\_ states and properties:
 *        \\\_ widget attributes:
 *            \\ aria-autocomplete,
 *            \\ aria-checked,
 *            \\ aria-current,
 *            \\ aria-disabled,
 *            \\ aria-errormessage,
 *            \\ aria-expanded,
 *            \\ aria-haspopup,
 *            \\ aria-hidden,
 *            \\ aria-invalid,
 *            \\ aria-label,
 *            \\ aria-level,
 *            \\ aria-modal,
 *            \\ aria-multiline,
 *            \\ aria-multiselectable,
 *            \\ aria-orientation,
 *            \\ aria-placeholder,
 *            \\ aria-pressed,
 *            \\ aria-readonly,
 *            \\ aria-required,
 *            \\ aria-selected,
 *            \\ aria-sort,
 *            \\ aria-valuemax,
 *            \\ aria-valuemin,
 *            \\ aria-valuenow,
 *            \\ aria-valuetext.
 *
 *        \\\_ live region attributes:
 *            \\ aria-live,
 *            \\ aria-relevant,
 *            \\ aria-atomic,
 *            \\ aria-busy.
 *
 *        \\\_ drag & drop attributes:
 *            \\ aria-dropeffect (deprecated),
 *            \\ aria-grabbed (deprecated).
 *
 *        \\\_ relationship attributes:
 *            \\ aria-activedescendant,
 *            \\ aria-colcount,
 *            \\ aria-colindex,
 *            \\ aria-colspan,
 *            \\ aria-controls,
 *            \\ aria-describedby,
 *            \\ aria-details,
 *            \\ aria-errormessage,
 *            \\ aria-flowto,
 *            \\ aria-labelledby,
 *            \\ aria-owns,
 *            \\ aria-posinset,
 *            \\ aria-rowcount,
 *            \\ aria-rowindex,
 *            \\ aria-rowspan,
 *            \\ aria-setsize.
 *
 *        \\\_ microsoftEdge-specific properties:
 *            \\ x-ms-aria-flowfrom Non-standard.
 */ 
 /** 
 * <html> 
 * \_ global attributes,
 * \_ attributes: 
 *    \\ manifest (deprecated, non-standand), 
 *    \\ version (deprecated), 
 *    \\ xmlns.
 * 
 * <base> 
 * \_ global attributes,
 * \_ attributes: 
 *    \\ href, 
 *    \\ target. 
 *       # _self, 
 *       # _blank, 
 *       # _parent, 
 *       # _top.
 * 
 * <head> 
 * \_ global attributes,
 * \_ attributes: 
 *    \\ profile (deprecated, non-standand).
 * 
 * <link>
 * \_ global attributes,
 * \_ attributes: 
 *    \\ as, 
 *       # audio, 
 *       # document, 
 *       # embed, 
 *       # fetch, 
 *       # font, 
 *       # image, 
 *       # object, 
 *       # script, 
 *       # style, 
 *       # track, 
 *       # video, 
 *       # worker. 
 *    \\ crossorigin 
 *       # anonymous, 
 *       # use-credentials. 
 *    \\ disabled (deprecated, non-standand), 
 *    \\ fetchpriority (experimental),
 *       # high, 
 *       # low, 
 *       # auto. 
 *    \\ href, 
 *    \\ hreflang, 
 *    \\ imagesizes, 
 *    \\ imagesrcset, 
 *    \\ integrity, 
 *    \\ media, 
 *    \\ prefetch (experimental), 
 *    \\ referrerpolicy,
 *       # no-referrer, 
 *       # no-referrer-when-downgrade, 
 *       # origin, 
 *       # origin-when-cross-origin, 
 *       # unsafe-url. 
 *    \\ rel, 
 *    \\ sizes (experimental),
 *       # any, 
 *       # white-space.
 *         ## "<width in pixels>x<height in pixels> or <width in pixels>X<height in pixels>". 
 *    \\ title, 
 *    \\ type, 
 *    \\ methods (deprecated, non-standand), 
 *    \\ target (deprecated), 
 *    \\ charset (deprecated), 
 *    \\ rev (deprecated).
 *
 * <meta>
 * \_ global attributes,
 * \_ attributes: 
 *    \\ charset, 
 *    \\ content, 
 *    \\ http-equiv,
 *       # content-security-policy, 
 *       # content-type, 
 *       # default-style, 
 *       # x-ua-compatible, 
 *       # refresh. 
 *    \\ name.
 * 
 * <style>
 * \_ global attributes,
 * \_ attributes:
 *    \\ media,
 *    \\ nonce,
 *    \\ title,
 *    \\ type (deprecated),
 *    
 * 
 * <title>
 * \_ global attributes.
 * 
 * <body>
 * \_ global attributes,
 * \_ attributes:
 *    \\ alink (deprecated),
 *    \\ background (deprecated),
 *    \\ bgcolor (deprecated),
 *    \\ bottommargin (deprecated),
 *    \\ leftmargin (deprecated),
 *    \\ link (deprecated),
 *    \\ onafterprint,
 *    \\ onbeforeprint,
 *    \\ onbeforeunload,
 *    \\ onblur,
 *    \\ onerror,
 *    \\ onfocus,
 *    \\ onhashchange,
 *    \\ onlanguagechange,
 *    \\ onload,
 *    \\ onmessage,
 *    \\ onoffline,
 *    \\ ononline,
 *    \\ onpopstate,
 *    \\ onredo,
 *    \\ onresize,
 *    \\ onstorage,
 *    \\ onundo,
 *    \\ onunload,
 *    \\ rightmargin (deprecated),
 *    \\ text (deprecated),
 *    \\ topmargin (deprecated),
 *    \\ vlink (deprecated).
 * 
 * <address>
 * \_ global attributes.
 * 
 * <article>
 * \_ global attributes.
 * 
 * <aside>
 * \_ global attributes.
 * 
 * <footer>
 * \_ global attributes.
 * 
 * <header>
 * \_ global attributes.
 * 
 * <h1>, <h2>, <h3>, <h4>, <h5>, <h6>
 * \_ global attributes.
 * 
 * <main>
 * \_ global attributes.
 * 
 * <nav>
 * \_ global attributes.
 * 
 * <section>
 * \_ global attributes.
 * 
 * <blockquote>
 * \_ global attributes,
 * \_ attributes:
 *    \\ cite.
 * 
 * <dd>
 * \_ global attributes,
 * \_ attributes:
 *    \\ nowrap (deprecated, non-standard).
 * 
 * <div>
 * \_ global attributes,
 * \_ attributes:
 *    \\ align (deprecated).
 * 
 * <dl>
 * \_ global attributes.
 * 
 * <dt>
 * \_ global attributes.
 * 
 * <figcaption>
 * \_ global attributes.
 * 
 * <figure>
 * \_ global attributes.
 * 
 * <hr>
 * \_ global attributes,
 * \_ attributes:
 *    \\ align (deprecated, non-standard),
 *    \\ color (deprecated, non-standard),
 *    \\ noshade (deprecated, non-standard),
 *    \\ size (deprecated, non-standard),
 *    \\ width (deprecated, non-standard).
 * 
 * <li>
 * \_ global attributes,
 * \_ attributes:
 *    \\ value,
 *    \\ type (deprecated, non-standard).
 *       # a, 
 *       # A, 
 *       # i, 
 *       # I, 
 *       # 1. 
 * 
 * <menu>
 * \_ global attributes.
 * 
 * 
 * <ol>
 * \_ global attributes,
 * \_ attributes:
 *    \\ reversed,
 *    \\ start,
 *    \\ type.
 *       # a, 
 *       # A, 
 *       # i, 
 *       # I, 
 *       # 1.
 * 
 * <p>
 * \_ global attributes.
 * 
 * <pre>
 * \_ global attributes,
 * \_ attributes:
 *    \\ cols (deprecated, non-standard),
 *    \\ width (deprecated, non-standard),
 *    \\ wrap (deprecated, non-standard).
 * 
 * <ul>
 * \_ global attributes,
 * \_ attributes:
 *    \\ compact (deprecated, non-standard),
 *    \\ type (deprecated, non-standard).
 *       # circle, 
 *       # disc, 
 *       # square, 
 *       # triangle.
 * 
 * <a>
 * \_ global attributes,
 * \_ attributes:
 *    \\ download,
 *    \\ href,
 *    \\ hreflang,
 *    \\ ping,
 *    \\ referrerpolicy,
 *       # no-referrer, 
 *       # no-referrer-when-downgrade, 
 *       # origin, 
 *       # origin-when-cross-origin, 
 *       # same-origin, 
 *       # strict-origin, 
 *       # strict-origin-when-cross-origin, 
 *       # unsafe-url.
 *    \\ rel, 
 *    \\ target, 
 *       # _self, 
 *       # _blank, 
 *       # _parent, 
 *       # _top.
 *    \\ type,
 *    \\ charset (deprecated),
 *    \\ coords (deprecated),
 *    \\ name (deprecated),
 *    \\ rev (deprecated),
 *    \\ shape (deprecated).
 * 
 * <abbr>
 * \_ global attributes,
 * \_ attributes:
 *    \\ title.
 * 
 * <b>
 * \_ global attributes.
 * 
 * <bdi>
 * \_ global attributes.
 * 
 * <bdo>
 * \_ global attributes,
 * \_ attributes:
 *    \\ dir,
 *       # ltr,
 *       # rtl.
 * 
 * <br>
 * \_ global attributes,
 * \_ attributes:
 *    \\ clear (deprecated).
 * 
 * 
 * <cite>
 * \_ global attributes.
 * 
 * <code>
 * \_ global attributes.
 * 
 * <data>
 * \_ global attributes,
 * \_ attributes:
 *    \\ value.
 * 
 * <dfn>
 * \_ global attributes,
 * \_ attributes:
 *    \\ title.
 * 
 * <em>
 * \_ global attributes.
 * 
 * <i>
 * \_ global attributes.
 * 
 * <kbd>
 * \_ global attributes.
 * 
 * <mark>
 * \_ global attributes.
 * 
 * <q>
 * \_ global attributes,
 * \_ attributes:
 *    \\ cite.
 * 
 * <rp>
 * \_ global attributes.
 * 
 * <rt>
 * \_ global attributes.
 *  
 * <ruby>
 * \_ global attributes.
 * 
 * <s>
 * \_ global attributes.
 * 
 * <samp>
 * \_ global attributes.
 * 
 * <small>
 * \_ global attributes.
 * 
 * <span>
 * \_ global attributes.
 * 
 * <strong>
 * \_ global attributes.
 * 
 * <sub>
 * \_ global attributes.
 * 
 * <sup>
 * \_ global attributes.
 * 
 * <time>
 * \_ global attributes,
 * \_ attributes:
 *    \\ datetime,
 *    \\ pubdate.
 * 
 * <u>
 * \_ global attributes.
 * 
 * <var>
 * \_ global attributes.
 * 
 * <wbr>
 * \_ global attributes.
 * 
 * <area>
 * \_ global attributes,
 * \_ attributes:
 *    \\ alt,
 *    \\ coords,
 *       # rect,
 *       # circle,
 *       # poly.
 *    \\ download,
 *    \\ href,
 *    \\ hreflang (deprecated),
 *    \\ ping,
 *    \\ referrerpolicy,
 *       # no-referrer,
 *       # no-referrer-when-downgrade,
 *       # origin,
 *       # origin-when-cross-origin,
 *       # same-origin,
 *       # strict-origin,
 *       # strict-origin-when-cross-origin,
 *       # unsafe-url.
 *    \\ rel,
 *    \\ shape,
 *    \\ target, 
 *       # _self, 
 *       # _blank, 
 *       # _parent, 
 *       # _top.
 *    \\ name (deprecated),
 *    \\ nohref (deprecated),
 *    \\ type (deprecated).
 * 
 * <audio>
 * \_ global attributes,
 * \_ attributes:
 *    \\ autoplay,
 *    \\ controls,
 *    \\ controlslist (deprecated, experimental),
 *    \\ crossorigin,
 *       # anonymous, 
 *       # use-credentials.
 *    \\ disableremoteplayback,
 *    \\ loop,
 *    \\ muted,
 *    \\ preload,
 *       # none,
 *       # metadata,
 *       # auto.
 *    \\ src.
 * \_ events:
 *    \\ audioprocess,
 *    \\ canplay,
 *    \\ canplaythrough,
 *    \\ complete,
 *    \\ durationchange,
 *    \\ emptied,
 *    \\ ended,
 *    \\ loadeddata,
 *    \\ loadedmetadata,
 *    \\ pause,
 *    \\ play,
 *    \\ playing,
 *    \\ ratechange,
 *    \\ seeked,
 *    \\ seeking,
 *    \\ stalled,
 *    \\ suspend,
 *    \\ timeupdate,
 *    \\ volumechange,
 *    \\ waiting.
 * 
 * <img>
 * \_ global attributes,
 * \_ attributes:
 *    \\ alt,
 *    \\ crossorigin, 
 *       # anonymous, 
 *       # use-credentials.
 *    \\ decoding,
 *       # sync,
 *       # async,
 *       # auto.
 *    \\ fetchpriority,
 *       # high,
 *       # low,
 *       # auto.
 *    \\ height,
 *    \\ ismap,
 *    \\ loading,
 *       # eager,
 *       # lazy.
 *    \\ referrerpolicy,
 *       # no-referrer,
 *       # no-referrer-when-downgrade,
 *       # origin,
 *       # origin-when-cross-origin,
 *       # same-origin,
 *       # strict-origin,
 *       # strict-origin-when-cross-origin,
 *       # unsafe-url.
 *    \\ sizes,
 *    \\ src,
 *    \\ srcset,
 *    \\ width,
 *    \\ usemap,
 *    \\ align (deprecated),
 *       # top,
 *       # middle,
 *       # bottom,
 *       # left,
 *       # right.
 *    \\ border (deprecated),
 *    \\ hspace (deprecated),
 *    \\ longdesc (deprecated),
 *    \\ name (deprecated),
 *    \\ vspace (deprecated).
 *    
 * <map>
 * \_ global attributes,
 * \_ attributes:
 *    \\ name.
 * 
 * <track>
 * \_ global attributes,
 * \_ attributes:
 *    \\ default,
 *    \\ kind,
 *       # subtitles,
 *       # captions,
 *       # descriptions,
 *       # chapters,
 *       # metadata.
 *    \\ label,
 *    \\ src,
 *    \\ srclang. 
 * 
 * <video>
 * \_ global attributes,
 * \_ attributes:
 *    \\ autoplay,
 *    \\ autopictureinpicture (experimental),
 *    \\ controls,
 *    \\ controlslist (deprecated, experimental),
 *    \\ crossorigin, 
 *       # anonymous, 
 *       # use-credentials.
 *    \\ disablepictureinpicture (experimental),
 *    \\ disableremoteplayback (experimental),
 *    \\ height,
 *    \\ loop,
 *    \\ muted,
 *    \\ playsinline,
 *    \\ poster,
 *    \\ preload,
 *       # none,
 *       # metadata,
 *       # auto.
 *    \\ src,
 *    \\ width.    
 * 
 * 
 * // Embedded content
 * <embed>
 * \_ global attributes,
 * \_ attributes:
 *    \\ height,
 *    \\ src,
 *    \\ type,
 *    \\ width. 
 * 
 * <iframe>
 * \_ global attributes,
 * \_ attributes:
 *    \\ allow,
 *    \\ allowfullscreen,
 *    \\ allowpaymentrequest (experimental),
 *    \\ csp,
 *    \\ fetchpriority,
 *       # high,
 *       # low,
 *       # auto.
 *    \\ height,
 *    \\ loading,
 *       # eager, 
 *       # lazy.
 *    \\ name,
 *    \\ referrerpolicy,
 *       # no-referrer,
 *       # no-referrer-when-downgrade,
 *       # origin,
 *       # origin-when-cross-origin,
 *       # same-origin,
 *       # strict-origin,
 *       # strict-origin-when-cross-origin,
 *       # unsafe-url.
 *    \\ sandbox,
 *       # allow-downloads-without-user-activation (experimental),
 *       # allow-downloads,
 *       # allow-forms,
 *       # allow-modals,
 *       # allow-orientation-lock,
 *       # allow-pointer-lock,
 *       # allow-popups,
 *       # allow-popups-to-escape-sandbox,
 *       # allow-presentation,
 *       # allow-same-origin,
 *       # allow-scripts,
 *       # allow-storage-access-by-user-activation (experimental),
 *       # allow-top-navegation,
 *       # allow-top-navigation-by-user-activation.
 *    \\ src,
 *    \\ srcdoc,
 *    \\ width,
 *    \\ align (deprecated),
 *    \\ frameborder (deprecated),
 *    \\ longdesc (deprecated),
 *    \\ marginheight (deprecated),
 *    \\ marginwidth (deprecated),
 *    \\ scrolling (deprecated),
 *       # auto,
 *       # yes,
 *       # no.
 * 
 * <object>
 * \_ global attributes,
 * \_ attributes:
 *    \\ archive (deprecated),
 *    \\ border (deprecated),
 *    \\ classid (deprecated),
 *    \\ codebase (deprecated),
 *    \\ codetype (deprecated),
 *    \\ data,
 *    \\ declare (deprecated),
 *    \\ form,
 *    \\ height,
 *    \\ name,
 *    \\ standby (deprecated),
 *    \\ type,
 *    \\ usemap,
 *    \\ width.
 * 
 * <picture>
 * \_ global attributes.
 * 
 * <portal>
 * \_ global attributes,
 * \_ attributes:
 *    \\ referrerpolicy,
 *    \\ src.
 * 
 * <source>
 * \_ global attributes,
 * \_ attributes:
 *    \\ type,
 *    \\ src,
 *    \\ srcset,
 *    \\ sizes,
 *    \\ media,
 *    \\ height,
 *    \\ width.
 * 
 * // SVG and MathML
 * <svg>
 * \_ global attributes,
 * 
 * <math>
 * \_ global attributes,
 * 
 * // Scripting
 * <canvas>
 * \_ global attributes,
 * 
 * <noscript>
 * \_ global attributes,
 * 
 * <script>
 * \_ global attributes,
 * 
 * // Demarcating edits
 * <del>
 * \_ global attributes,
 * 
 * <ins>
 * \_ global attributes,
 * 
 * // Table content
 * <caption>
 * \_ global attributes,
 * 
 * <col>
 * \_ global attributes,
 * 
 * <colgroup>
 * \_ global attributes,
 * 
 * <table>
 * \_ global attributes,
 * 
 * <tbody>
 * \_ global attributes,
 * 
 * <td>
 * \_ global attributes,
 * 
 * <tfoot>
 * \_ global attributes,
 * 
 * <th>
 * \_ global attributes,
 * 
 * <thead>
 * \_ global attributes,
 * 
 * <tr>
 * \_ global attributes,
 * 
 * // Forms
 * <button>
 * \_ global attributes,
 * 
 * <datalist>
 * \_ global attributes,
 * 
 * <fieldset>
 * \_ global attributes,
 * 
 * <form>
 * \_ global attributes,
 * 
 * <input>
 * \_ global attributes,
 * 
 * <label>
 * \_ global attributes,
 * 
 * <legend>
 * \_ global attributes,
 * 
 * <meter>
 * \_ global attributes,
 * 
 * <optgroup>
 * \_ global attributes,
 * 
 * <option>
 * \_ global attributes,
 * 
 * <output>
 * \_ global attributes,
 * 
 * <progress>
 * \_ global attributes,
 * 
 * <select>
 * \_ global attributes,
 * 
 * <textarea>
 * \_ global attributes,
 * 
 * // Interactive elements
 * <details>
 * \_ global attributes,
 * 
 * <dialog>
 * \_ global attributes,
 * 
 * <summary>
 * \_ global attributes,
 * 
 * // Web Components
 * <slot>
 * \_ global attributes,
 * 
 * <template>
 * \_ global attributes,
 * 
 * // Obsolete and deprecated elements
 * <acronym>
 * \_ global attributes,
 * 
 * <applet>
 * \_ global attributes,
 * 
 * <bgsound>
 * \_ global attributes,
 * 
 * <big>
 * \_ global attributes,
 * 
 * <blink>
 * \_ global attributes,
 * 
 * <center>
 * \_ global attributes,
 * 
 * <content>
 * \_ global attributes,
 * 
 * <dir>
 * \_ global attributes,
 * 
 * <font>
 * \_ global attributes,
 * 
 * <frameset>
 * \_ global attributes,
 * 
 * <image>
 * \_ global attributes,
 * 
 * <keygen>
 * \_ global attributes,
 * 
 * <marquee>
 * \_ global attributes,
 * 
 * <menuitem>
 * \_ global attributes,
 * 
 * <nobr>
 * \_ global attributes,
 * 
 * <noembled>
 * \_ global attributes,
 * 
 * <noframes>
 * \_ global attributes,
 * 
 * <param>
 * \_ global attributes,
 * 
 * <plaintext>
 * \_ global attributes,
 * 
 * <rb>
 * \_ global attributes,
 * 
 * <rtc>
 * \_ global attributes,
 * 
 * <shadow>
 * \_ global attributes,
 * 
 * <spacer>
 * \_ global attributes,
 * 
 * <strike>
 * \_ global attributes,
 * 
 * <tt>
 * \_ global attributes,
 * 
 * <xmp>
 * \_ global attributes,
 * 
 */

class WLydroc { }
