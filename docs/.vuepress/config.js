module.exports = {
  title: "SquabbyZ的小黑屋",
  description: "一只致力于成为全栈的小胖纸.",
  dest: "public",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
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
    type: "blog", //指定 type: 'blog'
    nav: [
      //页面最上面的导航设置，text是文字名称，link 是跳转的路由，icon是图标
      { text: "Home", link: "/", icon: "reco-home" },
      { text: "TimeLine", link: "/timeLine/", icon: "reco-date" },
      {
        text: "Contact",
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
            text: "601709253@qq.com",
            link: "https://github.com/SquabbyZ",
            icon: "reco-email"
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
      }
    ],
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "Category" // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "Tag" // 默认 “标签”
      }
    },
    logo: "/logo.png",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: "auto",
    // 最后更新时间
    lastUpdated: "Last Updated",
    // 作者
    author: "zhuhaifeng",
    // 备案号
    record: "xxxx",
    // 项目开始时间
    startYear: "2019",
    themePicker: {
      //不写这个参数有主题自带的默认主题颜色
      //themePicker为自定义的主题颜色,值为false，就是禁用，为一个带有颜色的对象，就是可以自定义设置的主题色，内容。但是要在路径.vuepress/styles/palette.styl写同样的颜色值才可以。
      colorName1: "#a2b5cd",
      colorName2: "#4af79c",
      colorName3: "#d61414",
      colorName4: "#ee6140",
      colorName5: "#d9c9ea",
      colorName6: "#0399d3",
      colorName7: "#061283",
      colorName8: "#e05423",
      colorName9: "#ffd700"
    },
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
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
    }
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
    "flowchart"
  ]
};
