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
 * 
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
 * 
 * \_ aria attributes:
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
 * 
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
 *    \\ target. 
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
 */

class Lydroc { }
