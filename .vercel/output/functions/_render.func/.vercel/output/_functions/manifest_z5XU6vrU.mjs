import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_OYpm33fu.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_DM8AZXvl.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/nourallam/blog/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"_astro/ec.dy9ns.js","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_astro/ec.dy9ns.js","pattern":"^\\/_astro\\/ec\\.dy9ns\\.js$","segments":[[{"content":"_astro","dynamic":false,"spread":false}],[{"content":"ec.dy9ns.js","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-expressive-code/routes/scripts.ts","pathname":"/_astro/ec.dy9ns.js","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"_astro/ec.v6sg1.css","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_astro/ec.v6sg1.css","pattern":"^\\/_astro\\/ec\\.v6sg1\\.css$","segments":[[{"content":"_astro","dynamic":false,"spread":false}],[{"content":"ec.v6sg1.css","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-expressive-code/routes/styles.ts","pathname":"/_astro/ec.v6sg1.css","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.V2R8AmkL.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BkSZLX8a.js"},{"type":"external","value":"/_astro/page.V2R8AmkL.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_slug_.ZSPqIS0o.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.V2R8AmkL.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BkSZLX8a.js"},{"type":"external","value":"/_astro/page.V2R8AmkL.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_slug_.ZSPqIS0o.css"}],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BkSZLX8a.js"},{"type":"external","value":"/_astro/page.V2R8AmkL.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_slug_.ZSPqIS0o.css"}],"routeData":{"route":"/tools","isIndex":true,"type":"page","pattern":"^\\/tools\\/?$","segments":[[{"content":"tools","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tools/index.astro","pathname":"/tools","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BkSZLX8a.js"},{"type":"external","value":"/_astro/page.V2R8AmkL.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_slug_.ZSPqIS0o.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://nourtheallam.github.io/blog/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/nourallam/blog/src/utils/post.ts",{"propagation":"in-tree","containsHead":false}],["/Users/nourallam/blog/src/utils/index.ts",{"propagation":"in-tree","containsHead":false}],["/Users/nourallam/blog/src/components/Button.astro",{"propagation":"in-tree","containsHead":false}],["/Users/nourallam/blog/src/components/SkillLayout.astro",{"propagation":"in-tree","containsHead":false}],["/Users/nourallam/blog/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/nourallam/blog/src/layouts/BlogPost.astro",{"propagation":"in-tree","containsHead":false}],["/Users/nourallam/blog/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/nourallam/blog/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/nourallam/blog/src/pages/blog/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/nourallam/blog/src/pages/tags/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/nourallam/blog/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/nourallam/blog/src/pages/tools/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tools/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/nourallam/blog/src/components/Card.astro",{"propagation":"in-tree","containsHead":false}],["/Users/nourallam/blog/src/components/FormattedDate.astro",{"propagation":"in-tree","containsHead":false}],["/Users/nourallam/blog/src/components/blog/Hero.astro",{"propagation":"in-tree","containsHead":false}],["/Users/nourallam/blog/src/components/blog/PostPreview.astro",{"propagation":"in-tree","containsHead":false}],["/Users/nourallam/blog/src/components/Label.astro",{"propagation":"in-tree","containsHead":false}],["/Users/nourallam/blog/src/components/ProjectCard.astro",{"propagation":"in-tree","containsHead":false}],["/Users/nourallam/blog/src/components/Section.astro",{"propagation":"in-tree","containsHead":false}],["/Users/nourallam/blog/src/components/ToolSection.astro",{"propagation":"in-tree","containsHead":false}],["/Users/nourallam/blog/src/components/blog/TOC.astro",{"propagation":"in-tree","containsHead":false}],["/Users/nourallam/blog/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/blog/[...page]@_@astro":"pages/blog/_---page_.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]/[...page]@_@astro":"pages/tags/_tag_/_---page_.astro.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"pages/tags.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro-expressive-code/routes/scripts@_@ts":"pages/_astro/ec.dy9ns.js.astro.mjs","\u0000@astro-page:node_modules/astro-expressive-code/routes/styles@_@ts":"pages/_astro/ec.v6sg1.css.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/tools/index@_@astro":"pages/tools.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/Users/nourallam/blog/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/Users/nourallam/blog/src/content/post/cover-image/index.md?astroContentCollectionEntry=true":"chunks/index_Cl0QAAPm.mjs","/Users/nourallam/blog/src/content/post/draft-post.md?astroContentCollectionEntry=true":"chunks/draft-post_BXmCRStT.mjs","/Users/nourallam/blog/src/content/post/long-title.md?astroContentCollectionEntry=true":"chunks/long-title_CZY1lQju.mjs","/Users/nourallam/blog/src/content/post/markdown-elements/index.md?astroContentCollectionEntry=true":"chunks/index_DnxsOiSa.mjs","/Users/nourallam/blog/src/content/post/missing-content.md?astroContentCollectionEntry=true":"chunks/missing-content_D4JBJagh.mjs","/Users/nourallam/blog/src/content/post/social-image.md?astroContentCollectionEntry=true":"chunks/social-image_v0gMTIsL.mjs","/Users/nourallam/blog/src/content/post/unique-tags.md?astroContentCollectionEntry=true":"chunks/unique-tags_D9OlrRz6.mjs","/Users/nourallam/blog/src/content/post/cover-image/index.md?astroPropagatedAssets":"chunks/index_kyatBNHW.mjs","/Users/nourallam/blog/src/content/post/draft-post.md?astroPropagatedAssets":"chunks/draft-post_XGE91hPr.mjs","/Users/nourallam/blog/src/content/post/long-title.md?astroPropagatedAssets":"chunks/long-title_DDyjIoW5.mjs","/Users/nourallam/blog/src/content/post/markdown-elements/index.md?astroPropagatedAssets":"chunks/index_BeN_pgsJ.mjs","/Users/nourallam/blog/src/content/post/missing-content.md?astroPropagatedAssets":"chunks/missing-content_BMx93gue.mjs","/Users/nourallam/blog/src/content/post/social-image.md?astroPropagatedAssets":"chunks/social-image_CuSfXzAK.mjs","/Users/nourallam/blog/src/content/post/unique-tags.md?astroPropagatedAssets":"chunks/unique-tags_TENH3LqA.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/Users/nourallam/blog/src/assets/coming-soon.png":"chunks/coming-soon_BGwzewTE.mjs","/Users/nourallam/blog/src/content/post/cover-image/index.md":"chunks/index_BjqHotDw.mjs","/Users/nourallam/blog/src/content/post/draft-post.md":"chunks/draft-post_BG5dLFhD.mjs","/Users/nourallam/blog/src/content/post/long-title.md":"chunks/long-title_DNsXpMBT.mjs","/Users/nourallam/blog/src/content/post/missing-content.md":"chunks/missing-content_CQ4-kw17.mjs","/Users/nourallam/blog/src/content/post/social-image.md":"chunks/social-image_DWZMC4sG.mjs","/Users/nourallam/blog/src/content/post/unique-tags.md":"chunks/unique-tags_BshA7KXl.mjs","/Users/nourallam/blog/src/content/post/markdown-elements/index.md":"chunks/index_DFooHkxq.mjs","\u0000@astrojs-manifest":"manifest_z5XU6vrU.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Cle9tR6y.js","astro:scripts/page.js":"_astro/page.V2R8AmkL.js","/astro/hoisted.js?q=1":"_astro/hoisted.BkSZLX8a.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about-astro.0znnbM0P.png","/_astro/coming-soon.C8u-V5zm.png","/_astro/cover.C1CigIB6.png","/_astro/logo.DMXfm6vf.png","/_astro/_slug_.ZSPqIS0o.css","/social-card.png","/_astro/hoisted.BkSZLX8a.js","/_astro/hoisted.Cle9tR6y.js","/_astro/page.V2R8AmkL.js","/images/image.png","/fonts/Satoshi-Variable.ttf","/fonts/Satoshi-VariableItalic.ttf","/favicon/android-chrome-192x192.png","/favicon/android-chrome-512x512.png","/favicon/apple-touch-icon.png","/favicon/favicon-16x16.png","/favicon/favicon-32x32.png","/favicon/favicon.ico","/favicon/site.webmanifest","/_astro/page.V2R8AmkL.js","/_astro/ec.dy9ns.js","/_astro/ec.v6sg1.css"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"UVemNOWmfvvwhuRaXf7/FL2IOe1Wp9wyFB8Kam/wcA0=","experimentalEnvGetSecretEnabled":false});

export { manifest };
