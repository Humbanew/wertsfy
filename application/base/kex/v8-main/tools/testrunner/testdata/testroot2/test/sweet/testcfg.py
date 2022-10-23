# Copyright 2018 the V8 project authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""
Dummy test suite extension with some flaky fruity tests.
"""

from testrunner.local import testsuite
from testrunner.objects import testcase


class TestLoader(testsuite.TestLoader):
  def _list_test_filenames(self):
    return ['bananaflakes']


class TestSuite(testsuite.TestSuite):
  def _test_loader_class(self):
    return TestLoader

  def _test_class(self):
    return TestCase


class TestCase(testcase.TestCase):
  def get_shell(self):
    return 'd8_mocked.py'

  def _get_files_params(self):
    return [self.name]
