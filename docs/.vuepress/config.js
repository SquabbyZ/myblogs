// import ParticlesJS from "vue-particles";

module.exports = {
  title: "SquabbyZ的小黑屋",
  description: "一只致力于成为全栈的小胖纸.",
  dest: "public",
  head: [
    [
      "script", //点击出小爱心
      {
        src: "http://lc-zltjehai.cn-n1.lcfile.com/4b9f43bce8bf5c4ed59d/clickheart.js"
      }
    ],
    [
      "script", //baidu站长管理工具的推送
      {
        src: "http://lc-zltjehai.cn-n1.lcfile.com/12fe8a35feaf973b9bf7/baidu.js"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/logo.png"
      }
    ],
    [
      "link",
      {
        rel: "manifest",
        href: "/manifest.json"
      }
    ],
    // 更多配置可以参考 https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/.vuepress/config.js
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  theme: "reco",
  themeConfig: {
    // type: "blog", //指定 type: 'blog'
    nav: [
      //页面最上面的导航设置，text是文字名称，link 是跳转的路由，icon是图标
      {
        text: "主页",
        link: "/",
        icon: "reco-home"
      },
      {
        text: "时间线",
        link: "/timeLine/",
        icon: "reco-date"
      },
      {
        text: "库",
        link: "/library/",
        icon: "reco-up"
      },
      {
        text: "联系方式",
        icon: "reco-message",
        items: [
          // {
          //   text: "NPM",
          //   link: "https://www.npmjs.com/~reco_luan",
          //   icon: "reco-npm"
          // },
          {
            text: "GitHub",
            link: "https://github.com/SquabbyZ",
            icon: "reco-github"
          },
          {
            text: "601709253",
            link: "https://github.com/SquabbyZ",
            icon: "reco-qq"
          },
          // {
          //   text: "简书",
          //   link: "https://www.jianshu.com/u/cd674a19515e",
          //   icon: "reco-jianshu"
          // },
          // {
          //   text: "CSDN",
          //   link: "https://blog.csdn.net/recoluan",
          //   icon: "reco-csdn"
          // },
          // {
          //   text: "博客圆",
          //   link: "https://www.cnblogs.com/luanhewei/",
          //   icon: "reco-bokeyuan"
          // },
          {
            text: "601709253",
            link: "https://github.com/SquabbyZ",
            icon: "reco-wechat"
          }
        ]
      },
      {
        text: "关于博主",
        link: "/views/other/guide.html",
        icon: "reco-account"
      }
    ],
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类"
        // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签" // 默认 “标签”
      }
    },
    logo: "/logo.png",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: "auto",
    // 最后更新时间
    lastUpdated: "最后更新时间",
    // 作者
    author: "zhuhaifeng",
    //备案号
    // record: `京ICP备案19045791号&京公网安备11030102010551号 `,
    record: "京ICP备案19045791号",
    recordLink: "http://www.beian.miit.gov.cn",
    cyberSecurityRecord: "公网安备11030102010551号",
    cyberSecurityLink: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11030102010551",
    // 项目开始时间
    startYear: "2019",
    // themePicker: {
    //   //不写这个参数有主题自带的默认主题颜色
    //   //themePicker为自定义的主题颜色,值为false，就是禁用，为一个带有颜色的对象，就是可以自定义设置的主题色，内容。但是要在路径.vuepress/styles/palette.styl写同样的颜色值才可以。
    //   colorName1: "#a2b5cd",
    //   colorName2: "#4af79c",
    //   colorName3: "#d61414",
    //   colorName4: "#ee6140",
    //   colorName5: "#d9c9ea",
    //   colorName6: "#0399d3",
    //   colorName7: "#061283",
    //   colorName8: "#e05423",
    //   colorName9: "#ffd700"
    // },
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['123456'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    valineConfig: {
      appId: "zltjehaIcn91K3RV3GcaXydy-gzGzoHsz", // 从LeanCloud的应用中得到的appId
      appKey: "H3DpVurD8TAEz6g6Li4kM6Wx", //从LeanCloud的应用中得到的APP Key
      placeholder: "留下您的小爪印吧 ಇ ಇ ಇ ~~~", // 评论框占位提示符
      notify: "true", //评论回复邮件提醒
      verify: "true", //验证码服务
      avatar: "robohash",
      recordIP: "true" //Gravatar 头像展示方式
    },
    // Google Analytics
    GAID: "UA-150394837-1"
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      "@vuepress/pwa",
      {
        undatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ],
    "@vuepress/medium-zoom",
    "flowchart",
    [
      "vuepress-plugin-helper-live2d",
      {
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: "hijiki", //tororo
          display: {
            position: "left", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 35, //  水平偏移(default: 65)
            vOffset: 0 //  垂直偏移(default: 0)
          },
          mobile: {
            show: false // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8 // 模型透明度(default: 0.8)
          }
        }
      }
    ], //live2d

    ["vuepress-plugin-boxx"]
  ]
  // chainWebpack(config) {
  //   config.externals({
  //     "particles.js": ParticlesJS
  //   });
  // }
};