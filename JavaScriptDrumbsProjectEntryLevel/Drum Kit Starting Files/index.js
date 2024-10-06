
/*var index = document.querySelectorAll(".drum").length

   for(var i=0;i<index; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function1);

    function function1(){

        var value = this.innerHTML;

            
        switch(value){

            case 'w':
             var audio = new Audio('sounds/snare.mp3');
             audio.play();
             break;
            case 'a':
                var vs = new Audio('sounds/kick-bass.mp3');
                vs.play();
            case 's':
                var vl = new Audio('sounds/crash.mp3');
                vl.play();
                break;
            case 'd':
                    var ve = new Audio('sounds/tom-1.mp3');
                    ve.play();
                    break;
            case 'j':
                        var vd = new Audio('sounds/tom-2.mp3');
                        vd.play();
                        break;
            case 'k':
                     var vh = new Audio('sounds/tom-3.mp3');
                     vh.play();
                     break;

            case 'l':
                        var vg = new Audio('sounds/tom-4.mp3');
                        vg.play();
                        break;
                        default: console.log(value);  
                
        }
    
    }


   }*/

    // instead of passing raw data from above go with below keypress concept 

    var numberofButtons = document.querySelectorAll(".drum").length;

    for(var i=0;i<numberofButtons;i++){
    
        document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    
    
            var buttoninnerhtml = this.innerHTML;
    
            makesound(buttoninnerhtml);

            
    
    
        } ); 
    }
    
    document.addEventListener("keypress", function(event){
        //keyborad event listener 
    
        makesound(event.key);
    });
    
    function makesound(key){
    
        switch(key){
    
            case 'w':
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
               case 'a':
                   var vs = new Audio('sounds/kick-bass.mp3');
                   vs.play();
               case 's':
                   var vl = new Audio('sounds/crash.mp3');
                   vl.play();
                   break;
               case 'd':
                       var ve = new Audio('sounds/tom-1.mp3');
                       ve.play();
                       break;
               case 'j':
                           var vd = new Audio('sounds/tom-2.mp3');
                           vd.play();
                           break;
               case 'k':
                        var vh = new Audio('sounds/tom-3.mp3');
                        vh.play();
                        break;
    
               case 'l':
                           var vg = new Audio('sounds/tom-4.mp3');
                           vg.play();
                           break;
                           default: console.log(value);  
                   
    
    
        }
    }
    