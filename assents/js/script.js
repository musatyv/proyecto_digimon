var url = "https://digimon-api.vercel.app/api/digimon"

fetch(url)
    .then(Response => Response.json())
    .then(digimons => {
        let contenido = document.getElementById("contenido")
        digimons.forEach(digimon => {
            console.log(digimon)
            const p = document.createElement("p")
            p.append(digimon.name)
            contenido.innerHTML += `
            <div class="tarjeta">

            <div class="card" style="width: 18rem;">
            <img src="${digimon.img}" class="card-img-top zoom" alt="...">
            <div class="card-body">
              <h5 class="card-title">${digimon.name}</h5>
              <p class="card-text">${digimon.level}.</p>
            </div>
          </div>

          </div>
                    `
            // div.appendChild(p)


        });


    })

