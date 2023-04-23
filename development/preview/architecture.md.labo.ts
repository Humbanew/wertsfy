type charsetCollection = undefined;

class WWLydroc {

  public lydrocHTMLConstructor(Structure: any) { }

  public lydrocDoctypePlaceholder(): string { 
  
    return "<!DOCTYPE html>"; 
  
  }
  
  public lydrocAnchorPlaceholder(
    Content: any, 
    Class?: string, 
    Id?: string, 
    Href?: string, 
    HrefLang?: string, 
    Charset?: "UTF-8"
      |"UTF-16"
      |"UTF-32", 
    Name?: string, 
    Target?: "_self"
      |"_blank"
      |"_parent"
      |"_top",
    Rel?: string, 
    Type?: string
  ): string {
  
    let attrs = null;

    if(Class) {
      if(Class == "" || null) return;
      attrs += `class="${Class}"`;
    }
    if(Id) {
      if(Id == "" || null) return;
      attrs += `id="${Id}"`;
    }
    if(Href) {
      if(Href == "" || null) return;
      attrs += `href="${Href}"`;
    }
    if(HrefLang) {
      if(HrefLang == "" || null) return;
      attrs += `hreflang="${HrefLang}"`;
    }
    if(Charset) {
      attrs += `charset="${Charset}"`;
    }
    if(Name) {
      if(Name == "" || null) return;
      attrs += `name="${Name}"`;
    }
    if(Target) {
      attrs += `target="${Target}"`;
    }
    if(Rel) {
      if(Rel == "" || null) return;
      attrs += `rel="${Rel}"`;
    }
    if(Type) {
      if(Type == "" || null) return;
      attrs += `type="${Type}"`;
    }

    return `<a ${attrs}>${Content}<a>`;
  
  }

