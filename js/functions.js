function calculater(){
    screen= document.getElementById('screen');
buttons= document.querySelectorAll('button');}

//console.log(buttons);
screenValue='';
exactValue='';
buttontext='';
numberOne='';
numberTwo='';


for(item of buttons){
    item.addEventListener('click',(e)=>{
       
        exactValue=e.target.innerText;
       
        if(exactValue=="+")
        {
        
        if(buttontext=='')
        {
            alert("Jatt ja putt chaa karyaan!");
        }
            numberOne=buttontext;
        console.log(numberOne);
        screenValue=numberOne;
        screen.value =screenValue;
        buttontext='';
                     }
        else if(exactValue=="=")
        {
            //alert("I am plus");
        
         numberTwo=buttontext;
        console.log(numberTwo);
        total=parseInt(numberOne)+parseInt(numberTwo);
        screen.value=total;
        buttontext='';
        }
        else if(exactValue=="c")
        {
            buttontext='';
            screen.value='';
            exactValue='';
            numberOne='';
            numberTwo='';
        }
        
        else
        {
            buttontext =buttontext+exactValue;
           // alert("pehle wala chala");
           screen.value =buttontext;
    
    }
     

    });
}
    



   
