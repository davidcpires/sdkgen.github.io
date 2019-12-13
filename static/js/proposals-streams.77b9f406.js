(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./proposals/streams.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),i={},l="wrapper";function r(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)(l,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"server-side-streamming-to-the-client"},"Server-side streamming to the client"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"This is a feature proposal. There may or may not be an experimental implementation. Everything detailed in this page may change or may never exist at all.")),Object(s.b)("h2",{id:"goals"},"Goals"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Allow the server to send a large blob of data in small pieces and allow the client to process those pieces as they come. Example: Downloading a binary file."),Object(s.b)("li",{parentName:"ul"},"Allow the client to subscribe for notifications from the server about some specific topic.")),Object(s.b)("h2",{id:"proposal"},"Proposal"),Object(s.b)("p",null,"Add a new sdkgen type ",Object(s.b)("inlineCode",{parentName:"p"},"stream<T>")," where a subtype can be specified and allow it to appear on any location where a type can appear. Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{}),"type Status enum { dead alive }\ntype User {\n    id: uuid\n    name: string\n    status: Status\n    statusChanged: stream<Status>\n}\n\nfn getUser(id: uuid): User\n")),Object(s.b)("p",null,"This allows the stream to hold any data type (including ",Object(s.b)("inlineCode",{parentName:"p"},"bytes"),") and allow it to appear multiple times in a response."),Object(s.b)("p",null,"For the server, the stream is an object that must be created and returned. It will stay alive after the request has concluded. Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{}),'api.fn.getUser = async (ctx, {id}) => {\n    const user = await internalGetUser(id);\n    const statusChanged = new Stream<Status>();\n    function toggleStatus(status: Status) {\n        statusChanged.send(status);\n        setTimeout(() => toggleStatus(status === "dead" ? "alive" : "dead"), 1000);\n    }\n    toggleStatus("alive");\n    return { ...user, statusChanged };\n};\n')),Object(s.b)("p",null,"And for the client:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{}),"const user = await api.getUser(id);\nrenderUser(user);\nuser.statusChanged.onReceive(status => {\n    renderUser({ ...user, status });\n});\n")),Object(s.b)("p",null,"The stream can be closed by either side calling the ",Object(s.b)("inlineCode",{parentName:"p"},".end()")," function. It can also be closed because of a connection issue (it will ",Object(s.b)("strong",{parentName:"p"},"not")," automatically reopen). If the stream is closed because of any reason both sides will be notified with the ",Object(s.b)("inlineCode",{parentName:"p"},"onEnd()")," callback. In that case the client may decide to call the server again to open a new stream. From the server, calling ",Object(s.b)("inlineCode",{parentName:"p"},".send()")," on a closed stream will throw."),Object(s.b)("p",null,"A more advanced example:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{}),"type UserInfo {\n    name: string\n    status: enum { dead alive }\n}\ntype User {\n    id: uuid\n    ...UserInfo\n    userChanged: stream<UserInfo>\n}\ntype UserList {\n    users: User[]\n    userAdded: stream<User>\n    userRemoved: stream<uuid>\n}\nfn getUserList(): UserList\n")),Object(s.b)("p",null,"In particular note that the ",Object(s.b)("inlineCode",{parentName:"p"},"userAdd")," may itself create a new stream on the fly. This is allowed."),Object(s.b)("p",null,"A simpler example:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{}),"type Message {\n    authorId: uuid\n    id: uuid\n    body: string\n}\n\nfn listenMessages(): stream<Message>\n")),Object(s.b)("h2",{id:"implementation"},"Implementation"),Object(s.b)("p",null,"A new ",Object(s.b)("inlineCode",{parentName:"p"},"stream<T>")," will be created on the parser, similar to the array or optional types. Each target/runtime will decide if it can support it or not. If this type is used but the target doesn't support it, the generated file won't be generated."),Object(s.b)("p",null,"At runtime each instance of ",Object(s.b)("inlineCode",{parentName:"p"},"Stream")," has a unique ",Object(s.b)("inlineCode",{parentName:"p"},"uuid")," that is equal on both the server and the client. For the SdkgenHttp protocol the following changes:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"If the response does not contain a Stream (deep check), then nothing changes."),Object(s.b)("li",{parentName:"ul"},"If the response contains at least one stream, anywhere, then the content type of the response changes to ",Object(s.b)("inlineCode",{parentName:"li"},"text/event-stream"),", instead of ",Object(s.b)("inlineCode",{parentName:"li"},"application/json"),". This inform the browser and any middlewares/proxies that the body should not be buffered and should be sent as early as possible. Then the server starts writing the response as a sequence of small json bodies. The header ",Object(s.b)("inlineCode",{parentName:"li"},"X-Accel-Buffering: no")," must be passed on the response too.")),Object(s.b)("p",null,"The first thing sent on the response body will be the function response itself. If an stream is sent from the server, and UUID is generated and that is sent to the client. It will then receive the UUID and create a ",Object(s.b)("inlineCode",{parentName:"p"},"Stream")," instance tracking it. While there is at least one stream open, the connection will be kept open. Then for every ",Object(s.b)("inlineCode",{parentName:"p"},"send()")," or ",Object(s.b)("inlineCode",{parentName:"p"},"end()")," event from the server a new piece of the response body will be sent to the client, triggering the corresponding ",Object(s.b)("inlineCode",{parentName:"p"},"Stream")," instance. If the client has already closed it, then it will ignore the message. If all streams have been closed, both sides will drop the connection."),Object(s.b)("p",null,"This is very very similar to HTTP Server-Sent Events."),Object(s.b)("p",null,"Upsides of this implementation:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Very light protocol and HTTP native. Should work anywhere."),Object(s.b)("li",{parentName:"ul"},"On HTTP/2 the TCP connection is multiplexed with other requests.")),Object(s.b)("p",null,"Downsides of this implementation:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The client has no way of letting the server now that is closed one particular stream. The server will keep sending messages and the client will keep ignoring them. When all other streams are closed the client will drop the connection (because it knows all streams are closed). Only then the server will understand the streams have been closed and finish them."),Object(s.b)("li",{parentName:"ul"},"Not all proxies might understand that this is an SSE connection and might buffer."),Object(s.b)("li",{parentName:"ul"},"Does not allow client-side streamming.")),Object(s.b)("h2",{id:"alternative-implementation"},"Alternative implementation"),Object(s.b)("p",null,"If the response does not contain a Stream (deep check), then nothing changes."),Object(s.b)("p",null,"If the response contains at least one stream, anywhere, then a WebSocket will be opened for that particular request. First the client will send the function name and arguments, and then the server will reply with the function result body. For each stream on the result, a new UUID will be sent. For each stream message, a websocket message will be sent. Streams being closed can be notified by both sides. When all streams are closed, the connection is dropped."),Object(s.b)("p",null,"At first this will lose HTTP/2 multiplexing hability (multiple requests being handled in a single TCP connection). But there is a proposal from 09/2018 about WebSocket over HTTP/2. See ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://tools.ietf.org/html/rfc8441"}),"RFC8441"),". Support:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Chrome: ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://www.chromestatus.com/feature/6251293127475200"}),"behind a flag, released on version 66")),Object(s.b)("li",{parentName:"ul"},"Firefox: ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://bugzilla.mozilla.org/show_bug.cgi?id=1434137"}),"disabled by default, released on version 65")),Object(s.b)("li",{parentName:"ul"},"NodeJS: ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/nodejs/node/pull/23284"}),"released on version 12")),Object(s.b)("li",{parentName:"ul"},"Edge: Unknown"),Object(s.b)("li",{parentName:"ul"},"Safari: Unknown"),Object(s.b)("li",{parentName:"ul"},"Nginx: Unknown")),Object(s.b)("p",null,"Upsides of this implementation:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Full-duplex protocol. Allows client-side streamming."),Object(s.b)("li",{parentName:"ul"},"WebSockets are supported pretty much everywhere.")),Object(s.b)("p",null,"Downsides of this implementation:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Without RFC8441, WebSockets require opening a new TCP connection and performing a new TLS handshake, which is slow. Reusing the same WebSocket for multiple functions can work, but will worsen load balancing.")),Object(s.b)("h2",{id:"alternative-implementation-2"},"Alternative implementation 2"),Object(s.b)("p",null,"Use gRPC as transport layer."),Object(s.b)("p",null,"Downsides of this implementation:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"gRPC uses HTTP/2 for its transport layer, which means it is unable to provide client-side streams on the Web. It has the very same limitations of the first implementation.")))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"proposals/streams.mdx"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=proposals-streams.1e37b44e56e4f36a06b9.js.map