# TypeScript入门 技术胖

在线学习地址： <https://jspang.com/posts/2018/06/27/typesript.html>

## 初识TypeScript

TypeScript 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，TypeScript 在 JavaScript 的基础上添加了可选的静态类型和基于类的面向对象编程。

其实TypeScript就是相当于JavaScript的增强版，但是最后运行时还要编译成JavaScript。TypeScript最大的目的是让程序员更具创造性，提高生产力，它将极大增强JavaScript编写应用的开发和调试环节，让JavaScript能够方便用于编写大型应用和进行多人协作。

* **TypeScript和JavaScript的对比**
  * TypeScript 与JavaScript两者的特性对比，主要表现为以下几点：
  * TypeScript是一个应用程序级的JavaScript开发语言。（这也表示TypeScript比较牛逼，可以开发大型应用，或者说更适合开发大型应用）
  * TypeScript是JavaScript的超集，可以编译成纯JavaScript。这个和我们CSS离的Less或者Sass是很像的，我们用更好的代码编写方式来进行编写，最后还是有好生成原生的JavaScript语言。
  * TypeScript跨浏览器、跨操作系统、跨主机、且开源。由于最后他编译成了JavaScript所以只要能运行JS的地方，都可以运行我们写的程序，设置在node.js里。
  * TypeScript始于JavaScript，终于JavaScript。遵循JavaScript的语法和语义，所以对于我们前端从业者来说，学习前来得心应手，并没有太大的难度。
  * TypeScript可以重用JavaScript代码，调用流行的JavaScript库。
  * TypeScript提供了类、模块和接口，更易于构建组件和维护。

## 设置自动编译

```text
1. 开发环境的安装
npm install typescript -g

2.初始化项目
npm init -y来初始化项目，生成package.json文件。

3.创建tsconfig.json文件，
在文件目录下输入，生成tsconfig.json
tsc --init
// 它是一个TypeScript项目的配置文件，可以通过读取它来设置TypeScript编译器的编译参数。

4.安装@types/node
npm install @types/node --dev-save
// 解决模块的声明文件问题

5.编译运行
tsc xxx.ts
node xxx.js

6.设置自动编译监视
tsconfig.json 中设置"outDir": './' 默认是跟当前的ts文件地址同级的，这个地址可以修改输出编译的地址，默认指向当前根路径下

vscode 终端 --> 运行任务 --> 点击 tsc:监视-tsconfig.json 然后就可以自动生成代码
```

## 变量类型的那些事

TypeScript中的数据类型有：

```
number       数值类型
string       字符串类型
boolean      布尔类型

enum         枚举类型
any          任意类型，一个牛X的类型
void         空类型
Array        数组类型

tuple        元祖类型
undefined    未定义类型
null         空类型
never        类型


typescript中为了使编写的代码更规范，更有利于维护，增加了类型校验
//  写ts代码必须指定类型
```

* 枚举类型（enum）

  * 随着计算机的不断普及，程序不仅只用于数值计算，还更广泛地用于处理非数值的数据。 例如：性别、月份、星期几、颜色、单位名、学历、职业等，都不是数值数据。在其它程序设计语言中，一般用一个数值来代表某一状态，这种处理方法不直观，易读性差。如果能在程序中用自然语言中有相应含义的单词来代表某一状态，则程序就很容易阅读和理解。也就是说，事先考虑到某一变量可能取的值，尽量用自然语言中含义清楚的单词来表示它的每一个值， 这种方法称为枚举方法，用这种方法定义的类型称枚举类型。

  * 语法

    ```
    enum 枚举名{ 
                    标识符[=整型常数], 
                    标识符[=整型常数], 
                    ... 
                    标识符[=整型常数], 
                } 
                
    //  如果标识符没有赋值 它的值就是下标
    ```

    