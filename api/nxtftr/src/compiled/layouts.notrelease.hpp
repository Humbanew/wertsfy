#ifndef LAYOUTS_NOTRELEASE_HPP
#define LAYOUTS_NOTRELEASE_HPP

#include <cstdio>
#include <cstdlib>
#include <iostream>
#include "defs/wtsfy-tipos.hpp"

namespace Wtsfy 
{ 
  namespace Alpha 
  { 

    class UICLI_Layouts
    {
      // CONSTANTES LEGADO
        // #define ART_1 '‒';
        char ART_1 = '‒';
        typedef decltype(ART_1) art_element1;
        // #define ART_2 '–';
        char ART_2 = '–';
        typedef decltype(ART_2) art_element2;
        // #define ART_3 '—';
        char ART_3 = '—';
        typedef decltype(ART_3) art_element3;
        // #define ART_4 '―';
        char ART_4 = '―';
        typedef decltype(ART_4) art_element4;
        // #define ART_5 '‖';
        char ART_5 = '‖';
        typedef decltype(ART_5) art_element5;
        // #define ART_6 '†';
        char ART_6 = '†';
        typedef decltype(ART_6) art_element6;
        // #define ART_7 '‡';
        char ART_7 = '‡';
        typedef decltype(ART_7) art_element7;
        // #define ART_8 '₪';
        char ART_8 = '₪';
        typedef decltype(ART_8) art_element8;
        // #define ART_9 '₰';
        char ART_9 = '₰';
        typedef decltype(ART_9) art_element9;
        // #define ART_10 '₶';
        char ART_10 = '₶';
        typedef decltype(ART_10) art_element10;
        // #define ART_11 '₸'; 
        char ART_11 = '₸';
        typedef decltype(ART_11) art_element11;
        // #define ART_12 'ⅎ';
        char ART_12 = 'ⅎ';
        typedef decltype(ART_12) art_element12;
        // #define ART_13 'ↄ';
        char ART_13 = 'ↄ';
        typedef decltype(ART_13) art_element13;
        // #define ART_14 '∏';
        char ART_14 = '∏';
        typedef decltype(ART_14) art_element14;
        // #define ART_15 '∟';
        char ART_15 = '∟';
        typedef decltype(ART_15) art_element15;
        // #define ART_16 '∩';
        char ART_16 = '∩';
        typedef decltype(ART_16) art_element16;
        // #define ART_17 '∫';
        char ART_17 = '∫';
        typedef decltype(ART_17) art_element17;
        // #define ART_18 '≡';
        char ART_18 = '≡';
        typedef decltype(ART_18) art_element18;
        // #define ART_19 '⌂';
        char ART_19 = '⌂';
        typedef decltype(ART_19) art_element19;
        // #define ART_20 '⌐';
        char ART_20 = '⌐';
        typedef decltype(ART_20) art_element20;
        // #define ART_21 '⌠';
        char ART_21 = '⌠';
        typedef decltype(ART_21) art_element21;
        // #define ART_22 '⌡';
        char ART_22 = '⌡';
        typedef decltype(ART_22) art_element22;
        // #define ART_23 '─';
        char ART_23 = '─';
        typedef decltype(ART_23) art_element23;
        // #define ART_24 '|';
        char ART_24 = '|';
        typedef decltype(ART_24) art_element24;
        // #define ART_25 '┌';
        char ART_25 = '┌';
        typedef decltype(ART_25) art_element25;
        // #define ART_26 '┐';
        char ART_26 = '┐';
        typedef decltype(ART_26) art_element26;
        // #define ART_27 '└';
        char ART_27 = '└';
        typedef decltype(ART_27) art_element27;
        // #define ART_28 '┘';
        char ART_28 = '┘';
        typedef decltype(ART_28) art_element28;
        // #define ART_29 '├';
        char ART_29 = '├';
        typedef decltype(ART_29) art_element29;
        // #define ART_30 '┤';
        char ART_30 = '┤';
        typedef decltype(ART_30) art_element30;
        // #define ART_31 '┬';
        char ART_31 = '┬';
        typedef decltype(ART_31) art_element31;
        // #define ART_32 '┴';
        char ART_32 = '┴';
        typedef decltype(ART_32) art_element32;
        // #define ART_33 '┼';
        char ART_33 = '┼';
        typedef decltype(ART_33) art_element33;
        // #define ART_34 '═';
        char ART_34 = '═';
        typedef decltype(ART_34) art_element34;
        // #define ART_35 '║';
        char ART_35 = '║';
        typedef decltype(ART_35) art_element35;
        // #define ART_36 '╒';
        char ART_36 = '╒';
        typedef decltype(ART_36) art_element36;
        // #define ART_37 '╓';
        char ART_37 = '╓';
        typedef decltype(ART_37) art_element37;
        // #define ART_38 '╔';
        char ART_38 = '╔';
        typedef decltype(ART_38) art_element38;
        // #define ART_39 '╕';
        char ART_39 = '╕';
        typedef decltype(ART_39) art_element39;
        // #define ART_40 '╖';
        char ART_40 = '╖';
        typedef decltype(ART_40) art_element40;
        // #define ART_41 '╗';
        char ART_41 = '╗';
        typedef decltype(ART_41) art_element41;
        // #define ART_42 '╘';
        char ART_42 = '╘';
        typedef decltype(ART_42) art_element42;
        // #define ART_43 '╙';
        char ART_43 = '╙';
        typedef decltype(ART_43) art_element43;
        // #define ART_44 '╚';
        char ART_44 = '╚';
        typedef decltype(ART_44) art_element44;
        // #define ART_45 '╛';
        char ART_45 = '╛';
        typedef decltype(ART_45) art_element45;
        // #define ART_46 '╜';
        char ART_46 = '╜';
        typedef decltype(ART_46) art_element46;
        // #define ART_47 '╝';
        char ART_47 = '╝';
        typedef decltype(ART_47) art_element47;
        // #define ART_48 '╞';
        char ART_48 = '╞';
        typedef decltype(ART_48) art_element48;
        // #define ART_49 '╟';
        char ART_49 = '╟';
        typedef decltype(ART_49) art_element49;
        // #define ART_50 '╠';
        char ART_50 = '╠';
        typedef decltype(ART_50) art_element50;
        // #define ART_51 '╡';
        char ART_51 = '╡';
        typedef decltype(ART_51) art_element51;
        // #define ART_52 '╢';
        char ART_52 = '╢';
        typedef decltype(ART_52) art_element52;
        // #define ART_53 '╣';
        char ART_53 = '╣';
        typedef decltype(ART_53) art_element53;
        // #define ART_54 '╤';
        char ART_54 = '╤';
        typedef decltype(ART_54) art_element54;
        // #define ART_55 '╥';
        char ART_55 = '╥';
        typedef decltype(ART_55) art_element55;
        // #define ART_56 '╦';
        char ART_56 = '╦';
        typedef decltype(ART_56) art_element56;
        // #define ART_57 '╧';
        char ART_57 = '╧';
        typedef decltype(ART_57) art_element57;
        // #define ART_58 '╨';
        char ART_58 = '╨';
        typedef decltype(ART_58) art_element58;
        // #define ART_59 '╩';
        char ART_59 = '╩';
        typedef decltype(ART_59) art_element59;
        // #define ART_60 '╪';
        char ART_60 = '╪';
        typedef decltype(ART_60) art_element60;
        // #define ART_61 '╫';
        char ART_61 = '╫';
        typedef decltype(ART_61) art_element61;
        // #define ART_62 '╫';
        char ART_62 = '╫';
        typedef decltype(ART_62) art_element62;
        // #define ART_63 '▀';
        char ART_63 = '▀';
        typedef decltype(ART_63) art_element63;
        // #define ART_64 '▄';
        char ART_64 = '▄';
        typedef decltype(ART_64) art_element64;
        // #define ART_65 '█';
        char ART_65 = '█';
        typedef decltype(ART_65) art_element65;
        // #define ART_66 '▌';
        char ART_66 = '▌';
        typedef decltype(ART_66) art_element66;
        // #define ART_67 '▐';
        char ART_67 = '▐';
        typedef decltype(ART_67) art_element67;
        // #define ART_68 '░';
        char ART_68 = '░';
        typedef decltype(ART_68) art_element68;
        // #define ART_69 '▒';
        char ART_69 = '▒';
        typedef decltype(ART_69) art_element69;
        // #define ART_70 '▓'; 
        char ART_70 = '▓';
        typedef decltype(ART_70) art_element70;
        // #define ART_71 '■';
        char ART_71 = '■';
        typedef decltype(ART_71) art_element71;
        // #define ART_72 '□';
        char ART_72 = '□';
        typedef decltype(ART_72) art_element72;
        // #define ART_73 '▪';
        char ART_73 = '▪';
        typedef decltype(ART_73) art_element73;
        // #define ART_74 '▫';
        char ART_74 = '▫';
        typedef decltype(ART_74) art_element74;
        // #define ART_75 '▬';
        char ART_75 = '▬';
        typedef decltype(ART_75) art_element75;
        // #define ART_76 '▲';
        char ART_76 = '▲';
        typedef decltype(ART_76) art_element76;
        // #define ART_77 '►';
        char ART_77 = '►';
        typedef decltype(ART_77) art_element77;
        // #define ART_78 '▼';
        char ART_78 = '▼';
        typedef decltype(ART_78) art_element78;
        // #define ART_79 '◄';
        char ART_79 = '◄';
        typedef decltype(ART_79) art_element79;
        // #define ART_80 '◊';
        char ART_80 = '◊';
        typedef decltype(ART_80) art_element80;
        // #define ART_81 '○';
        char ART_81 = '○';
        typedef decltype(ART_81) art_element81;
        // #define ART_82 '◌';
        char ART_82 = '◌';
        typedef decltype(ART_82) art_element82;
        // #define ART_83 '●';
        char ART_83 = '●';
        typedef decltype(ART_83) art_element83;
        // #define ART_84 '◘';
        char ART_84 = '◘';
        typedef decltype(ART_84) art_element84;
        // #define ART_85 '◙';
        char ART_85 = '◙';
        typedef decltype(ART_85) art_element85;
        // #define ART_86 '◦';
        char ART_86 = '◦';
        typedef decltype(ART_86) art_element86;
        // #define ART_87 '☼';
        char ART_87 = '☼';
        typedef decltype(ART_87) art_element87;
        // #define ART_88 '♦';
        char ART_88 = '♦';
        typedef decltype(ART_88) art_element88;
        // #define ART_89 'ꬺ';
        char ART_89 = 'ꬺ';
        typedef decltype(ART_89) art_element89;
        // #define ART_90 'ꬻ';
        char ART_90 = 'ꬻ';
        typedef decltype(ART_90) art_element90;
        // #define ART_91 'ꬼ';
        char ART_91 = 'ꬼ';
        typedef decltype(ART_91) art_element91;
        // #define ART_92 'ꭅ';
        char ART_92 = 'ꭅ';
        typedef decltype(ART_92) art_element92;
        // #define ART_93 'ꭆ';
        char ART_93 = 'ꭆ';
        typedef decltype(ART_93) art_element93;
        // #define ART_94 'ꭇ';
        char ART_94 = 'ꭇ';
        typedef decltype(ART_94) art_element94;
        // #define ART_95 'ꭈ';
        char ART_95 = 'ꭈ';
        typedef decltype(ART_95) art_element95;
        // #define ART_96 'ꭉ';
        char ART_96 = 'ꭉ';
        typedef decltype(ART_96) art_element96;
        // #define ART_97 'ꭊ';
        char ART_97 = 'ꭊ';
        typedef decltype(ART_97) art_element97;
        // #define ART_98 'ꭋ';
        char ART_98 = 'ꭋ';
        typedef decltype(ART_98) art_element98;
        // #define ART_99 'ꭌ';
        char ART_99 = 'ꭌ';
        typedef decltype(ART_99) art_element99;
        // #define ART_100 'ꭎ';
        char ART_100 = 'ꭎ';
        typedef decltype(ART_100) art_element100;
        // #define ART_101 'ꭏ';
        char ART_101 = 'ꭏ';
        typedef decltype(ART_101) art_element101;
        // #define ART_102 'ꭐ';
        char ART_102 = 'ꭐ';
        typedef decltype(ART_102) art_element102;
        // #define ART_103 'ꭑ';
        char ART_103 = 'ꭑ';
        typedef decltype(ART_103) art_element103;
        // #define ART_104 'ꭒ';
        char ART_104 = 'ꭒ';
        typedef decltype(ART_104) art_element104;
        // #define ART_105 '꭛';
        char ART_105 = '꭛';
        typedef decltype(ART_105) art_element105;
        // #define ART_106 'ꭝ';
        char ART_106 = 'ꭝ';
        typedef decltype(ART_106) art_element106;
        // #define ART_107 'ꭞ';
        char ART_107 = 'ꭞ';
        typedef decltype(ART_107) art_element107;
        // #define ART_108 'ꭠ';
        char ART_108 = 'ꭠ';
        typedef decltype(ART_108) art_element108;
        // #define ART_109 'ꭡ';
        char ART_109 = 'ꭡ';
        typedef decltype(ART_109) art_element109;
        // #define ART_110 'ﬓ';
        char ART_110 = 'ﬓ';
        typedef decltype(ART_110) art_element110;
        // #define ART_111 'ﬔ';
        char ART_111 = 'ﬔ';
        typedef decltype(ART_111) art_element111;
        // #define ART_112 'ﬕ';
        char ART_112 = 'ﬕ';
        typedef decltype(ART_112) art_element112;
        // #define ART_113 'ﬖ';
        char ART_113 = 'ﬖ';
        typedef decltype(ART_113) art_element113;
        // #define ART_114 'ﬗ';
        char ART_114 = 'ﬗ';
        typedef decltype(ART_114) art_element114;
        // #define ART_115 'ﬞ';
        char ART_115 = 'ﬞ';
        typedef decltype(ART_115) art_element115;
        // #define ART_116 'ײַ';
        char ART_116 = 'ײַ';
        typedef decltype(ART_116) art_element116;
        // #define ART_117 'ﬠ';
        char ART_117 = 'ﬠ';
        typedef decltype(ART_117) art_element117;
        // #define ART_118 'ﬡ';
        char ART_118 = 'ﬡ';
        typedef decltype(ART_118) art_element118;
        // #define ART_119 'ﬢ';
        char ART_119 = 'ﬢ';
        typedef decltype(ART_119) art_element119;
        // #define ART_120 'ﬣ';
        char ART_120 = 'ﬣ';
        typedef decltype(ART_120) art_element120;
        // #define ART_121 'ﬥ';
        char ART_121 = 'ﬥ';
        typedef decltype(ART_121) art_element121;
        // #define ART_122 'ﬦ';
        char ART_122 = 'ﬦ';
        typedef decltype(ART_122) art_element122;
        // #define ART_123 'ﬧ';
        char ART_123 = 'ﬧ';
        typedef decltype(ART_123) art_element123;
        // #define ART_124 'ﬨ';
        char ART_124 = 'ﬨ';
        typedef decltype(ART_124) art_element124;
        // #define ART_125 '﬩';
        char ART_125 = '﬩';
        typedef decltype(ART_125) art_element125;
        // #define ART_126 'שׁ';
        char ART_126 = 'שׁ';
        typedef decltype(ART_126) art_element126;
        // #define ART_127 'שׂ';
        char ART_127 = 'שׂ';
        typedef decltype(ART_127) art_element127;
        // #define ART_128 'שּׁ';
        char ART_128 = 'שּׁ';
        typedef decltype(ART_128) art_element128;
        // #define ART_129 'שּׂ';
        char ART_129 = 'שּׂ';
        typedef decltype(ART_129) art_element129;
        // #define ART_130 'אַ';
        char ART_130 = 'אַ';
        typedef decltype(ART_130) art_element130;
        // #define ART_131 'אָ';
        char ART_131 = 'אָ';
        typedef decltype(ART_131) art_element131;
        // #define ART_132 'אּ';
        char ART_132 = 'אּ';
        typedef decltype(ART_132) art_element132;
        // #define ART_133 'בּ';
        char ART_133 = 'בּ';
        typedef decltype(ART_133) art_element133;
        // #define ART_134 'גּ';
        char ART_134 = 'גּ';
        typedef decltype(ART_134) art_element134;
        // #define ART_135 'דּ';
        char ART_135 = 'דּ';
        typedef decltype(ART_135) art_element135;
        // #define ART_136 'הּ';
        char ART_136 = 'הּ';
        typedef decltype(ART_136) art_element136;
        // #define ART_137 'וּ';
        char ART_137 = 'וּ';
        typedef decltype(ART_137) art_element137;
        // #define ART_138 'זּ';
        char ART_138 = 'זּ';
        typedef decltype(ART_138) art_element138;
        // #define ART_139 'טּ';
        char ART_139 = 'טּ';
        typedef decltype(ART_139) art_element139;
        // #define ART_140 'יּ';
        char ART_140 = 'יּ';
        typedef decltype(ART_140) art_element140;
        // #define ART_141 'ךּ';
        char ART_141 = 'ךּ';
        typedef decltype(ART_141) art_element141;
        // #define ART_142 'כּ';
        char ART_142 = 'כּ';
        typedef decltype(ART_142) art_element142;
        // #define ART_143 'לּ';
        char ART_143 = 'לּ';
        typedef decltype(ART_143) art_element143;
        // #define ART_144 'מּ';
        char ART_144 = 'מּ';
        typedef decltype(ART_144) art_element144;
        // #define ART_145 'נּ';
        char ART_145 = 'נּ';
        typedef decltype(ART_145) art_element145;
        // #define ART_146 'סּ';
        char ART_146 = 'סּ';
        typedef decltype(ART_146) art_element146;
        // #define ART_147 'ףּ';
        char ART_147 = 'ףּ';
        typedef decltype(ART_147) art_element147;
        // #define ART_148 'פּ';
        char ART_148 = 'פּ';
        typedef decltype(ART_148) art_element148;
        // #define ART_149 'צּ';
        char ART_149 = 'צּ';
        typedef decltype(ART_149) art_element149;
        // #define ART_150 'קּ';
        char ART_150 = 'קּ';
        typedef decltype(ART_150) art_element150;
        // #define ART_151 'רּ';
        char ART_151 = 'רּ';
        typedef decltype(ART_151) art_element151;
        // #define ART_152 'שּ';
        char ART_152 = 'שּ';
        typedef decltype(ART_152) art_element152;
        // #define ART_153 'תּ';
        char ART_153 = 'תּ';
        typedef decltype(ART_153) art_element153;
        // #define ART_154 'וֹ';
        char ART_154 = 'וֹ';
        typedef decltype(ART_154) art_element154;
        // #define ART_155 'בֿ';
        char ART_155 = 'בֿ';
        typedef decltype(ART_155) art_element155;
        // #define ART_156 'כֿ';
        char ART_156 = 'כֿ';
        typedef decltype(ART_156) art_element156;
        // #define ART_157 'פֿ';
        char ART_157 = 'פֿ';
        typedef decltype(ART_157) art_element157;
        // #define ART_158 'ﭏ';
        char ART_158 = 'ﭏ';
        typedef decltype(ART_158) art_element158;



