function image1(){
    const radioType=document.getElementsByName('a');
    for(i=0;i<radioType.length;i++){
        if(radioType[i].checked){
            if(i==0){
                document.getElementById('one').style.cssText="filter: blur(5px)";
            }
            if(i==1){
                document.getElementById('one').style.cssText="filter: sepia(100%)";
            }
            if(i==2){
                document.getElementById('one').style.cssText="filter: invert(100%)";
            }
        }
    }

}

function image2(option){
    if(option==1)
        document.getElementById('two').style.cssText="filter: grayscale(0%)";
    if(option==2)
        document.getElementById('two').style.cssText="filter: grayscale(100%)";
}

function image3(){
    opacity=document.getElementById('opacity').value;
    document.getElementById('three').style.cssText="filter: opacity("+opacity+"%)";
}

function image4(){
    brightness=document.getElementById('brightness').value;
    document.getElementById('four').style.cssText="filter: brightness("+brightness+"%)";
}