let modeBtn=document.querySelector("button");
let body = document.querySelector("body");
let currMode="light";

modeBtn.addEventListener("click", () => {
    if(currMode=== "light"){
        currMode = "dark";
        body.classList.add("dark");
        modeBtn.innerText="light";
        body.classList.remove("light");
    }  else{
        currMode = "light";
        body.classList.add("light");
        modeBtn.innerText="dark";
        body.classList.remove("dark");
    }
    console.log(currMode);
})