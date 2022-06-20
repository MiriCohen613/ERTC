function yes(){
  window.location.href="quarters.html"
}

function no(){
  window.location.href="revenue_calculation.html"
}

let checkedlist=[];
//quiarters.html
function getquarters(){
  var checkboxes=document.querySelectorAll('input[type="checkbox"]:checked');
  console.log(checkboxes);
  for (var checkbox of checkboxes)
      checkedlist.push(checkbox.id);
  console.log(checkedlist)
  localStorage.setItem('checkedlist',JSON.stringify(checkedlist))
  window.location.href="revenue_calculation.html"
}

function greenrevenues(){
  console.log(localStorage.getItem('checkedlist'));
  const elements = document.querySelectorAll('input[type=text]');
  for (const element of elements) {
    for (const index of JSON.parse(localStorage.getItem('checkedlist'))){
        if (element.id == index)
          element.style["boxShadow"]="0 0 4px 4px #3F8C00";
     }
   }
   localStorage.clear()
}

function opaque(element){
  //gets id of checkbox
  let id=element.getAttribute("id");
  //gets last character of id
  let last=id.slice(-2)
  let name="fullitem"+last;
  //gets div of fullitem
  let d=document.getElementById(name)
  //sets opacity of fullitem
  if (element.checked==true){
    //if its normal then greys out
    d.style.opacity="0.5"}
  else d.style.opacity="1"
  console.log(element.checked);
}

function update(id1,id2){
  let e1=document.getElementById(id1);
  let e2=document.getElementById(id2);
  //get payroll and do 70%
  //divide by num of employees-
  //if more than 7000 then 7000 times by numofemplyees
  // if less also times numemploy by answer
  if (e1.value!=='' && e2.value!=='')
  {
    let ans=document.getElementById("ans"+id1.charAt(id1.length-2));
    let calc=e2.value*0.7;
    let m=calc/e1.value;
    if(m>7000){
      ans.value=7000*e1.value;
    }
    else
      ans.value=m*e1.value;
  }
}
