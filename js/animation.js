// build time:Wed Jun 10 2020 00:36:41 GMT+0800 (GMT+08:00)
(function(){function t(){return Array.prototype.slice.call(document.querySelectorAll.apply(document,arguments))}t("body > .navbar, body > .section, body > .footer").forEach(function(t){t.style.transition="0s";t.style.opacity="0"});document.querySelector("body > .navbar").style.transform="translateY(-100px)";[".column-main > .card",".column-left > .card, .column-right-shadow > .card",".column-right > .card"].map(function(o){t(o).forEach(function(t){t.style.transition="0s";t.style.opacity="0";t.style.transform="scale(0.8)";t.style.transformOrigin="center top"})});setTimeout(function(){t("body > .navbar, body > .section, body > .footer").forEach(function(t){t.style.opacity="1";t.style.transition="opacity 0.3s ease-out, transform 0.3s ease-out"});document.querySelector("body > .navbar").style.transform="translateY(0)";[".column-main > .card",".column-left > .card, .column-right-shadow > .card",".column-right > .card"].map(function(o){var n=1;t(o).forEach(function(t){setTimeout(function(){t.style.opacity="1";t.style.transform="";t.style.transition="opacity 0.3s ease-out, transform 0.3s ease-out"},n*100);n++})})})})();
//rebuild by neat 