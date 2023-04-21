class WWLydroc {

  public lydrocDoctypePlaceholder(): string 
  { 
  
    return "<!DOCTYPE html>"; 
  
  };
  
  public lydrocAnchorPlaceholder(href?: string): string
  {
  
    let attrs = null;
    if(href != "" || null) attrs = attrs + `href=${href} `;
    return `<a ${attrs}><a>`;
  
  };

}
