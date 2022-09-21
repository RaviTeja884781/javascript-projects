async function superheros(){

    let heros=await fetch('superhero.json');
    heros=await heros.json();
    let Heros =document.getElementById("Heros");
    
    for (const hero of heros) {

        Heros.innerHTML+=`
            <div class="usercard-1">
                <div class="usercard__superhero_heading">
                    <h2>Name:${hero.name}</h2>
                </div>
                <div class="usercard__superhero">
                    <div class="usercard__superhero-1">
                        <img id="images"
                        src="${hero.images.md}"
                        height="250px"
                        width="210px"
                        alt="super hero image"
                        />
                    </div>
                    <div class="usercard__superhero-2">
                        <h2>biography:</h2>
                        <ul type="square">
                            <li>fullName :${hero.biography.fullName}</li>
                            <li >alterEgos :${hero.biography.alterEgos}</li>
                            <li>aliases:${hero.biography.aliases.shift()}</li>
                            <li>placeOfBirth:${hero.biography.placeOfBirth}</li>
                            <li>firstAppearance:${hero.biography.firstAppearance}</li>
                            <li>publisher:${hero.biography.publisher}</li>
                            <li>alignment:${hero.biography.alignment}</li>
                        </ul>
                    </div>
                </div>
                <div class="usercard__apperarance">
                    <div class="usercard__apperarance-1">
                        <h2>appearance:</h2>
                        <ul type="square">
                            <li>gender:${hero.appearance.gender}</li>
                            <li>race:${hero.appearance.race}</li>
                            <li>height:${hero.appearance.height.slice(0,2)}</li>
                            <li>weight:${hero.appearance.weight.slice(0,2)}</li>
                            <li>eyeColor:${hero.appearance.eyeColor}</li>
                            <li>hairColor:${hero.appearance.hairColor}</li>
                        </ul>
                    </div>
                    <div class="usercard__apperarance-2">
                        <h2>powerstats:</h2>
                        <ul type="square">
                            <li>intelligence:${hero.powerstats.intelligence}</li>
                            <li>strength:${hero.powerstats.strength}</li>
                            <li>speed:${hero.powerstats.speed}</li>
                            <li>durability:${hero.powerstats.durability}</li>
                            <li>power:${hero.powerstats.power}</li>
                            <li>combat:${hero.powerstats.combat}</li>
                        </ul>
                    </div>
                </div>
        </div>

        `  
    }
}
superheros();