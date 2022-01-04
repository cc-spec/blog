---
title: 图解HTTP
author: coderc
date: 2022-01-04 14:47:51
permalink: /pages/12e88f/
categories:
  - reading
tags:
  - 
---
## 一、TCP/IP协议族
### 1. 协议：规则，规定了从电缆的规格到IP地址的选定方法、寻找异地用户的方法、双方建立通信的顺序，以及Web页面显示需要处理的步骤等。
### 2. TCP/IP协议：与互联网相关的协议的集合。
### 3. TCP/IP协议的分层管理
- #### 应用层
   - 决定了向用户提供服务时通信的活动。
   - 包含**FTP**(File Transfer Protocol，文本传输协议)，**DNS**(Domain Name System，域名系统)，**HTTP**(HyperText Transfer Protocol，超文本传输协议)。
- #### 传输层
   - 对应用层提供网络连接中的两台计算机之间的数据传输。
   - 包含**TCP**(Transmission Control Protocol，传输控制协议)，**UDP**(User Data Protocol，用户数据报协议)。
- #### 网络层(网络互连层)
   - 处理在网络上流动的数据包，规定通过怎样的传输路线到达对方计算机。
   - 包含**IP**(Internet Protocol，网际协议)。
- #### 链路层(数据链路层，网络接口层)
   - 处理连接网络的硬件部分。
   - 包括控制操作系统、硬件的设备驱动、NFC，光纤等物理可见设备。
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6fe23f9c268d48e7a40c06417b6183c3~tplv-k3u1fbpfcp-zoom-1.image)
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e8d37803e33847c3a08e1a5b58541f2a~tplv-k3u1fbpfcp-zoom-1.image)
### 4. 与HTTP相关的协议：IP、TCP、DNS
- #### IP协议
   - 处于网络层，作用是把各种数据包传递给对方，并确定传送成功。
   - 保证成功传送的重要的两个条件：IP地址和MAC地址(Media Access Control Address)。
   - 通常通信的双方不在一个局域网内,需要通过多台计算机和网络设备进行中转才可实现连接,进行中转时, 会利用下一台中转设备的MAC地址来搜索下一个中转目标，设备使用ARP协议(Address Resolution Protocol)解析IP地址反查出对应的MAC地址
- #### TCP协议
   - TCP协议处于传输层, 提供可靠的字节流服务.
   - **TCP三次握手建立连接**   
   **第一次握手**: 发送端发送一个带有**SYN**(synchronize, 同步处理标志)的数据包到接收端.  
   **第二次握手**: 接收端收到数据包后, 回传一个带有**ACK**(acknowledgement, 确认标志)的数据包, 表示确认收到发送端第一次握手时发送的数据包.  
   **第三次握手**: 发送端再回传一个带有ACK标志的数据包, 表示握手结束.
   - **TCP四次挥手断开连接**  
	**第一次挥手**：接收端发送一个FIN(finish结束标志)，用来关闭发送端与接收端的数据传送。  
	**第二次挥手**：发送端收到这个FIN，它发回一个ACK，确认序号为收到的序号加1。和SYN一样，一个FIN将占用一个序号。  
	 **第三次挥手**：发送端关闭与接收端的连接，发送一个FIN给接收端。  
	 **第四次挥手**：接收端发回ACK报文确认，并将确认序号设置为收到序号加1。
- #### DNS服务
   - 提供域名到IP地址之间的解析作用．
## 二. HTTP协议
### 1. 请求报文
- 请求方法, 请求URI, 协议版本, 可选的请求首部字段, 内容实体构成.
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c6369ffc12d46319b2beeeb280c9b45~tplv-k3u1fbpfcp-zoom-1.image)
- 请求方法
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3b23e7156c5c4368aaf3e74fa07c8f10~tplv-k3u1fbpfcp-zoom-1.image)
### 2. 响应报文
- 协议版本, 状态码, 状态码的解释说明文字, 可选的响应首部字段, 实体主体构成.
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e7e0bb210a324e39aeefb1996901c3d8~tplv-k3u1fbpfcp-zoom-1.image)
### 3. Cookie
- HTTP是无状态协议, 不对之前发生过的请求和响应的状态进行管理, 无法保存用户的登录信息, Cookie技术通过在请求和响应报文中添加Cookie信息来控制客户端的状态.
### 4. 状态码
- 反馈从服务器端返回的请求结果
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3e00cc1af67d4e609379185b9ab7b3f1~tplv-k3u1fbpfcp-zoom-1.image)
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6a8730f4a4324346a03562bc4bebd7ca~tplv-k3u1fbpfcp-zoom-1.image)