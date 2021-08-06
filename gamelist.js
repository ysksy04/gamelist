const entireList = [
    {title: 'Apex Aim Trainer', tag: ['Aim','Steam','Inst']},
    {title: 'CSGO', tag: ['PvP','Aim','Steam','Inst']},
    {title: 'PAYDAY 2', tag: ['PvE','Steam','Inst']},
    {title: 'VRChat', tag: ['NotShooter','Steam','Inst']},
    {title: 'L4D2', tag: ['PvE','Steam','Inst']},
    {title: 'kovaak', tag: ['Aim','Steam','Inst']},
    {title: 'Gunfire Reborn', tag: ['PvE','Steam','Inst']},
    {title: 'Red Dead Online', tag: ['PvP','PvE','Steam','Inst']},
    {title: 'Rogue Company', tag: ['PvP','Steam','Inst']},
    {title: 'Stardew Valley', tag: ['NotShooter','Steam','Inst']},
    {title: 'Titanfall 2', tag: ['PvE','PvP','Steam','Inst']},
    {title: 'Warframe', tag: ['PvE','Steam','Inst']},
    {title: 'Realm Royale', tag: ['PvP','Steam','Inst']},
    {title: 'Eternal Return', tag: ['NotShooter','Steam','Inst']},
    {title: 'Sunset Overdrive', tag: ['PvE','Steam','Inst']},
    {title: 'Aim Hero', tag: ['Aim','Steam','Inst']},
    {title: 'Kenshi', tag: ['NotShooter','Steam','Inst']},
    {title: 'Paladins', tag: ['PvP','Steam','Inst']},
    {title: 'Musynx', tag: ['NotShooter','Steam','Inst']},
    {title: 'Wolcen', tag: ['NotShooter','Steam','Inst']},
    {title: 'Battlefield V', tag: ['PvE','PvP','Origin','Inst']},
    {title: 'APEX LEGENDS', tag: ['PvP','Origin','Inst']},
    {title: 'OVERWATCH', tag: ['PvP','Battle.net','Inst']},
    {title: 'CoD WARZONE', tag: ['PvP','Battle.net','Inst']},
    {title: 'Starcraft II', tag: ['NotShooter','Battle.net','Inst']},
    {title: 'Mothergunship', tag: ['PvE','Epic','Inst']},
    {title: 'GTAV', tag: ['PvE','PvP','Epic','Inst']},
    {title: 'Fortnite', tag: ['PvE','PvP','Epic','Inst']},
    {title: 'The Cycle', tag: ['PvP','Epic','Inst']},
    {title: 'Killing Floor 2', tag: ['PvE','Epic','Inst']},
    {title: 'World War Z', tag: ['PvE','Epic','Inst']},
    {title: 'Black Desert', tag: ['NotShooter','OtherPlat','Inst']},
    {title: 'Genshin Impact', tag: ['NotShooter','OtherPlat','Inst']},
    {title: 'League of Legends', tag: ['NotShooter','OtherPlat','Inst']},
    {title: 'Valorant', tag: ['PvP','OtherPlat','Inst']},
    {title: 'Osu!', tag: ['NotShooter','OtherPlat','Inst']},
    {title: 'HyperScape', tag: ['PvP','UBI','Inst']},
    {title: 'Division 2', tag: ['PvE','UBI','Inst']},
];

window.onload = writeList('Inst');

function writeList(term) {
    currentList = entireList.filter((item) =>{
        return item.tag.includes(term);
    });

    var sc = document.getElementById("sideContainer");
    var lc = document.getElementById("listContainer");
    lc.remove();
    var remakeLc = document.createElement("div");
    remakeLc.id = "listContainer";
    sc.appendChild(remakeLc);
    var lc = document.getElementById("listContainer");

    for (i = 0; i < currentList.length; i++) {
        var wrIt = document.createElement('p');
        wrIt.textContent = currentList[i].title;
        wrIt.onclick = function(){writeContent(this.textContent)}; //めちゃめちゃ苦労した
        if (currentList[i].tag.includes('Unst')) {
            wrIt.className = 'unst';
        }
        lc.appendChild(wrIt);
    };
};

