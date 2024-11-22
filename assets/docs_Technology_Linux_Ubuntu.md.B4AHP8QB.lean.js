import{_ as a,c as i,a2 as n,o as t}from"./chunks/framework.BQmytedh.js";const c=JSON.parse('{"title":"Ubuntu","description":"","frontmatter":{},"headers":[],"relativePath":"docs/Technology/Linux/Ubuntu.md","filePath":"docs/Technology/Linux/Ubuntu.md","lastUpdated":1722519091000}'),e={name:"docs/Technology/Linux/Ubuntu.md"};function h(l,s,p,k,d,o){return t(),i("div",null,s[0]||(s[0]=[n(`<h1 id="ubuntu" tabindex="-1">Ubuntu <a class="header-anchor" href="#ubuntu" aria-label="Permalink to &quot;Ubuntu&quot;">​</a></h1><h2 id="ubuntu-挂载nfs" tabindex="-1">Ubuntu 挂载NFS <a class="header-anchor" href="#ubuntu-挂载nfs" aria-label="Permalink to &quot;Ubuntu 挂载NFS&quot;">​</a></h2><p>1、安装依赖包</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nfs-common</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> portmap</span></span></code></pre></div><p>2、创建挂载目录</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /data</span></span></code></pre></div><p>3、挂载nfs服务</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  mount</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  nfs</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  nolock</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  10.0.0.5:/data/ubuntu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  /data</span></span></code></pre></div><h2 id="网络配置" tabindex="-1">网络配置 <a class="header-anchor" href="#网络配置" aria-label="Permalink to &quot;网络配置&quot;">​</a></h2><blockquote><p>配置文件夹</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/netplan</span></span></code></pre></div><blockquote><p>网络配置文件</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">network:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ethernets:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ens32:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      addresses:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [192.168.15.132/24]          </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置静态IP地址和掩码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      routes:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                 # 设置网关地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">       -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> default</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         via:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.15.2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      dhcp4:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                            # 禁用dhcp</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      nameservers:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        addresses:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [114.114.114.114, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">8.8.8.8]</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 设置主、备DNS</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  version:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  renderer:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NetworkManager</span></span></code></pre></div><blockquote><p>重启生效</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> netplan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apply</span></span></code></pre></div>`,15)]))}const F=a(e,[["render",h]]);export{c as __pageData,F as default};