// Copyright 2022 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const x = {
  [Symbol.iterator]: 1
};
Uint8Array.from(x);
