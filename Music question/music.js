const answer = ["A"]
var puan=0;

function checkanswer(event, index) {


   if (event.classList.contains("checked")) {

        alert("Zaten bir işaretleme yaptınız");
        //console.log(index);

    }
    else {

        if (event.innerHTML == answer[index]) {
            console.log(event)
            event.classList.add("dogru")
            console.log(event.innerHTML)
            console.log(index);

            puan+=10;
            document.getElementById("puan").innerHTML="Puan:"+puan;
        }
        else {
            event.classList.add("yanlis");
        }

    }


    
    console.log(answer[index]);
    

}