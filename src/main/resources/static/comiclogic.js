"use strict";
//Selectors
let enterButton = document.querySelector("#enter_comic")
let updateButton = document.querySelector("#update_comic");
let deleteButton = document.querySelector("#delete_comic");
let viewAllButton = document.querySelector("#view_all_comics");
let readmeButton = document.querySelector("#view_readme")
let infoButton = document.querySelector("#info_button")
let comicReadout = document.querySelector("#comic_readout_div")
let comicID = document.querySelector("#comic_id_input");
let comicName = document.querySelector("#comic_name_input");
let ingredients = document.querySelector("#ingredients_input");
let dietFriendly = document.querySelector("#diet_friendly_input");
let body = document.querySelector("body");

//Functions

//tried this with set and remove attributes, but wouldn't work. thank god for classList.
//everything you need to read has its own unchanging peachpuff background, for readability. 
// let makePeach = () => {
//     body.classList.add("peachy");
//     body.classList.remove("themey");

//     comicReadout.classList.remove("compensated");

// }

// let makeTheme = () => {
//     body.classList.add("themey");
//     body.classList.remove("peachy");

//     comicReadout.classList.add("compensated");
// }

let revealButtons = () => {
    //leverages truthy falseyness as "" is string false value
    //missed .value off of 3/4, took ages to find...
    //when diet friendly was free text, =="" worked, but when I improved it to be drop down true/false
    //had to add an extra option and select around that instead, because both true and false were not null.
     if (comicID.value && !comicName.value && !ingredients.value && dietFriendly.value=="N/A")   {
         //console.log("something or other"); //not working, not sure why. Not needed in any case
         deleteButton.classList.remove("hide");
         enterButton.classList.add("hide");
         updateButton.classList.add("hide");
     }   else if    (!comicID.value && comicName.value && ingredients.value && dietFriendly.value !=="N/A")    {
        deleteButton.classList.add("hide");
        enterButton.classList.remove("hide");
        updateButton.classList.add("hide");
    }   else if (comicID.value && comicName.value && ingredients.value && dietFriendly.value !=="N/A") {
        deleteButton.classList.add("hide");
        enterButton.classList.add("hide");
        updateButton.classList.remove("hide");
    }   else    {
        deleteButton.classList.add("hide");
        enterButton.classList.add("hide");
        updateButton.classList.add("hide");
    }
 }

// this code is what I use to get that funky info box.
//Put it in the comic_div as never the twain shall meet and I wanted to keep everything
//within a single screen
let viewInfo = () =>   {
    comicReadout.innerHTML="";

    const comic_div = document.createElement("div");
    const createInfoButton = document.createElement("button");
    const updateInfoButton = document.createElement("button");
    const deleteInfoButton = document.createElement("button");
    const button_div = document.createElement("div")

    comic_div.innerHTML=
        `Good {insert time of day here} and welcome to Rowan's Week 8 Comic Project.<br/>
        My humble application uses a pretty interesting way of working, so I've included a little bit of extra information, accessible in the tabs below. I recommend you start with green - comic creation.`;
    comic_div.classList.add("bordered");
    createInfoButton.classList.add("btn");
    updateInfoButton.classList.add("btn");
    deleteInfoButton.classList.add("btn");
    createInfoButton.classList.add("btn-success");
    updateInfoButton.classList.add("btn-primary");
    deleteInfoButton.classList.add("btn-danger");

    createInfoButton.addEventListener("click", createInfo);
    updateInfoButton.addEventListener("click", updateInfo);
    deleteInfoButton.addEventListener("click", deleteInfo);

    button_div.appendChild(createInfoButton);
    button_div.appendChild(updateInfoButton);
    button_div.appendChild(deleteInfoButton);
    comic_div.appendChild(button_div);
    comicReadout.appendChild(comic_div);

    }

