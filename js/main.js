(function () {
  "use strict";

  var PLACEHOLDER = "xxxxxxx";
  var LANGS = ["es", "en"];
  var lang = "es";
  try {
    var saved = localStorage.getItem("lang");
    if (LANGS.indexOf(saved) !== -1) lang = saved;
  } catch (e) { /* sin almacenamiento: se usa español */ }

  var T = function () { return window.I18N[lang]; };
  var pick = function (v) { return v && typeof v === "object" && !Array.isArray(v) ? v[lang] : v; };

  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }

  function monthYear(iso) {
    var p = iso.split("-");
    var d = new Date(Date.UTC(+p[0], +p[1] - 1, 1));
    return new Intl.DateTimeFormat(lang, { month: "long", year: "numeric", timeZone: "UTC" }).format(d);
  }

  function range(start, end) {
    if (end === start) return monthYear(start);
    return monthYear(start) + " – " + (end ? monthYear(end) : T().path.present);
  }

  /* ---------- Textos estáticos ---------- */
  function applyStatic() {
    document.documentElement.lang = lang;
    document.title = T().meta.title;
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", T().meta.description);
    var ogt = document.querySelector('meta[property="og:title"]');
    if (ogt) ogt.setAttribute("content", T().meta.title.split(" | ")[0]);
    document.querySelectorAll("[data-i18n]").forEach(function (n) {
      var v = n.getAttribute("data-i18n").split(".").reduce(function (o, k) { return o && o[k]; }, T());
      if (typeof v === "string") n.textContent = v;
    });
    var btn = document.getElementById("lang-toggle");
    btn.textContent = T().a11y.langButton;
    btn.setAttribute("aria-label", T().a11y.langLabel);
    var og = document.querySelector('meta[property="og:locale"]');
    if (og) og.setAttribute("content", lang === "es" ? "es_CO" : "en_US");
  }

  /* ---------- Sobre mí ---------- */
  function renderAbout() {
    var box = document.getElementById("about-body");
    box.textContent = "";
    T().about.paragraphs.forEach(function (p) { box.appendChild(el("p", { text: p })); });
  }

  /* ---------- Proyectos ---------- */
  function projectEl(p) {
    var t = T();
    var details = el("details", { "data-id": p.id, "class": "proj-details" });
    var sumInner = el("span", { "class": "proj-head" }, [
      el("span", { "class": "proj-title", text: pick(p.title) }),
      el("span", { "class": "proj-summary", text: pick(p.summary) })
    ]);
    var summary = el("summary", {}, [sumInner, el("span", { "class": "proj-toggle", text: t.projects.details })]);
    details.appendChild(summary);

    var body = el("div", { "class": "proj-body" });
    var meta = el("p", { "class": "proj-meta" });
    var bits = [];
    if (p.team) bits.push(t.projects.team);
    if (p.course) bits.push(t.projects.course + ": " + pick(p.course));
    meta.textContent = bits.join(". ");
    if (bits.length) body.appendChild(meta);

    if (p.role) {
      body.appendChild(el("p", { "class": "proj-role" }, [
        el("strong", { text: t.projects.myPart + ": " }),
        document.createTextNode(pick(p.role))
      ]));
    }

    var ul = el("ul", { "class": "proj-points" });
    p.points[lang].forEach(function (x) { ul.appendChild(el("li", { text: x })); });
    body.appendChild(ul);

    var tech = el("ul", { "class": "tech", "aria-label": t.projects.tech });
    p.tech.forEach(function (x) { tech.appendChild(el("li", { text: x })); });
    body.appendChild(tech);

    if (p.links && p.links.length) {
      var links = el("p", { "class": "proj-links" });
      p.links.forEach(function (l) {
        links.appendChild(el("a", { href: l.url, rel: "noopener", target: "_blank", text: pick(l.label) }));
      });
      body.appendChild(links);
    }
    details.appendChild(body);
    return details;
  }

  function renderProjects() {
    var open = {};
    document.querySelectorAll("details.proj-details[open]").forEach(function (d) {
      open[d.getAttribute("data-id")] = true;
    });
    var feat = document.getElementById("projects-featured");
    var list = document.getElementById("projects-list");
    feat.textContent = "";
    list.textContent = "";
    window.DATA.projects.forEach(function (p) {
      var node = projectEl(p);
      if (open[p.id]) node.setAttribute("open", "");
      if (p.featured) {
        var card = el("article", { "class": "card" });
        card.appendChild(node);
        feat.appendChild(card);
      } else {
        var row = el("article", { "class": "row" });
        row.appendChild(node);
        list.appendChild(row);
      }
    });
  }

  /* ---------- Trayectoria ---------- */
  function renderPath() {
    var tl = document.getElementById("timeline");
    tl.textContent = "";
    window.DATA.experience.forEach(function (x) {
      tl.appendChild(el("li", {}, [
        el("p", { "class": "tl-date", text: range(x.start, x.end) }),
        el("p", { "class": "tl-role", text: pick(x.role) }),
        el("p", { "class": "tl-org", text: pick(x.org) })
      ]));
    });
    var ed = document.getElementById("education");
    ed.textContent = "";
    window.DATA.education.forEach(function (x) {
      ed.appendChild(el("div", { "class": "edu" }, [
        el("p", { "class": "tl-role", text: pick(x.title) }),
        el("p", { "class": "tl-org", text: pick(x.org) + (x.ongoing ? " (" + T().path.ongoing + ")" : "") })
      ]));
    });
  }

  /* ---------- Certificaciones ---------- */
  function renderCerts() {
    var ul = document.getElementById("certs");
    ul.textContent = "";
    window.DATA.certifications.forEach(function (c) {
      var when = c.ongoing ? T().certs.ongoing : monthYear(c.date);
      ul.appendChild(el("li", {}, [
        el("span", { "class": "cert-name", text: pick(c.name) }),
        el("span", { "class": "cert-date", text: when })
      ]));
    });
  }

  /* ---------- Contacto ---------- */
  function renderContact() {
    var ul = document.getElementById("contact-list");
    ul.textContent = "";
    var c = window.DATA.contact;
    [["email", "mailto:"], ["linkedin", ""], ["github", ""]].forEach(function (pair) {
      var key = pair[0], value = c[key];
      var valueNode;
      if (!value || value === PLACEHOLDER) {
        valueNode = el("span", { "class": "pending", text: PLACEHOLDER });
      } else {
        var attrs = { href: pair[1] + value, text: value.replace(/^https?:\/\/(www\.)?/, "") };
        if (key !== "email") { attrs.rel = "noopener"; attrs.target = "_blank"; }
        valueNode = el("a", attrs);
      }
      ul.appendChild(el("li", {}, [el("span", { "class": "contact-label", text: T().contact[key] }), valueNode]));
    });
  }

  /* ---------- Puntos del inicio: 123 municipios ---------- */
  function buildDots() {
    var box = document.getElementById("dots");
    var warm = [7, 19, 33, 48, 62, 77, 90, 104, 115];
    for (var i = 0; i < 123; i++) {
      var d = document.createElement("span");
      d.className = "dot" + (warm.indexOf(i) !== -1 ? " warm" : "");
      d.style.setProperty("--i", i);
      box.appendChild(d);
    }
  }

  function renderAll() {
    applyStatic();
    renderAbout();
    renderProjects();
    renderPath();
    renderCerts();
    renderContact();
  }

  document.getElementById("lang-toggle").addEventListener("click", function () {
    lang = lang === "es" ? "en" : "es";
    try { localStorage.setItem("lang", lang); } catch (e) { /* ignorar */ }
    renderAll();
  });

  buildDots();
  renderAll();
})();
