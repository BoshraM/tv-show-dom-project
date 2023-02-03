//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {

  const rootElem = document.getElementById("root");

  let episodeLengthContainer=document.getElementById("episodeLengthContainer")
  episodeLengthContainer.textContent = `Got ${episodeList.length} episode(s)`;
  
  rootElem.innerText=""
  rootElem.style.display="grid";
  rootElem.style.gridTemplateColumns = "repeat(auto-fit ,minmax(300px,1fr))";
  rootElem.style.columnGap= "30px"
  rootElem.style.rowGap= "70px"
  rootElem.style.backgroundColor="#ffffff"

   episodeList.forEach(episode => {
    const episodeCard=document.createElement("div"); 

      episodeCard.innerHTML=`
        <h3 id="card-title">${episode.name}-S0${episode.season}E0${episode.number}</h3>
        <img id="card-image" src="${episode.image.medium}"/>
          ${episode.summary}
        <p id="card-link">follow <a href="${episode.url}" target="blanket">tvmaze.com</a></p>
        `;

      if(episode.number > 9){
       episodeCard.innerHTML=`
        <h3 id="card-title">${episode.name}-S0${episode.season}E${episode.number}</h3>
        <img id="card-image" src="${episode.image.medium}"/>
        ${episode.summary}
        <p id="card-link">follow <a href="${episode.url}" target="blanket">tvmaze.com</a></p>
        `;}
   
    episodeCard.style.display="flex";
    episodeCard.style.flexDirection="column";
    episodeCard.style.textAlign="center";
    episodeCard.style.backgroundColor="#bfc0c0";
  // episodeCard.style.border="3px solid #1b4965";
    episodeCard.style.boxShadow="3px 5px 5px 3px#acacb1";
   
    rootElem.appendChild(episodeCard); 
});

} 

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", (event) => {
  console.log(event);
  const searchString = event.target.value.toLowerCase();
  console.log(searchString)

  const filteredEpisodes = getAllEpisodes().filter((episode) => {
    return (
      episode.summary.toLowerCase().includes(searchString) ||
      episode.name.toLowerCase().includes(searchString)
    );
  });
   console.log(filteredEpisodes)
  makePageForEpisodes(filteredEpisodes);

});

let selectInput=document.getElementById("select-input")

  getAllEpisodes().forEach(episode =>{
  const episodeOption =document.createElement("option")
  episodeOption.innerText= `${episode.name}-S0${episode.season}E0${episode.number}`
  selectInput.appendChild(episodeOption)
  
}
  );

  selectInput.addEventListener("input", (event) => {
    const selectString = event.target.value;
    console.log(selectString)
    const filteredEpisodes = getAllEpisodes().filter((episode) => {
      return (
        `${episode.name}-S0${episode.season}E0${episode.number}`===selectString
      );
    });

    makePageForEpisodes(filteredEpisodes);
  });

window.onload = setup;