const gameCap = {
    "Apex Aim Trainer": '<a href="https://store.steampowered.com/app/1188540/Apex_Aim_Trainer/" target="_blank">URL</a><br>apexに特化したエイム練習ソフト。<br>これのおかげでウィングマンを拾えるようになった。',
    'CSGO': '<a href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/" target="_blank">URL</a><br>ほぼbot撃ちしかやったことがないわりに240時間くらいプレイしている謎。',
    'PAYDAY 2': '<a href="https://store.steampowered.com/app/218620/PAYDAY_2/" target="_blank">URL</a><br>ステルスほぼ未経験わけわかめ。VeryHardで限界。',
    'VRChat': '<a href="https://store.steampowered.com/app/438100/VRChat/" target="_blank">URL</a><br>VR機器は未所持のわりに230時間くらいプレイしている。',
    'L4D2': '<a href="https://store.steampowered.com/app/550/Left_4_Dead_2/" target="_blank">URL</a><br>MODでアバターを変えるのが好き。<br>Normal以下でAKを使って胴体一発で倒していくのが好き。<br>ハンドキャノンも好き。<br>Advancedからしんどい。',
    'kovaak': '<a href="https://store.steampowered.com/app/824270/KovaaK_20/" target="_blank">URL</a><br>汎用性ナンバーワン。',
    'Gunfire Reborn': '<a href="https://store.steampowered.com/app/1217060/Gunfire_Reborn/" target="_blank">URL</a><br>マルチ対応ローグライクFPS。<br>最低難易度も未クリアだが時々遊ぶ。',
    'Red Dead Online': '<a href="https://store.steampowered.com/app/1404210/Red_Dead_Online/" target="_blank">URL</a><br>圧倒的なグラフィックが魅力。<br>いろいろな服があるのも楽しい。<br>PvPはほぼ未プレイ。<br>このゲームでリピーターライフルに愛着が沸いた。<br>やることはやや単調に感じる。',
    'Rogue Company': '<a href="https://store.steampowered.com/app/872200/Rogue_Company/" target="_blank">URL</a><br>運営の設定ミス？で課金し放題だったけどあまりハマれず。<br>爆破ゲーの入門用としてインストール。',
    'Stardew Valley': '<a href="https://store.steampowered.com/app/413150/Stardew_Valley/" target="_blank">URL</a><br>一年目の秋くらいまでプレイ。<br>マルチ未経験。<br>回線の調子が悪いときによくプレイしていた。',
    'Titanfall 2': '<a href="https://store.steampowered.com/app/1237970/Titanfall_2/" target="_blank">URL</a><br>普通に楽しい。<br>歩兵はスピーディーな移動と、それをエイムする激しいアクション。<br>タイタンに乗るとMOBAっぽいスキルの応酬が楽しめる。<br>ランクマッチがない。<br>シングル用キャンペーンが秀逸。プレイもストーリーも面白い。',
    'Warframe': '<a href="https://store.steampowered.com/app/230410/Warframe/" target="_blank">URL</a><br>アクションがスピーディーで爽快。<br>やり込み要素も果てしない。<br>微課金すると快適っぽい。',
    'Realm Royale': '<a href="https://store.steampowered.com/app/813820/Realm_Royale/" target="_blank">URL</a><br>APEXよりもMOBAらしいスキルの応酬にフォーカスしたTPSバトロワ。<br>少なくともアジア鯖には人が居ない。<br>アプデもずっとされていない。<br>でも嫌いじゃない。',
    'Eternal Return': '<a href="https://store.steampowered.com/app/1049590/Eternal_Return/" target="_blank">URL</a><br>MOBA×バトロワ。<br>少しソロで触ったことがある程度。',
    'Sunset Overdrive': '<a href="https://store.steampowered.com/app/847370/Sunset_Overdrive/" target="_blank">URL</a><br>パルクール的なアクションが魅力のシングル用TPS。<br>弾薬がカツカツなデザインなので、好きな武器ばかりでは戦っていけず個人的には残念。',
    'Aim Hero': '<a href="https://store.steampowered.com/app/518030/Aim_Hero/" target="_blank">URL</a><br>今となってはほぼ使っていない。<br>しかし最初にエイム練習を教えてくれた先生のような存在。',
    'Kenshi': '<a href="https://store.steampowered.com/app/233860/Kenshi/" target="_blank">URL</a><br>時間泥棒。<br>70時間ぐらい止めどなくプレイさせられてしまった。',
    'Paladins': '<a href="https://store.steampowered.com/app/444090/Paladins/" target="_blank">URL</a><br>よくOVERWATCHと比較される。<br>こちらの方がエイムは楽だが、スキルの強化と使い方が重要な感じ。<br>いまだに全キャラのスキルとUltを覚えていない。<br>よくアプデされてキャラが増えている。',
    'Musynx': '<a href="https://store.steampowered.com/app/952040/MUSYNX/" target="_blank">URL</a><br>主にOBSのマイク遅延測定に使う。',
    'Wolcen': '<a href="https://store.steampowered.com/app/424370/Wolcen_Lords_of_Mayhem/" target="_blank">URL</a><br>初めてまともにプレイした買い切り型のハクスラ。<br>と言っても12時間くらいしかやっていない。',
    'Battlefield V': '<a href="https://www.ea.com/ja-jp/games/battlefield/battlefield-5" target="_blank">URL</a><br>初めてのBF。時々やると楽しい。',
    'APEX LEGENDS': '<a href="https://www.ea.com/ja-jp/games/apex-legends" target="_blank">URL</a><br>1000時間くらいプレイ。おそらくOWの次に長くプレイしたFPS。<br>両手にウィングマンを持ちながらS8ダイヤ到達。',
    'OVERWATCH': '<a href="https://playoverwatch.com/" target="_blank">URL</a><br>初めてハマったFPSであり、最もプレイ時間の長いであろうFPS。<br>元サポートメインで、最高レート2980くらいでダイヤには乗れず。<br>ゼニOTP気味だったが最近はDPSやシグマが好き。',
    'CoD WARZONE': '<a href="https://www.callofduty.com/ja/warzone" target="_blank">URL</a><br>即死系FPSが苦手(OW、APEXと比較)なのであまりプレイせず。<br>操作オプションが細かく決められるところは素晴らしく好ましい。',
    'Starcraft II': '<a href="https://starcraft2.com/en-us/" target="_blank">URL</a><br>チュートリアルだけプレイ。<br>いつかやるかもしれない…。',
    'Mothergunship': '<a href="https://www.epicgames.com/store/ja/p/mothergunship" target="_blank">URL</a><br>武器を自由に組み立てて挑むローグライクFPS。<br>結構スピーディで爽快。',
    'GTAV': '<a href="https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/" target="_blank">URL</a><br>服を組み合わせたり街を散策するのが好き。<br>PvPはほぼ未プレイ。<br>カヨペリコに飽き気味。<br>野良強盗は怖いので誰かと出来たら嬉しい。',
    'Fortnite': '<a href="https://www.epicgames.com/fortnite/ja/home" target="_blank">URL</a><br>PvEを持っている。<br>アバターが個性豊かでつい欲しくなる。<br>建築は初心者。',
    'The Cycle': '<a href="https://www.epicgames.com/store/ja/p/thecycle" target="_blank">URL</a><br>多彩な武器とスキルを組み合わせて、<br>モンスターを狩りながらオブジェクトを達成するPvPvEバトロワ。<br>最近動作がスムーズになった？<br>前々からわりと好き。',
    'Killing Floor 2': '<a href="https://store.steampowered.com/app/232090/Killing_Floor_2/" target="_blank">URL</a><br>センシが細かく設定できるので、慣れるために時々使う。<br>野良マルチを気軽にやれる印象。',
    'World War Z': '<a href="https://www.epicgames.com/store/ja/p/world-war-z--goty-edition" target="_blank">URL</a><br>とにかくゾンビが多い。<br>たぶん友達と役割分担して育てていくのが楽しそう。',
    'Black Desert': '<a href="https://www.jp.playblackdesert.com/Main/Index" target="_blank">URL</a><br>操作の忙しいキャラ(くノ一)を選んでからは割と楽しかった。<br>地味に課金したわりに、一度放置してゲームシステムをほとんど忘れてしまい億劫に。',
    'Genshin Impact': '<a href="https://genshin.mihoyo.com/ja" target="_blank">URL</a><br>ゲームプレイよりも考察系やキャラが好き。<br>胡桃が特に好きだがガチャは億劫だった。<br>序盤で積んでいる。',
    'League of Legends': '<a href="https://jp.leagueoflegends.com/ja-jp/" target="_blank">URL</a><br>初心者とかいうレベルじゃない。<br>勝利条件以外よく分からないレベル。<br>いつかやるかもしれないと思ってインストールだけしてある。',
    'Valorant': '<a href="https://playvalorant.com/ja-jp/" target="_blank">URL</a><br>ほぼbot撃ちとデスマッチしかやったことがない。<br>マップもスキルもよく覚えていないレベル。<br>一度だけアンレートに行ったことがあるが、ボコボコにされ味方がサレンダーした苦い思い出を持つ。<br>撃たれると心臓が飛び出る。',
    'Osu!': '<a href="https://osu.ppy.sh/" target="_blank">URL</a><br>とても直感的な操作ができる音ゲーなので好き。<br>最高クリア難易度は5.6だが、初見で落ちなさそうなのは4.0くらい？',
    'HyperScape': '<a href="https://www.ubisoft.com/ja-jp/game/hyper-scape" target="_blank">URL</a><br>現行のバトロワで最も激しく爽快なアクションが楽しめると思われる。<br>とんでもなく過疎で悲しい。<br>戦略性にはやや乏しいか。',
    'Division 2': '<a href="https://www.ubisoft.co.jp/division2/" target="_blank">URL</a><br>グラが綺麗。<br>やることは単調に感じる。',
};

function writeContent(title) {
    var mc = document.getElementById("mainContainer");
    var cc = document.getElementById("contentContainer");
    cc.remove;
    var remakeCc = document.createElement('div');
    remakeCc.id = "contentContainer";
    var cc = document.getElementById("contentContainer");
    mc.appendChild(remakeCc);
    
    cc.innerHTML = `
    <h1>${title}</h1>
    <a href=${gameCap}></a>
    ${gameCap[title]}
`; //gameCap[]でめちゃめちゃ苦労した。オブジェクトのプロパティ指定の方法
}


