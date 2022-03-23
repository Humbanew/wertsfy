﻿/// <reference path='fourslash.ts' />

//@Filename: file.tsx
//// var x1 = <di/*1*/v></di/*2*/v>
//// class MyElement {}
//// var z = <My/*3*/Element></My/*4*/Element>

verify.quickInfos({
    1: "any",
    2: "any",
    3: "class MyElement",
    4: "class MyElement"
});
