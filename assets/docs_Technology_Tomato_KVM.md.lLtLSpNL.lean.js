import{_ as i,c as a,a2 as n,o as e}from"./chunks/framework.BQmytedh.js";const o=JSON.parse('{"title":"KVM","description":"","frontmatter":{},"headers":[],"relativePath":"docs/Technology/Tomato/KVM.md","filePath":"docs/Technology/Tomato/KVM.md","lastUpdated":1722519091000}'),t={name:"docs/Technology/Tomato/KVM.md"};function l(h,s,p,k,r,F){return e(),a("div",null,s[0]||(s[0]=[n(`<h1 id="kvm" tabindex="-1">KVM <a class="header-anchor" href="#kvm" aria-label="Permalink to &quot;KVM&quot;">​</a></h1><h1 id="kvm-1" tabindex="-1">KVM <a class="header-anchor" href="#kvm-1" aria-label="Permalink to &quot;KVM&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>Kernel-based Virtual Machine的简称，是一个开源的<a href="https://baike.baidu.com/item/%E7%B3%BB%E7%BB%9F%E8%99%9A%E6%8B%9F%E5%8C%96/9262129?fromModule=lemma_inlink" target="_blank" rel="noreferrer">系统虚拟化</a>模块，自Linux 2.6.20之后集成在Linux的各个主要发行版本中。它使用<a href="https://baike.baidu.com/item/Linux/27050?fromModule=lemma_inlink" target="_blank" rel="noreferrer">Linux</a>自身的调度器进行管理，所以相对于<a href="https://baike.baidu.com/item/Xen/11050512?fromModule=lemma_inlink" target="_blank" rel="noreferrer">Xen</a>，其核心源码很少。<a href="https://baike.baidu.com/item/KVM/522955?fromModule=lemma_inlink" target="_blank" rel="noreferrer">KVM</a>已成为学术界的主流<a href="https://baike.baidu.com/item/VMM/7047240?fromModule=lemma_inlink" target="_blank" rel="noreferrer">VMM</a>之一。</p><p>KVM的虚拟化需要硬件支持(如<a href="https://baike.baidu.com/item/Intel%20VT/2091588?fromModule=lemma_inlink" target="_blank" rel="noreferrer">Intel VT</a>技术或者<a href="https://baike.baidu.com/item/AMD/5905?fromModule=lemma_inlink" target="_blank" rel="noreferrer">AMD</a> V技术)。是基于硬件的完全<a href="https://baike.baidu.com/item/%E8%99%9A%E6%8B%9F%E5%8C%96/547949?fromModule=lemma_inlink" target="_blank" rel="noreferrer">虚拟化</a>。而Xen早期则是基于软件模拟的Para-<a href="https://baike.baidu.com/item/Virtualization/10102404?fromModule=lemma_inlink" target="_blank" rel="noreferrer">Virtualization</a>，新版本则是基于硬件支持的完全虚拟化。但Xen本身有自己的进程调度器，<a href="https://baike.baidu.com/item/%E5%AD%98%E5%82%A8%E7%AE%A1%E7%90%86/9827115?fromModule=lemma_inlink" target="_blank" rel="noreferrer">存储管理</a>模块等，所以代码较为庞大。广为流传的商业系统<a href="https://baike.baidu.com/item/%E8%99%9A%E6%8B%9F%E5%8C%96%E8%BD%AF%E4%BB%B6/3765902?fromModule=lemma_inlink" target="_blank" rel="noreferrer">虚拟化软件</a>​<a href="https://baike.baidu.com/item/VMware%20ESX/795548?fromModule=lemma_inlink" target="_blank" rel="noreferrer">VMware ESX</a>系列是基于软件模拟的Full-Virtualization。</p><h2 id="搭建" tabindex="-1">搭建 <a class="header-anchor" href="#搭建" aria-label="Permalink to &quot;搭建&quot;">​</a></h2><h3 id="先决条件" tabindex="-1">先决条件 <a class="header-anchor" href="#先决条件" aria-label="Permalink to &quot;先决条件&quot;">​</a></h3><ul><li>Linux OS系统 (CentOS、Ubuntu等)</li><li>CPU支持虚拟化 (可使用此命令查看 <code>egrep -o &#39;vmx|svm&#39; /proc/cpuinfo</code> )</li></ul><h3 id="关闭防火墙" tabindex="-1">关闭防火墙 <a class="header-anchor" href="#关闭防火墙" aria-label="Permalink to &quot;关闭防火墙&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewalld</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> disable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewalld</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setenforce</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span></code></pre></div><h3 id="配置网络源" tabindex="-1">配置网络源 <a class="header-anchor" href="#配置网络源" aria-label="Permalink to &quot;配置网络源&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#配置yum源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/yum.repos.d/CentOS-Base.repo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirrors.aliyun.com/repo/Centos-7.repo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/mirrors.cloud.aliyuncs.com/d&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/mirrors.aliyuncs.com/d&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/yum.repos.d/CentOS-Base.repo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#配置epel源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/yum.repos.d/epel.repo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirrors.aliyun.com/repo/epel-7.repo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s|^#baseurl=https://download.example/pub|baseurl=https://mirrors.aliyun.com|&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/yum.repos.d/epel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s|^metalink|#metalink|&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/yum.repos.d/epel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#安装基本工具包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> net-tools</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unzip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gcc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gcc-c++</span></span></code></pre></div><h3 id="检测是否支持虚拟化" tabindex="-1">检测是否支持虚拟化 <a class="header-anchor" href="#检测是否支持虚拟化" aria-label="Permalink to &quot;检测是否支持虚拟化&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">egrep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vmx|svm&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /proc/cpuinfo</span></span></code></pre></div><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu-kvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu-kvm-tools</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu-img</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> virt-manager</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libvirt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libvirt-python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libvirt-client</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> virt-install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> virt-viewer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bridge-utils</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libguestfs-tools</span></span></code></pre></div><h3 id="网卡配置" tabindex="-1">网卡配置 <a class="header-anchor" href="#网卡配置" aria-label="Permalink to &quot;网卡配置&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/sysconfig/network-scripts/ifcfg-ens33</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/sysconfig/network-scripts/ifcfg-br0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#配置虚拟网卡br0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/sysconfig/network-scripts/ifcfg-br0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> EOF</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TYPE=Bridge</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DEVICE=br0</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">NM_CONTROLLED=no</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BOOTPROTO=static</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">NAME=br0</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ONBOOT=yes</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">IPADDR=192.168.161.129</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">NETMASK=255.255.255.0</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GATEWAY=192.168.161.2</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DNS1=114.114.114.114</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DNS2=8.8.8.8</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#配置已经=存在的网卡ens33</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/sysconfig/network-scripts/ifcfg-ens33</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> EOF</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TYPE=Ethernet</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BOOTPROTO=static</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">NAME=ens33</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DEVICE=ens33</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ONBOOT=yes</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BRIDGE=br0</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">NM_CONTROLLED=no</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#重启网卡</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> network</span></span></code></pre></div><h3 id="开机自启" tabindex="-1">开机自启 <a class="header-anchor" href="#开机自启" aria-label="Permalink to &quot;开机自启&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --now</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libvirtd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#验证</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lsmod</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kvm</span></span></code></pre></div><h3 id="查看安装结果" tabindex="-1">查看安装结果 <a class="header-anchor" href="#查看安装结果" aria-label="Permalink to &quot;查看安装结果&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">virsh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">virt-install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#做软连接</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/libexec/qemu-kvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/bin/qemu-kvm</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查看网桥信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span></span></code></pre></div><h2 id="可视化面板搭建" tabindex="-1">可视化面板搭建 <a class="header-anchor" href="#可视化面板搭建" aria-label="Permalink to &quot;可视化面板搭建&quot;">​</a></h2><h3 id="webvirtmgr" tabindex="-1">webvirtmgr <a class="header-anchor" href="#webvirtmgr" aria-label="Permalink to &quot;webvirtmgr&quot;">​</a></h3><p>基于docker <a href="https://hub.docker.com/r/primiano/docker-webvirtmgr" target="_blank" rel="noreferrer">primiano/docker-webvirtmgr - Docker Image | Docker Hub</a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 拉取镜像</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> primiano/docker-webvirtmgr</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建所需用户</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">groupadd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1010</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> webvirtmgr</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">useradd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1010</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> webvirtmgr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /sbin/nologin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /data/yzwebvirtmgr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> webvirtmgr</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chown</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -R</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> webvirtmgr:webvirtmgr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /data/yzwebvirtmgr</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建容器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name=yzwebvirtmgr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --restart=always</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 8080:8080</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6080:6080</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /data/yzwebvirtmgr:/data/vm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> primiano/docker-webvirtmgr</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入容器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exec</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yzwebvirtmgr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bash</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># VNC配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s/172.17.42.1/0.0.0.0/g&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /webvirtmgr/vrtManager/create.py</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 访问</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http://[ip]:8080</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">admin/1234</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 修改登录密码</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /webvirtmgr</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> changepassword</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> admin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置ssh</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 切换用户</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">su</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> webvirtmgr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /bin/bash</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成密钥   一直回车</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh-keygen</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">touch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.ssh/config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;StrictHostKeyChecking=no\\nUserKnownHostsFile=/dev/null&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.ssh/config</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 授权</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0600</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.ssh/config</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 拷贝到kvm主机</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh-copy-id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root@[KVM主机IP]</span></span></code></pre></div><h3 id="kimchi" tabindex="-1">kimchi <a class="header-anchor" href="#kimchi" aria-label="Permalink to &quot;kimchi&quot;">​</a></h3><p><a href="https://github.com/kimchi-project/kimchi" target="_blank" rel="noreferrer">kimchi-project/kimchi: An HTML5 management interface for KVM guests (github.com)</a></p><h3 id="webvirtcloud" tabindex="-1">webvirtcloud <a class="header-anchor" href="#webvirtcloud" aria-label="Permalink to &quot;webvirtcloud&quot;">​</a></h3><p><a href="https://github.com/retspen/webvirtcloud" target="_blank" rel="noreferrer">retspen/webvirtcloud: WebVirtCloud is virtualization web interface for admins and users (github.com)</a></p><p><a href="https://hub.docker.com/r/mplx/docker-webvirtcloud" target="_blank" rel="noreferrer">mplx/docker-webvirtcloud - Docker 镜像 |Docker 中心</a></p><h3 id="virt-manager" tabindex="-1">virt-manager <a class="header-anchor" href="#virt-manager" aria-label="Permalink to &quot;virt-manager&quot;">​</a></h3><p>Linux可视化系统下:</p><p><a href="https://github.com/virt-manager/virt-manager" target="_blank" rel="noreferrer">virt-manager/virt-manager: Desktop tool for managing virtual machines via libvirt (github.com)</a></p><h3 id="cockpit" tabindex="-1">cockpit <a class="header-anchor" href="#cockpit" aria-label="Permalink to &quot;cockpit&quot;">​</a></h3><p><a href="https://github.com/cockpit-project/cockpit" target="_blank" rel="noreferrer">cockpit-project/cockpit: Cockpit is a web-based graphical interface for servers. (github.com)</a></p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><h3 id="kvm连接方式" tabindex="-1">kvm连接方式 <a class="header-anchor" href="#kvm连接方式" aria-label="Permalink to &quot;kvm连接方式&quot;">​</a></h3><p>libvirtd TCP模式</p><blockquote><p>编辑 <code>/etc/libvirt/libvirtd.conf</code></p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">listen_tls</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">listen_tcp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">auth_tcp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;none&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tcp_port</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;16509&quot;</span></span></code></pre></div><p>编辑 <code>/etc/sysconfig/libvirtd</code> 去掉 <strong>LIBVIRTD_ARGS=&quot;--listen&quot;</strong> 前面的注释</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#执行服务重启命令</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libvirtd</span></span></code></pre></div><h2 id="qcow2" tabindex="-1">QCOW2 <a class="header-anchor" href="#qcow2" aria-label="Permalink to &quot;QCOW2&quot;">​</a></h2><h3 id="修改密码" tabindex="-1">修改密码 <a class="header-anchor" href="#修改密码" aria-label="Permalink to &quot;修改密码&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">virt-customize</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ImageFileName</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --root-password</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> password:NewPASSWORD</span></span></code></pre></div>`,46)]))}const c=i(t,[["render",l]]);export{o as __pageData,c as default};