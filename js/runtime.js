var now = new Date;
function createtime() {
    now.setTime(now.getTime() + 1e3);
    var e = new Date("12/11/2022 00:00:00"),
        t = Math.trunc(234e8 + (now - e) / 1e3 * 17),
        a = (t / 1496e5).toFixed(6),
        o = new Date("12/11/2022 00:00:00"),
        r = (now - o) / 1e3 / 60 / 60 / 24,
        i = Math.floor(r),
        n = (now - o) / 1e3 / 60 / 60 - 24 * i,
        s = Math.floor(n);
    1 == String(s).length && (s = "0" + s);
    var l = (now - o) / 1e3 / 60 - 1440 * i - 60 * s,
        g = Math.floor(l);
    1 == String(g).length && (g = "0" + g);
    var d = (now - o) / 1e3 - 86400 * i - 3600 * s - 60 * g,
        b = Math.round(d);
    1 == String(b).length && (b = "0" + b);
    let c = ""; c = s < 18 && s >= 9 ? `<img class='boardsign' src='https://img.shields.io/badge/F%E5%B0%8F%E5%B1%8B-%E7%A7%91%E7%A0%94%E6%91%B8%E9%B1%BC%E4%B8%AD%F0%9F%90%9F-1ade23?style=social&logo=Buy%20Me%20A%20Coffee' title='什么时候能够实现财富自由呀~'><br> 本站已经运行了 ${i} 天 ${s} 小时 ${g} 分 ${b} 秒 ✨ <br> 时间，不在于你拥有多少，而在于你怎样使用✨ ` : `<img class='boardsign' src='https://img.shields.io/badge/F%E5%B0%8F%E5%B1%8B-%E4%B8%8B%E7%8F%AD%E4%BC%91%E6%81%AF%E5%95%A6%F0%9F%8C%99-6adea8?style=social&logo=coffeescript' title='下班了就该开开心心地玩耍~'><br> 本站已经运行了 ${i} 天 ${s} 小时 ${g} 分 ${b} 秒 🚀 <br> The more you insist, the richer you get 🚀 `,
        document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = c)
} setInterval((() => { createtime() }), 1e3);