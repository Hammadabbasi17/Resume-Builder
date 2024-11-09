



let ham = document.getElementById("menu");
ham.addEventListener("click", () => {
    let sa = document.getElementById("sajjad");
    sa.classList.toggle("hidden");
    if (sa.className === "hidden") {
        ham.className = "ri-add-large-fill";

        sa.style.display = "none";

    } else {

        ham.className = "ri-subtract-fill";
        sa.style.display = "block";
    }
})






// let languages = document.getElementById("lang");
// languages.addEventListener("click", () => {
//     let contain = document.getElementsByClassName("contain");

//     for (let i = 0; i < contain.length; i++) {
//         contain[i].classList.toggle("hidden1");
//         if (contain[i].className === "hidden1") {


//             contain[i].style.display = "none";
//         } else {
//             languages.className = "ri-add-large-fill";


//             contain[i].style.display = "block";
//         }
//     }

// })









function addNewEd(){
   let newNode = document.createElement("textarea")
   newNode.classList.add('textarea')
   newNode.classList.add("marg")
    
  let we = document.getElementById("we");
   let addbtn = document.getElementById("addbtn");
   we.insertBefore(newNode, addbtn);

}



function addNewAb(){
   let node = document.createElement("textarea");
   node.classList.add('textarea1');
   node.classList.add('marg')

   let ab = document.getElementById("Ab");
   let addbtn2 =document.getElementById("addbtn2");
   ab.insertBefore(node,addbtn2)
    
}

function addNewskill(){
    let adding = document.createElement("input")
    adding.classList.add('skill');
    adding.classList.add('marg')
 
    let sl = document.getElementById("sl");
    let addskill =document.getElementById("addskill");
    sl.insertBefore(adding,addskill)

}


function addNewlang(){
    let adding2 = document.createElement("input")
    adding2.classList.add('educate');
    adding2.classList.add('marg')
 
    let bol = document.getElementById("lan");
    let addlang =document.getElementById("addlang");
    bol.insertBefore(adding2,addlang)

}















function generatecv(){
    let namefeild = document.getElementById("fill").value;
    let nameT= document.getElementById("namet");
    nameT.innerHTML = namefeild;
   /////


document.getElementById("AgeT").innerHTML = document.getElementById("Ageinput").value

document.getElementById("PhoneT").innerHTML = document.getElementById("Phoneinput").value

document.getElementById("EmailT").innerHTML = document.getElementById("Emailinput").value

document.getElementById("LinkT").innerHTML = document.getElementById("Linkinput").value

document.getElementById("companyNameT").innerHTML = document.getElementById("CompanyNameinput").value
document.getElementById("PositionT").innerHTML = document.getElementById("positioninput").value
document.getElementById("DurationT").innerHTML = document.getElementById("durationinput").value
document.getElementById("JobT").innerHTML = document.getElementById("jobinput").value



let edu = document.getElementsByClassName("textarea")

let str = "";
for(let e of edu){
    str = str + `<li> ${e.value} </li>`;

}
document.getElementById("weT").innerHTML = str;


let abo = document.getElementsByClassName("textarea1")

let strin = "";
for(let e of abo){
    strin = strin + `<li> ${e.value} </li>`;

}
document.getElementById("weT2").innerHTML = strin;







let skill = document.getElementsByClassName("skill")

let Strin = "";
for(let e of skill){
    Strin = Strin + `<li> ${e.value} </li>`;

}
document.getElementById("sajjad").innerHTML = Strin;


let lang = document.getElementsByClassName("educate")

let Str = "";
for(let e of lang){
    Str = Str + `<li> ${e.value} </li>`;

}
document.getElementById("bol").innerHTML = Str;


  




let file = document.getElementById("imgupload").files[0];
console.log(file);
let reader = new FileReader()
reader.readAsDataURL(file)
console.log(reader.result);


reader.onloadend = function(){
     document.getElementById("PhotoT").src = reader.result
}







    
document.getElementById("contain-cv").style.display="none"
 document.getElementById("temp").style.display="block"
 
}





function edit(){
    document.getElementById("contain-cv").style.display ="block";
     document.getElementById("temp").style.display="none"
   

}

 function Printcv(){
    window.print()
 }