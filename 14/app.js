const apiRick=async (pagina)=>{
    let url="https://rickandmortyapi.com/api/character/?page=2"+pagina;
    const api= await fetch(url);
    const data=await api.json();
    console.log(data);
    divRes=document.querySelector("#res");
    divRes.innerHTML=""
    data.results.map(item=>{
        divItem=document.createElement("div");
        divItem.innerHTML=`
<div class="card" style="width: 18rem;">
<img src="${item.image}" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${item.name}</h5>
<p class="card-text"><b>ESTATUS</b>  ${item.status}</p>
<p class="card-text"><b>ESPECIE</b>  ${item.species}</p>
<p class="card-text"><b>GENERO</b>   ${item.gender}</p>
<p class="card-text"><b>LOCACION</b>  ${item.location.name}</p>
<p class="card-text"><b>ORIGEN</b>   ${item.origin.name}</p>
</div>
</div>
    `;
divRes.appendChild(divItem);
    })

}

apiRick(1);