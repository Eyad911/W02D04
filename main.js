const body = document.querySelector("body");
const h1 = document.createElement("h1");
h1.innerHTML = "Todo List";
body.append(h1);

const listI = document.createElement("ul");
listI.id = "ulID";
body.append(listI);

const toDos = ["wake up", "eat breakfast", "code"];


const delItem = (e) => {
    
    console.log(e.target);

   
    toDos.splice(e.target.id,1);
    renderList();
    
    
    }
     const input2 = document.createElement("input")
      body.append(input2)
      input2.placeholder ="write your update here"
      input2.style.display = 'block';


const updItem = (e) => {
   if (input2.value === "") { 
       return
   }
toDos.splice(e.target.id , 1 ,input2.value )

renderList();
}




const renderList = () => {
  const ulList = document.querySelector("#ulID");
  ulList.innerHTML = "";
  for (let index = 0; index < toDos.length; index++) {
    const newLI = document.createElement("li");
    newLI.innerHTML = toDos[index];
    const btn2 = document.createElement("button");
    btn2.addEventListener("click", delItem);
    btn2.id = index
    btn2.innerHTML ="Delete"
    const btn3 = document.createElement("button");
    btn3.addEventListener("click", updItem);
    btn3.id = index;
    btn3.innerHTML ="UpDate"
    ulList.append(newLI);
    ulList.append(btn2);
    ulList.append(btn3);
  }
};
renderList();

const addToList = () => {
  toDos.push(document.querySelector("#box").value);
  renderList();
};



const btn1 = document.createElement("button");
btn1.id ="btn1"
btn1.innerHTML = "Add";
body.append(btn1);
btn1.addEventListener("click", addToList);
const input1 = document.createElement("input");
input1.id = "box";
input1.placeholder = "Add here";
body.append(input1);

//const btn2 = document.querySelector("#btn2").style.color = "#ff0000";







