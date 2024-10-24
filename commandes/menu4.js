//INFORMASI PREMIUM
//SSH & OVPN ACCOUNT//
//━━━━━━━━━━━━━━━━━━━━//
//IP-Addres : 95.111.198.73//
//Hostname : sg.auora.me//
//Username : DuniaVPN//
//Password : DuniaVPN//
//Limit IP : 9999//
//━━━━━━━━━━━━━━━━━━━━//
//Port openssh : 22, 443//
//Port ssh udp : 1-65535//
//Port ssh websocket https : 443//
//DNS Hostname : dns.auora.me//
//Pub key slowdns : 717d1feb4ce8596232c818054395cb1d0c209b14bc2f7925d147e600ddb5c347//






















































































const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
zokou({
  'nomCom': "video",
  'categorie': "Search",
  'reaction': '🎥'
}, async (_0x3373a2, _0xb8eb96, _0xbd3d34) => {
  const {
    ms: _0x393b2a,
    repondre: _0x3a80fb,
    arg: _0x31e7b4
  } = _0xbd3d34;
  if (!_0x31e7b4[0]) {
    _0x3a80fb("Please insert a song/video name.");
    return;
  }
  try {
    let _0x32f3fe = _0x31e7b4.join(" ");
    let _0x1511aa = [];
    const _0x1d64e6 = await yts(_0x32f3fe);
    _0x1511aa = _0x1d64e6.videos;
    if (_0x1511aa && _0x1511aa.length > 0) {
      const _0x1b4348 = _0x1511aa[0].url;
      const _0x1939a3 = await fetch("https://api.lolhuman.xyz/api/download/ytvideo2?url=" + encodeURIComponent(_0x1b4348) + "&apikey=" + "my-vriend");
      const _0x531826 = await _0x1939a3.json();
      if (_0x531826.status === 200 && _0x531826.success) {
        const _0x400cdf = _0x531826.result.download_url;
        const _0x505669 = {
          'image': {
            'url': _0x1511aa[0].thumbnail
          },
          'caption': "YOUTUBE SEARCH\n\n ©BERA TECH"
        };
        await _0xb8eb96.sendMessage(_0x3373a2, _0x505669, {
          'quoted': _0x393b2a
        });
        await _0xb8eb96.sendMessage(_0x3373a2, {
          'video': {
            'url': _0x400cdf
          },
          'mimetype': "video/mp4"
        }, {
          'quoted': _0x393b2a
        });
        _0x3a80fb("Downloded Successfully ");
      } else {
        _0x3a80fb("Searching...⏳");
      }
    } else {
      _0x3a80fb("No videos found.");
    }
  } catch (_0x482569) {
    console.error("Error from API:", _0x482569);
    _0x3a80fb("Searching...⏳");
  }
});
zokou({
  'nomCom': "play",
  'categorie': "Download",
  'reaction': '🎧'
}, async (_0x52185b, _0x42a02f, _0x2620c6) => {
  const {
    ms: _0x22dabe,
    repondre: _0x554a65,
    arg: _0x37b25e
  } = _0x2620c6;
  if (!_0x37b25e[0]) {
    _0x554a65("Please insert a song name.");
    return;
  }
  try {
    let _0xe2acaa = _0x37b25e.join(" ");
    let _0x15f0a6 = [];
    const _0x45d6bf = await yts(_0xe2acaa);
    _0x15f0a6 = _0x45d6bf.videos;
    if (_0x15f0a6 && _0x15f0a6.length > 0) {
      const _0x4bc93c = _0x15f0a6[0].url;
      const _0x5b9ac7 = await fetch("https://api.lolhuman.xyz/api/download/ytvideo2?url=" + encodeURIComponent(_0x4bc93c) + "&apikey=" + "my-vriend");
      const _0x40b996 = await _0x5b9ac7.json();
      if (_0x40b996.status === 200 && _0x40b996.success) {
        const _0x472357 = _0x40b996.result.download_url;
        const _0xebe15a = {
          'image': {
            'url': _0x15f0a6[0].thumbnail
          },
          'caption': "YOUTUBE SEARCH\n\n ©BERA TECH"
        };
        await _0x42a02f.sendMessage(_0x52185b, _0xebe15a, {
          'quoted': _0x22dabe
        });
        await _0x42a02f.sendMessage(_0x52185b, {
          'audio': {
            'url': _0x472357
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x22dabe
        });
        _0x554a65("*Downloded Successfully *");
      } else {
        _0x554a65("Failed to download audio. Please try again later.");
      }
    } else {
      _0x554a65("No audio found.");
    }
  } catch (_0x3e3df7) {
    console.error("Error from API:", _0x3e3df7);
    _0x554a65("An error occurred while searching or downloading the audio.");
  }
});
zokou({
  'nomCom': "song",
  'categorie': "Download",
  'reaction': '🎸'
}, async (_0x2f51eb, _0xfd7861, _0x4d8018) => {
  const {
    ms: _0x8669d3,
    repondre: _0x21a46b,
    arg: _0x5f3827
  } = _0x4d8018;
  if (!_0x5f3827[0]) {
    _0x21a46b("Please insert a song name.");
    return;
  }
  try {
    let _0xd82b07 = _0x5f3827.join(" ");
    let _0x163c77 = [];
    const _0x58eae3 = await yts(_0xd82b07);
    _0x163c77 = _0x58eae3.videos;
    if (_0x163c77 && _0x163c77.length > 0) {
      const _0x42b603 = _0x163c77[0].url;
      const _0xd345a5 = await fetch("https://api.lolhuman.xyz/api/download/ytaudio2?url=" + encodeURIComponent(_0x42b603) + "&apikey=" + "my-vriend");
      const _0x25384a = await _0xd345a5.json();
      if (_0x25384a.status === 200 && _0x25384a.success) {
        const _0x2a0604 = _0x25384a.result.download_url;
        const _0x24fa27 = {
          'image': {
            'url': _0x163c77[0].thumbnail
          },
          'caption': "YOUTUBE SEARCH\n\n ©BERA TECH"
        };
        await _0xfd7861.sendMessage(_0x2f51eb, _0x24fa27, {
          'quoted': _0x8669d3
        });
        await _0xfd7861.sendMessage(_0x2f51eb, {
          'audio': {
            'url': _0x2a0604
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x8669d3
        });
        _0x21a46b("*Downloded Successfully *");
      } else {
        _0x21a46b("Failed to download audio. Please try again later.");
      }
    } else {
      _0x21a46b("No audio found.");
    }
  } catch (_0x4cb1a6) {
    console.error("Error from API:", _0x4cb1a6);
    _0x21a46b("An error occurred while searching or downloading the audio.");
  }
});

//const _0x1bd9bc=_0x46bc;(function(_0x3920b8,_0x5ed72a){const _0x3c8c9c=_0x46bc,_0x385c85=_0x3920b8();while(!![]){try{const _0x20f010=-parseInt(_0x3c8c9c(0x12a))/0x1*(parseInt(_0x3c8c9c(0x12e))/0x2)+parseInt(_0x3c8c9c(0x13d))/0x3+-parseInt(_0x3c8c9c(0x117))/0x4+-parseInt(_0x3c8c9c(0x121))/0x5+parseInt(_0x3c8c9c(0x13b))/0x6+-parseInt(_0x3c8c9c(0x13a))/0x7+-parseInt(_0x3c8c9c(0x11d))/0x8*(parseInt(_0x3c8c9c(0x138))/0x9);if(_0x20f010===_0x5ed72a)break;else _0x385c85['push'](_0x385c85['shift']());}catch(_0x8d3617){_0x385c85['push'](_0x385c85['shift']());}}}(_0x36fe,0x52465));const {zokou}=require('../framework/zokou'),yts=require(_0x1bd9bc(0x130));function _0x46bc(_0xd4968f,_0x2a9f14){const _0x36fe8a=_0x36fe();return _0x46bc=function(_0x46bc4a,_0x37834e){_0x46bc4a=_0x46bc4a-0x116;let _0x442386=_0x36fe8a[_0x46bc4a];return _0x442386;},_0x46bc(_0xd4968f,_0x2a9f14);}function _0x36fe(){const _0x594695=['Error\x20from\x20API:','334053hMvSoR','Downloded\x20Successfully\x20','1478162tzwDSw','3120558pvwllQ','*Downloded\x20Successfully\x20*','1968675vOANfv','Please\x20insert\x20a\x20song\x20name.','917180PNBIIJ','https://api.ibrahimadams.us.kg/api/download/ytmp4?url=','download_url','audio/mp4','success','An\x20error\x20occurred\x20while\x20searching\x20or\x20downloading\x20the\x20audio.','24QLoIVA','Searching...⏳','Download','video','953495gelSHm','result','Failed\x20to\x20download\x20audio.\x20Please\x20try\x20again\x20later.','&apikey=','play','json','join','length','videos','922AwKNHa','url','No\x20audio\x20found.','video/mp4','210ZhioRs','my-vriend','yt-search','song','sendMessage','No\x20videos\x20found.','error','status','YOUTUBE\x20SEARCH\x0a\x0a\x20©BERA\x20TECH'];_0x36fe=function(){return _0x594695;};return _0x36fe();}zokou({'nomCom':_0x1bd9bc(0x120),'categorie':'Search','reaction':'🎥'},async(_0x38a78c,_0x4d9feb,_0x4385c4)=>{const _0x410ac2=_0x1bd9bc,{ms:_0x1eaa37,repondre:_0x488a12,arg:_0x439da4}=_0x4385c4;if(!_0x439da4[0x0]){_0x488a12('Please\x20insert\x20a\x20song/video\x20name.');return;}try{let _0x21d2b4=_0x439da4[_0x410ac2(0x127)]('\x20'),_0x487336=[];const _0x325b95=await yts(_0x21d2b4);_0x487336=_0x325b95[_0x410ac2(0x129)];if(_0x487336&&_0x487336[_0x410ac2(0x128)]>0x0){const _0x45a4d1=_0x487336[0x0][_0x410ac2(0x12b)],_0x47f6de=await fetch(_0x410ac2(0x118)+encodeURIComponent(_0x45a4d1)+_0x410ac2(0x124)+_0x410ac2(0x12f)),_0x2869b9=await _0x47f6de[_0x410ac2(0x126)]();if(_0x2869b9[_0x410ac2(0x135)]===0xc8&&_0x2869b9[_0x410ac2(0x11b)]){const _0x12dcc4=_0x2869b9[_0x410ac2(0x122)]['download_url'],_0x4a5f90={'image':{'url':_0x487336[0x0]['thumbnail']},'caption':_0x410ac2(0x136)};await _0x4d9feb[_0x410ac2(0x132)](_0x38a78c,_0x4a5f90,{'quoted':_0x1eaa37}),await _0x4d9feb[_0x410ac2(0x132)](_0x38a78c,{'video':{'url':_0x12dcc4},'mimetype':_0x410ac2(0x12d)},{'quoted':_0x1eaa37}),_0x488a12(_0x410ac2(0x139));}else _0x488a12(_0x410ac2(0x11e));}else _0x488a12(_0x410ac2(0x133));}catch(_0x21e25d){console['error'](_0x410ac2(0x137),_0x21e25d),_0x488a12(_0x410ac2(0x11e));}}),zokou({'nomCom':_0x1bd9bc(0x125),'categorie':'Download','reaction':'🎧'},async(_0x19e12e,_0x5e1d15,_0x2b6883)=>{const _0x41783e=_0x1bd9bc,{ms:_0x3d8c86,repondre:_0x116db0,arg:_0x4ca8ba}=_0x2b6883;if(!_0x4ca8ba[0x0]){_0x116db0(_0x41783e(0x116));return;}try{let _0xc4da23=_0x4ca8ba[_0x41783e(0x127)]('\x20'),_0x367ddc=[];const _0x285986=await yts(_0xc4da23);_0x367ddc=_0x285986[_0x41783e(0x129)];if(_0x367ddc&&_0x367ddc['length']>0x0){const _0x5b0218=_0x367ddc[0x0][_0x41783e(0x12b)],_0x69cdc5=await fetch('https://api.ibrahimadams.us.kg/api/download/ytmp3?url='+encodeURIComponent(_0x5b0218)+_0x41783e(0x124)+_0x41783e(0x12f)),_0x326440=await _0x69cdc5['json']();if(_0x326440[_0x41783e(0x135)]===0xc8&&_0x326440['success']){const _0x469241=_0x326440[_0x41783e(0x122)][_0x41783e(0x119)],_0x2b565d={'image':{'url':_0x367ddc[0x0]['thumbnail']},'caption':_0x41783e(0x136)};await _0x5e1d15['sendMessage'](_0x19e12e,_0x2b565d,{'quoted':_0x3d8c86}),await _0x5e1d15[_0x41783e(0x132)](_0x19e12e,{'audio':{'url':_0x469241},'mimetype':_0x41783e(0x11a)},{'quoted':_0x3d8c86}),_0x116db0(_0x41783e(0x13c));}else _0x116db0('Failed\x20to\x20download\x20audio.\x20Please\x20try\x20again\x20later.');}else _0x116db0(_0x41783e(0x12c));}catch(_0x2fc0ec){console[_0x41783e(0x134)](_0x41783e(0x137),_0x2fc0ec),_0x116db0(_0x41783e(0x11c));}}),zokou({'nomCom':_0x1bd9bc(0x131),'categorie':_0x1bd9bc(0x11f),'reaction':'🎸'},async(_0xe5ee72,_0x51be9c,_0x108c62)=>{const _0x12295=_0x1bd9bc,{ms:_0x5d56da,repondre:_0x4dc8f2,arg:_0x3c7923}=_0x108c62;if(!_0x3c7923[0x0]){_0x4dc8f2(_0x12295(0x116));return;}try{let _0x2054a8=_0x3c7923[_0x12295(0x127)]('\x20'),_0x19b44a=[];const _0x179dfb=await yts(_0x2054a8);_0x19b44a=_0x179dfb[_0x12295(0x129)];if(_0x19b44a&&_0x19b44a[_0x12295(0x128)]>0x0){const _0x22cdd5=_0x19b44a[0x0]['url'],_0x83255b=await fetch('https://api.ibrahimadams.us.kg/api/download/ytmp3?url='+encodeURIComponent(_0x22cdd5)+_0x12295(0x124)+_0x12295(0x12f)),_0x59e138=await _0x83255b[_0x12295(0x126)]();if(_0x59e138[_0x12295(0x135)]===0xc8&&_0x59e138[_0x12295(0x11b)]){const _0x3ca6ad=_0x59e138[_0x12295(0x122)][_0x12295(0x119)],_0x59a261={'image':{'url':_0x19b44a[0x0]['thumbnail']},'caption':'YOUTUBE\x20SEARCH\x0a\x0a\x20©BERA\x20TECH'};await _0x51be9c[_0x12295(0x132)](_0xe5ee72,_0x59a261,{'quoted':_0x5d56da}),await _0x51be9c[_0x12295(0x132)](_0xe5ee72,{'audio':{'url':_0x3ca6ad},'mimetype':_0x12295(0x11a)},{'quoted':_0x5d56da}),_0x4dc8f2(_0x12295(0x13c));}else _0x4dc8f2(_0x12295(0x123));}else _0x4dc8f2('No\x20audio\x20found.');}catch(_0x3faf67){console['error'](_0x12295(0x137),_0x3faf67),_0x4dc8f2(_0x12295(0x11c));}})//;

//━━━━━━━━━━━━━━━━━━━━Payload SSH WS : GET / HTTP/1.1[crlf]Host: sg.auora.me[crlf]Upgrade: Websocket[crlf]Connection: Keep-Alive[crlf]User-Agent: [ua][crlf][crlf]
///━━━━━━━━━━━━━━━━━━━━
//Expired on : Oct 04, 2024//
