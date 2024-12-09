





























const _0x47bc33 = {
  nomCom: "gpt2",
  reaction: '🛰️',
  categorie: 'AI'
};
zokou(_0x47bc33, async (_0x507642, _0x383502, _0x1e4a1e) => {
  const {
    repondre: _0x56beeb,
    arg: _0x460f78,
    ms: _0x5b5d00
  } = _0x1e4a1e;
  try {
    if (!_0x460f78 || _0x460f78.length === 0) {
      return _0x56beeb("Please ask a question.");
    }
    const _0x231145 = _0x460f78.join(" ");
    const _0x3eaa4c = await axios.get("https://api.maher-zubair.xyz/ai/chatgpt4?q=" + _0x231145);
    const _0x486d57 = _0x3eaa4c.data;
    if (_0x486d57) {
      _0x56beeb(_0x486d57.data);
    } else {
      _0x56beeb("Error during response generation.");
    }
  } catch (_0x97dcb2) {
    console.error("Erreur:", _0x97dcb2.message || "Une erreur s'est produite");
    _0x56beeb("Oops, an error occurred while processing your request.");
  }
});
