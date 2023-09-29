//  main variables

let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getButton.onclick = function () {
    getRepos();
};


//  get repos function
function getRepos() {

    if (theInput.value == "") { // if value is empty
        reposData.innerHTML = "<span>Please Write Github Username.</span>";

        // console.log("Value Cant Be Empty");
    } else {
        // console.log(theInput.value);

        fetch(`https://api.github.com/users/${theInput.value}/repos`)

            .then((response) => response.json())

            .then((repositories) => {
                // empty the container
                reposData.innerHTML = "";

                //  loop on repositories
                repositories.forEach(repo => {
                    // console.log(repo.name);
                    // create the main div element
                    let mainDiv = document.createElement("div");

                    // create repo name text
                    let repoName = Document.createTextNode(repo.name);

                    // append the text to main div
                    mainDiv.appendChild(repoName);


                    //  create repo URL anchor
                    let theUrl = document.createElement("a");

                    // create repo Url text
                    let theUrlText = document.createTextNode("Visit");

                    // append the repo url text to anchor tag
                    theUrl.appendChild(theUrlText);

                    // add the hypertext reference "href"
                    theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;


                    // set attribute blank
                    theUrl.setAttribute('target', '_blank');


                    // append url anchor to main div
                    mainDiv.appendChild(theUrl);




                    //  create starts count span
                    let starsSpan = document.createTextNode(`Stars ${repo.stargazers_count}`);

                    // add stars count text to stars span
                    starsSpan.appendChild(starsText);

                    // append stars count span to main div
                    mainDiv.appendChild(starsSpan);

                    // add class on main div
                    mainDiv.className = "repo-box";



                    // append the main div to container
                    reposData.appendChild(mainDiv);

                });


                // console.log(repositories);
            });

    }

}
