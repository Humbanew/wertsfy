# wertsfy 

[![PT-BR](./readme_docs/seletor_es-wd__pt-br.svg)](./README.md)
[![EN-WD](./readme_docs/seletor_es-wd__en-wd.svg)](./README.en_wd.md)
[![ES_WD](./readme_docs/seletor_es-wd__es-wd.svg)](./README.es_wd.md)

<br><br>
<div align="center"> 

  ![wertsfy-icon](https://github.com/user-attachments/assets/ac954f2e-439d-4b6e-a1c5-fa4f184dd252)
  
  ![Typescript](https://img.shields.io/badge/typescript-steelblue.svg?style=for-the-badge&logo=typescript&logoColor=111111)
  ![Javascript](https://img.shields.io/badge/javascript-yellow.svg?style=for-the-badge&logo=javascript&logoColor=111111)

</div>

## Historia

<div align="justify">

```Agosto de 2019```<br><br>
&nbsp;&nbsp;El comienzo de la concepción de lo que se incorporaría en el proyecto más grande, la Calculadora Rax *(o la calculadora Rax, en Portugués)*. Una calculadora modular donde sería posible usarla normalmente como una calculadora convencional, como lo tenemos en los sistemas operativos y otros formatos físicos. Pero también como **con sus funciones divididas en partes como si fueran partes LEGO**, y pueden activar y deshabilitar conjuntamente varias de ellas dentro de la base de la calculadora. En un primer análisis del proyecto, se subdividió en particiones de **Características comunes** (suma, resta, división, multiplicación, potencias, raíces, constantes y porcentaje, además de sus constantes), **funcionalidades científicas** (logaritmos, antilogarithms , Cologarithms, exponenciales, trigonométricos, arcos trigonométricos, números complejos, sus contactos asociados), **funcionalidad suprema** (matemática, física, química, biológica, geográfica, histórica, económica y otros, y su asociación) y su asociado **Características de conversión de las unidades de medición** (unidades de medición de longitud, unidades de área, unidades de medición de volumen, unidades medidas de 4 dimensiones, unidades medidas de 5 dimensiones, 6 unidades de medida de dimensiones, unidades de temperatura, unidades de medida del sistema internacional, unidades de unidades internacionales Medición imperial y varios otros modelos, así como sus constantes asociadas).

```Febrero a agosto de 2021```<br><br>
&nbsp;&nbsp;Desde el desarrollo del proyecto inicial, las pruebas de arquitectura de software inspiradas en las conexiones de cable (siendo las importaciones y exportaciones entre archivos separados) con la calculadora Rax y **deseo de un proyecto que lo incorpore completamente como un servicio matemático, junto con la Unión. De varias herramientas de desarrollo de JavaScript**, llegamos a Wertsfy, un proyecto que tenía la calculadora Rax y otros algoritmos útiles para el desarrollo. Desafortunadamente, no alcanzó un modelo que fuera agradable embarcarse en tantas soluciones y ser ligero simultáneamente para importarse como un paquete NPM. Unos meses más tarde, para probar la plataforma en línea de los módulos del paquete de nodo, se agregó Wertsfy allí.<br>
&nbsp;&nbsp;En las primeras impresiones, el paquete fue bien recibido, durante el primer mes de divulgación y después de algunas actualizaciones, se observó que la solución no fue lo más eficiente posible, con un mantenimiento complicado de hacerse en una actualización. De esta manera, el paquete fue descontinuado y eliminado de NPM para una reasignación de ideas y un ensamblaje de software satisfactorio, así como un seguro. Desafortunadamente, dejando que muchos usuarios del proyecto desaparecieron impotentes, hubo un error al notificar al ReadMe dentro del NPM que era un paquete de prueba en la plataforma.Internamente, durante el desarrollo, Wertsfy ha sido **reiniciado 4 veces hasta la actualidad**, pero el núcleo del código fuente sigue siendo el mismo desde el principio, el de 2019. 

```Marzo de 2022 hasta el día de hoy```<br><br>
&nbsp;&nbsp;Después de Insafers con el uso de NPM, se introdujo el comienzo de los estudios para poner en los módulos GitHub, junto con su repositorio y código fuente, unificando todo en una sola localidad. A lo largo de los meses de estudio y reorganización del proyecto, bajo su arquitectura de software, modelo de escalabilidad, modelo de prueba y depuración y otros matices. En **en junio de 2023** se publicó la primera prueba de la versión existente de Wertsfy, fue por un tiempo, hasta que fue necesario reorganizar en fragmentos el proyecto incorporado de la calculadora Rax, a **septiembre de 2024** ser reintroducido después en su repositorio como paquete asociado. Para usted que ha leído la historia confusa de este repositorio hasta ahora, aquí se establecerá una de las mejores herramientas de desarrollo de JavaScript.

<div>

## Instalación

  &nbsp;&nbsp;El procedimiento de instalación es rápido y práctico, solo es necesario **Siga los pasos** a continuación.

1. Cree el archivo `` .npmrc`` en el directorio **de su proyecto** con el siguiente contenido:

```
@humbanew:registry=https://npm.pkg.github.com
```

2. Instale el paquete normalmente usando **Node Package Modules [npm]**:

``` shell
$ npm install @humbanew/wertsfy
```

3. Cree un archivo de código fuente **JavaScript o TypeScript** Como prefiera.Y agregue el siguiente contenido para comenzar a usar esta herramienta:

``` javascript
import wertsfy from "wertsfy";

// La línea a continuación es opcional, se agregó para fines didácticos.
// Caso use TypeScript: const artfact: typeof wertsfy;
const artfact = wertsfy;
```
Listo, disfruta 😄

## Adiciones futuras

- Soporte a modificaciones de terceros.
- Soporte para más interfaces de aplicaciones de programa.
- Apoyo a otros proyectos incorporados.
- Apoyo para el tratamiento de excepción.
- Soporte para el tratamiento de la vuneabilidad.

## Términos de licencia y soporte

[Términos de licencia(HN License v5, MIT License Modified)](./LICENSE.md)<br> [Soporte de versiones](./SECURITY.md)

## Contáctenos

Si quieres abrir un _issue_ entre [aquí](https://github.com/humbanew/wertsfy/issues).

Si desea abrir una _pull request_ y contribuir al proyecto, ingrese este otro enlace [aquí](https://github.com/humbanew/wertsfy/pulls).

Si quisiera abrir una discusión en el repositorio, entre [aquí](https://github.com/humbanew/wertsfy/discussions).

## Documentación y ChangeLog

``v0.0.1``

▤ The Changelog ▤

```diff
+ Bloque adicional _Aritmeticos_.
```
<br>

▤ Documentación ▤

> ``wertsfy``**: object**<br>
> Raíz del kit de desarrollo.
> > ``aritmeticos``<br>
> > Bloque de propiedades aritméticas.
> > > ``AVOGADRO``**: number**<br>
> > > Avogadro constante.
> > >
> > > ``CBRT_01B02``**: number**<br>
> > > 1/2 raíz cúbica constante.
> > >
> > > ``CBRT_01B04``**: number**<br>
> > > 1/4 raíz cúbica constante.
> > >
> > > ``CBRT_01B06``**: number**<br>
> > > 1/6 raíz cúbica constante.
> > >
> > > ``CBRT_01B08``**: number**<br>
> > > 1/8 de raíz cúbica constante.
> > >
> > > ``CBRT_01``**: number**<br>
> > > 1 de raíz cúbica constante.
> > >
> > > ``CBRT_02``**: number**<br>
> > > 2 de raíz cúbica constante.
> > >
> > > ``CBRT_03``**: number**<br>
> > > 3 de raíz cúbica constante.
> > >
> > > ``CBRT_04``**: number**<br>
> > > 4 de raíz cúbica constante.
> > >
> > > ``CBRT_05``**: number**<br>
> > > 5 de raíz cúbica constante.
> > >
> > > ``CBRT_06``**: number**<br>
> > > 6 de raíz cúbica constante.
> > >
> > > ``CBRT_07``**: number**<br>
> > > 7 de raíz cúbica constante.
> > >
> > > ``CBRT_08``**: number**<br>
> > > 8 de raíz cúbica constante.
> > >
> > > ``CBRT_09``**: number**<br>
> > > 9 de raíz cúbica constante.
> > >
> > > ``CBRT_10``**: number**<br>
> > > 10 de raíz cúbica constante.
> > >
> > > ``COULOMB``**: number**<br>
> > > Coulomb constante.
> > >
> > > ``EULER``**: number**<br>
> > > Euler constante.
> > >
> > > ``LOG2``**: number**<br>
> > > Constante del logaritmo de 2.
> > >
> > > ``LOG2E``**: number**<br>
> > > Constante del 2 logaritmo en la base Euler.
> > >
> > > ``LOG10``**: number**<br>
> > > Constante del logaritmo de 10.
> > >
> > > ``LOG10E``**: number**<br>
> > > Constante del 10 logaritmo en la base Euler.
> > >
> > > ``MAXVALUE``**: number**<br>
> > > Constante del valor máximo.
> > >
> > > ``MINVALUE``**: number**<br>
> > > Constante del valor mínimo.
> > >
> > > ``NEWTON``**: number**<br>
> > > Newton constante.
> > >
> > > ``PI``**: number**<br>
> > > Pi constante.
> > >
> > > ``PLANK``**: number**<br>
> > > Plank constante.
> > >
> > > ``SQRT_01B02``**: number**<br>
> > > Raíz cuadrada de 1/2 constante.
> > >
> > > ``SQRT_01B04``**: number**<br>
> > > Raíz cuadrada de 1/4 constante.
> > >
> > > ``SQRT_01B06``**: number**<br>
> > > Raíz cuadrada de 1/6 constante.
> > >
> > > ``SQRT_01B08``**: number**<br>
> > > Raíz cuadrada de 1/8 constante.
> > >
> > > ``SQRT_01``**: number**<br>
> > > Raíz cuadrada de 1 constante.
> > >
> > > ``SQRT_02``**: number**<br>
> > > Raíz cuadrada de 2 constante.
> > >
> > > ``SQRT_03``**: number**<br>
> > > Raíz cuadrada de 3 constante.
> > >
> > > ``SQRT_04``**: number**<br>
> > > Raíz cuadrada de 4 constante.
> > >
> > > ``SQRT_05``**: number**<br>
> > > Raíz cuadrada de 5 constante.
> > >
> > > ``SQRT_06``**: number**<br>
> > > Raíz cuadrada de 6 constante.
> > >
> > > ``SQRT_07``**: number**<br>
> > > Raíz cuadrada de 7 constante.
> > >
> > > ``SQRT_08``**: number**<br>
> > > Raíz cuadrada de 8 constante.
> > >
> > > ``SQRT_09``**: number**<br>
> > > Raíz cuadrada de 9 constante.
> > >
> > > ``SQRT_10``**: number**<br>
> > > Raíz cuadrada de 10 constante.
> > >
> > > ``TESLA``**: number**<br>
> > > Tesla constante.
> > >
> > > ``ZERO``**: number**<br>
> > > Zero constante.
> > > 
> > > ``$``<br>
> > > Símbolo de acceso a todas las funciones disponibles en la biblioteca.
> > > > _(La lista de funciones disponibles para su uso, pronto una documentación más detallada)_

<br><br>
<div align="center">

  ![Humbanew Wertsfy Wiki Footer](https://github.com/user-attachments/assets/41ba7ecf-87a9-40f6-b907-bc1fba8e7674)
  
</div>
