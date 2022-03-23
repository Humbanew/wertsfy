/// <reference path='fourslash.ts'/>

////class C {
////    constructor(x: number) { }
////    foo() { }
////    bar() { }
////    static boo() { }
////}
////
////module C {
////    export var x = 1;
////    var y = 2;
////}
////module C {
////    export function foo() { }
////    function baz() { return ''; }
////}
////
////var c = new C/*1*/(C./*2*/x);
////c./*3*/foo = C./*4*/foo;

verify.completions(
    { marker: "1", includes: "C" },
    {
        marker: ["2", "4"],
        exact: [
            { name: "prototype", sortText: completion.SortText.LocationPriority },
            { name: "boo", sortText: completion.SortText.LocalDeclarationPriority },
            { name: "x", sortText: completion.SortText.LocationPriority },
            { name: "foo", sortText: completion.SortText.LocationPriority },
            ...completion.functionMembers
        ]
    },
    { marker: "3", exact: ["foo", "bar"] },
);
verify.noErrors();
