import{_ as s,c as i,a2 as e,o as t}from"./chunks/framework.BQmytedh.js";const c=JSON.parse('{"title":"Qinglong Panel","description":"","frontmatter":{},"headers":[],"relativePath":"docs/Technology/Tomato/Qinglong Panel.md","filePath":"docs/Technology/Tomato/Qinglong Panel.md","lastUpdated":1736169820000}'),n={name:"docs/Technology/Tomato/Qinglong Panel.md"};function h(l,a,p,o,r,d){return t(),i("div",null,a[0]||(a[0]=[e(`<h1 id="qinglong-panel" tabindex="-1">Qinglong Panel <a class="header-anchor" href="#qinglong-panel" aria-label="Permalink to &quot;Qinglong Panel&quot;">​</a></h1><hr><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><h3 id="基于docker进行安装" tabindex="-1">基于docker进行安装 <a class="header-anchor" href="#基于docker进行安装" aria-label="Permalink to &quot;基于docker进行安装&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -dit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/data/ql/data:/ql/data</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-p </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">5700:5700</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--name </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">qinglong</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--hostname </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">qinglong</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--restart </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">whyour/qinglong:latest</span></span></code></pre></div><p>执行命令后，在浏览器访问<code>ip:5700</code>​</p><h2 id="初始化环境" tabindex="-1">初始化环境 <a class="header-anchor" href="#初始化环境" aria-label="Permalink to &quot;初始化环境&quot;">​</a></h2><h3 id="进入容器" tabindex="-1">进入容器 <a class="header-anchor" href="#进入容器" aria-label="Permalink to &quot;进入容器&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exec</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qinglong</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bash</span></span></code></pre></div><h3 id="安装依赖命令" tabindex="-1">安装依赖命令 <a class="header-anchor" href="#安装依赖命令" aria-label="Permalink to &quot;安装依赖命令&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://ghproxy.com/https://raw.githubusercontent.com/shufflewzc/QLDependency/main/Shell/QLOneKeyDependency.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sh</span></span></code></pre></div><h3 id="添加依赖" tabindex="-1">添加依赖 <a class="header-anchor" href="#添加依赖" aria-label="Permalink to &quot;添加依赖&quot;">​</a></h3><p>在页面点击 <code>依赖管理</code>​的右上角<code>添加依赖</code>​. 对以下分类进行添加</p><h4 id="nodejs" tabindex="-1">nodeJs <a class="header-anchor" href="#nodejs" aria-label="Permalink to &quot;nodeJs&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">crypto-js</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><h3 id="修改配置" tabindex="-1">修改配置 <a class="header-anchor" href="#修改配置" aria-label="Permalink to &quot;修改配置&quot;">​</a></h3><p>到配置管理config.sh修改，差不多在17行（特别注意，没有修改此配置，sh类型任务拉不下来）；</p><p>RepoFileExtensions=&quot;js py&quot;修改为 RepoFileExtensions=&quot;js py sh&quot; 保存；</p><h3 id="添加定时任务" tabindex="-1">添加定时任务 <a class="header-anchor" href="#添加定时任务" aria-label="Permalink to &quot;添加定时任务&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 定时 秒 分 时 天 月 周</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 12</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 命令</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ql</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> repo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/shufflewzc/faker2.git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;jd_|jx_|gua_|jddj_|getJDCookie&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;activity|backUp&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;^jd[^_]|USER|utils|ZooFaker_Necklace.js|JDJRValidator_Pure|sign_graphics_validate&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;main&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ql</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> repo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/6dylan6/jdpro.git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;jd_|jx_|jddj_&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;backUp&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;^jd[^_]|USER|JD|function|sendNotify|utils&quot;</span></span></code></pre></div><h3 id="添加环境变量" tabindex="-1">添加环境变量 <a class="header-anchor" href="#添加环境变量" aria-label="Permalink to &quot;添加环境变量&quot;">​</a></h3><p>chrome browser go to <code> https://m.jd.com</code> get cookies: <code>xx_key</code> and <code>xx_pin</code> , go to the dashboard add envirment <code>JD_COOKIE</code>, value is <code>xx_key=xxx;xx_pin=xxx</code></p><h3 id="配置消息通知" tabindex="-1">配置消息通知 <a class="header-anchor" href="#配置消息通知" aria-label="Permalink to &quot;配置消息通知&quot;">​</a></h3><p>在配置文件中的config.sh文件中填写对应的通知类型</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><p><a href="https://github.com/zhangguanzhang/docker-compose/tree/master/qinglong" target="_blank" rel="noreferrer">https://github.com/zhangguanzhang/docker-compose/tree/master/qinglong</a></p><p><a href="https://www.dujin.org/18884.html" target="_blank" rel="noreferrer">https://www.dujin.org/18884.html</a></p><p><a href="https://naiyous.com/686.html" target="_blank" rel="noreferrer">https://naiyous.com/686.html</a></p><p><a href="https://github.com/6dylan6/jdpro" target="_blank" rel="noreferrer">6dylan6/jdpro</a></p>`,30)]))}const g=s(n,[["render",h]]);export{c as __pageData,g as default};