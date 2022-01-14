---
title: database
date: 2022-01-14 20:23:41
permalink: /pages/f25a6b/
categories:
  - other
tags:
  - 
---

### 一、什么是数据库
#### 1. DB
- DataBase 数据库，在硬盘上以文件形式存在
#### 2. DBMS
- DataBase Management System 数据库管理系统，常见的有：MySQL、Oracle、DB2、Sybase、SqlServer...
#### 3. SQL
- 结构化查询语言，适用于所有的数据库管理系统
#### 4. 关系
- DBMS执行sql语句，通过执行sql语句来操作DB中的数据
### 二、表的概念
- 行：一个记录
- 列：一个字段，包括字段名、数据类型、相关的约束
### 三、SQL语句分类
#### 1. DQL（数据查询语言）
- Data Query Language
- 查询语句，select
#### 2. DML（数据操作语言）
- Data Manipulation Language
- 对表中数据进行增删改查，**insert、delete、update**
#### 3. DDL（数据定义语言）
- Data Definition Language
- 对表结构的增删改，**create、drop、alter**
#### 4. TCL（事务控制语言）
- Transaction Control Language
- **commit**：提交事务、**rollback**：回滚事务
#### 5. DCL（数据控制语言）
- Data Control Language
- **grant**：授权、**revoke**：撤销权限等
### 四、数据库使用
#### 1. 登录数据库
```mysql
mysql -uroot -p 密码
```
#### 2. 查看有哪些数据库
```mysql
show databases;
--（MySQL命令，非SQL语句）
```
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5f426ca018e44ccbd3583e519680ba0~tplv-k3u1fbpfcp-watermark.image)
#### 3. 创建自己的数据库
```mysql
create database 数据库名;
--（MySQL命令，非SQL语句）
```
#### 4. 使用自己创建的数据库
```mysql
use 数据库名;
--（MySQL命令，非SQL语句）
```
#### 5. 查看当前数据库中有哪些表
```mysql
show tables;
--（MySQL命令，非SQL语句）
```
#### 6. 初始化数据
```mysql
source .sql文件拖过来回车自动初始化
```
#### 7. 删除数据库
```mysql
drop database 数据库名;
```
#### 8. 查看表结构
```mysql
desc 表名;
```
#### 9. 查看表中的数据
```mysql
select * from 表名;
```
### 五、DQL语句
#### 1. 简单的查询语句（select）
- 查询单个、多个字段
    ```mysql
    select 字段名1,字段名2,字段名3,... from 表名;
    ```
- 查询全部字段
    ```mysql
    select * from 表名;
    ```
- 查询字段并起别名
    - `select 字段名 as 新字段名 from 表名;`
    - as可以省略，字段可以参于数学运算
#### 2. 条件查询（where）
- 查询
    ```mysql
    select 字段1,字段2,... from 表名 where 条件
    ```
    - **查询条件**
| 运算符 |说明  |
| :---: | :--- |
| = | 等于 |
| <>或!= | 不等于 |
| <，> | 小于，大于 |
| <=，>= | 小于等于，大于等于 |
| between...and... | 两个值之间[a,b]等同于>= and <=|
| is null | 为null（is not null：不为空） |
| and | 并且 |
| or | 或者 |
| in | 在这几个值里面，相当于多个or（not in 不在这几个值里面） |
| not | not用来取非，主要用在is或in中 |
| like | 模糊查询，支持%或_匹配，%表示多个字符，\_表示一个字符 |

#### 3. 排序（order by）
```mysql
select 字段 from 表名 order by 字段（默认升序排列）
select 字段 from 表名 order by 字段 asc（升序排列）
select 字段 from 表名 order by 字段 desc（降序排列）
select 字段 from 表名 order by 字段1, 字段2, 字段3（越往前的字段越起主导作用，第一个字段相同时，才会按第二个字段的顺序进行排列）
```
#### 4. 单行处理函数（ifnull，输入一行，输出一行）
- **ifnull**：处理null的函数
- 用法
    ```mysql
    ifnull(字段中为null的值, 处理之后的替代值)：把某字段的null替换成参数2的值
    ifnull(sal, 0)：找出sal中的null值，并把它替换成0
    ```
