"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39541],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return t?o.createElement(h,i(i({ref:n},u),{},{components:t})):o.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},50510:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=t(87462),a=(t(67294),t(3905));const r={sidebar_position:3},i="Troubleshooting",l={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"Chrome headless doesn't launch on Windows",source:"@site/../docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/next/troubleshooting",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"FAQ",permalink:"/next/faq"},next:{title:"Contributing",permalink:"/next/contributing"}},s={},p=[{value:"Chrome headless doesn&#39;t launch on Windows",id:"chrome-headless-doesnt-launch-on-windows",level:2},{value:"Chrome headless doesn&#39;t launch on UNIX",id:"chrome-headless-doesnt-launch-on-unix",level:2},{value:"Chrome headless disables GPU compositing",id:"chrome-headless-disables-gpu-compositing",level:2},{value:"Chrome is downloaded but fails to launch on Node.js 14",id:"chrome-is-downloaded-but-fails-to-launch-on-nodejs-14",level:2},{value:"Setting Up Chrome Linux Sandbox",id:"setting-up-chrome-linux-sandbox",level:2},{value:"recommended Enable user namespace cloning",id:"recommended-enable-user-namespace-cloning",level:3},{value:"alternative Setup setuid sandbox",id:"alternative-setup-setuid-sandbox",level:3},{value:"Running Puppeteer on Travis CI",id:"running-puppeteer-on-travis-ci",level:2},{value:"Running Puppeteer on CircleCI",id:"running-puppeteer-on-circleci",level:2},{value:"Running Puppeteer in Docker",id:"running-puppeteer-in-docker",level:2},{value:"Running on Alpine",id:"running-on-alpine",level:3},{value:"Running Puppeteer on GitlabCI",id:"running-puppeteer-on-gitlabci",level:2},{value:"Tips",id:"tips",level:4},{value:"Running Puppeteer in the cloud",id:"running-puppeteer-in-the-cloud",level:2},{value:"Running Puppeteer on Google App Engine",id:"running-puppeteer-on-google-app-engine",level:3},{value:"Running Puppeteer on Google Cloud Functions",id:"running-puppeteer-on-google-cloud-functions",level:3},{value:"Running Puppeteer on Google Cloud Run",id:"running-puppeteer-on-google-cloud-run",level:3},{value:"Running Puppeteer on Heroku",id:"running-puppeteer-on-heroku",level:3},{value:"Running Puppeteer on AWS Lambda",id:"running-puppeteer-on-aws-lambda",level:3},{value:"Running Puppeteer on AWS EC2 instance running Amazon-Linux",id:"running-puppeteer-on-aws-ec2-instance-running-amazon-linux",level:3},{value:"Code Transpilation Issues",id:"code-transpilation-issues",level:2}],u={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h2",{id:"chrome-headless-doesnt-launch-on-windows"},"Chrome headless doesn't launch on Windows"),(0,a.kt)("p",null,"Some ",(0,a.kt)("a",{parentName:"p",href:"https://support.google.com/chrome/a/answer/7532015"},"chrome policies")," might enforce running Chrome/Chromium\nwith certain extensions."),(0,a.kt)("p",null,"Puppeteer passes ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable-extensions")," flag by default and will fail to launch when such policies are active."),(0,a.kt)("p",null,"To work around this, try running without the flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const browser = await puppeteer.launch({\n  ignoreDefaultArgs: ['--disable-extensions'],\n});\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Context: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/issues/3681#issuecomment-447865342"},"issue 3681"),".")),(0,a.kt)("h2",{id:"chrome-headless-doesnt-launch-on-unix"},"Chrome headless doesn't launch on UNIX"),(0,a.kt)("p",null,"Make sure all the necessary dependencies are installed. You can run ",(0,a.kt)("inlineCode",{parentName:"p"},"ldd chrome | grep not")," on a Linux\nmachine to check which dependencies are missing. The common ones are provided below."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Debian (e.g. Ubuntu) Dependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ca-certificates\nfonts-liberation\nlibappindicator3-1\nlibasound2\nlibatk-bridge2.0-0\nlibatk1.0-0\nlibc6\nlibcairo2\nlibcups2\nlibdbus-1-3\nlibexpat1\nlibfontconfig1\nlibgbm1\nlibgcc1\nlibglib2.0-0\nlibgtk-3-0\nlibnspr4\nlibnss3\nlibpango-1.0-0\nlibpangocairo-1.0-0\nlibstdc++6\nlibx11-6\nlibx11-xcb1\nlibxcb1\nlibxcomposite1\nlibxcursor1\nlibxdamage1\nlibxext6\nlibxfixes3\nlibxi6\nlibxrandr2\nlibxrender1\nlibxss1\nlibxtst6\nlsb-release\nwget\nxdg-utils\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"CentOS Dependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"alsa-lib.x86_64\natk.x86_64\ncups-libs.x86_64\ngtk3.x86_64\nipa-gothic-fonts\nlibXcomposite.x86_64\nlibXcursor.x86_64\nlibXdamage.x86_64\nlibXext.x86_64\nlibXi.x86_64\nlibXrandr.x86_64\nlibXScrnSaver.x86_64\nlibXtst.x86_64\npango.x86_64\nxorg-x11-fonts-100dpi\nxorg-x11-fonts-75dpi\nxorg-x11-fonts-cyrillic\nxorg-x11-fonts-misc\nxorg-x11-fonts-Type1\nxorg-x11-utils\n")),(0,a.kt)("p",null,"After installing dependencies you need to update nss library using this command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yum update nss -y\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Check out discussions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/issues/290"},"#290")," - Debian troubleshooting ",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/issues/391"},"#391")," - CentOS troubleshooting ",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/issues/379"},"#379")," - Alpine troubleshooting ",(0,a.kt)("br",null)))),(0,a.kt)("h2",{id:"chrome-headless-disables-gpu-compositing"},"Chrome headless disables GPU compositing"),(0,a.kt)("p",null,"Chrome/Chromium requires ",(0,a.kt)("inlineCode",{parentName:"p"},"--use-gl=egl")," to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chromium/chromium/commit/19671359ae25aa1e30bde90f8ff92453eeaac2ba"},"enable GPU acceleration in headless mode"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const browser = await puppeteer.launch({\n  headless: true,\n  args: ['--use-gl=egl'],\n});\n")),(0,a.kt)("h2",{id:"chrome-is-downloaded-but-fails-to-launch-on-nodejs-14"},"Chrome is downloaded but fails to launch on Node.js 14"),(0,a.kt)("p",null,"If you get an error that looks like this when trying to launch Chromium:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(node:15505) UnhandledPromiseRejectionWarning: Error: Failed to launch the browser process!\nspawn /Users/.../node_modules/puppeteer/.local-chromium/mac-756035/chrome-mac/Chromium.app/Contents/MacOS/Chromium ENOENT\n")),(0,a.kt)("p",null,"This means that the browser was downloaded but failed to be extracted correctly. The most common cause is a bug in Node.js v14.0.0 which broke ",(0,a.kt)("inlineCode",{parentName:"p"},"extract-zip"),", the module Puppeteer uses to extract browser downloads into the right place. The bug was fixed in Node.js v14.1.0, so please make sure you're running that version or higher."),(0,a.kt)("h2",{id:"setting-up-chrome-linux-sandbox"},"Setting Up Chrome Linux Sandbox"),(0,a.kt)("p",null,"In order to protect the host environment from untrusted web content, Chrome uses ",(0,a.kt)("a",{parentName:"p",href:"https://chromium.googlesource.com/chromium/src/+/HEAD/docs/linux/sandboxing.md"},"multiple layers of sandboxing"),". For this to work properly,\nthe host should be configured first. If there's no good sandbox for Chrome to use, it will crash\nwith the error ",(0,a.kt)("inlineCode",{parentName:"p"},"No usable sandbox!"),"."),(0,a.kt)("p",null,"If you ",(0,a.kt)("strong",{parentName:"p"},"absolutely trust")," the content you open in Chrome, you can launch Chrome\nwith the ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-sandbox")," argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const browser = await puppeteer.launch({\n  args: ['--no-sandbox', '--disable-setuid-sandbox'],\n});\n")),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Running without a sandbox is ",(0,a.kt)("strong",{parentName:"p"},"strongly discouraged"),". Consider configuring a sandbox instead."))),(0,a.kt)("p",null,"There are 2 ways to configure a sandbox in Chromium."),(0,a.kt)("h3",{id:"recommended-enable-user-namespace-cloning"},"[recommended]"," Enable ",(0,a.kt)("a",{parentName:"h3",href:"http://man7.org/linux/man-pages/man7/user_namespaces.7.html"},"user namespace cloning")),(0,a.kt)("p",null,"User namespace cloning is only supported by modern kernels. Unprivileged user namespaces are generally fine to enable,\nbut in some cases they open up more kernel attack surface for (unsandboxed) non-root processes to elevate to\nkernel privileges."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo sysctl -w kernel.unprivileged_userns_clone=1\n")),(0,a.kt)("h3",{id:"alternative-setup-setuid-sandbox"},"[alternative]"," Setup ",(0,a.kt)("a",{parentName:"h3",href:"https://chromium.googlesource.com/chromium/src/+/HEAD/docs/linux/suid_sandbox_development.md"},"setuid sandbox")),(0,a.kt)("p",null,"The setuid sandbox comes as a standalone executable and is located next to the Chromium that Puppeteer downloads. It is\nfine to re-use the same sandbox executable for different Chromium versions, so the following could be\ndone only once per host environment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# cd to the downloaded instance\ncd <project-dir-path>/node_modules/puppeteer/.local-chromium/linux-<revision>/chrome-linux/\nsudo chown root:root chrome_sandbox\nsudo chmod 4755 chrome_sandbox\n# copy sandbox executable to a shared location\nsudo cp -p chrome_sandbox /usr/local/sbin/chrome-devel-sandbox\n# export CHROME_DEVEL_SANDBOX env variable\nexport CHROME_DEVEL_SANDBOX=/usr/local/sbin/chrome-devel-sandbox\n")),(0,a.kt)("p",null,"You might want to export the ",(0,a.kt)("inlineCode",{parentName:"p"},"CHROME_DEVEL_SANDBOX")," env variable by default. In this case, add the following to the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),"\nor ",(0,a.kt)("inlineCode",{parentName:"p"},".zshenv"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export CHROME_DEVEL_SANDBOX=/usr/local/sbin/chrome-devel-sandbox\n")),(0,a.kt)("h2",{id:"running-puppeteer-on-travis-ci"},"Running Puppeteer on Travis CI"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udc4b We ran our tests for Puppeteer on Travis CI until v6.0.0 (when we've migrated to GitHub Actions) - see our historical ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/v5.5.0/.travis.yml"},(0,a.kt)("inlineCode",{parentName:"a"},".travis.yml")," (v5.5.0)")," for reference.")),(0,a.kt)("p",null,"Tips-n-tricks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Xvfb"},"xvfb")," service should be launched in order to run Chromium in non-headless mode"),(0,a.kt)("li",{parentName:"ul"},"Runs on Xenial Linux on Travis by default"),(0,a.kt)("li",{parentName:"ul"},"Runs ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install")," by default"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," is cached by default")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".travis.yml")," might look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"language: node_js\nnode_js: node\nservices: xvfb\nscript:\n  - npm test\n")),(0,a.kt)("h2",{id:"running-puppeteer-on-circleci"},"Running Puppeteer on CircleCI"),(0,a.kt)("p",null,"Running Puppeteer smoothly on CircleCI requires the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Start with a ",(0,a.kt)("a",{parentName:"li",href:"https://circleci.com/docs/2.0/circleci-images/#nodejs"},"NodeJS\nimage")," in your config\nlike so:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"docker:\n  - image: circleci/node:14 # Use your desired version\n    environment:\n      NODE_ENV: development # Only needed if puppeteer is in `devDependencies`\n"))),(0,a.kt)("li",{parentName:"ol"},"Dependencies like ",(0,a.kt)("inlineCode",{parentName:"li"},"libXtst6")," probably need to be installed via ",(0,a.kt)("inlineCode",{parentName:"li"},"apt-get"),",\nso use the\n",(0,a.kt)("a",{parentName:"li",href:"https://circleci.com/orbs/registry/orb/threetreeslight/puppeteer"},"threetreeslight/puppeteer"),"\norb\n(",(0,a.kt)("a",{parentName:"li",href:"https://circleci.com/orbs/registry/orb/threetreeslight/puppeteer#quick-start"},"instructions"),"),\nor paste parts of its\n",(0,a.kt)("a",{parentName:"li",href:"https://circleci.com/orbs/registry/orb/threetreeslight/puppeteer#orb-source"},"source"),"\ninto your own config."),(0,a.kt)("li",{parentName:"ol"},"Lastly, if you\u2019re using Puppeteer through Jest, then you may encounter an\nerror spawning child processes:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"[00:00.0]  jest args: --e2e --spec --max-workers=36\nError: spawn ENOMEM\n   at ChildProcess.spawn (internal/child_process.js:394:11)\n")),"This is likely caused by Jest autodetecting the number of processes on the\nentire machine (",(0,a.kt)("inlineCode",{parentName:"li"},"36"),") rather than the number allowed to your container\n(",(0,a.kt)("inlineCode",{parentName:"li"},"2"),"). To fix this, set ",(0,a.kt)("inlineCode",{parentName:"li"},"jest --maxWorkers=2")," in your test command.")),(0,a.kt)("h2",{id:"running-puppeteer-in-docker"},"Running Puppeteer in Docker"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udc4b We used ",(0,a.kt)("a",{parentName:"p",href:"https://cirrus-ci.org/"},"Cirrus Ci")," to run our tests for Puppeteer in a Docker container until v3.0.x - see our historical ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/v3.0.1/.ci/node12/Dockerfile.linux"},(0,a.kt)("inlineCode",{parentName:"a"},"Dockerfile.linux")," (v3.0.1)")," for reference.\nStarting from v16.0.0 we are shipping a Docker image via the GitHub registry. The Dockerfile is located ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/docker/Dockerfile"},"here")," and the usage instructions are in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer#running-in-docker"},"README.md"),". The instructions below might be still helpful if you are building your own image.")),(0,a.kt)("p",null,"Getting headless Chrome up and running in Docker can be tricky.\nThe bundled Chromium that Puppeteer installs is missing the necessary\nshared library dependencies."),(0,a.kt)("p",null,"To fix, you'll need to install the missing dependencies and the\nlatest Chromium package in your Dockerfile:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM node:14-slim\n\n# Install latest chrome dev package and fonts to support major charsets (Chinese, Japanese, Arabic, Hebrew, Thai and a few others)\n# Note: this installs the necessary libs to make the bundled version of Chromium that Puppeteer\n# installs, work.\nRUN apt-get update \\\n    && apt-get install -y wget gnupg \\\n    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \\\n    && sh -c 'echo \"deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main\" >> /etc/apt/sources.list.d/google.list' \\\n    && apt-get update \\\n    && apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \\\n      --no-install-recommends \\\n    && rm -rf /var/lib/apt/lists/*\n\n# If running Docker >= 1.13.0 use docker run's --init arg to reap zombie processes, otherwise\n# uncomment the following lines to have `dumb-init` as PID 1\n# ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.2/dumb-init_1.2.2_x86_64 /usr/local/bin/dumb-init\n# RUN chmod +x /usr/local/bin/dumb-init\n# ENTRYPOINT [\"dumb-init\", \"--\"]\n\n# Uncomment to skip the chromium download when installing puppeteer. If you do,\n# you'll need to launch puppeteer with:\n#     browser.launch({executablePath: 'google-chrome-stable'})\n# ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true\n\n# Install puppeteer so it's available in the container.\nRUN npm init -y &&  \\\n    npm i puppeteer \\\n    # Add user so we don't need --no-sandbox.\n    # same layer as npm install to keep re-chowned files from using up several hundred MBs more space\n    && groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser \\\n    && mkdir -p /home/pptruser/Downloads \\\n    && chown -R pptruser:pptruser /home/pptruser \\\n    && chown -R pptruser:pptruser /node_modules \\\n    && chown -R pptruser:pptruser /package.json \\\n    && chown -R pptruser:pptruser /package-lock.json\n\n# Run everything after as non-privileged user.\nUSER pptruser\n\nCMD [\"google-chrome-stable\"]\n")),(0,a.kt)("p",null,"Build the container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t puppeteer-chrome-linux .\n")),(0,a.kt)("p",null,"Run the container by passing ",(0,a.kt)("inlineCode",{parentName:"p"},'node -e "<yourscript.js content as a string>"')," as the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},' docker run -i --init --rm --cap-add=SYS_ADMIN \\\n   --name puppeteer-chrome puppeteer-chrome-linux \\\n   node -e "`cat yourscript.js`"\n')),(0,a.kt)("p",null,"There's a full example at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ebidel/try-puppeteer"},"https://github.com/ebidel/try-puppeteer")," that shows\nhow to run this Dockerfile from a webserver running on App Engine Flex (Node)."),(0,a.kt)("h3",{id:"running-on-alpine"},"Running on Alpine"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://pkgs.alpinelinux.org/package/edge/community/x86_64/chromium"},"newest Chromium package")," supported on Alpine is 100, which corresponds to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/releases/tag/v13.5.0"},"Puppeteer v13.5.0"),"."),(0,a.kt)("p",null,"Example Dockerfile:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM alpine\n\n# Installs latest Chromium (100) package.\nRUN apk add --no-cache \\\n      chromium \\\n      nss \\\n      freetype \\\n      harfbuzz \\\n      ca-certificates \\\n      ttf-freefont \\\n      nodejs \\\n      yarn\n\n...\n\n# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.\nENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \\\n    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser\n\n# Puppeteer v13.5.0 works with Chromium 100.\nRUN yarn add puppeteer@13.5.0\n\n# Add user so we don't need --no-sandbox.\nRUN addgroup -S pptruser && adduser -S -G pptruser pptruser \\\n    && mkdir -p /home/pptruser/Downloads /app \\\n    && chown -R pptruser:pptruser /home/pptruser \\\n    && chown -R pptruser:pptruser /app\n\n# Run everything after as non-privileged user.\nUSER pptruser\n\n...\n")),(0,a.kt)("h2",{id:"running-puppeteer-on-gitlabci"},"Running Puppeteer on GitlabCI"),(0,a.kt)("p",null,"This is very similar to some of the instructions above, but require a bit different configuration to finally achieve success."),(0,a.kt)("p",null,"Usually the issue looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Error: Failed to launch chrome! spawn /usr/bin/chromium-browser ENOENT\n")),(0,a.kt)("p",null,"You need to patch two places:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Your ",(0,a.kt)("inlineCode",{parentName:"li"},"gitlab-ci.yml")," config"),(0,a.kt)("li",{parentName:"ol"},"Arguments' list when launching pupepeteer")),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"gitlab-ci.yml")," we need to install some packages to make it possible to launch headless Chrome in your docker env:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"before_script:\n  - apt-get update\n  - apt-get install -yq gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libnss3 lsb-release xdg-utils wget\n")),(0,a.kt)("p",null,"Next, you have to use ",(0,a.kt)("inlineCode",{parentName:"p"},"'--no-sandbox'")," mode and also ",(0,a.kt)("inlineCode",{parentName:"p"},"'--disable-setuid-sandbox'")," when launching Puppeteer. This can be done by passing them as an arguments to your ",(0,a.kt)("inlineCode",{parentName:"p"},".launch()")," call: ",(0,a.kt)("inlineCode",{parentName:"p"},"puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });"),"."),(0,a.kt)("h4",{id:"tips"},"Tips"),(0,a.kt)("p",null,"By default, Docker runs a container with a ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/shm")," shared memory space 64MB.\nThis is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/c0b/chrome-in-docker/issues/1"},"typically too small")," for Chrome\nand will cause Chrome to crash when rendering large pages. To fix, run the container with\n",(0,a.kt)("inlineCode",{parentName:"p"},"docker run --shm-size=1gb")," to increase the size of ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/shm"),". Since Chrome 65, this is no\nlonger necessary. Instead, launch the browser with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable-dev-shm-usage")," flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const browser = await puppeteer.launch({\n  args: ['--disable-dev-shm-usage'],\n});\n")),(0,a.kt)("p",null,"This will write shared memory files into ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmp")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/shm"),". See ",(0,a.kt)("a",{parentName:"p",href:"https://bugs.chromium.org/p/chromium/issues/detail?id=736452"},"crbug.com/736452")," for more details."),(0,a.kt)("p",null,"Seeing other weird errors when launching Chrome? Try running your container\nwith ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run --cap-add=SYS_ADMIN")," when developing locally. Since the Dockerfile\nadds a ",(0,a.kt)("inlineCode",{parentName:"p"},"pptr")," user as a non-privileged user, it may not have all the necessary privileges."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Yelp/dumb-init"},"dumb-init")," is worth checking out if you're\nexperiencing a lot of zombies Chrome processes sticking around. There's special\ntreatment for processes with PID=1, which makes it hard to terminate Chrome\nproperly in some cases (e.g. in Docker)."),(0,a.kt)("h2",{id:"running-puppeteer-in-the-cloud"},"Running Puppeteer in the cloud"),(0,a.kt)("h3",{id:"running-puppeteer-on-google-app-engine"},"Running Puppeteer on Google App Engine"),(0,a.kt)("p",null,"The Node.js runtime of the ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/appengine/docs/standard/nodejs/"},"App Engine standard environment")," comes with all system packages needed to run Headless Chrome."),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"puppeteer"),", simply list the module as a dependency in your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," and deploy to Google App Engine. Read more about using ",(0,a.kt)("inlineCode",{parentName:"p"},"puppeteer")," on App Engine by following ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/appengine/docs/standard/nodejs/using-headless-chrome-with-puppeteer"},"the official tutorial"),"."),(0,a.kt)("h3",{id:"running-puppeteer-on-google-cloud-functions"},"Running Puppeteer on Google Cloud Functions"),(0,a.kt)("p",null,"The Node.js 10 runtime of ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/functions/docs/"},"Google Cloud Functions")," comes with all system packages needed to run Headless Chrome."),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"puppeteer"),", simply list the module as a dependency in your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," and deploy your function to Google Cloud Functions using the ",(0,a.kt)("inlineCode",{parentName:"p"},"nodejs10")," runtime."),(0,a.kt)("h3",{id:"running-puppeteer-on-google-cloud-run"},"Running Puppeteer on Google Cloud Run"),(0,a.kt)("p",null,"The default Node.js runtime of ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/run/docs/"},"Google Cloud Run")," does not come with the system packages needed to run Headless Chrome. You will need to set up your own ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," and ",(0,a.kt)("a",{parentName:"p",href:"#chrome-headless-doesnt-launch-on-unix"},"include the missing dependencies"),"."),(0,a.kt)("h3",{id:"running-puppeteer-on-heroku"},"Running Puppeteer on Heroku"),(0,a.kt)("p",null,"Running Puppeteer on Heroku requires some additional dependencies that aren't included on the Linux box that Heroku spins up for you. To add the dependencies on deploy, add the Puppeteer Heroku buildpack to the list of buildpacks for your app under Settings > Buildpacks."),(0,a.kt)("p",null,"The url for the buildpack is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jontewks/puppeteer-heroku-buildpack"},"https://github.com/jontewks/puppeteer-heroku-buildpack")),(0,a.kt)("p",null,"Ensure that you're using ",(0,a.kt)("inlineCode",{parentName:"p"},"'--no-sandbox'")," mode when launching Puppeteer. This can be done by passing it as an argument to your ",(0,a.kt)("inlineCode",{parentName:"p"},".launch()")," call: ",(0,a.kt)("inlineCode",{parentName:"p"},"puppeteer.launch({ args: ['--no-sandbox'] });"),"."),(0,a.kt)("p",null,"When you click add buildpack, simply paste that url into the input, and click save. On the next deploy, your app will also install the dependencies that Puppeteer needs to run."),(0,a.kt)("p",null,"If you need to render Chinese, Japanese, or Korean characters you may need to use a buildpack with additional font files like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CoffeeAndCode/puppeteer-heroku-buildpack"},"https://github.com/CoffeeAndCode/puppeteer-heroku-buildpack")),(0,a.kt)("p",null,"There's also another ",(0,a.kt)("a",{parentName:"p",href:"https://timleland.com/headless-chrome-on-heroku/"},"simple guide")," from @timleland that includes a sample project: ",(0,a.kt)("a",{parentName:"p",href:"https://timleland.com/headless-chrome-on-heroku/"},"https://timleland.com/headless-chrome-on-heroku/"),"."),(0,a.kt)("h3",{id:"running-puppeteer-on-aws-lambda"},"Running Puppeteer on AWS Lambda"),(0,a.kt)("p",null,"AWS Lambda ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/limits.html"},"limits")," deployment package sizes to ~50MB. This presents challenges for running headless Chrome (and therefore Puppeteer) on Lambda. The community has put together a few resources that work around the issues:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/alixaxel/chrome-aws-lambda"},"https://github.com/alixaxel/chrome-aws-lambda")," (kept updated with the latest stable release of puppeteer)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/adieuadieu/serverless-chrome/blob/HEAD/docs/chrome.md"},"https://github.com/adieuadieu/serverless-chrome/blob/HEAD/docs/chrome.md")," (serverless plugin - outdated)")),(0,a.kt)("h3",{id:"running-puppeteer-on-aws-ec2-instance-running-amazon-linux"},"Running Puppeteer on AWS EC2 instance running Amazon-Linux"),(0,a.kt)("p",null,"If you are using an EC2 instance running amazon-linux in your CI/CD pipeline, and if you want to run Puppeteer tests in amazon-linux, follow these steps."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To install Chromium, you have to first enable ",(0,a.kt)("inlineCode",{parentName:"p"},"amazon-linux-extras")," which comes as part of ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/premiumsupport/knowledge-center/ec2-enable-epel/"},"EPEL (Extra Packages for Enterprise Linux)"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo amazon-linux-extras install epel -y\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Next, install Chromium:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo yum install -y chromium\n")))),(0,a.kt)("p",null,"Now Puppeteer can launch Chromium to run your tests. If you do not enable EPEL and if you continue installing chromium as part of ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install"),", Puppeteer cannot launch Chromium due to unavailablity of ",(0,a.kt)("inlineCode",{parentName:"p"},"libatk-1.0.so.0")," and many more packages."),(0,a.kt)("h2",{id:"code-transpilation-issues"},"Code Transpilation Issues"),(0,a.kt)("p",null,"If you are using a JavaScript transpiler like babel or TypeScript, calling ",(0,a.kt)("inlineCode",{parentName:"p"},"evaluate()")," with an async function might not work. This is because while ",(0,a.kt)("inlineCode",{parentName:"p"},"puppeteer")," uses ",(0,a.kt)("inlineCode",{parentName:"p"},"Function.prototype.toString()")," to serialize functions while transpilers could be changing the output code in such a way it's incompatible with ",(0,a.kt)("inlineCode",{parentName:"p"},"puppeteer"),"."),(0,a.kt)("p",null,"Some workarounds to this problem would be to instruct the transpiler not to mess up with the code, for example, configure TypeScript to use latest ecma version (",(0,a.kt)("inlineCode",{parentName:"p"},'"target": "es2018"'),"). Another workaround could be using string templates instead of functions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"await page.evaluate(`(async() => {\n   console.log('1');\n})()`);\n")))}d.isMDXComponent=!0}}]);