  protected lydrocAbbrPlaceholder() { }
  protected lydrocAcronymPlaceholder() { }
  protected lydrocAddressPlaceholder() { }
  protected lydrocAppletPlaceholder() { }
  protected lydrocAreaPlaceholder() { }
  protected lydrocArticlePlaceholder() { }
  protected lydrocAsidePlaceholder() { }
  protected lydrocAudioPlaceholder() { }
  protected lydrocBPlaceholder() { }
  protected lydrocBasePlaceholder() { }
  protected lydrocBdiPlaceholder() { }
  protected lydrocBdoPlaceholder() { }
  protected lydrocBigPlaceholder() { }
  protected lydrocBlinkPlaceholder() { }
  protected lydrocBlockquotePlaceholder() { }
  protected lydrocBodyPlaceholder() { }
  protected lydrocBrPlaceholder() { }
  protected lydrocButtonPlaceholder() { }
  protected lydrocCanvasPlaceholder() { }
  protected lydrocCaptionPlaceholder() { }
  protected lydrocCitePlaceholder() { }
  protected lydrocCodePlaceholder() { }
  protected lydrocColPlaceholder() { }
  protected lydrocColgroupPlaceholder() { }
  protected lydrocDataPlaceholder() { }
  protected lydrocDatalistPlaceholder() { }
  protected lydrocDfnPlaceholder() { }
  protected lydrocDelPlaceholder() { }
  protected lydrocDetailsPlaceholder() { }
  protected lydrocDialogPlaceholder() { }
  protected lydrocDirPlaceholder() { }
  protected lydrocDivPlaceholder() { }
  protected lydrocDlPlaceholder() { }
  protected lydrocDtPlaceholder() { }
  protected lydrocDtrPlaceholder() { }
  protected lydrocEmPlaceholder() { }
  protected lydrocEmbedPlaceholder() { }
  protected lydrocFieldsetPlaceholder() { }
  protected lydrocFigcaptionPlaceholder() { }
  protected lydrocFigurePlaceholder() { }
  protected lydrocFontPlaceholder() { }
  protected lydrocFooterPlaceholder() { }
  protected lydrocFormPlaceholder() { }
  protected lydrocFramePlaceholder() { }
  protected lydrocFramesetPlaceholder() { }
  protected lydrocH1Placeholder() { }
  protected lydrocH2Placeholder() { }
  protected lydrocH3Placeholder() { }
  protected lydrocH4Placeholder() { }
  protected lydrocH5Placeholder() { }
  protected lydrocH6Placeholder() { }
  protected lydrocHeadPlaceholder() { }
  protected lydrocHeaderPlaceholder() { }
  protected lydrocHrPlaceholder() { }
  protected lydrocHtmlPlaceholder() { }
  protected lydrocIPlaceholder() { }
  protected lydrocIframePlaceholder() { }
  protected lydrocImgPlaceholder() { }
  protected lydrocInputPlaceholder() { }
  protected lydrocInsPlaceholder() { }
  protected lydrocKbdPlaceholder() { }
  protected lydrocKeygenPlaceholder() { }
  protected lydrocLabelPlaceholder() { }
  protected lydrocLegendPlaceholder() { }
  protected lydrocLiPlaceholder() { }
  protected lydrocLinkPlaceholder() { }
  protected lydrocMainPlaceholder() { }
  protected lydrocMapPlaceholder() { }
  protected lydrocMarkPlaceholder() { }
  protected lydrocMenuPlaceholder() { }
  protected lydrocMetaPlaceholder() { }
  protected lydrocMeterPlaceholder() { }
  protected lydrocNavPlaceholder() { }
  protected lydrocNoframesPlaceholder() { }
  protected lydrocNoscriptPlaceholder() { }
  protected lydrocObjectPlaceholder() { }
  protected lydrocOlPlaceholder() { }
  protected lydrocOptgroupPlaceholder() { }
  protected lydrocOptionPlaceholder() { }
  protected lydrocOutputPlaceholder() { }
  protected lydrocParagraphPlaceholder() { }
  protected lydrocParamPlaceholder() { }
  protected lydrocPicturePlaceholder() { }
  protected lydrocPrePlaceholder() { }
  protected lydrocProgressPlaceholder() { }
  protected lydrocQPlaceholder() { }
  protected lydrocRpPlaceholder() { }
  protected lydrocRtPlaceholder() { }
  protected lydrocRubyPlaceholder() { }
  protected lydrocSPlaceholder() { }
  protected lydrocSampPlaceholder() { }
  protected lydrocScriptPlaceholder() { }
  protected lydrocSectionPlaceholder() { }
  protected lydrocSelectPlaceholder() { }
  protected lydrocSmallPlaceholder() { }
  protected lydrocSourcePlaceholder() { }
  protected lydrocSpanPlaceholder() { }
  protected lydrocStrongPlaceholder() { }
  protected lydrocStylePlaceholder() { }
  protected lydrocSubPlaceholder() { }
  protected lydrocSupPlaceholder() { }
  protected lydrocTablePlaceholder() { }
  protected lydrocTbodyPlaceholder() { }
  protected lydrocTdPlaceholder() { }
  protected lydrocTemplatePlaceholder() { }
  protected lydrocTextareaPlaceholder() { }
  protected lydrocTfootPlaceholder() { }
  protected lydrocThPlaceholder() { }
  protected lydrocTheadPlaceholder() { }
  protected lydrocTimePlaceholder() { }
  protected lydrocTrPlaceholder() { }
  protected lydrocTrackPlaceholder() { }
  protected lydrocTtPlaceholder() { }
  protected lydrocUPlaceholder() { }
  protected lydrocUlPlaceholder() { }
  protected lydrocVarPlaceholder() { }
  protected lydrocVideoPlaceholder() { }
  protected lydrocWbrPlaceholder() { }

} export var wwlydroc = new WWLydroc();

// Classes de Wertsfy Whispers Lydroc 
class WWLStylesheets { }
class WWLDynamic { }
class WWLHTML6 { }

// Classes de Wertsfy Whispers
class WWKarzok { }
class WWChaosdragon { }
class WWSpectralsTerminal { }
class WWDocument { }
class WWModules { }
class WWCustomElements { }
class WMRVAEStructure { }