#### 5. 分组函数（多行处理函数（count、sum、avg、max、min）：输入多行，输出一行）
- 特点：**自动忽略null**
    - count(*)和count(某个字段)的区别
    - count(*)统计的是总记录条数
    - count(某个字段)统计的是某个字段中不为null的数据条数
- 种类
    - **count**：计数
    - **sum**：求和
    - **avg**：平均值
    - **max**：最大值
    - **min**：最小值
- 用法
    ```mysql
    select count(字段) from 表名：求该字段的数量
    select sum(字段) from 表名：求该字段的和
    select avg(字段) from 表名：求该字段的平均值
    select max(字段) from 表名：求该字段的最大值
    select min(字段) from 表名：求该字段的最小值
    ```
#### 5. group by和having
- **group by**：按照某个字段或者某些字段进行分组
- **having**：分组之后的数据再次进行过滤
- 用法：
    - 一般和分组函数一起使用
    - 在group by函数执行之后才会执行分组函数
    - 当一个语句中有group by时，select后面只能跟分组函数和参与分组的字段
#### 6. 去除重复数据
- **distinct** 
```mysql
select distinct 字段1, 字段2... from 表名;
--多个字段联合去重
```
#### 7. 连接查询
- 概念
    - 多张表联合操作
- 分类
    - 根据年代划分
        - SQL92（旧版）
        - SQL99（新版）
    - 根据连接方式划分
        - 内连接
            - 等值连接：条件是等量关系
                - 语法：  
                    ```sql
                    select   
                        字段1,字段2   
                    from
                        表1   
                    join
                        表2   
                    on   
                        连接条件（表1的某个字段等于表二的某个字段）   
                    where   
                        查询条件...
                    ```
            - 非等值连接
                - 语法与等值连接相同，连接条件非等
            - 自连接
                - 两张表看作一张表，通过起别名进行区分
        - 外连接
            - 左外连接（左连接）：表示左边的表是主表  
                ```sql
                select   
                    字段1,字段2   
                from  
                    表1  
                left join 
                    表2  
                on  
                    连接条件  
                where  
                    查询条件...
                ```
            **表1为主表**
            - 右外连接（右连接）：表示右边的表是主表  
                ```sql
                select  
                    字段1,字段2  
                from  
                    表1  
                right join 
                    表2  
                on  
                    连接条件  
                where  
                    查询条件...
                ```
            **表2为主表**
        - 全连接（很少使用）
        - **内连接和外连接的区别**
            - 对A，B两张表，使用内连接进行查询时，没有主次之分，查出的是A和B中所有能匹配上的数据
            - 对A，B两张表，使用外连接查询时，若指定A为主表，B为副表，主要查询A中的数据，若B中没有与之匹配的数据，则自动在B表中生成NULL
#### 8. 子查询
- select语句中可以嵌套select语句，嵌套的子查询语句是子查询
- 举例  
    ```sql
    select  
    ...(select)  
    from  
    ..(select)  
    where  
    ..(select)
    ```
- where中使用子查询
- from中使用子查询
- select中使用子查询
#### 9. union
- 把两个不相干的表中的数据拼接到一块  
    ```sql
    select  
        字段
    from  
        表1  
    union  
    select  
        字段  
    from  
        表2
    ```
- 两个表连接时的字段数必须一致，否则会报错
#### 10. ⭐limit
- 功能：分页查询，取结果集中的部分数据，是MySQL中特有的，Oracle中相同功能的是rownum
- 语法  
    ```sql
    limit startIndex,length  
    startIndex表示起始位置，从0开始，0代表第一个数据，可省略，省略时从0开始  
    length表示取多少个
    ```
- 通用的分页sql
    - 推导  
        每页显示3条数据  
        第1页：0，3  
        第2页：3，3  
        第3页：6，3  
        ...
    - 公式  
        pageSize: 每页显示多少条数据  
        pageNum: 显示第几页  
        **每页显示pageSize条数据  
        第pageNum页: (pageNum - 1) * pageSize, pageSize**
