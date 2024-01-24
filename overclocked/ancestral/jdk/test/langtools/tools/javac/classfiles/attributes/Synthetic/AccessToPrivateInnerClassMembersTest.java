/*
 * Copyright (c) 2015, 2018, Oracle and/or its affiliates. All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.
 *
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version
 * 2 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * Please contact Oracle, 500 Oracle Parkway, Redwood Shores, CA 94065 USA
 * or visit www.oracle.com if you need additional information or have any
 * questions.
 */

/*
 * @test
 * @bug 8044537
 * @summary Checking ACC_SYNTHETIC flag is generated for access method
 *          generated to access to private methods and fields.
 * @modules jdk.compiler/com.sun.tools.javac.api
 *          jdk.compiler/com.sun.tools.javac.main
 *          java.base/jdk.internal.classfile
 *          java.base/jdk.internal.classfile.attribute
 *          java.base/jdk.internal.classfile.constantpool
 *          java.base/jdk.internal.classfile.instruction
 *          java.base/jdk.internal.classfile.components
 *          java.base/jdk.internal.classfile.impl
 * @library /tools/lib /tools/javac/lib ../lib
 * @build toolbox.ToolBox InMemoryFileManager TestResult
 * @build AccessToPrivateInnerClassMembersTest SyntheticTestDriver ExpectedClass ExpectedClasses
 * @run main SyntheticTestDriver AccessToPrivateInnerClassMembersTest
 */

/**
 * Access from top level class to inner classes.
 * Synthetic members:
 * 1. inner classes for Inner*.
 * 2. getter/setter for private field var.
 * 3. access method for private method function().
 * 4. getter/setter for private field staticVar.
 * 5. access method for private method staticFunction().
 * 6. constructor for Inner*.
 */
@ExpectedClass(className = "AccessToPrivateInnerClassMembersTest",
        expectedMethods = {"<init>()", "<clinit>()"})
@ExpectedClass(className = "AccessToPrivateInnerClassMembersTest$Inner1",
        expectedMethods = {"<init>(AccessToPrivateInnerClassMembersTest)", "function()"},
        expectedFields = "var")
@ExpectedClass(className = "AccessToPrivateInnerClassMembersTest$Inner2",
        expectedMethods = {"function()", "staticFunction()", "<init>()"},
        expectedFields = {"staticVar", "var"})
public class AccessToPrivateInnerClassMembersTest {

    private class Inner1 {
        private Inner1() {}
        private int var;
        private void function() {}
    }

    {
        Inner1 inner = new Inner1();
        inner.var = 0;
        int i = inner.var;
        inner.function();
    }

    private static class Inner2 {
        private Inner2() {}
        private int var;
        private static int staticVar;
        private void function() {}
        private static void staticFunction() {}
    }

    {
        Inner2 inner = new Inner2();
        inner.var = 0;
        int i = inner.var;
        inner.function();
    }

    static {
        Inner2.staticFunction();
        Inner2.staticVar = 0;
        int i = Inner2.staticVar;
    }
}