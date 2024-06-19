function Autherize(){
    let key = ''
    const cookies = document.cookie.split("; "); 
    cookies.forEach(element => {
        if(element.indexOf("rule") == 0){
            if (element.split("=")[1] = "Admin"){
                key = '1'
            }
        }
    });
    if(!key){
        window.location.replace("/login");
    }
}


Autherize();