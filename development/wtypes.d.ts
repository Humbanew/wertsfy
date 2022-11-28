declare module "@wtfy/typedefs" { }

// // [Spectrals Lib] Color Types

// "#ffff00", "#ffdd00", "#ffbb00", "#ff9900"
declare type ColorYellowFormatter = '/[f]{2}[fdb9]{2}[0]{2}[0-9a-f]{2}/g';

// "#660066", "#770077", "#880088", "#990099"
declare type ColorPurpleFormatter = '/[6789]{2}[0]{2}[6789]{2}[0-9a-f]{2}/g';

// "#ffffff", "#dddddd", "#bbbbbb", "#999999"
declare type ColorWhiteFormatter = '/[fdb9]{6}[0-9a-f]{2}/g';

// "#000000", "#111111", "#222222", "#333333"
declare type ColorBlackFormatter = '/[0123]{6}[0-9a-f]{2}/g';
