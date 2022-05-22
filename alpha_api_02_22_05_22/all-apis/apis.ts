import { Wertsfy } from "../wertsfy";
import { BotMaker } from "./api-botMaker/api/botMaker";

export const APIs = { 
  list: {
    
    principalKey: { 
      
      wertsfy: Wertsfy 
    
    },

    secundaryKey: {

      botMaker: BotMaker

    }
  
  } 

}
