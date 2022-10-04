"use strict";
var assert = require('assert');
var util = require('../../common/util');
describe('util', function () {
    it('parseQueryParams', function () {
        var params = util.parseQueryParams('?id=123&return_url=http://whatever.com');
        assert.deepStrictEqual(params, { id: '123', return_url: 'http://whatever.com' });
    });
});
//# sourceMappingURL=util.spec.js.map