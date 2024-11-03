# wertsfy 

[![PT-BR](./readme_docs/seletor_en-wd__pt-br.svg)](./README.md)
[![EN-WD](./readme_docs/seletor_en-wd__en-wd.svg)](./README.en_wd.md)
[![ES_WD](./readme_docs/seletor_en-wd__es-wd.svg)](./README.es_wd.md)

<br><br>
<div align="center"> 

  ![wertsfy-icon](https://github.com/user-attachments/assets/ac954f2e-439d-4b6e-a1c5-fa4f184dd252)
  
  ![Typescript](https://img.shields.io/badge/typescript-steelblue.svg?style=for-the-badge&logo=typescript&logoColor=111111)
  ![Javascript](https://img.shields.io/badge/javascript-yellow.svg?style=for-the-badge&logo=javascript&logoColor=111111)

</div>

## History

<div align="justify">

```August 2019```<br><br>
&nbsp;&nbsp;The beginning of the conception of what would be incorporated into the larger project, Rax Calculator *(or Calculadora Rax, in Portuguese)*. A modular calculator where it would be possible to use it normally as a conventional calculator, as we have in operating systems and other physical formats. But also as **with their functions divided into parts as if they were lego parts**, and can both activate and jointly disable several of them within the base of the calculator.In a first project analysis was subdivided into partitions of **common features** (sum, subtraction, division, multiplication, powers, roots, constants and percentage, besides its constants), **scientific functionalities** (logarithms, antilogarithms, Cologarithms, exponentials, trigonometric, trigonometric arches, complex numbers, their associated contacts), **supreme functionality** (mathematical, physical, chemical, biological, geographical, historical, economic and others, and their associated) and their associated **Conversion features of measurement units** (length measurement units, area units, volume measurement units, 4 -dimensional measured units, 5 -dimensional measured units, 6 dimensions units of measure, Temperature units, units of measure of the international system, units of imperial measurement and several other models, as well as their associated constants).

```February to August 2021```<br><br>
&nbsp;&nbsp;From the development of the initial project, software architecture tests inspired by cable connections (being the imports and exports between separate files) with the Rax calculator and **desire for a project that fully incorporate it as a mathematical service, together together with the union of various JavaScript Development Tools**, we came to Wertsfy, a project that internally had the Rax calculator and other useful algorithms for development Unfortunately, it did not reach a model that would be pleasant to embark so many solutions and be light simultaneously to be imported as an NPM package.A few months later, in order to test the Node Package Modules online platform, Wertsfy was added there.<br>
&nbsp;&nbsp;In the first impressions the package was well received, over the first month of disclosure and after some updates, it was noted that the solution was not as efficient as possible, with a complicated maintenance of being done in an update.This way the package was discontinued and removed from NPM for a reallocation of ideas and satisfactory software assembly, as well as insurance.Unfortunately, leaving many project users helplessly disappeared, there was a mistake to notify the readme within the NPM that it was a test package on the platform.Internally, during development, Wertsfy has been **restarted 4 times to the present day**, but the core of the source code is still the same from the beginning, that of 2019. 

```March 2022 to the present day```<br><br>
&nbsp;&nbsp;After unsafers with the use of NPM, the beginning of the studies were introduced to put in the Github Modules, along with its repository and source code, unifying everything in just one locality. Throughout the months of study and reorganization of the project, under its software architecture, scalability model, test model and debug and other nuances. In **June 2023** was published the first test of the existing version of Wertsfy, it was for a while, until it was necessary to reorganize in fragments the incorporated project of the Rax calculator, to **September 2024** be reintroduced afterin your repository as an associated package. For you who have read the confusing history of this repository so far, here will be established one of the best JavaScript development tools.

<div>

## Installation

&nbsp;&nbsp;The installation procedure is fast and practical, it is only necessary** follow the steps ** below.

1. Create the `` .npmrc`` file in the *directory of your project* with the following content:

```
@humbanew:registry=https://npm.pkg.github.com
```

2. Install the package normally using **Node Package Modules [npm]**:

``` shell
$ npm install @humbanew/wertsfy
```

3. Create a source code file **JavaScript or TypeScript** as you prefer. And add the following content to start using this tool:

``` javascript
import wertsfy from "wertsfy";

// The line below is optional, it was added for didactic purposes.
// Case use Typescript: const artfact: typeof wertsfy;
const artfact = wertsfy;
```
Ready, enjoy 😄

## Future additions

- Support to third party modifications.
- Support to more program application interfaces.
- Support to other incorporated projects.
- Support for exception treatment.
- Support for vuneability treatment.

## License and Support Terms

[License Terms (HN License v5, MIT License Modified)](./LICENSE.md)<br> [Versions Support](./SECURITY.md)

## Contact Us

If you want to open a _issue_ enter [here](https://github.com/humbanew/wertsfy/issues).

If you want to open a _pull request_ and contribute to the project, enter this other link [here](https://github.com/humbanew/wertsfy/pulls).

If you wanted to open a discussion in the repository, enter [here](https://github.com/humbanew/wertsfy/discussions).

## Documentation & Changelog

``v0.0.1``

▤ The Changelog ▤

```diff
+ Added block _Aritmeticos_.
```
<br>

▤ Documentation ▤

> ``wertsfy``**: object**<br>
> Development Kit root.
> > ``aritmeticos``<br>
> > Arithmetic properties block.
> > > ``AVOGADRO``**: number**<br>
> > > Avogadro constant.
> > >
> > > ``CBRT_01B02``**: number**<br>
> > > Constant of the cubic root of 1/2.
> > >
> > > ``CBRT_01B04``**: number**<br>
> > > Constant of the cubic root of 1/4.
> > >
> > > ``CBRT_01B06``**: number**<br>
> > > Constant of the cubic root of 1/6.
> > >
> > > ``CBRT_01B08``**: number**<br>
> > > Constant of the cubic root of 1/8.
> > >
> > > ``CBRT_01``**: number**<br>
> > > Constant of the cubic root of 1.
> > >
> > > ``CBRT_02``**: number**<br>
> > > Constant of the cubic root of 2.
> > >
> > > ``CBRT_03``**: number**<br>
> > > Constant of the cubic root of 3.
> > >
> > > ``CBRT_04``**: number**<br>
> > > Constant of the cubic root of 4.
> > >
> > > ``CBRT_05``**: number**<br>
> > > Constant of the cubic root of 5.
> > >
> > > ``CBRT_06``**: number**<br>
> > > Constant of the cubic root of 6.
> > >
> > > ``CBRT_07``**: number**<br>
> > > Constant of the cubic root of 7.
> > >
> > > ``CBRT_08``**: number**<br>
> > > Constant of the cubic root of 8.
> > >
> > > ``CBRT_09``**: number**<br>
> > > Constant of the cubic root of 9.
> > >
> > > ``CBRT_10``**: number**<br>
> > > Constant of the cubic root of 10.
> > >
> > > ``COULOMB``**: number**<br>
> > > Coulomb constant.
> > >
> > > ``EULER``**: number**<br>
> > > Euler constant.
> > >
> > > ``LOG2``**: number**<br>
> > > Constant of the 2 logarithm.
> > >
> > > ``LOG2E``**: number**<br>
> > > Constant of the 2 logarithm at Base Euler.
> > >
> > > ``LOG10``**: number**<br>
> > > Constant of the 10 logarithm.
> > >
> > > ``LOG10E``**: number**<br>
> > > Constant of the 10 logarithm at Base Euler.
> > >
> > > ``MAXVALUE``**: number**<br>
> > > Constant of maximum value.
> > >
> > > ``MINVALUE``**: number**<br>
> > > Constant of minimum value.
> > >
> > > ``NEWTON``**: number**<br>
> > > Newton constant.
> > >
> > > ``PI``**: number**<br>
> > > Pi constant.
> > >
> > > ``PLANK``**: number**<br>
> > > Planck constant.
> > >
> > > ``SQRT_01B02``**: number**<br>
> > > Constant of the square root of 1/2.
> > >
> > > ``SQRT_01B04``**: number**<br>
> > > Constant of the square root of 1/4.
> > >
> > > ``SQRT_01B06``**: number**<br>
> > > Constant of the square root of 1/6.
> > >
> > > ``SQRT_01B08``**: number**<br>
> > > Constant of the square root of 1/8.
> > >
> > > ``SQRT_01``**: number**<br>
> > > Constant of the square root of 1.
> > >
> > > ``SQRT_02``**: number**<br>
> > > Constant of the square root of 2.
> > >
> > > ``SQRT_03``**: number**<br>
> > > Constant of the square root of 3.
> > >
> > > ``SQRT_04``**: number**<br>
> > > Constant of the square root of 4.
> > >
> > > ``SQRT_05``**: number**<br>
> > > Constant of the square root of 5.
> > >
> > > ``SQRT_06``**: number**<br>
> > > Constant of the square root of 6.
> > >
> > > ``SQRT_07``**: number**<br>
> > > Constant of the square root of 7.
> > >
> > > ``SQRT_08``**: number**<br>
> > > Constant of the square root of 8.
> > >
> > > ``SQRT_09``**: number**<br>
> > > Constant of the square root of 9.
> > >
> > > ``SQRT_10``**: number**<br>
> > > Constant of the square root of 10.
> > >
> > > ``TESLA``**: number**<br>
> > > Tesla constant.
> > >
> > > ``ZERO``**: number**<br>
> > > Zero constant.
> > > 
> > > ``$``<br>
> > > Access symbol to all functions available in the library.
> > > > _(The list of functions available for use, soon a more detailed documentation)_

<br><br>
<div align="center">

  ![Humbanew Wertsfy Wiki Footer](https://github.com/user-attachments/assets/41ba7ecf-87a9-40f6-b907-bc1fba8e7674)
  
</div>
