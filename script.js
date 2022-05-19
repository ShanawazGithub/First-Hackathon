var form=document.createElement("form");
form.setAttribute("id","myform");
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country","country_id","probability");
input.setAttribute("required",true);
var sub=document.createElement("input")
sub.setAttribute("type","submit");
sub.setAttribute("value","search");
form.append(input,sub);
document.body.append(form);

var formres=document.getElementById("myform");
formres.addEventListener("submit",(event)=>{
event.preventDefault();
var country=document.getElementById("country").value;
var url=`https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane`
foo(url);
});

async function foo(url){
    let res= await fetch(url);
console.log(res);
let result=await res.json();
console.log(result);
let index=result.length-1;
let title=document.getElementById("title");
let type=document.getElementById("type");
let year=document.getElementById("year");



}

async function foo(){
    try {
console.log("app execution......");
    let res= await bar();
console.log(res);
console.log("this is a testing code!!!");

    } catch(error){
        console.log(error);
    }


}
foo();
function bar(){
    return new Promise((resolve,reject)=>setTimeout(()=>reject(new Error("Code failed!!!")),3000));
}

