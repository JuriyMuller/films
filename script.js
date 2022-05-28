function Cards(){
    let wrapper = document.querySelector(".cards")
    let rest = fetch("./list/db.json").then((res)=>{
        return res.json();
    }).then((data)=>{
        data.forEach(item => {
            let li = document.createElement("li");
            li.classList.toggle("cards-item");

            let img = document.createElement("img");
            img.src=item.artwork;
            img.classList.toggle("card-artwork");

            let title = document.createElement("h2");
            let link = document.createElement("a");
            link.classList.toggle("cards-link");
            link.href=item.link
            link.innerHTML=item.title;
            title.classList.toggle("cards-title");

            let year = document.createElement("span");
            year.classList.toggle("year")
            year.innerText=item.year;

            let genreTitile=document.createElement("span");
            genreTitile.innerText="Genre:"
            genreTitile.classList.toggle("genre");

            let genre = document.createElement("span");
            genre.innerText=item.genre;
            genre.classList.toggle("cards-genre");

            let starringTitile=document.createElement("span");
            starringTitile.classList.toggle("starring");
            starringTitile.innerText="Starring:"

            let starring = document.createElement("span");
            starring.classList.toggle("cards-starring");
            starring.innerText=item.starring;


            






            wrapper.appendChild(li);
            li.appendChild(img);
            li.appendChild(title);
            title.appendChild(link)
            li.appendChild(year);
            li.appendChild(genreTitile);
            li.appendChild(genre);
            li.appendChild(document.createElement("br"));
            li.appendChild(document.createElement("hr"))
            li.appendChild(starringTitile);
            li.appendChild(starring);
            li.appendChild(document.createElement("br"));
            li.appendChild(document.createElement("hr"))

        });
    })
}
Cards();