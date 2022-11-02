class WLydroc { }

function createElement(element: string, classname: string, id: string): HTMLElement {
  let elementConstructor = document.createElement(element);
  elementConstructor.id = id;
  elementConstructor.className = classname;
  return elementConstructor;
}

function addAttribute(element: HTMLElement) { }

function addEvent(element: HTMLElement) { }
