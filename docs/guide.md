# dumi2-demo

一个使用dumi2搭建的react组件和工具库demo

## 文档地址
https://dumi.guojiongwei.top


## demo教程博客文章地址
【前端工程化】使用dumi2搭建你的组件库和函数库
https://guojiongwei.top/article/6437c396a751b6075b5eb213

## 安装

安装组件库
```bash
$ npm i dumi2-demo -S
```

## 使用
```tsx
import React from 'react';
import { Button } from 'dumi2-demo';

export default () => {

  return (
    <>
      <Button type="default">默认按钮</Button> &nbsp;
      <Button type="primary">主要按钮</Button>
    </>
  );
}
```