let createInfo = () =>  {
    comicReadout.innerHTML="";

    const comic_div = document.createElement("div");
    const updateInfoButton = document.createElement("button");
    const deleteInfoButton = document.createElement("button");
    const button_div = document.createElement("div")

    comic_div.innerHTML=`To create a new comic, enter a comic name, some ingredients (freetext for both) and select whether it is diet friendly or not from the Diet Friendly? dropdown. N/A is used for other functions. The moment you've put the details in, the button will appear below the input fields. Go ahead, try it out! When you've added an entry or two, navigate back here and try the blue button.`;
    comic_div.classList.add("bordered");
    updateInfoButton.classList.add("btn");
    deleteInfoButton.classList.add("btn");
    updateInfoButton.classList.add("btn-primary");
    deleteInfoButton.classList.add("btn-danger");

    updateInfoButton.addEventListener("click", updateInfo);
    deleteInfoButton.addEventListener("click", deleteInfo);

    button_div.appendChild(updateInfoButton);
    button_div.appendChild(deleteInfoButton);
    comic_div.appendChild(button_div);
    comicReadout.appendChild(comic_div);
}

    let updateInfo = () =>  {
        comicReadout.innerHTML="";

        const comic_div = document.createElement("div");
        const createInfoButton = document.createElement("button");
        const deleteInfoButton = document.createElement("button");
        const button_div = document.createElement("div")
    
        comic_div.innerHTML=`To update an existing comic, enter a comic ID, a comic name, some ingredients, and reselect whether it is diet friendly or not from the Diet Friendly? dropdown. N/A is used for other functions. If you want to keep something the same, just reenter what was already in the comic. The moment you've put the details in, the button will appear below the input fields again, but with a twist! When you've modified an entry or two, navigate back here and try the red button. Please note, this uses a put method which we've been shown. Adding a patch method, which would result in more pleasing user functionality, is something we haven't learnt yet, and it would take a significant amount of additional coding, I fear.`;
        comic_div.classList.add("bordered");
        createInfoButton.classList.add("btn");
        deleteInfoButton.classList.add("btn");
        createInfoButton.classList.add("btn-success");
        deleteInfoButton.classList.add("btn-danger");
    
        createInfoButton.addEventListener("click", createInfo);
        deleteInfoButton.addEventListener("click", deleteInfo);
    
        button_div.appendChild(createInfoButton);
        button_div.appendChild(deleteInfoButton);
        comic_div.appendChild(button_div);
        comicReadout.appendChild(comic_div);
    }

    let deleteInfo = () =>  {
        comicReadout.innerHTML="";

        const comic_div = document.createElement("div");
        const createInfoButton = document.createElement("button");
        const updateInfoButton = document.createElement("button");
        const button_div = document.createElement("div")
    
        comic_div.innerHTML=`Deleting a comic is easier than creating or updating. You simply need to enter a comic ID and finally the moment of the N/A Diet Friendly option has come! The button appears again, but this time you can probably guess what it'll do.  now that you've seen all of the current functions of my application, why not view my (slightly) interactive html readme, or try swapping the background theme (if I got round to implementing that feature).`;
        comic_div.classList.add("bordered");
        createInfoButton.classList.add("btn");
        updateInfoButton.classList.add("btn");
        createInfoButton.classList.add("btn-success");
        updateInfoButton.classList.add("btn-primary");
    
        createInfoButton.addEventListener("click", createInfo);
        updateInfoButton.addEventListener("click", updateInfo);
    
        button_div.appendChild(createInfoButton);
        button_div.appendChild(updateInfoButton);
        comic_div.appendChild(button_div);
        comicReadout.appendChild(comic_div);
    }

// Primary view function. Called whenever so much as a mouse's ear twitches.
// Used innerhtml as suggested by Anoush. Other solutions did not work to separate text. Wouldn't read
//breaks, no matter how I formatted them.
let displayResult = (data) =>   {
    comicReadout.innerHTML="";
    for (let comic of data) {
        const comic_div = document.createElement("div");
        comic_div.innerHTML=`Comic ID: ${comic.id}<br/> Comic Name: ${comic.comicName}<br/> Ingredients Used: ${comic.ingredients}<br/> Diet Friendly? ${comic.dietFriendly}<br/>`;
        comic_div.classList.add("bordered");
        comicReadout.appendChild(comic_div);
    }
}

//API
let createComic = () =>  {
    displayResult;

    let comic = {
        "comicName":comicName.value,
        "ingredients":ingredients.value,
        "dietFriendly":dietFriendly.value
    }

    axios.post("http://localhost:8080/comics/create/", comic)
        .then((response) =>  {
            viewAllComic();
        })
        .catch((error) => {
            console.error(error);
        })
    }

let updateComic = () =>  {
    displayResult;

    let comic = {
        "comicName":comicName.value,
        "ingredients":ingredients.value,
        "dietFriendly":dietFriendly.value
    }

    axios.put(`http://localhost:8080/comics/update/${comicID.value}`, comic)
        .then((response) =>  {
            viewAllComic();
        })
        .catch((error) => {
            console.error(error);
        })
    }

    //called constantly to perform display result. Also clears inputs so you don't have to keep
    //clearing them manually.
let viewAllComic = () =>  {
    axios.get("http://localhost:8080/comics/getAll/")
        .then((response) => {
            displayResult(response.data);
            comicID.value = "";
            comicName.value = "";
            ingredients.value = "";
            dietFriendly.value = "";
        })
        .catch((error) => {
            console.error(error);
        })
    }

    //trying to get it to spit out what last went in, but I'll be leaving this for an after-project task.
let viewLastComic = () =>  {
    comicReadout.innerHTML="";
    axios.get(`http://localhost:8080/comics/getById/${comicID.value}`)
        .then((response) =>  {
            comicID = "";
            comicName = "";
            ingredients = "";
            dietFriendly = "";
            displayResult;
        })
        .catch((error) => {
            console.error(error);
        })
    }

let deleteComic = () =>  {
    axios.delete(`http://localhost:8080/comics/delete/${comicID.value}`)
        .then((response) =>  {
            viewAllComic();
        })
        .catch((error) => {
            console.error(error);
        })
    }

//Event Listeners
//used input rather than change for eventlistener, as it's more responsive in multiple ways.
enterButton.addEventListener("click", createComic);
updateButton.addEventListener("click", updateComic);
deleteButton.addEventListener("click", deleteComic);
viewAllButton.addEventListener("click", viewAllComic);
infoButton.addEventListener("click", viewInfo);
comicID.addEventListener("input", revealButtons);
comicName.addEventListener("input", revealButtons);
ingredients.addEventListener("input", revealButtons);
dietFriendly.addEventListener("input", revealButtons);