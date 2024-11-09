const _0x5b6133 = {
  'nomCom': "gpt"
};
function _0xb92801(_0xb2f62e, _0x587404, _0x16962f, _0x34ef6a, _0x212124) {
  return _0x3d9c(_0x212124 - 787, _0x587404);
}
_0x5b6133.reaction = '😇';
_0x5b6133.categorie = 'AI';
zokou(_0x5b6133, async (_0x40e38b, _0x5a37fe, _0x2e95bf) => {
  const {
    repondre: _0x465558,
    arg: _0x3401c5,
    ms: _0xe4197c
  } = _0x2e95bf;
  try {
    if (!_0x3401c5 || _0x3401c5.length === 0) {
      return _0x465558("Please ask a question");
    }
    const _0x42f83f = _0x3401c5.join(" ");
    const _0x5b2e99 = await axios.get("https://widipe.com/v2/gpt4?text=" + encodeURIComponent(_0x42f83f));
    const _0x107c68 = _0x5b2e99.data;
    if (_0x107c68 && _0x107c68.result) {
      _0x465558(_0x107c68.result);
    } else {
      _0x465558("Error during response generation.");
    }
  } catch (_0x325ab0) {
    console.error("Error:", _0x325ab0.message || "An unknown error occurred.");
    _0x465558("Oops, an error occurred while processing your request.");
  }
});
function _0x492991(_0xcac80d) {
  function _0x1fcf48(_0x469ab4) {
    if (typeof _0x469ab4 === "string") {
      return function (_0x456eb8) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x469ab4 / _0x469ab4).length !== 1 || _0x469ab4 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x1fcf48(++_0x469ab4);
  }
  try {
    if (_0xcac80d) {
      return _0x1fcf48;
    } else {
      _0x1fcf48(0);
    }
  } catch (_0x5f5242) {}
                                                 }
