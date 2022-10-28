/** 
 * 
 * // links //
 * - https://developer.mozilla.org/en-US/docs/Web/HTML/Element;
 * - https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes;
 * - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques;
 * - https://developer.mozilla.org/en-US/docs/Web/CSS/Reference;
 * - https://developer.mozilla.org/en-US/docs/Web/HTTP;
 * 
 * ?? HTML ELEMENTS AND PROPRIETIES ??
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

    import { Native } from "arch-native";
    let EventHandlersAttrs = Native.struct.constructor = { };
    let GlobalAttrs = Native.struct.constructor = { };
    let AriaAttrs = Native.struct.constructor = { };

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
 * \_ attributes:
 *    \\ baseProfile (deprecated),
 *    \\ contentScriptType (deprecated),
 *    \\ contentStyleType (deprecated),
 *    \\ height,
 *    \\ perserveAspectRadio,
 *       # none,
 *       # xMinYMin,
 *       # xMidYMin,
 *       # xMaxYMin,
 *       # xMinYMid,
 *       # xMidYMid,
 *       # xMaxYMid,
 *       # xMinYMax,
 *       # xMidYMax,
 *       # xMaxYMax,
 *       # meet,
 *       # slice.
 *    \\ version (deprecated),
 *    \\ viewbox,
 *    \\ width,
 *    \\ x,
 *    \\ y.
 * 
 * \_ core attributes:
 *    \\ id,
 *    \\ tabindex.
 * 
 * \_ styling attibutes:
 *    \\ class,
 *    \\ style.
 * 
 * \_ conditional processing attributes:
 *    \\ requiredExtensions, 
 *    \\ systemLanguage.
 *
 * \_ event attributes:
 *    \\_ animation event attributes:
 *        \\ onbegin, 
 *        \\ onend, 
 *        \\ onrepeat.
 *
 *    \\_ document event attributes:
 *        \\ onabort, 
 *        \\ onerror, 
 *        \\ onresize, 
 *        \\ onscroll, 
 *        \\ onunload.
 *
 *    \\_ document element event attributes:
 *        \\ oncopy, 
 *        \\ oncut, 
 *        \\ onpaste.
 *
 *    \\_ global event attributes:
 *        \\ oncancel, 
 *        \\ oncanplay, 
 *        \\ oncanplaythrough, 
 *        \\ onchange, 
 *        \\ onclick, 
 *        \\ onclose, 
 *        \\ oncuechange, 
 *        \\ ondblclick, 
 *        \\ ondrag, 
 *        \\ ondragend, 
 *        \\ ondragenter, 
 *        \\ ondragleave, 
 *        \\ ondragover, 
 *        \\ ondragstart, 
 *        \\ ondrop, 
 *        \\ ondurationchange, 
 *        \\ onemptied, 
 *        \\ onended, 
 *        \\ onerror, 
 *        \\ onfocus, 
 *        \\ oninput, 
 *        \\ oninvalid, 
 *        \\ onkeydown, 
 *        \\ onkeypress, 
 *        \\ onkeyup, 
 *        \\ onload, 
 *        \\ onloadeddata, 
 *        \\ onloadedmetadata, 
 *        \\ onloadstart, 
 *        \\ onmousedown, 
 *        \\ onmouseenter, 
 *        \\ onmouseleave, 
 *        \\ onmousemove, 
 *        \\ onmouseout, 
 *        \\ onmouseover, 
 *        \\ onmouseup, 
 *        \\ onmousewheel, 
 *        \\ onpause, 
 *        \\ onplay, 
 *        \\ onplaying, 
 *        \\ onprogress, 
 *        \\ onratechange, 
 *        \\ onreset, 
 *        \\ onresize, 
 *        \\ onscroll, 
 *        \\ onseeked, 
 *        \\ onseeking, 
 *        \\ onselect, 
 *        \\ onshow, 
 *        \\ onstalled, 
 *        \\ onsubmit, 
 *        \\ onsuspend, 
 *        \\ ontimeupdate, 
 *        \\ ontoggle, 
 *        \\ onvolumechange, 
 *        \\ onwaiting.
 *
 *    \\_ graphical event attributes:
 *        \\ onactivate, 
 *        \\ onfocusin, 
 *        \\ onfocusout.
 *
 *    \\_ presentation attributes:
 *        \\ clip-path, 
 *        \\ clip-rule, 
 *        \\ color, 
 *        \\ color-interpolation, 
 *        \\ color-rendering, 
 *        \\ cursor, 
 *        \\ display, 
 *        \\ fill, 
 *        \\ fill-opacity, 
 *        \\ fill-rule, 
 *        \\ filter, 
 *        \\ mask, 
 *        \\ opacity, 
 *        \\ pointer-events, 
 *        \\ shape-rendering, 
 *        \\ stroke, 
 *        \\ stroke-dasharray, 
 *        \\ stroke-dashoffset, 
 *        \\ stroke-linecap, 
 *        \\ stroke-linejoin, 
 *        \\ stroke-miterlimit, 
 *        \\ stroke-opacity, 
 *        \\ stroke-width, 
 *        \\ transform, 
 *        \\ vector-effect, 
 *        \\ visibility.
 *
 *    \\_ aria attributes:
 *        \\ aria-activedescendant, 
 *        \\ aria-atomic, 
 *        \\ aria-autocomplete, 
 *        \\ aria-busy, 
 *        \\ aria-checked, 
 *        \\ aria-colcount, 
 *        \\ aria-colindex, 
 *        \\ aria-colspan, 
 *        \\ aria-controls, 
 *        \\ aria-current, 
 *        \\ aria-describedby, 
 *        \\ aria-details, 
 *        \\ aria-disabled, 
 *        \\ aria-dropeffect, 
 *        \\ aria-errormessage, 
 *        \\ aria-expanded, 
 *        \\ aria-flowto, 
 *        \\ aria-grabbed, 
 *        \\ aria-haspopup, 
 *        \\ aria-hidden, 
 *        \\ aria-invalid, 
 *        \\ aria-keyshortcuts, 
 *        \\ aria-label, 
 *        \\ aria-labelledby, 
 *        \\ aria-level, 
 *        \\ aria-live, 
 *        \\ aria-modal, 
 *        \\ aria-multiline, 
 *        \\ aria-multiselectable, 
 *        \\ aria-orientation, 
 *        \\ aria-owns, 
 *        \\ aria-placeholder, 
 *        \\ aria-posinset, 
 *        \\ aria-pressed, 
 *        \\ aria-readonly, 
 *        \\ aria-relevant, 
 *        \\ aria-required, 
 *        \\ aria-roledescription, 
 *        \\ aria-rowcount, 
 *        \\ aria-rowindex, 
 *        \\ aria-rowspan, 
 *        \\ aria-selected, 
 *        \\ aria-setsize, 
 *        \\ aria-sort, 
 *        \\ aria-valuemax, 
 *        \\ aria-valuemin, 
 *        \\ aria-valuenow,
 *        \\ aria-valuetext, 
 *        \\ role.
 * 
 * <math>
 * \_ global attributes,
 * \_ attributes:
 *    \\ display,
 *       # block,
 *       # inline.
 * 
 * // Scripting
 * <canvas>
 * \_ global attributes,
 * \_ attributes:
 *    \\ height,
 *    \\ moz-opaque (non-standard, deprecated),
 *    \\ width.
 * 
 * <noscript>
 * \_ global attributes.
 * 
 * <script>
 * \_ global attributes,
 * \_ attributes:
 *    \\ async,
 *    \\ crossorigin 
 *       # anonymous, 
 *       # use-credentials.
 *    \\ defer, 
 *    \\ fetchpriority (experimental),
 *       # high, 
 *       # low, 
 *       # auto.
 *    \\ integrity,
 *    \\ nomodule,
 *    \\ nonce,
 *    \\ referrerpolicy,
 *       # no-referrer, 
 *       # no-referrer-when-downgrade, 
 *       # origin, 
 *       # origin-when-cross-origin, 
 *       # unsafe-url.
 *    \\ src,
 *    \\ type,
 *    \\ charset (deprecated),
 *    \\ language (deprecated, non-standard).   
 * 
 * // Demarcating edits
 * <del>
 * \_ global attributes,
 * \_ attributes:
 *    \\ cite,
 *    \\ datetime.
 * 
 * <ins>
 * \_ global attributes,
 * \_ attributes:
 *    \\ cite,
 *    \\ datetime.
 * 
 * // Table content
 * [
 *  FLOW CONTENT>>
 *     # CAPTION
 *     # COLGROUP
 *     # THEAD
 *     # TBODY
 *     # TR
 *     # TFOOT
 * ]
 * 
 * <caption>
 * \_ global attributes,
 * \_ attributes:
 *    \\ align (deprecated).
 *       # left,
 *       # right,
 *       # top,
 *       # bottom.
 * 
 * <col>
 * \_ global attributes,
 * \_ attributes:
 *    \\ span,
 *    \\ align (deprecated),
 *       # left,
 *       # right,
 *       # top,
 *       # bottom.
 *    \\ bgcolor (deprecated),
 *    \\ char (deprecated),
 *    \\ charoff (deprecated),
 *    \\ valign (deprecated),
 *       # baseline,
 *       # bottom,
 *       # middle.
 *    \\ width. 
 * 
 * <colgroup>
 * \_ global attributes,
 * \_ attributes:
 *    \\ span,
 *    \\ align (deprecated),
 *       # left,
 *       # center,
 *       # right,
 *       # justify,
 *       # char.
 *    \\ bgcolor (deprecated),
 *    \\ char (deprecated),
 *    \\ charoff (deprecated),
 *    \\ valign (deprecated).
 *       # baseline,
 *       # bottom,
 *       # middle.
 * 
 * <table>
 * \_ global attributes,
 * \_ attributes:
 *    \\ align (deprecated),
 *       # left,
 *       # center,
 *       # right.
 *    \\ bgcolor (deprecated),
 *    \\ border (deprecated),
 *    \\ cellpadding (deprecated),
 *    \\ cellspacing (deprecated),
 *    \\ frame (deprecated),
 *    \\ rules (deprecated),
 *       # none,
 *       # groups,
 *       # rows,
 *       # columns,
 *       # all.
 *    \\ summary,
 *    \\ width.
 * 
 * <tbody>
 * \_ global attributes,
 * \_ attributes:
 *    \\ align (deprecated),
 *       # left,
 *       # center,
 *       # right,
 *       # justify,
 *       # char.
 *    \\ bgcolor (deprecated),
 *    \\ char (deprecated),
 *    \\ charoff (deprecated),
 *    \\ valign (deprecated).
 *       # baseline,
 *       # bottom,
 *       # middle.
 * 
 * <td>
 * \_ global attributes,
 * \_ attributes:
 *    \\ colspan,
 *    \\ headers,
 *    \\ rowspan,
 *    \\ abbr (deprecated),
 *    \\ align (deprecated),
 *       # left,
 *       # center,
 *       # right,
 *       # justify,
 *       # char.
 *    \\ axis (deprecated),
 *    \\ bgcolor (deprecated),
 *    \\ char (deprecated),
 *    \\ charoff (deprecated),
 *    \\ scope (deprecated),
 *    \\ height (deprecated),
 *    \\ valign (deprecated),
 *       # baseline,
 *       # bottom,
 *       # middle.
 *    \\ width.
 * 
 * <tfoot>
 * \_ global attributes,
 * \_ attributes:
 *    \\ align (deprecated),
 *       # left,
 *       # center,
 *       # right,
 *       # justify,
 *       # char.
 *    \\ bgcolor (deprecated),
 *    \\ char (deprecated),
 *    \\ charoff (deprecated),
 *    \\ valign (deprecated).
 *       # baseline,
 *       # bottom,
 *       # middle.
 * 
 * <th>
 * \_ global attributes,
 * \_ attributes:
 *    \\ abbr,
 *    \\ colspan,
 *    \\ headers,
 *    \\ rowspan,
 *    \\ scope,
 *       # row,
 *       # col,
 *       # rowgroup,
 *       # colgroup.
 *    \\ align (deprecated),
 *       # left,
 *       # center,
 *       # right,
 *       # justify,
 *       # char.
 *    \\ axis (deprecated),
 *    \\ bgcolor (deprecated),
 *    \\ char (deprecated),
 *    \\ charoff (deprecated),
 *    \\ height (deprecated),
 *    \\ valign (deprecated).
 *       # baseline,
 *       # bottom,
 *       # middle.
 *    \\ width (deprecated).
 * 
 * <thead>
 * \_ global attributes,
 * \_ attributes:
 *    \\ align (deprecated),
 *       # left,
 *       # center,
 *       # right,
 *       # justify,
 *       # char.
 *    \\ bgcolor (deprecated),
 *    \\ char (deprecated),
 *    \\ charoff (deprecated),
 *    \\ valign (deprecated).
 *       # baseline,
 *       # bottom,
 *       # middle. 
 * 
 * <tr>
 * \_ global attributes,
 * \_ attributes:
 *    \\ align (deprecated),
 *       # left,
 *       # center,
 *       # right,
 *       # justify,
 *       # char.
 *    \\ bgcolor (deprecated),
 *    \\ char (deprecated),
 *    \\ charoff (deprecated),
 *    \\ valign (deprecated).
 *       # baseline,
 *       # bottom,
 *       # middle,
 *       # top.
 * 
 * // Forms
 * <button>
 * \_ global attributes,
 * \_ attributes:
 *    \\ autofocus,
 *    \\ autocomplete (non-standard),
 *    \\ disabled,
 *    \\ form,
 *    \\ formaction,
 *    \\ formenctype,
 *       # application/x-www-form-urlencoded,
 *       # multipart/form-data,
 *       # text/plain.
 *    \\ formmethod,
 *       # post,
 *       # get.
 *    \\ formnovalidate,
 *    \\ formtarget,
 *       # _self,
 *       # _blank,
 *       # _parent,
 *       # _top.
 *    \\ name,
 *    \\ type,
 *       # submit,
 *       # reset,
 *       # button.
 *    \\ value.
 * 
 * <datalist>
 * \_ global attributes.
 * 
 * <fieldset>
 * \_ global attributes,
 * \_ attributes:
 *    \\ disabled,
 *    \\ form,
 *    \\ name.
 * 
 * <form>
 * \_ global attributes,
 * \_ attributes:
 *    \\ accept (deprecated),
 *    \\ accept-charset,
 *    \\ autocaptalize (non-standard),
 *       # none,
 *       # sentences,
 *       # words,
 *       # characters.
 *    \\ autocomplete,
 *       # on,
 *       # off.
 *    \\ name,
 *    \\ rel,
 *    \\ action,
 *    \\ enctype,
 *       # application/x-www-form-urlencoded,
 *       # multipart/form-data,
 *       # text/plain.
 *    \\ method,
 *       # post,
 *       # get,
 *       # dialog.
 *    \\ novalidate,
 *    \\ target,
 *       # _self,
 *       # _blank,
 *       # _parent,
 *       # _top.
 * 
 * <input>
 * \_ global attributes,
 * \_ types:
 *    \\ button,
 *    \\ checkbox,
 *    \\ color,
 *    \\ date,
 *    \\ datetime-local,
 *    \\ email,
 *    \\ file,
 *    \\ hidden,
 *    \\ image,
 *    \\ month,
 *    \\ number,
 *    \\ password,
 *    \\ radio,
 *    \\ range,
 *    \\ reset,
 *    \\ search,
 *    \\ submit,
 *    \\ tel,
 *    \\ text,
 *    \\ time,
 *    \\ url,
 *    \\ week,
 *    \\ datetime (obsolete).
 * 
 * \_ attributes:
 *     \\ accept => file,
 *     \\ alt => text,
 *     \\ autocomplete => checkbox, radio, buttons,
 *     \\ capture => file,
 *     \\ checked => checkbox, radio,
 *     \\ disabled	=> all,
 *     \\ form =>	all,
 *     \\ formaction => image,
 *     \\ formenctype => image,
 *     \\ formmethod =>	image, submit,	
 *     \\ formnovalidate =>	image, submit,	
 *     \\ formtarget =>	image, submit,
 *     \\ height => image,
 *     \\ list => all except hidden, password, checkbox, radio, and buttons,	
 *     \\ max => date, month, week, time, datetime-local, range,
 *     \\ maxlength => text, search, url, tel, email, password,
 *     \\ min => date, month, week, time, datetime-local, range,
 *     \\ minlength => text, search, url, tel, email, password,
 *     \\ multiple =>	email, file	Boolean,
 *     \\ name =>	all,
 *     \\ pattern => text, search, url, tel, email, password,
 *     \\ placeholder => text, search, url, tel, email, password, number,
 *     \\ readonly =>	all except hidden, range, color, checkbox, radio, and buttons	Boolean,
 *     \\ required =>	all except hidden, range, color, and buttons	Boolean,
 *     \\ size =>	text, search, url, tel, email, password,
 *     \\ src => image	Same as src attribute for <img>; address of image resource,
 *     \\ step =>	date, month, week, time, datetime-local, range,
 *     \\ type =>	all,	
 *     \\ value => all,
 *     \\ width => image.
 * 
 * \_ individual attributes:
 *     \\ accept,
 *     \\ alt,
 *     \\ autocomplete,
 *     \\ autofocus,
 *     \\ capture,
 *     \\ checked,
 *     \\ dirname,
 *     \\ disabled,
 *     \\ form,
 *     \\ formaction,
 *     \\ formenctype,
 *     \\ formmethod,
 *     \\ formnovalidate,
 *     \\ formtarget,
 *     \\ height,
 *     \\ id,
 *     \\ inputmode,
 *     \\ list,
 *     \\ max,
 *     \\ maxlength,
 *     \\ min,
 *     \\ minlength,
 *     \\ multiple,
 *     \\ name,
 *     \\ pattern,
 *     \\ placeholder,
 *     \\ readonly,
 *     \\ required,
 *     \\ size,
 *     \\ src,
 *     \\ step,
 *     \\ tabindex,
 *     \\ title,
 *     \\ type,
 *     \\ value,
 *     \\ width.
 * 
 * \_ non-standard attributes:
 *     \\ autocorrect,
 *        # on,
 *        # off.
 *     \\ incremental,
 *     \\ mozactionhint,
 *     \\ orient,
 *     \\ results,
 *     \\ webkitdirectory.
 * 
 * \_ methods:
 *     \\ checkValidity(),
 *     \\ reportValidity(),
 *     \\ select(),
 *     \\ setCustomValidity(),
 *     \\ setRangeText(),
 *     \\ setSelectionRange(),
 *     \\ stepDown(),
 *     \\ stepUp().  
 * 
 * <label>
 * \_ global attributes,
 * \_ attributes:
 *    \\ for.
 * 
 * <legend>
 * \_ global attributes.
 * 
 * <meter>
 * \_ global attributes,
 * \_ attributes:
 *    \\ value,
 *    \\ min,
 *    \\ max,
 *    \\ low,
 *    \\ high,
 *    \\ optimum.
 * 
 * <optgroup>
 * \_ global attributes,
 * \_ attributes:
 *    \\ disabled,
 *    \\ label.
 * 
 * <option>
 * \_ global attributes,
 * \_ attributes:
 *    \\ disabled,
 *    \\ label,
 *    \\ selected,
 *    \\ value.
 * 
 * <output>
 * \_ global attributes,
 * \_ attributes:
 *    \\ for,
 *    \\ form,
 *    \\ name.
 * 
 * <progress>
 * \_ global attributes,
 * \_ attributes:
 *    \\ max,
 *    \\ value.
 * 
 * <select>
 * \_ global attributes,
 * \_ attributes:
 *    \\ autocomplete,
 *    \\ autofocus,
 *    \\ disabled,
 *    \\ form,
 *    \\ multiple,
 *    \\ name,
 *    \\ required,
 *    \\ size.
 * 
 * <textarea>
 * \_ global attributes,
 * \_ attributes:
 *    \\ autocomplete,
 *       # on,
 *       # off.
 *    \\ autocorrect (non-standard),
 *       # on,
 *       # off.
 *    \\ autofocus,
 *    \\ cols,
 *    \\ disabled,
 *    \\ form,
 *    \\ maxlength,
 *    \\ minlength,
 *    \\ name,
 *    \\ placeholder,
 *    \\ readonly,
 *    \\ required,
 *    \\ rows,
 *    \\ spellcheck,
 *       # true,
 *       # false,
 *       # default.
 *    \\ wrap.
 *       # hard,
 *       # soft,
 *       # off (non-standard).
 * 
 * // Interactive elements
 * <details>
 * \_ global attributes,
 * \_ attributes:
 *    \\ open.
 * 
 * <dialog>
 * \_ global attributes,
 * \_ attributes:
 *    \\ open.
 * 
 * <summary>
 * \_ global attributes.
 * 
 * // Web Components
 * <slot>
 * \_ global attributes,
 * \_ attributes:
 *    \\ name.
 * 
 * <template>
 * \_ global attributes.
 * 
 * // Obsolete and deprecated elements
 * <acronym>
 * \_ global attributes.
 * 
 * <applet>
 * \_ global attributes,
 * \_ attributes:
 *    \\ align (deprecated),
 *    \\ alt (deprecated),
 *    \\ archive (deprecated),
 *    \\ code (deprecated),
 *    \\ codebase (deprecated),
 *    \\ datafld (deprecated),
 *    \\ datasrc (deprecated),
 *    \\ height (deprecated),
 *    \\ hspace (deprecated),
 *    \\ mayscript (deprecated),
 *    \\ name (deprecated),
 *    \\ object (deprecated),
 *    \\ src (deprecated),
 *    \\ vspace (deprecated),
 *    \\ width (deprecated).
 * 
 * <bgsound>
 * \_ global attributes,
 * \_ attributes:
 *    \\ balance,
 *    \\ loop,
 *    \\ src,
 *    \\ volume.
 * 
 * <big>
 * \_ global attributes.
 * 
 * <blink>
 * \_ global attributes.
 * 
 * <center>
 * \_ global attributes.
 * 
 * <content>
 * \_ global attributes,
 * \_ attributes:
 *    \\ select.
 * 
 * <dir>
 * \_ global attributes,
 * \_ attributes:
 *    \\ compact (deprecated).
 * 
 * <font>
 * \_ global attributes,
 * \_ attributes:
 *    \\ color (deprecated),
 *    \\ face (deprecated),
 *    \\ size (deprecated).
 * 
 * <frame>
 * \_ global attributes,
 * \_ attributes:
 *    \\ src (deprecated),
 *    \\ name (deprecated),
 *    \\ noresize (deprecated),
 *    \\ scrolling (deprecated),
 *    \\ marginheight (deprecated),
 *    \\ marginweight (deprecated),
 *    \\ frameborder (deprecated).
 * 
 * <frameset>
 * \_ global attributes,
 * \_ attributes:
 *    \\ cols (deprecated),
 *    \\ rows (deprecated).
 * 
 * <image>
 * \_ global attributes.
 * 
 * <keygen>
 * \_ global attributes,
 * \_ attributes:
 *    \\ autofocus,
 *    \\ challenge,
 *    \\ disabled,
 *    \\ form,
 *    \\ keytype,
 *    \\ name.
 * 
 * <marquee>
 * \_ global attributes,
 * \_ attributes:
 *    \\ behavior (deprecated),
 *    \\ bgcolor (deprecated),
 *    \\ direction (deprecated),
 *    \\ height (deprecated),
 *    \\ hspace (deprecated),
 *    \\ loop (deprecated),
 *    \\ scrollamount (deprecated),
 *    \\ scrolldelay (deprecated),
 *    \\ truespeed (deprecated),
 *    \\ vspace (deprecated),
 *    \\ width (deprecated).
 * 
 * \_ event handlers:
 *    \\ onbounce,
 *    \\ onfinish,
 *    \\ onstart.
 * 
 * \_ methods:
 *    \\ start(),
 *    \\ stop().
 * 
 * <menuitem>
 * \_ global attributes,
 * \_ attributes:
 *    \\ checked (deprecated, non-standard),
 *    \\ command (deprecated, non-standard),
 *    \\ default (deprecated, non-standard),
 *    \\ disabled (deprecated, non-standard),
 *    \\ icon (deprecated, non-standard),
 *    \\ label,
 *    \\ radiogroup (deprecated, non-standard),
 *    \\ type (deprecated, non-standard).
 *       # command,
 *       # checkbox,
 *       # radio. 
 * 
 * <nobr>
 * \_ global attributes.
 * 
 * <noembled>
 * \_ global attributes.
 * 
 * <noframes>
 * \_ global attributes.
 * 
 * <param>
 * \_ global attributes,
 * \_ attributes:
 *    \\ name (deprecated),
 *    \\ value (deprecated),
 *    \\ type (deprecated),
 *    \\ valuetype (deprecated),
 *       # data,
 *       # ref,
 *       # object.
 * 
 * <plaintext>
 * \_ global attributes.
 * 
 * <rb>
 * \_ global attributes.
 * 
 * <rtc>
 * \_ global attributes.
 * 
 * <shadow>
 * \_ global attributes.
 * 
 * <spacer>
 * \_ global attributes,
 * \_ attributes:
 *    \\ type,
 *    \\ size,
 *    \\ width,
 *    \\ height,
 *    \\ align.
 * 
 * <strike>
 * \_ global attributes.
 * 
 * <tt>
 * \_ global attributes.
 * 
 * <xmp>
 * \_ global attributes.
 * 
 * ?? CSS PROPRIETIES ??
 * 
 * \_ Index
 *    --*
-webkit-line-clamp
A
abs()
accent-color
acos()
:active
additive-symbols (@counter-style)
::after (:after)
align-content
align-items
align-self
align-tracks
all
<an-plus-b>
<angle>
<angle-percentage>
animation
animation-delay
animation-direction
animation-duration
animation-fill-mode
animation-iteration-count
animation-name
animation-play-state
animation-timeline
animation-timing-function
@annotation
annotation()
:any-link
appearance
ascent-override (@font-face)
asin()
aspect-ratio
ata2n()
atan()
atan2()
attr()
B
::backdrop
backdrop-filter
backface-visibility
background
background-attachment
background-blend-mode
background-clip
background-color
background-image
background-origin
background-position
background-position-x
background-position-y
background-repeat
background-size
<basic-shape>
::before (:before)
:blank
bleed (@page)
<blend-mode>
block-overflow
block-size
blur()
border
border-block
border-block-color
border-block-end
border-block-end-color
border-block-end-style
border-block-end-width
border-block-start
border-block-start-color
border-block-start-style
border-block-start-width
border-block-style
border-block-width
border-bottom
border-bottom-color
border-bottom-left-radius
border-bottom-right-radius
border-bottom-style
border-bottom-width
border-collapse
border-color
border-end-end-radius
border-end-start-radius
border-image
border-image-outset
border-image-repeat
border-image-slice
border-image-source
border-image-width
border-inline
border-inline-color
border-inline-end
border-inline-end-color
border-inline-end-style
border-inline-end-width
border-inline-start
border-inline-start-color
border-inline-start-style
border-inline-start-width
border-inline-style
border-inline-width
border-left
border-left-color
border-left-style
border-left-width
border-radius
border-right
border-right-color
border-right-style
border-right-width
border-spacing
border-start-end-radius
border-start-start-radius
border-style
border-top
border-top-color
border-top-left-radius
border-top-right-radius
border-top-style
border-top-width
border-width
bottom
@bottom-center
box-decoration-break
box-shadow
box-sizing
break-after
break-before
break-inside
brightness()
C
calc()
caption-side
caret-color
@character-variant
character-variant()
@charset
:checked
circle()
clamp()
clear
clip
clip-path
<color>
color
color-scheme
column-count
column-fill
column-gap
column-rule
column-rule-color
column-rule-style
column-rule-width
column-span
column-width
columns
conic-gradient()
contain
content
content-visibility
contrast()
cos()
<counter>
counter-increment
counter-reset
counter-set
@counter-style
counters()
cross-fade()
cubic-bezier()
::cue
::cue-region
:current
cursor
<custom-ident>
length#cap
length#ch
length#cm
D
angle#deg
:default
:defined
descent-override (@font-face)
<dimension>
:dir
direction
:disabled
display
<display-box>
<display-inside>
<display-internal>
<display-legacy>
<display-listitem>
<display-outside>
drop-shadow()
resolution#dpcm
resolution#dpi
resolution#dppx
E
element()
ellipse()
:empty
empty-cells
:enabled
env()
exp()
length#em
length#ex
F
fallback (@counter-style)
filter
<filter-function>
:first
:first-child
::first-letter (:first-letter)
::first-line (:first-line)
:first-of-type
fit-content()
<flex>
flex
flex-basis
flex-direction
flex-flow
flex-grow
flex-shrink
flex-wrap
flex_value#fr
float
:focus
:focus-visible
:focus-within
font
font-display (@font-face)
@font-face
font-family
font-family (@font-face)
font-feature-settings
font-feature-settings (@font-face)
@font-feature-values
font-kerning
font-language-override
font-optical-sizing
font-size
font-size-adjust
font-stretch
font-stretch (@font-face)
font-style
font-style (@font-face)
font-synthesis
font-variant
font-variant (@font-face)
font-variant-alternates
font-variant-caps
font-variant-east-asian
font-variant-ligatures
font-variant-numeric
font-variant-position
font-variation-settings
font-variation-settings (@font-face)
font-weight
font-weight (@font-face)
forced-color-adjust
format()
<frequency>
<frequency-percentage>
:fullscreen
:future
G
angle#grad
gap
<gradient>
::grammar-error
grayscale()
grid
grid-area
grid-auto-columns
grid-auto-flow
grid-auto-rows
grid-column
grid-column-end
grid-column-start
grid-row
grid-row-end
grid-row-start
grid-template
grid-template-areas
grid-template-columns
grid-template-rows
H
frequency#Hz
hanging-punctuation
:has
height
height (@viewport)
@historical-forms
:host()
:host-context()
:hover
hsl()
hsla()
hue-rotate()
hwb()
hyphenate-character
hyphens
hypot()
I
<ident>
<image>
image()
image-orientation
image-rendering
image-resolution
image-set()
@import
:in-range
:indeterminate
inherit
inherits (@property)
initial
initial-letter
initial-letter-align
initial-value (@property)
inline-size
input-security
inset
inset()
inset-block
inset-block-end
inset-block-start
inset-inline
inset-inline-end
inset-inline-start
<integer>
:invalid
invert()
:is
isolation
length#ic
length#in
J
justify-content
justify-items
justify-self
justify-tracks
K
frequency#kHz
@keyframes
L
lab()
:lang
:last-child
:last-of-type
@layer
layer()
layer() (@import)
lch()
leader()
:left
left
@left-bottom
<length>
<length-percentage>
letter-spacing
line-break
line-clamp
line-gap-override (@font-face)
line-height
line-height-step
linear-gradient()
:link
list-style
list-style-image
list-style-position
list-style-type
local()
:local-link
log()
M
length#mm
margin
margin-block
margin-block-end
margin-block-start
margin-bottom
margin-inline
margin-inline-end
margin-inline-start
margin-left
margin-right
margin-top
margin-trim
::marker
marks (@page)
mask
mask-border
mask-border-mode
mask-border-outset
mask-border-repeat
mask-border-slice
mask-border-source
mask-border-width
mask-clip
mask-composite
mask-image
mask-mode
mask-origin
mask-position
mask-repeat
mask-size
mask-type
masonry-auto-flow
math-style
matrix()
matrix3d()
max()
max-block-size
max-height
max-height (@viewport)
max-inline-size
max-lines
max-width
max-width (@viewport)
max-zoom (@viewport)
@media
min()
min-block-size
min-height
min-height (@viewport)
min-inline-size
min-width
min-width (@viewport)
min-zoom (@viewport)
minmax()
mix-blend-mode
mod()
time#ms
N
@namespace
negative (@counter-style)
:not
:nth-child
:nth-col
:nth-last-child
:nth-last-col
:nth-last-of-type
:nth-of-type
<number>
O
object-fit
object-position
offset
offset-anchor
offset-distance
offset-path
offset-position
offset-rotate
:only-child
:only-of-type
opacity
opacity()
:optional
order
orientation (@viewport)
@ornaments
ornaments()
orphans
:out-of-range
outline
outline-color
outline-offset
outline-style
outline-width
overflow
overflow-anchor
overflow-block
overflow-clip-margin
overflow-inline
overflow-wrap
overflow-x
overflow-y
overscroll-behavior
overscroll-behavior-block
overscroll-behavior-inline
overscroll-behavior-x
overscroll-behavior-y
P
Pseudo-classes
Pseudo-elements
length#pc
length#pt
length#px
pad (@counter-style)
padding
padding-block
padding-block-end
padding-block-start
padding-bottom
padding-inline
padding-inline-end
padding-inline-start
padding-left
padding-right
padding-top
@page
page-break-after
page-break-before
page-break-inside
paint()
paint-order
::part
:past
path()
:paused
<percentage>
perspective
perspective()
perspective-origin
:picture-in-picture
place-content
place-items
place-self
::placeholder
:placeholder-shown
:playing
pointer-events
polygon()
<position>
position
pow()
prefix (@counter-style)
print-color-adjust
@property
Q
length#Q
quotes
R
angle#rad
length#rem
radial-gradient()
range (@counter-style)
<ratio>
:read-only
:read-write
rect()
rem()
repeat()
repeating-conic-gradient()
repeating-linear-gradient()
repeating-radial-gradient()
:required
resize
<resolution>
reversed()
revert
rgb()
rgba()
:right
right
@right-bottom
:root
rotate
rotate()
rotate3d()
rotateX()
rotateY()
rotateZ()
round()
row-gap
ruby-align
ruby-merge
ruby-position
S
saturate()
scale
scale()
scale3d()
scaleX()
scaleY()
scaleZ()
:scope
scroll-behavior
scroll-margin
scroll-margin-block
scroll-margin-block-end
scroll-margin-block-start
scroll-margin-bottom
scroll-margin-inline
scroll-margin-inline-end
scroll-margin-inline-start
scroll-margin-left
scroll-margin-right
scroll-margin-top
scroll-padding
scroll-padding-block
scroll-padding-block-end
scroll-padding-block-start
scroll-padding-bottom
scroll-padding-inline
scroll-padding-inline-end
scroll-padding-inline-start
scroll-padding-left
scroll-padding-right
scroll-padding-top
scroll-snap-align
scroll-snap-stop
scroll-snap-type
@scroll-timeline
scrollbar-color
scrollbar-gutter
scrollbar-width
::selection
selector()
sepia()
<shape>
shape-image-threshold
shape-margin
shape-outside
sign()
sin()
size (@page)
size-adjust (@font-face)
skew()
skewX()
skewY()
::slotted
speak-as (@counter-style)
::spelling-error
sqrt()
src (@font-face)
steps()
<string>
@styleset
styleset()
@stylistic
stylistic()
suffix (@counter-style)
@supports
supports() (@import)
@swash
swash()
symbols (@counter-style)
symbols()
syntax (@property)
system (@counter-style)
time#s
T
angle#turn
tab-size
table-layout
tan()
:target
target-counter()
target-counters()
::target-text
target-text()
:target-within
text-align
text-align-last
text-combine-upright
text-decoration
text-decoration-color
text-decoration-line
text-decoration-skip
text-decoration-skip-ink
text-decoration-style
text-decoration-thickness
text-emphasis
text-emphasis-color
text-emphasis-position
text-emphasis-style
text-indent
text-justify
text-orientation
text-overflow
text-rendering
text-shadow
text-size-adjust
text-transform
text-underline-offset
text-underline-position
<time>
<time-percentage>
<timing-function>
top
@top-center
touch-action
transform
transform-box
<transform-function>
transform-origin
transform-style
transition
transition-delay
transition-duration
transition-property
transition-timing-function
translate
translate()
translate3d()
translateX()
translateY()
translateZ()
type()
U
unicode-bidi
unicode-range (@font-face)
unset
<url>
url()
:user-invalid
user-select
:user-valid
user-zoom (@viewport)
V
length#vh
length#vmax
length#vmin
length#vw
:valid
var()
vertical-align
@viewport
viewport-fit (@viewport)
visibility
:visited
W
:where
white-space
widows
width
width (@viewport)
will-change
word-break
word-spacing
word-wrap
writing-mode
X
resolution#x
Z
z-index
zoom (@viewport)
 * 
 * \_ selectors
Universal selector *
Type selector elementname
Class selector .classname
ID selector #idname
Attribute selector [attr=value]
 * 
 * \_ combinators
Adjacent sibling combinator A + B,
General sibling combinator A ~ B,
Child combinator A > B,
Descendant combinator A B,
Column combinator A || B Experimental
 *
 * \_ Pseudo
Pseudo classes :
Specifies a special state of the selected element(s).

Pseudo elements ::
Represents entities that are not included in HTML.
 *
 * \_ DOM-CSS / CSSOM
- Major object types
Document.styleSheets
styleSheets[i].cssRules
cssRules[i].cssText (selector & style)
cssRules[i].selectorText
HTMLElement.style
HTMLElement.style.cssText (just style)
Element.className
Element.classList
 
- Important methods
CSSStyleSheet.insertRule()
CSSStyleSheet.deleteRule()

 * ?? HTTP PROPRIETIES ??
 * 
 * \_ Cache
Heuristic caching
Fresh and stale based on age
Expires or max-age
Vary
Validation
Don't cache
Reload and force reload
Deleting stored responses
Request collapse
Common caching patterns
 *
 * \_ Cookies
Creating cookies
Security
Tracking and privacy
Other ways to store information in the browser
 *
 * \_ Client Hints
Caching and Client Hints
Hint life-time
Low entropy hints
Hint types
 *
 * \_ Menssages
HTTP Requests
HTTP Responses
HTTP/2 Frames
 *
 * \_ HTTP Headers
- Authentication
WWW-Authenticate
Defines the authentication method that should be used to access a resource.

Authorization
Contains the credentials to authenticate a user-agent with a server.

Proxy-Authenticate
Defines the authentication method that should be used to access a resource behind a proxy server.

Proxy-Authorization
Contains the credentials to authenticate a user agent with a proxy server.

- Caching
Age
The time, in seconds, that the object has been in a proxy cache.

Cache-Control
Directives for caching mechanisms in both requests and responses.

Clear-Site-Data
Clears browsing data (e.g. cookies, storage, cache) associated with the requesting website.

Expires
The date/time after which the response is considered stale.

Pragma
Implementation-specific header that may have various effects anywhere along the request-response chain. Used for backwards compatibility with HTTP/1.0 caches where the Cache-Control header is not yet present.

Warning Deprecated
General warning information about possible problems.

- Client Hints
-- User agent client hints
The UA client hints are request headers that provide information about the user agent and the platform/architecture on which it is running:

Sec-CH-UA Experimental
User agent's branding and version.

Sec-CH-UA-Arch Experimental
User agent's underlying platform architecture.

Sec-CH-UA-Bitness Experimental
User agent's underlying CPU architecture bitness (for example "64" bit).

Sec-CH-UA-Full-Version Deprecated
User agent's full semantic version string.

Sec-CH-UA-Full-Version-List Experimental
Full version for each brand in the user agent's brand list.

Sec-CH-UA-Mobile Experimental
User agent is running on a mobile device or, more generally, prefers a "mobile" user experience.

Sec-CH-UA-Model Experimental
User agent's device model.

Sec-CH-UA-Platform Experimental
User agent's underlying operation system/platform.

Sec-CH-UA-Platform-Version Experimental
User agent's underlying operation system version.

-- Device client hints
Content-DPR Deprecated Experimental
Response header used to confirm the image device to pixel ratio in requests where the DPR client hint was used to select an image resource.

Device-Memory Deprecated Experimental
Approximate amount of available client RAM memory. This is part of the Device Memory API.

DPR Deprecated Experimental
Client device pixel ratio (DPR), which is the number of physical device pixels corresponding to every CSS pixel.

Viewport-Width Deprecated Experimental
A number that indicates the layout viewport width in CSS pixels. The provided pixel value is a number rounded to the smallest following integer (i.e. ceiling value).

Width Deprecated Experimental
A number that indicates the desired resource width in physical pixels (i.e. intrinsic size of an image).

-- Network client hints
Network client hints allow a server to choose what information is sent based on the user choice and network bandwidth and latency.

Downlink
Approximate bandwidth of the client's connection to the server, in Mbps. This is part of the Network Information API.

ECT
The effective connection type ("network profile") that best matches the connection's latency and bandwidth. This is part of the Network Information API.

RTT
Application layer round trip time (RTT) in milliseconds, which includes the server processing time. This is part of the Network Information API.

Save-Data Experimental
A boolean that indicates the user agent's preference for reduced data usage.

Conditionals
Last-Modified
The last modification date of the resource, used to compare several versions of the same resource. It is less accurate than ETag, but easier to calculate in some environments. Conditional requests using If-Modified-Since and If-Unmodified-Since use this value to change the behavior of the request.

ETag
A unique string identifying the version of the resource. Conditional requests using If-Match and If-None-Match use this value to change the behavior of the request.

If-Match
Makes the request conditional, and applies the method only if the stored resource matches one of the given ETags.

If-None-Match
Makes the request conditional, and applies the method only if the stored resource doesn't match any of the given ETags. This is used to update caches (for safe requests), or to prevent uploading a new resource when one already exists.

If-Modified-Since
Makes the request conditional, and expects the resource to be transmitted only if it has been modified after the given date. This is used to transmit data only when the cache is out of date.

If-Unmodified-Since
Makes the request conditional, and expects the resource to be transmitted only if it has not been modified after the given date. This ensures the coherence of a new fragment of a specific range with previous ones, or to implement an optimistic concurrency control system when modifying existing documents.

Vary
Determines how to match request headers to decide whether a cached response can be used rather than requesting a fresh one from the origin server.

Connection management
Connection
Controls whether the network connection stays open after the current transaction finishes.

Keep-Alive
Controls how long a persistent connection should stay open.

Content negotiation
Content negotiation headers.

Accept
Informs the server about the types of data that can be sent back.

Accept-Encoding
The encoding algorithm, usually a compression algorithm, that can be used on the resource sent back.

Accept-Language
Informs the server about the human language the server is expected to send back. This is a hint and is not necessarily under the full control of the user: the server should always pay attention not to override an explicit user choice (like selecting a language from a dropdown).

Controls
Expect
Indicates expectations that need to be fulfilled by the server to properly handle the request.

Max-Forwards
When using TRACE, indicates the maximum number of hops the request can do before being reflected to the sender.

Cookies
Cookie
Contains stored HTTP cookies previously sent by the server with the Set-Cookie header.

Set-Cookie
Send cookies from the server to the user-agent.

CORS
Learn more about CORS here.

Access-Control-Allow-Origin
Indicates whether the response can be shared.

Access-Control-Allow-Credentials
Indicates whether the response to the request can be exposed when the credentials flag is true.

Access-Control-Allow-Headers
Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request.

Access-Control-Allow-Methods
Specifies the methods allowed when accessing the resource in response to a preflight request.

Access-Control-Expose-Headers
Indicates which headers can be exposed as part of the response by listing their names.

Access-Control-Max-Age
Indicates how long the results of a preflight request can be cached.

Access-Control-Request-Headers
Used when issuing a preflight request to let the server know which HTTP headers will be used when the actual request is made.

Access-Control-Request-Method
Used when issuing a preflight request to let the server know which HTTP method will be used when the actual request is made.

Origin
Indicates where a fetch originates from.

Timing-Allow-Origin
Specifies origins that are allowed to see values of attributes retrieved via features of the Resource Timing API, which would otherwise be reported as zero due to cross-origin restrictions.

Downloads
Content-Disposition
Indicates if the resource transmitted should be displayed inline (default behavior without the header), or if it should be handled like a download and the browser should present a "Save As" dialog.

Message body information
Content-Length
The size of the resource, in decimal number of bytes.

Content-Type
Indicates the media type of the resource.

Content-Encoding
Used to specify the compression algorithm.

Content-Language
Describes the human language(s) intended for the audience, so that it allows a user to differentiate according to the users' own preferred language.

Content-Location
Indicates an alternate location for the returned data.

Proxies
Forwarded
Contains information from the client-facing side of proxy servers that is altered or lost when a proxy is involved in the path of the request.

X-Forwarded-For Non-standard
Identifies the originating IP addresses of a client connecting to a web server through an HTTP proxy or a load balancer.

X-Forwarded-Host Non-standard
Identifies the original host requested that a client used to connect to your proxy or load balancer.

X-Forwarded-Proto Non-standard
Identifies the protocol (HTTP or HTTPS) that a client used to connect to your proxy or load balancer.

Via
Added by proxies, both forward and reverse proxies, and can appear in the request headers and the response headers.

Redirects
Location
Indicates the URL to redirect a page to.

Request context
From
Contains an Internet email address for a human user who controls the requesting user agent.

Host
Specifies the domain name of the server (for virtual hosting), and (optionally) the TCP port number on which the server is listening.

Referer
The address of the previous web page from which a link to the currently requested page was followed.

Referrer-Policy
Governs which referrer information sent in the Referer header should be included with requests made.

User-Agent
Contains a characteristic string that allows the network protocol peers to identify the application type, operating system, software vendor or software version of the requesting software user agent. See also the Firefox user agent string reference.

Response context
Allow
Lists the set of HTTP request methods supported by a resource.

Server
Contains information about the software used by the origin server to handle the request.

Range requests
Accept-Ranges
Indicates if the server supports range requests, and if so in which unit the range can be expressed.

Range
Indicates the part of a document that the server should return.

If-Range
Creates a conditional range request that is only fulfilled if the given etag or date matches the remote resource. Used to prevent downloading two ranges from incompatible version of the resource.

Content-Range
Indicates where in a full body message a partial message belongs.

Security
Cross-Origin-Embedder-Policy (COEP)
Allows a server to declare an embedder policy for a given document.

Cross-Origin-Opener-Policy (COOP)
Prevents other domains from opening/controlling a window.

Cross-Origin-Resource-Policy (CORP)
Prevents other domains from reading the response of the resources to which this header is applied.

Content-Security-Policy (CSP)
Controls resources the user agent is allowed to load for a given page.

Content-Security-Policy-Report-Only
Allows web developers to experiment with policies by monitoring, but not enforcing, their effects. These violation reports consist of JSON documents sent via an HTTP POST request to the specified URI.

Expect-CT
Allows sites to opt in to reporting and/or enforcement of Certificate Transparency requirements, which prevents the use of misissued certificates for that site from going unnoticed. When a site enables the Expect-CT header, they are requesting that Chrome check that any certificate for that site appears in public CT logs.

Feature-Policy
Provides a mechanism to allow and deny the use of browser features in its own frame, and in iframes that it embeds.

Origin-Isolation Experimental
Provides a mechanism to allow web applications to isolate their origins.

Strict-Transport-Security (HSTS)
Force communication using HTTPS instead of HTTP.

Upgrade-Insecure-Requests
Sends a signal to the server expressing the client's preference for an encrypted and authenticated response, and that it can successfully handle the upgrade-insecure-requests directive.

X-Content-Type-Options
Disables MIME sniffing and forces browser to use the type given in Content-Type.

X-Download-Options
The X-Download-Options HTTP header indicates that the browser (Internet Explorer) should not display the option to "Open" a file that has been downloaded from an application, to prevent phishing attacks as the file otherwise would gain access to execute in the context of the application.

X-Frame-Options (XFO)
Indicates whether a browser should be allowed to render a page in a <frame>, <iframe>, <embed> or <object>.

X-Permitted-Cross-Domain-Policies
Specifies if a cross-domain policy file (crossdomain.xml) is allowed. The file may define a policy to grant clients, such as Adobe's Flash Player (now obsolete), Adobe Acrobat, Microsoft Silverlight (now obsolete), or Apache Flex, permission to handle data across domains that would otherwise be restricted due to the Same-Origin Policy. See the Cross-domain Policy File Specification for more information.

X-Powered-By
May be set by hosting environments or other frameworks and contains information about them while not providing any usefulness to the application or its visitors. Unset this header to avoid exposing potential vulnerabilities.

X-XSS-Protection
Enables cross-site scripting filtering.

Fetch metadata request headers
Fetch metadata request headers provides information about the context from which the request originated. This allows a server to make decisions about whether a request should be allowed based on where the request came from and how the resource will be used.

Sec-Fetch-Site
It is a request header that indicates the relationship between a request initiator's origin and its target's origin. It is a Structured Header whose value is a token with possible values cross-site, same-origin, same-site, and none.

Sec-Fetch-Mode
It is a request header that indicates the request's mode to a server. It is a Structured Header whose value is a token with possible values cors, navigate, no-cors, same-origin, and websocket.

Sec-Fetch-User
It is a request header that indicates whether or not a navigation request was triggered by user activation. It is a Structured Header whose value is a boolean so possible values are ?0 for false and ?1 for true.

Sec-Fetch-Dest
It is a request header that indicates the request's destination to a server. It is a Structured Header whose value is a token with possible values audio, audioworklet, document, embed, empty, font, image, manifest, object, paintworklet, report, script, serviceworker, sharedworker, style, track, video, worker, and xslt.

Service-Worker-Navigation-Preload
A request header sent in preemptive request to fetch() a resource during service worker boot. The value, which is set with NavigationPreloadManager.setHeaderValue(), can be used to inform a server that a different resource should be returned than in a normal fetch() operation.

Server-sent events
Last-Event-ID
TBD

NEL Experimental
Defines a mechanism that enables developers to declare a network error reporting policy.

Ping-From
TBD

Ping-To
TBD

Report-To
Used to specify a server endpoint for the browser to send warning and error reports to.

Transfer coding
Transfer-Encoding
Specifies the form of encoding used to safely transfer the resource to the user.

TE
Specifies the transfer encodings the user agent is willing to accept.

Trailer
Allows the sender to include additional fields at the end of chunked message.

WebSockets
Sec-WebSocket-Key
TBD

Sec-WebSocket-Extensions
TBD

Sec-WebSocket-Accept
TBD

Sec-WebSocket-Protocol
TBD

Sec-WebSocket-Version
TBD

Other
Accept-Push-Policy Experimental
A client can express the desired push policy for a request by sending an Accept-Push-Policy header field in the request.

Accept-Signature Experimental
A client can send the Accept-Signature header field to indicate intention to take advantage of any available signatures and to indicate what kinds of signatures it supports.

Alt-Svc
Used to list alternate ways to reach this service.

Date
Contains the date and time at which the message was originated.

Early-Data Experimental
Indicates that the request has been conveyed in TLS early data.

Large-Allocation Deprecated
Tells the browser that the page being loaded is going to want to perform a large allocation.

Link
The Link entity-header field provides a means for serializing one or more links in HTTP headers. It is semantically equivalent to the HTML <link> element.

Push-Policy Experimental
A Push-Policy defines the server behavior regarding push when processing a request.

Retry-After
Indicates how long the user agent should wait before making a follow-up request.

Signature Experimental
The Signature header field conveys a list of signatures for an exchange, each one accompanied by information about how to determine the authority of and refresh that signature.

Signed-Headers Experimental
The Signed-Headers header field identifies an ordered list of response header fields to include in a signature.

Server-Timing
Communicates one or more metrics and descriptions for the given request-response cycle.

Service-Worker-Allowed
Used to remove the path restriction by including this header in the response of the Service Worker script.

SourceMap
Links generated code to a source map.

Upgrade
The relevant RFC document for the Upgrade header field is RFC 9110, section 7.8. The standard establishes rules for upgrading or changing to a different protocol on the current client, server, transport protocol connection. For example, this header standard allows a client to change from HTTP 1.1 to WebSocket, assuming the server decides to acknowledge and implement the Upgrade header field. Neither party is required to accept the terms specified in the Upgrade header field. It can be used in both client and server headers. If the Upgrade header field is specified, then the sender MUST also send the Connection header field with the upgrade option specified. For details on the Connection header field please see section 7.6.1 of the aforementioned RFC.

X-DNS-Prefetch-Control
Controls DNS prefetching, a feature by which browsers proactively perform domain name resolution on both links that the user may choose to follow as well as URLs for items referenced by the document, including images, CSS, JavaScript, and so forth.

X-Firefox-Spdy Deprecated Non-standard
TBD

X-Pingback Non-standard
TBD

X-Requested-With
TBD

X-Robots-TagNon-standard
The X-Robots-Tag HTTP header is used to indicate how a web page is to be indexed within public search engine results. The header is effectively equivalent to <meta name="robots" content="…">.

X-UA-Compatible Non-standard
Used by Internet Explorer to signal which document mode to use.

 * ?? PLACEHOLDERS ??

-> adicionandos conforme a necessidade e surgimento de ideias de criação.

 * 
 */

class WLydroc { }
