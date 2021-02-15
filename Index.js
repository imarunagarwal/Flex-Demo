botClick = function(){
    document.getElementById("chatBox").classList.toggle("hide");
}

sendButtonClick = function(){
    parent = document.getElementById("messages");
    message = document.getElementById("inputMessage").value;
    document.getElementById("inputMessage").value = '';
    parent.innerHTML += `<div class="rightMessage message">${message}</div><div class="leftMessage message">${message}</div>`;
    updateScroll();
}

updateScroll = function() {
    var element = document.getElementById("chatBox");
    element.scrollTop = element.scrollHeight;
  }
