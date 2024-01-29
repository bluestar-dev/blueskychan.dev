
const lines = [
    "ねえ 女の子になりたい",
    "お願い いいですか？",
    "チョコレートの森をくぐる",
    "オレンジかぼちゃの馬車に",
    "乗せられて 連れられて",
    "ミルク色のお城",
    "みんなきっと憧れている",
    "童話の中のヒロイン",
    "いつか見た 夢に見た",
    "ガラスのハイヒール",
    "ナイショの気持ち ホントの気持ち",
    "ちょっと話しちゃおう",
    "ワンツースリー 魔法をかけて",
    "新しいボクになりたいのです お願い！",
    "やっぱりボクも可愛くなりたいな",
    "あの子みたく可愛くなりたいな",
    "フリルドレスを召しませ",
    "世界でひとりのシンデレラ",
    "ちっちゃなユウキとおっきなハジメテ",
    "きっと怖くなって震えちゃうけど",
    "女の子になりたい！",
    "お願い いいですか？",
    "可愛くなっていいですか？",
    "大人になれど下がらない",
    "可笑しな声のトーンと",
    "何しても 何しても",
    "うまくいかない今日だ",
    "ならば！",
    "束の間でも夢の中に",
    "ボクを見つけてみようかな",
    "少しだけ 少しだけ",
    "変われる気がする",
    "ドキドキして ドキドキして",
    "眠れない夜",
    "ワンツースリー 勇気を出せば",
    "童話に続く入口はもうそこだよ",
    "上目遣いで太陽が昇って",
    "ウィンクのひとつで喧嘩が収まる",
    "小さなリボン結んだら",
    "世界もひとつに シンデレラ",
    "花も照れて恥ずかしがるような",
    "もう少し君をひとり占めできるような",
    "女の子になりたい！",
    "隣にいいですか？",
    "当たり前のものどれもが",
    "違って見えたんだ",
    "ワンツースリー 魔法をかけて",
    "新しいボクになりたいのです お願い！",
    "やっぱりボクも可愛くなりたいな",
    "あの子みたく可愛くなりたいな",
    "小さく首を傾げたら",
    "ボクも今だけはシンデレラ",
    "大事な今日を隅っこに隠れて",
    "自分のこともわかんなくなる前に",
    "女の子になりたい！",
    "お願い いいですか？",
    "可愛くなっていいですか？",
    "ナイショだよ"
  ];
  
  const transFlagColors = ['#55CDFC', '#F7A8B8', 'white'];
  
  const linesPerSection = Math.ceil(lines.length / transFlagColors.length);
  
  lines.forEach((line, index) => {
    const sectionIndex = Math.floor(index / linesPerSection) % transFlagColors.length;
    const color = transFlagColors[sectionIndex];
    console.log(`%c${line}`, `color: ${color}; font-size: 28px;`);
  });