#### 11. 执行顺序
```sql
select        5
    ...       
from          1
    ...
where         2
    ...
group by      3
    ...
having        4
    ...
order by      6
    ...
limit         7
    ...;
```
### 六、DDL
#### 1. 创建表（create）
- 语法格式  
    ```sql
    create table 表名(  
        字段名1 数据类型,  
        字段名2 数据类型,  
        字段名3 数据类型,  
        ...  
    );
    ```
- 常见的数据类型
    ```sql
        int         整数型
        bigint      长整型
        float       浮点型
        char        定长字符串
        varchar     可变长字符串
        date        日期类型
        BLOB        Binary Large OBject     二进制大对象，存储图片、视频等流媒体信息
        CLOB        Character Large OBject  字符大对象，可存储4G的字符串
    ```
    - **char和varchar的选择**
        - char适用于数据定长且不会发生改变，如日期、性别、生日等
        - varchar适用于数据长度不确定，如简介、姓名等
- **约束（Constraint）**
    - 定义  
        创建表时给表中的字段添加的附加条件，目的在于保证表中数据的合法性、有效性、完整性
    - 分类
        - **非空约束（not null）**  
            约束的字段不能为NULL
            ```sql
            create table 表名(
                字段1 数据类型 not null,
                字段2 数据类型,
                字段3 数据类型,
                ...
            );
            --字段1不能为NULL
            ```
        *****
        - **唯一约束（unique）**  
            约束的字段不能重复，但可以为NULL
            ```sql
            create table 表名(
                字段1 数据类型 unique,
                字段2 数据类型,
                字段3 数据类型,
                ...
            );
            --表示字段1不能重复，列级约束
            ```
            ```sql
            create table 表名(
                字段1 数据类型,
                字段2 数据类型,
                字段3 数据类型,
                unique(字段1,字段2)
            );
            --字段1和字段2联合起来不能重复，表级约束
            ```
        *****
        - **⭐主键约束（primary key）**  
            约束的字段既不能为NULL，也不能重复  
            **一张表只能有一个主键**
            ```sql
            create table 表名(
                字段1 数据类型 primary key,
                字段2 数据类型,
                字段3 数据类型,
                ...
            );
            --字段1为主键，不能为NULL，也不能重复
            ```
            - 分类
                - 主键字段的字段数量划分
                    - 单一主键（推荐）
                    - 复合组件（多个字段联合起来添加一个主键约束）
                - 主键性质划分
                    - 自然主键（推荐）
                    - 业务主键
            - 主键自增
            ```sql
            create table 表名(
                字段1 数据类型 primary key auto_increment,
                字段2 数据类型,
                字段3 数据类型,
                ...
            );    
            --字段1为主键且自增，从1开始，每次加1
            --Oracle中为sequence
            ```
        *****
        - **⭐外键约束（foreign key）**
            - 给表2中某个字段添加外键约束后，意味着表2的这个字段只能取引用表1的某个字段的值之一（引用了表1的某个字段），否则会报错，此时表1为父表，表2为子表（**子用父的某个字段，这个字段就是外键约束**）
            - 创建表时先创建父表，再创建子表
            - 删除表时先删除子表，再删除父表
            - 添加数据时先添加父表，再添加子表
            - 删除数据时先删除子表，再删除父表
            ```sql
            create table 父表名(
                父表字段1 数据类型,
                父表字段2 数据类型,
                父表字段3 数据类型,
                ...
            );
            create table 子表名(
                子表字段1 数据类型,
                子表字段2 数据类型,
                子表字段3 数据类型,
                foreign key(子表字段1) references 父表名(父表字段1)
            );
            --表示子表字段1作为外键，引用父表字段1的值，如果尝试添加非父表字段1中的值，会报错
            ```
            - 外键可以为NULL
            - 外键字段引用其他表的某个字段的时候，被引用的字段不一定是主键，但至少具有unique约束
        *****
        - **检查约束（check）**：MySQL不支持检查约束，Oracle支持
