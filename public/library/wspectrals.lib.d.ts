/** @description Define os esquemas disponíveis para a formação de novas cores. */
export declare enum Schemas {
  format_a = '00',
  format_b = '11',
  format_c = '22',
  format_d = '33',
  format_e = '44',
  format_f = '55',
  format_g = '66',
  format_h = '77',
  format_i = '88',
  format_j = '99',
  format_k = 'aa',
  format_l = 'bb',
  format_m = 'cc',
  format_n = 'dd'
}

/** @description Define a estrutura esquemática de uma família de cores. */
export declare interface StructureColor {
  corI: string,
  cor: string;
  gancho?: AppendedColor[]
} type AppendedColor = StructureColor;
