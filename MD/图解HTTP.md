http hyperText Transfer protocol 超文本传输协议

| 应用层 | 传输层  | 网络层  | 数据链路层| 
|  ---- | ----  | ---- | ---- |
| FTP file transfer protocol 文件传输协议; Domain Name System 域名系统; HTTP | 提供网络连接中两台计算机之间的数据传输 TCP transmission control protocol  传输控制协议；UDP user Data protocol 用户数据报协议 | 用来处理网络上流动的数据包。作用就是在众多选项内选择一条传输路线 ip 协议 把各种数据包传送给对方 | 用来处理连接网络的硬件部分。包括操作系统,硬件的设备,驱动,网卡


>ip协议 作用就是把各种数据包传送给对方。而要保证传送到对方那里就需要2个条件： ip地址和MAC地址 ip地址会变。MAC地址一般不会变更



### TCP 三次握手
  为了准确无误地将 数据送达目标处。TCP 协议采用了三次握手策略

  发送端首先发送一个带SYN标志的数据包给对方。接收端收到后，回传一个带有SYN/ACK标志的数据包以示传达确认信息。最后，发送端再回传一个带ACK标志的数据包，代表”“
  ![alt 属性文本](https://si1.go2yd.com/get-image/0vcr2MkUU3L)
  ![alt ](https://si1.go2yd.com/get-image/0vcrERLPO6y)

  随着图片增加，每次的请求都会照成所谓的TCP 链接的建立和断开，增加通信量的开销

### 持久化
  http1.1 keep-alive 只要一端没有明确的断开链接，则保持TCP链接状态。可以减轻服务端的负载。