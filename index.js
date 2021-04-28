'use strict';

var seqcore = module.exports;

// module information
seqcore.version = 'v' + require('./package.json').version;
seqcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of seqcore-lib found. ' +
      'Please make sure to require seqcore-lib and check that submodules do' +
      ' not also include their own seqcore-lib dependency.';
    throw new Error(message);
  }
};
seqcore.versionGuard(global._seqcore);
global._seqcore = seqcore.version;

// crypto
seqcore.crypto = {};
seqcore.crypto.BN = require('./lib/crypto/bn');
seqcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
seqcore.crypto.Hash = require('./lib/crypto/hash');
seqcore.crypto.Random = require('./lib/crypto/random');
seqcore.crypto.Point = require('./lib/crypto/point');
seqcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
seqcore.encoding = {};
seqcore.encoding.Base58 = require('./lib/encoding/base58');
seqcore.encoding.Base58Check = require('./lib/encoding/base58check');
seqcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
seqcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
seqcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
seqcore.util = {};
seqcore.util.buffer = require('./lib/util/buffer');
seqcore.util.js = require('./lib/util/js');
seqcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
seqcore.errors = require('./lib/errors');

// main bitcoin library
seqcore.Address = require('./lib/address');
seqcore.Block = require('./lib/block');
seqcore.MerkleBlock = require('./lib/block/merkleblock');
seqcore.BlockHeader = require('./lib/block/blockheader');
seqcore.HDPrivateKey = require('./lib/hdprivatekey.js');
seqcore.HDPublicKey = require('./lib/hdpublickey.js');
seqcore.Networks = require('./lib/networks');
seqcore.Opcode = require('./lib/opcode');
seqcore.PrivateKey = require('./lib/privatekey');
seqcore.PublicKey = require('./lib/publickey');
seqcore.Script = require('./lib/script');
seqcore.Transaction = require('./lib/transaction');
seqcore.URI = require('./lib/uri');
seqcore.Unit = require('./lib/unit');

// dependencies, subject to change
seqcore.deps = {};
seqcore.deps.bnjs = require('bn.js');
seqcore.deps.bs58 = require('bs58');
seqcore.deps.Buffer = Buffer;
seqcore.deps.elliptic = require('elliptic');
seqcore.deps.scryptsy = require('scryptsy');
seqcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
seqcore.Transaction.sighash = require('./lib/transaction/sighash');
