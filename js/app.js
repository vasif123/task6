document.body.onkeyup=function(x){
    if (x.keyCode===13) {
      let Color = Math.floor(Math.random()*16777215).toString(16);
      document.body.style.backgroundColor = "#" + Color;
    }
  }




  let inputname=document.getElementById('name');
  let button=document.getElementById('button');
  let inputpassword=document.getElementById('password');
  let inputemail=document.getElementById('email');
  let inputnamevalue=inputname.value;
  button.onclick=function(){
    let inputnamevalue=inputname.value;
    if (Namechecker(inputnamevalue)===true&&Passworchecker(inputpassword)===true&&emailchecker(inputemail)===true) {
      alert('Qeydiyyatdan tamamlandi ,Xow eylenceler');
    }
  }
  function Namechecker(name) {
    if (name.length>4) {
      if (name.charAt(0)===name.charAt(0).toUpperCase()) {
       return true;
      }
      else{
        alert('1 boyuk herf olmalidi!!')
      }
     }
     else{
      alert('Minimum 4 herf olmali!')
     }
  }
  function Passworchecker(password) {
    var check= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(password.value.match(check)){
    return true;
    }
    else{
      alert('Parol en azi 1 herf ,simvol ve reqemden ibaret olmaldi!!');
    }
  }
  function emailchecker(email) {
    var check=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(check)){
      return true;
      }
      else{
        alert('bu bir mail adresi deyil!!')
      }
  }
  



  var btnopen=document.getElementById('btn-open');
  var btnclose=document.getElementById('btn-close');
  var modal=document.getElementById('modal');
  
  btnopen.onclick=function() {
  modal.style.display='block';
  }
  btnclose.onclick=function () {
    modal.style.display='none';
  }
  
  