'use strict';

var should = require('chai').should();
var seqcore = require('../');

describe('#versionGuard', function() {
  it('global._seqcore should be defined', function() {
    should.equal(global._seqcore, seqcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      seqcore.versionGuard('version');
    }).should.throw('More than one instance of seqcore');
  });
});
