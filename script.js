let url="https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v)=>{
    return v.json()
}).then((contests)  =>{
    console.log(contests)

    ihtml="";
    for(item in contests){
        let maxLimit = 100;
        let rand = Math. random() * maxLimit;
        rand = Math. floor(rand); // 99.
        console.log(contests[item])
        ihtml += ` 
        <div class="card mx-2 my-3" style="width: 22rem;">
        <img src="https://source.unsplash.com/random/?coding/100+${rand}*100+${rand}" class="card-img-top" alt="Images" height="200px" width="200px">
        <div class="card-body">
            <h5 class="card-title">${contests[item].name}</h5>
            <p class="card-text"> Status is ${contests[item].status}</p>
            <p class="card-text"> Platform is ${contests[item].site}</p>
            <p class="card-text"> Is 24 hours ? ${contests[item].in_24_hours}</p>
            <p> Starts at: ${contests[item].start_time}</p>
            <p> Ends at: ${contests[item].end_time}</p>
            <a href="${contests[item].url}" class="btn btn-primary">Visit here</a>
        </div>
        </div> 
        `
    }
    CardContainer.innerHTML = ihtml
})



        // <img src="https://source.unsplash.com/collection/${190272+item}/1600x900" class="card-img-top" alt="Images">
        // <img src="https://www.freecodecamp.org/news/content/images/2022/12/main-image.png" class="card-img-top" alt="Images">


        