      // MODELOS LEGADO
      const char* legado_desenhosoma[7][15] = {
        { "╔═════════════╗"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "║▒     ║     ▒║"},
        { "║▒   ══╫══   ▒║"},
        { "║▒     ║     ▒║"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "╚═════════════╝"}
      };

      const char* legado_desenhosubtracao[7][15] = {
        { "╔═════════════╗"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "║▒           ▒║"},
        { "║▒   ═════   ▒║"},
        { "║▒           ▒║"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "╚═════════════╝"}
      };

      const char* legado_desenhomultiplicacao[7][15] = {
        { "╔═════════════╗"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "║▒           ▒║"},
        { "║▒    ═╫═    ▒║"},
        { "║▒           ▒║"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "╚═════════════╝"}
      };
      
      const char* legado_desenhodivisao[7][15] = {
        { "╔═════════════╗"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "║▒      ╫═   ▒║"},
        { "║▒    ═╫═    ▒║"},
        { "║▒   ═╫      ▒║"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "╚═════════════╝"}
      };

      const char* legado_desenhopotenciacao[7][15] = {
        { "╔═════════════╗"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "║▒     ═     ▒║"},
        { "║▒    ═ ═    ▒║"},
        { "║▒   ═   ═   ▒║"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "╚═════════════╝"}
      };


