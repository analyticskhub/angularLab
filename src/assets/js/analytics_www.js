
(function(g, h) {
    var l = g.WBGAnalyticsObject,
        b = g[l].config,
        n = g.testTracking || {}, m = g.util || {}, e;
    b.prod = 0;
    b.brand = 0;
    b.site = 0;
    e = {
        location: n.location || g.location,
        addHandler: function(a, f, d) {
            a.addEventListener ? a.addEventListener(f, d, !1) : a.attachEvent && a.attachEvent("on" + f, d)
        },
        onReady: function(a) {
            /complete/.test(h.readyState) ? a() : e.addHandler(g, "load", function() {
                setTimeout(a, 4)
            })
        },
        scriptElement: function(a) {
            var f = h.getElementById(a),
                d = h.getElementsByTagName("script")[0];
            if (f) return f;
            f = h.createElement("script");
            f.id = a;
            f.async = 1;
            d.parentNode.insertBefore(f, d);
            return f
        },
        cookieRead: function(a) {
            return decodeURIComponent(h.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(a).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || ""
        },
        cookieWrite: function(a, f, d, c, b, e) {
            if (!a || /^(?:expires|max-age|path|domain|secure)$/i.test(a)) return !1;
            var k = "";
            d && d.constructor === Date && (k = "; expires=" + d.toUTCString());
            h.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(f) + k + (b ? "; domain=" + b : "") + (c ? "; path=" + c : "") + (e ? "; secure" : "");
            return !0
        },
        cloneObject: function(a, f) {
            var d;
            d = a && a.constructor ? a.constructor : void 0;
            var c, b, g, k, h;
            if (!a || d !== RegExp && d !== Date && d !== Function && d !== Object && d !== Array) return a;
            switch (d) {
                case RegExp:
                    d = new d(a.source, "g".substr(0, Number(a.global)) + "i".substr(0, Number(a.ignoreCase)) + "m".substr(0, Number(a.multiline)));
                    break;
                case Date:
                    d = new d(a.getTime());
                    break;
                case Function:
                    d = a;
                    break;
                default:
                    d = new d
            }
            f = f || [];
            c = 0;
            for (b = f.length; c < b; c++) if (g = f[c], g[0] === a) {
                k = g[1];
                break
            }
            if (k) return k;
            f.push([a, d]);
            for (h in a) a.hasOwnProperty(h) && (d[h] = a[h] === a ? d : e.cloneObject(a[h], f));
            return d
        },
        addCallback: function(a, b, d) {
            var c = e.addCallback;
            c.q = c.q || [];
            a.readyState ? (c.q.push(d), a.onreadystatechange = function() {
                var d;
                if (/loaded|complete/.test(a.readyState) && b()) for (a.onreadystatechange = null; c.q.length;) d = c.q.shift(), d()
            }) : e.addHandler(a, "load", function() {
                b() && d()
            })
        },
        tracker: function() {
            var a = Array.prototype.slice.call(arguments),
                b = a.shift();
            b && ("function" === typeof b ? b() : e.send[b] && e.send[b].apply(g,
            a))
        },
        processQueue: function() {
            var a = g[l].q,
                f = e.tracker;
            for (f.config = b; a && a.length;) f.apply(g, a.shift());
            g[l] = f
        },
        pageSetup: function() {
            var a = m.scriptElement("app-measurement"),
                f = n.location ? "AppMeasurement_wbc.js" : "/s_code_www.js",
                d = function() {
                    return g.s3 && g.s3.w_trackPage
                }, c;
            /^(?:info|explore|wib|help|ww2|appointments)\.westpac\.com\.au$/i.test(location.hostname) && (b.prod = !0);
            /(?:^|\.)westpac\.com\.au$/i.test(e.location.hostname) && (b.brand = "wbc", c = /(.+)(?:\.westpac\.com\.au$)/i.exec(e.location.hostname),
            b.site = c ? c[1] : notSet, /\bbanking\b/i.test(c) && /^(?:\/secure\/|\/cust\/wps\/(?:my)?portal\/wol\/|\/oregon\/[^\/]+?\/wol\/)/i.test(e.location.hostname) && (b.pageStatus = "secure"));
            c = /^(www|btsfl|search|insights)\.bt\.com\.au$/i;
            c.test(location.hostname) && (b.prod = !0);
            c.test(e.location.hostname) && (b.brand = "bt", b.site = e.location.hostname.match(c)[1]);
            c = /^(super)\.towerswatson\.com$/i;
            c.test(location.hostname) && (b.prod = !0);
            c.test(e.location.hostname) && (b.brand = "bt", b.site = "towerswatson");
            c = /^(info|bump|helpmechoose|rewardscalculator|businessfocus|hybrideducation|comparebusinesscreditcards)\.westpacgroup\.com\.au$/i;
            c.test(location.hostname) && (b.prod = !0);
            c.test(e.location.hostname) && (b.brand = "wbcgroup", b.site = e.location.hostname.match(c)[1]);
            c = /^(www\.)?movingtoaustralia(|\.westpac)\.(?:com\.au|co\.nz|co\.uk|asia)$/i;
            c.test(location.hostname) && (b.prod = !0);
            c.test(e.location.hostname) && (b.brand = "wbc", b.site = e.location.hostname.replace(/^(www\.)?(movingtoaustralia)(\.westpac)?(\.com?)?/i, "$2"));
            /^movingtoaustralia\.westpac\.asia$/i.test(e.location.hostname) && (b.fpCookieDomainPeriods = 2);
            /^(merchantapplication)\.westpac\.com\.au$/i.test(location.hostname) && (b.prod = !0);
            c = /^(|^\bwww\b\.|^elevate\.)(einsure|fxmoneyonline|agatravelinsurance)\.com\.au$/i;
            c.test(location.hostname) && (b.prod = !0);
            if (c.test(e.location.hostname)) switch (b.brand = "wbc", e.location.hostname.replace(/(?:|^www\.|^elevate\.)(einsure|fxmoneyonline|agatravelinsurance)(?:\.com)(?:\.au$)/i, "$1")) {
                case "einsure":
                    b.site = "einsure";
                    break;
                case "fxmoneyonline":
                    b.site = "travelex";
                    break;
                case "agatravelinsurance":
                    b.site = "agatravel"
            }
            wbcAnniversaryMicrosite = /^(|^www\.)(businessesoftomorrow)\.com\.au$/i;
            wbcAnniversaryMicrosite.test(location.hostname) && (b.prod = !0);
            wbcAnniversaryMicrosite.test(e.location.hostname) && (b.brand = "wbc", b.site = "businessesoftomorrow");
            /\/ng\/public\//i.test(location.href) && (b.brand = "bt", b.site = "panoramadirect");
            m.onReady(function() {
                b.lc = +new Date;
                a.src = f;
                e.addCallback(a, d, function() {
                    e.processQueue()
                })
            })
        },
        send: {
            livechat: function(a) {
                s3.w_trackLiveChat(!0, a)
            },
            impression: function(a) {
                s3.trackImpression(a)
            },
            page: function(a) {
                a = m.cloneObject(a || {});
                a.siteVersion || (a.siteVersion = "analytics_wbc.js:20170215");
                /^movingtoaustralia\.westpac\.asia$/i.test(e.location.hostname) && (a.language = "cn");
                if (/^businessfocus$/i.test(b.site)) {
                    var f = e.location.pathname,
                        d = e.location.search.replace(/&([cp]id|utm_.+)=?.*/, ""),
                        c = f + d,
                        g = c,
                        h = d.match(/^\?+keywords=+(.*?)(?=&|$)/i),
                        k = d.match(/[\?&]+page=+(.*?)(?=&|$)/),
                        h = h ? h[1] : "",
                        k = k ? k[1] : "";
                    h && (g = "searchresults");
                    /^\?+(page|keywords)/i.test(d) || (g = f);
                    /^\/blog\/*\?+(label|tag)=/i.test(c) && (g = c);
                    "/" === f && (g = 1 < k ? "home:page:" + k : "");
                    a.pageName = decodeURIComponent(g.replace(/[=\/&\?]+/g, ":").replace(/[\-+]+/g, " ").replace(/^:+|:+$/g, "")).toLowerCase();
                    h && (a.pageType = "sitesearch", a.searchTerm = decodeURIComponent(h).toLowerCase(), a.pageNumber = k || 1)
                }
                c = e.location.search;
                f = a.siteSection || "";
                d = /\bquery\b/i.test(c);
                c = /\searchInput\b/i.test(c);
                /search|faq|locateus|about-westpac/i.test(f) && (d || c) || s3.w_trackPage(a)
            }
        }
    };
    l && e.pageSetup()
})(window, document); 