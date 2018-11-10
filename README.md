# xtype-svg

xtype-svg将常用的svg标签封装为类，可以像ExtJs那样通过javascript动态生成svg文档。

**xtype-svg不保证兼容除最新版`Chrome`以外的其他浏览器。**

使用方法：

```javascript
var dom = XType.SVG.create({
    xtype: 'svg',
    parent: document.body,
    attr: {
        width: 400,
        height: 400,
        viewBox: '0 0 100 100'
    },
    children: [{
        xtype: 'circle',
        attr: {
            cx: 50,
            cy: 50,
            r: 30,
            stroke: '#555',
            'stroke-width': 2,
            fill: '#f00'
        },
        listeners: {
            click: () => {
                alert('You clicked!');
            }
        }
    }]
});

dom.render();
```

具体用法请参照[xtype.js](https://github.com/tengge1/xtype.js)使用说明。

## 依赖项

无。已包含`xtype.js`。

## 安装方法

```
npm install @tengge1/xtype-svg
```

## 核心函数

`Control`: 所有控件基类

`SVG`：用于svg控件的创建和管理。

请阅读[xtype.js](https://github.com/tengge1/xtype.js)了解每个类的使用方法。

## 相关链接

* xtype.js: https://github.com/tengge1/xtype.js