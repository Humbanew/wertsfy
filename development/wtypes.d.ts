declare module "wertsfy-structure" {

  const CYF: ColorYellowFormatter;

  const CPF: ColorPurpleFormatter;

}

// "#ffff00", "#ffdd00", "#ffbb00", "#ff9900"
declare type ColorYellowFormatter = '/[f]{2}[fdb9]{2}[0]{2}[0-9a-f]{2}/g';

// "#660066", "#770077", "#880088", "#990099"
declare type ColorPurpleFormatter = '/[6789]{2}[0]{2}[6789]{2}[0-9a-f]{2}/g';
