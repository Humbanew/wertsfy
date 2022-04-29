import './lydroc-decoration-styles.css';

export namespace LydrocDecorationStyles {

  export namespace LDDisplays {

    export const displayBlockConfigs = [
      
      function delDisplayBlock(elementId: string) {
        const element = document.getElementById(elementId).classList.remove('ly-display-block'); 
        return element;
      },

      function setDisplayBlock(elementId: string) {
        const element = document.getElementById(elementId).classList.add('ly-display-block');
        return element;
      }

    ];

  }

}
