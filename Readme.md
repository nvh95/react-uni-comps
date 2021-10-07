适用于桌面和移动端的 react 组件集合

安装 [npm](https://npmjs.org/) / [yarn](https://yarnpkg.com)

```js
npm install react-uni-comps
yarn add react-uni-comps
```

### 特点

1. 支持按需加载
2. 支持桌面和移动端
3. 支持 js 动态切换主题色
4. 只支持 react>=16.8 版本，使用 hooks 实现
5. 样式采用 css-in-js 方案 (styled-components)
6. 方便扩展样式,二次开发/定制属于自己的组件库
7. 使用 typescript 编写，良好的智能提示
8. 体积小，可以和桌面端组件库如 antd，移动端 antd-mobile/zarm 搭配使用

### 组件列表

#### 1. TransitionElement (给子元素添加初始加载过渡动画/不可见到可见状态的过渡动画)

#### 2. AnimationElement(元素应用 animation 动画,属性参照 css animation,也可以和 animate.css 配合使用,参考 https://animate.style/#usage using `@keyframes`)

#### 3. Popup (弹框，可以从上，下，左，右，中间弹出)

#### 4. Space (间距容器,参考 antd Space)

#### 5. LazyLoadElement（懒加载组件,在视口才渲染 children,不在则显示占位元素）

#### 6. LazyLoadImage (懒加载图片，当做 img 标签使用, 在视口才加载图片)

#### 7. Pullup (滚动加载更多数据)

#### 8. HairLineBox (包含 1px 的边的容器 div)

#### 9.WaitLoading (延时显示 Loading/Spinner 防止闪烁)

#### 10.Spinner（加载中）

#### 11.Tabs（标签页）

#### 12.Cell（列表项，多用于移动端,可以和 input/textarea 组合使用）

#### 13. Skeleton（骨架屏）

#### 14. Button (按钮)

#### 15. Tabs (选项卡切换)

#### 16. Divider (分割线)

#### 17. Checkbox (复选框)

#### 18. ErrorBoudary （错误边界）

#### 19. Switch (开关)

#### 20. Waypoint （可见/不可见指示）

#### 21. FileInputTrigger (触发文件上传)

#### 22. IndexList (索引列表)

#### 23. ScrollTop (平滑滚动到顶部)

#### 24. Popover (弹出带箭头的浮层)

#### 25. Tooltip (文字提示)

#### 26. Drag (拖拽)

#### 27. ThemeProvider (全局主题色配置)

#### 28. CopyToClipboard (复制文本到剪贴板)

#### 29. Toast (黑背景提示)

#### 30. Text (文本显示,单行/多行截断显示省略)

#### 31. Mask (遮罩层,组件内部使用)

#### 32. IconTick (勾勾), IconCross(x) , IconArrow(箭头) [内部使用]

#### 33. Affix (将页面元素钉在可视范围)

#### 34. NoticeBar (通告栏)

#### 35. ActionSheet (移动端,动作面板)

#### 36. AlertDialog (移动端/pc 端两种风格的 alert/confirm 弹窗)

#### 37. PasswordInput (移动端/pc, 密码输入框 )

#### 38. NumberKeyboardBase (数字键盘,非弹出 )

#### 39. NumberKeyboard (数字键盘)

#### 40. FingerGestureElement (移动端手势操作,onTap,onDoubleTap,onLongTap,onPinch, onSwipe,onPressMove 等手势支持)

#### 41. Input (单行/多行输入框)

#### 42. Picker (移动端选择器)

#### 43. Steps (步骤条)

#### 44. Rate (评分/几颗星)

#### 45. NoticeList (多条信息垂直滚动通知栏)

#### 46. Slide (轮播)

#### 47. ProgressCircle (环形进度条)

#### 48. WaterMark (图片/文字水印 )

#### 49. Radio (单选框)

#### 50. RadioGroup (单选框列表)

#### 51. CheckboxGroup (复选框列表)

### 按需加载

支持基于 Tree Shaking 的按需加载，大部分的构建工具（例如 webpack 4+ 和 rollup）都支持 Tree Shaking, 对于不支持 Tree Shaking 的构建工具(e.g. webpack4 以下)，可以采用下列方式按需加载

1. 搭配 babel-plugin-import

```js
  plugins: [
    [
      'import',
      {
        libraryName: 'react-uni-comps',
        libraryDirectory: 'es',
        camel2DashComponentName: false,
      },
    ],
  ],
```

2. 直接引用组件

```js
// 以Button组件为例
import Button from 'react-uni-comps/es/Button';
```

### 设置主题色

使用 ThemeProvider 设置

```js
<ThemeProvider color="#409eff">...</ThemeProvider>
```

### 自定义样式

```js
import styled from 'react-uni-comps/es/styled';
import { Button } from 'react-uni-comps';

const StyledButton = styled(Button)`
  border-radius: 10px;
`;

<StyledButton type="primary" loading>
  waiting
</StyledButton>;
```

### 引用内部三方库 

```js
// styled-components
import styled from 'react-uni-comps/es/styled';

// clsx 
import clsx from 'react-uni-comps/es/clsx';

// react-transition-group
import { CSSTransition, Transition, TransitionGroup } from 'react-uni-comps/es/transition';
```


### 参考

- [Ant Design](https://ant.design/)
- [Ant Design Mobile](https://next.mobile.ant.design/)
- [Zarm](https://zarm.gitee.io/)
- [Vant](https://vant-contrib.gitee.io/vant/#/zh-CN/home)
- [Zent](https://youzan.github.io/zent/zh/guides/install)
- [Material UI](https://material-ui.com/zh/)
- [Welcome UI](https://www.welcome-ui.com/)
- [NutUI](https://nutui.jd.com/3x/#/)
- [Blueprint](https://blueprintjs.com/)
- [Bootstrap](https://getbootstrap.com/)

持续更新优化中...
