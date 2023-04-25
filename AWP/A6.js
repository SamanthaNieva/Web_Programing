 
    function stop_function(){
        var keys = document.getElementById('Keys').setAttribute("onkeypress", "");
        keys.removeAttribute("onkeypress");
    }
    function move_function(event){
        
        if(event.key == 'a' || event.key == 'A'){
            position_right = document.getElementById('box').style.left;
            position_right = position_right.substring(0,position_right.length-2);
            position_right = parseInt(position_right)-100;
            document.getElementById('box').style.left=position_right+"px";
            document.getElementById("box").innerHTML='<img src="l.png"/>';
            if(position_right <= 260){
                stop_function();
            }
        }else if(event.key == 'd' || event.key == 'D'){
            position_left = document.getElementById('box').style.left;
            position_left = position_left.substring(0,position_left.length-2);
            position_left = parseInt(position_left)+50;
            document.getElementById('box').style.left=position_left+"px";
            document.getElementById("box").innerHTML='<img src="r.png"/>';
            if(position_left >= 725){
                 
                stop_function();
            }
        }else if(event.key == 'w' || event.key == 'W'){
            position_bottom = document.getElementById('box').style.top;
            position_bottom = position_bottom.substring(0,position_bottom.length-2);
            position_bottom = parseInt(position_bottom)-53;
            document.getElementById('box').style.top=position_bottom+"px";
            document.getElementById("box").innerHTML='<img src="t.png"/>';
            if(position_bottom <= -20){
                
                stop_function();
            }// 155 -> s && 83 -> S
        }else if(event.key == 's' || event.key == 'X'){
            position_bottom = document.getElementById('box').style.top;
            position_bottom = position_bottom.substring(0,position_bottom.length-2);
            position_bottom = parseInt(position_bottom)+51;
            document.getElementById('box').style.top=position_bottom+"px";
            document.getElementById("box").innerHTML='<img src="d.png"/>';
            if(position_bottom >= 505){
                
                stop_function();
            }
        }
        
    }
