function validate(){
    let user=document.getElementById('user');
    let msg=document.getElementById('msg');
    let username=user.value;
    // console.log(username);
    let reg=/^[A-Za-z]+$/g;

    if(!username){
        msg.style.display="block";
        msg.innerText="user name required";
        return false
    }else if(username.length<6){
        msg.style.display="block";
        msg.innerText="user should be more than 5 characters";
        return false
    }else if(username.length>10){
        msg.style.display="block";
        msg.innerText="user should contain only 10 character";
        return false
    }else if(!reg.test(username)){
        msg.style.display="block";
        msg.innerText="user should contain only alphebates";
        return false
    };
};