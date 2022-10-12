var divRes=document.querySelector("#Res");
const User=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/photos")
    const json=await res.json();
console.log(json)
json.map(user=>{
    let divUser=document.createElement("div");
    divUser.className="user";
    divUser.innerHTML=`
    <p><b>Titulo  </b>${user.title}</p><br>
    <b></b><img src="${user.url}"><br> 
    `;
    divRes.appendChild(divUser);
});
}
const Dele=async()=>{
    divRes.innerHTML="";
}