#### 2. 复制表
- 语法格式
    ```sql
    create 表名 as select语句;  --将查询结果当表的结果创建出来
    ```
#### 3. 删除表（drop）
- 语法格式
    ```sql
    drop table if exists 表名
    ```
### 七、DML
#### 1. 插入数据（insert）
- 语法格式
    ```sql
    insert into 表名(字段1,字段2,字段3,...) values(值1,值2,值3,...)
    insert into 表名 values(值1,值2,值3,...)  --省略字段名时，值必须要和建表时的字段匹配，否则会报错
    insert into 表名 values(值),(值),(值)...  --一次插入多行记录
    ```
    **要求**：字段跟值的数量相等，并且数据类型要一致  
    **注意**：当一条insert语句执行完成后，表格就会多一行记录。即使多的这一行记录中某些字段是NULL，后期也无法再执行insert语句插入其他数据了，只能使用update进行更新
#### 2. 修改数据（update）
- 语法格式
    ```sql
    update 表名 set 字段1=值1,字段2=值2,... where 条件
    ```
    **注意**：没有条件，整张表数据全部更新
#### 3. 删除数据（delete）
- 语法格式
    ```sql
    delete from 表名 where 条件
    ```
    **注意**：没有条件，整张表全部删除
- 删除数据比较多的表
    ```sql
    truncate table 表名  --表被截断，不可回滚
    ```
### 八、TCL
#### 1. 事务（Transaction）

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9815a564f60447f5bd8a188f908667b3~tplv-k3u1fbpfcp-watermark.image)
- 概念  
    一个事务是一个完整的业务逻辑单元，不可再分  
    事务就是多条DML语句捆绑在一起（insert、delete、update）
- 执行过程
    - 提交：**commit**  
    - 回滚：**rollback**
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2afe6fa2882440abb67fdead28fa73e0~tplv-k3u1fbpfcp-watermark.image)
- 特性
    - 四大特性：ACID
    - A：原子性：事务是最小的工作单元，不可再分
    - C：一致性：事务必须保证多条DML语句同时成功或同时失败
    - I：隔离性：事务A和事务B之间具有隔离
        - 隔离级别，包括4个
            - 第一级别：读未提交（**read uncommitted**）  
                对方事务还没有提交，我方当前事务就可以读取到对方未提交的数据  
                存在脏读现象，读到了脏数据（还未提交的数据）
            - 第二级别：读已提交（**read committed**）  
                对方事务提交之后的数据我方才可以读到   
                解决了脏读现象  
                问题：不可重复读，即以对方事务提交的数据作为源数据，且存在不可复读性
            - 第三级别：可重复读（**repeatable read**）  
                解决了不可重复读问题，但是读到的数据是幻象，即对象提交的数据永远读不到，读到的是我方开启事务时的数据
            - 第四级别：序列化读/串行化读（**serializable**）  
                解决了所有问题，但是效率低，需要事务排队
            - **Oracle默认2**
            - **MySQL默认3**
        - 开启隔离
            ```sql
            start transaction
            ```
        - 设置隔离级别
            ```sql
            set global transaction isolation level 级别英文;
            ```
        - 查看事务的全局隔离级别
            ```sql
            select @@global.tx_isolation;
            ```
    - D：持久性：最终数据必须持久化到硬盘文件中，事务才算成功的结束
### 九、数据库设计三范式
#### 1. 第一范式
- 任何一张表都应该有主键，并且每一个字段原子性不可再分
#### 2. 第二范式
- 建立在第一范式的基础之上，所有非主键字段完全依赖主键，不能产生部分依赖
- 多对多？三张表，关系表加两个外键
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e037136ed5f44cd8bf1144482fe7cdc2~tplv-k3u1fbpfcp-watermark.image)
#### 3. 第三范式
- 建立在第二范式的基础上，所有非主键字段直接依赖主键，不能产生传递依赖
- 一对多？两张表，多的表加外键
#### 4. 一对一设计

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e2d63cc183a34d9fbb8dee74cbc751ae~tplv-k3u1fbpfcp-watermark.image)
