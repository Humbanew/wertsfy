class WLydroc { }

function newElement(element: string, classname: string, id: string) {
  let constructor = document.createElement(element);
  constructor.id = id;
  constructor.className = classname;
  return constructor;
}

function addAttribute(element: HTMLElement) { }
function addEvent(element: HTMLElement) { }
