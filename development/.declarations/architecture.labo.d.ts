// possíveis recursos de aprimoramento de arquitetura
  // aqui podem ser testados diversos algoritmos

  // Typers Mapping
    // Karzok
declare interface WKarzok {

  constructor: {

    cubbic: WKCubbic

  }

}

declare interface WKCubbic {

  tamanho: {

    estruturas: {

      "02x02": [[][]]

      "03x03": [[][][]]

      "04x04": [[][][][]]

      "05x05": [[][][][][]]
      
      "06x06": [[][][][][][]]
      
      "07x07": [[][][][][][][]]
      
      "08x08": [[][][][][][][][]]
      
      "09x09": [[][][][][][][][][]]
      
      "10x10": [[][][][][][][][][][]]

    }

    aviso: String

  }

  pontuacao: {

    valor: Number
    cor: String

  }

  ranking: {

    meta: Number
    nome: String

  }

}

    // Lydroc
declare interface WKLydroc { }
    // Terminal-Spectrals
declare interface WKTerminalSpectrals { }

