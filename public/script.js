const socket = io();

const btn = document.getElementById("btn");
const inputMsg = document.getElementById("newmsg");
const msgList = document.getElementById("msglist");

/*
******************************
Client emit event for server
******************************
*/
btn.onclick = (event) => {
  socket.emit("msg_send", { msg: inputMsg.value });
  inputMsg.value = "";
};

/*
**************************************
Client receive event from server side
**************************************
*/
socket.on("msg_rcvd", (payload) => {
  const list = document.createElement("li");
  list.innerText = payload.msg;
  msgList.appendChild(list);
});
