export const $dplBlock$ = class DisplayBlock extends HTMLStyleElement {
  constructor() { super(); this.textContent = ".ly-display-block { display: block; }"; }
};

export const $dplContents$ = class DisplayContents extends HTMLStyleElement {
  constructor() { super(); this.textContent = ".ly-display-contents { display: contents; }"; }
};

export const $dplInherit$ = class DisplayInherit extends HTMLStyleElement {
  constructor() { super(); this.textContent = ".ly-display-inherit { display: inherit; }"; }
};

export const $dplInitial$ = class DisplayInitial extends HTMLStyleElement {
  constructor() { super(); this.textContent = ".ly-display-initial { display: initial; }"; }
};