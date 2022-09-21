'use strict'
async function githubusers(){

    let users=await fetch('http://www.omdbapi.com/?s=avengers&apikey=cc9a816');
    users=await users.json();
    users=users.Search;

    let section=document.getElementById("users");

    for (let user of users) {

        let{Poster,Title,Year}=user;

        section.innerHTML+=
        `
       <div class="user-card">
            <img src="${Poster}" alt="" />
            <div class="user-icons">
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </div>
            <h3>${Title}</h3>
            <p>${Year}</p>
        </div>
        `
    }

}
githubusers()