      const char* legado_desenhoraizquadrada[7][15] = {
        { "╔═════════════╗"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "║▒     ═     ▒║"},
        { "║▒══  ═ ═    ▒║"},
        { "║▒  ╫╫   ═   ▒║"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "╚═════════════╝"}
      };

      const char* legado_desenhoraizcubica[7][15] = {
        { "╔═════════════╗"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "║▒   ═ ═     ▒║"},
        { "║▒══  ═ ═    ▒║"},
        { "║▒  ╫╫   ═   ▒║"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "╚═════════════╝"}
      };

      const char* legado_desenhopotdepot[7][15] = {
        { "╔═════════════╗"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "║▒  ═     ═  ▒║"},
        { "║▒ ═ ═   ═ ═ ▒║"},
        { "║▒═   ═ ═   ═▒║"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "╚═════════════╝"}
      };

      const char* legado_desenhomediarit[7][15] = {
        { "╔═════════════╗"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "║▒  ══   ══  ▒║"},
        { "║▒ ═════════ ▒║"},
        { "║▒    ═ ═    ▒║"},
        { "║▒▒▒▒▒▒▒▒▒▒▒▒▒║"},
        { "╚═════════════╝"}
      };


      const char* design_component[8][20];
      typedef decltype(design_component) UICLIElement;

      public:
      vdt _constructor(UICLIElement x) 
      {


        UICLIElement blank_design = {

          {"00000000000000000000"},
          {"00000000000000000000"},
          {"00000000000000000000"},
          {"00000000000000000000"},
          {"00000000000000000000"},
          {"00000000000000000000"},
          {"00000000000000000000"},
          {"00000000000000000000"}

        };


      }

      vdt UIMenus() { };

    };


  } 

}

#endif // LAYOUTS_NOTRELEASE_HPP
