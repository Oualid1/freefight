var card = document.querySelector(".center-card");
card.addEventListener("click",function(e){
  e.preventDefault();
  var cls = this.className;
  if(/rotate-card/.test(cls)){
    cls = cls.replace("rotate-card","");
    cls = cls.replace(/(^\s+)|(\s+$)/g,"");
  }else{
    cls = cls+" rotate-card";
  }
  this.className = cls;
})
