import{_ as s,c as i,a2 as e,o as t}from"./chunks/framework.BQmytedh.js";const k=JSON.parse('{"title":"Npm","description":"","frontmatter":{},"headers":[],"relativePath":"docs/Technology/Tomato/Npm.md","filePath":"docs/Technology/Tomato/Npm.md","lastUpdated":1722519091000}'),n={name:"docs/Technology/Tomato/Npm.md"};function l(h,a,p,o,r,d){return t(),i("div",null,a[0]||(a[0]=[e(`<h1 id="npm" tabindex="-1">Npm <a class="header-anchor" href="#npm" aria-label="Permalink to &quot;Npm&quot;">​</a></h1><h2 id="npm笔记" tabindex="-1">NPM笔记 <a class="header-anchor" href="#npm笔记" aria-label="Permalink to &quot;NPM笔记&quot;">​</a></h2><h4 id="下载node-js" tabindex="-1">下载node.js <a class="header-anchor" href="#下载node-js" aria-label="Permalink to &quot;下载node.js&quot;">​</a></h4><blockquote><p>官网网站 ： <a href="https://nodejs.org/zh-cn/" target="_blank" rel="noreferrer">https://nodejs.org/zh-cn/</a></p></blockquote><h4 id="安装淘宝镜像-cnpm" tabindex="-1">安装淘宝镜像(cnpm) <a class="header-anchor" href="#安装淘宝镜像-cnpm" aria-label="Permalink to &quot;安装淘宝镜像(cnpm)&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cnpm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --registry=http://registry.npm.taobao.org</span></span></code></pre></div><blockquote><p>配置npm永久使用(换源)</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://registry.npm.taobao.org</span></span></code></pre></div><h4 id="查看源" tabindex="-1">查看源 <a class="header-anchor" href="#查看源" aria-label="Permalink to &quot;查看源&quot;">​</a></h4><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm get registry</span></span></code></pre></div></blockquote><h4 id="修改回默认源" tabindex="-1">修改回默认源 <a class="header-anchor" href="#修改回默认源" aria-label="Permalink to &quot;修改回默认源&quot;">​</a></h4><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm config set registry https://registry.npmjs.org/</span></span></code></pre></div></blockquote><h4 id="安装webpack" tabindex="-1">安装webpack <a class="header-anchor" href="#安装webpack" aria-label="Permalink to &quot;安装webpack&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> webpack</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span></code></pre></div><h4 id="安装vue" tabindex="-1">安装vue <a class="header-anchor" href="#安装vue" aria-label="Permalink to &quot;安装vue&quot;">​</a></h4><h4 id="默认版本" tabindex="-1">默认版本 <a class="header-anchor" href="#默认版本" aria-label="Permalink to &quot;默认版本&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vue-cli</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span></code></pre></div><h4 id="_3-版本" tabindex="-1">3.*版本 <a class="header-anchor" href="#_3-版本" aria-label="Permalink to &quot;3.\\*版本&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vue/cli</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span></code></pre></div><h4 id="npm-install-chromedriver问题" tabindex="-1">npm install chromedriver问题 <a class="header-anchor" href="#npm-install-chromedriver问题" aria-label="Permalink to &quot;npm install chromedriver问题&quot;">​</a></h4><blockquote><p>npm install报错：chromedriver@2.27.2 install: node install.js</p></blockquote><p>1、如果执行过npm install，先删除 node_modules 文件夹，不然运行的时候可能会报错 2、执行下面的命令</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chromedriver</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver</span></span></code></pre></div><p>3、再执行 npm install 即可正常下载</p><blockquote><p>分析</p></blockquote><p>经分析发现，某些版本下，chromedriver 的 zip 文件 url 的响应是 302 跳转，而在 install.js 里使用的是 Node.js 内置的 http 对象的 get 方法无法处理 302 跳转的情况；而在另外一些情况下，则是因为 googleapis.com 被墙了，此时即使采用科学 上网的方法也仍然无法获取文件。</p><h4 id="node-sass" tabindex="-1">node-sass <a class="header-anchor" href="#node-sass" aria-label="Permalink to &quot;node-sass&quot;">​</a></h4><p>镜像地址改为淘宝镜像</p><blockquote><p>npm config set sass_binary_site=<a href="https://npm.taobao.org/mirrors/node-sass" target="_blank" rel="noreferrer">https://npm.taobao.org/mirrors/node-sass</a></p></blockquote><h4 id="vue-发布" tabindex="-1">Vue 发布 <a class="header-anchor" href="#vue-发布" aria-label="Permalink to &quot;Vue 发布&quot;">​</a></h4><blockquote><p>使用npm run build 打包 会得到一个dist文件夹</p></blockquote><blockquote><p>nginx配置</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#location / {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #    root  html/dark/dist/;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #    index index.html; # 主页</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        #}</span></span></code></pre></div>`,33)]))}const b=s(n,[["render",l]]);export{k as __pageData,b as default};
