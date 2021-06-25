function btn(element) {
    element.innerHTML += " &nbsp <div class='spinner-border text-primary spinner-border-sm'></div>"
}

let urlText = "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/";


fetch("https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=%2Fchart%2Fpopular%2Fgenre%2Fadventure", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "c0ff498a71msh91c0e35e4528a0ap129a00jsn1c004d8f359d",
        "x-rapidapi-host": "imdb8.p.rapidapi.com"
    }
})
    .then(response => {
        imdbapi2(response.json())
    })
    .catch(err => {
        console.error(err);
    });


let div = document.querySelector("#app").childNodes[1].childNodes[3];

function imdbapi(obj) {
    obj.then(function (result) {
        if (result.title !== "") {


            console.log(result);


            div.innerHTML += "<div class='col-md-12 black-color border-radius-25 my-3 text-center text-light pointer' style='height:20 rem'>" +
                "<div class='row'>" +
                "<div class='col-md-3'>" +
                "<img src=" + result.poster + " alt='' style='width='50px'; height='200px'' class='border-radius-25'>"
                + "</div>" +
                "<div class='col-md-9'>" +
                "<h1 class='display4'>" + result.title + "</h1>" +
                "<p>" + result.plot + "</p>" +
                "<p class='ml-2'>length : " + result.length + " &nbsp / release year : " + result.year + "</p>"

                + "</div>"
                + "</div>"
                + "</div>";

        }
    });
}

let movieList = [];
let text = document.querySelector(".text");
function imdbapi2(obj) {
    obj.then(function (result) {
        movieList = result;
        for (let i = 0; i < movieList.length; i++) {
            movieList[i] = movieList[i].slice(7, movieList[i].length - 1);
        }

        let finalUrl;
        for (let i = 0; i < movieList.length; i++) {
            finalUrl = "";

            finalUrl = urlText + movieList[i];

            fetch(finalUrl, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "fe10da4884mshaa0b2bb893bb833p111c2fjsn6691409a5613",
                    "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
                }
            })
                .then(response => {
                    imdbapi(response.json());
                })
                .catch(err => {
                    console.error(err);
                });

        }


    });
}
