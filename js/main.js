
// define a data source of pokemon objects
const pokemonList = [
  {
    name: "Herbie Hancock",
    place: "Jimmy Lyons Stage",
    image: "Herbie-Hancock.jpg",
    date: "Friday, September 22",
    time: "8:45 pm - 10:00 pm",
    genre: "Techno"
  },
  {
    name: "Catherine Russell",
    place: "Garden Stage Presented By Alaska Airlines",
    image: "Catherine-Russell.jpg",
    date: "Sunday, September 24",
    time: "4:30 pm - 5:30 pm",
    genre: "Disco"
  },
  {
    name: "Cisco Swank",
    place: "West End Stage Presented by Castoro Cellars",
    image: "Connie-Han.jpg",
    date: "Sunday, September 24",
    time: "12:35 pm - 1:30 pm",
    genre: "Techno"    
  },
  {
    name: "Donny McCaslin",
    place: "West End Stage Presented by Castoro Cellars",
    image: "Donny-McCaslin.jpg",
    date: "Saturday, September 23",
    time: "7:00 pm - 8:00 pm",
    genre: "Dubstep"
  },
  {
    name: "Dianne Reeves",
    place: "Jimmy Lyons Stage",
    image: "Dianne-Reeves.jpg",
    date: "Saturday, September 23",
    time: "6:45 pm - 7:45 pm",
    genre: "Electro"
  },
  {
    name: "Jamie Cullum",
    place: "Jimmy Lyons Stage",
    image: "Jamie-Cullum.jpg",
    date: "Sunday, September 24",
    time: "6:45 pm - 7:45 pm",
    genre: "Techno"
  },
  {
    name: "Katie Thiroux",
    place: "Pacific Jazz Café",
    image: "Katie-Thiroux.jpg",
    date: "Friday, September 22",
    time: "6:00 pm - 7:00 pm",
    genre: "Electro"
  },
  {
    name: "Louis Cato",
    place: "Jimmy Lyons Stage",
    image: "Louis-Cato.jpg",
    date: "Saturday, September 23",
    time: "12:30 pm - 1:20 pm",
    genre: "Electro"
  },
  {
    name: "Samara Joy",
    place: "Jimmy Lyons Stage",
    image: "Samara-Joy.jpg",
    date: "Sunday, September 24",
    time: "3:10 pm - 4:00 pm",
    genre: "Techno"
  },
  {
    name: "Thundercat",
    place: "Jimmy Lyons Stage",
    image: "Thundercat.jpg",
    date: "Sunday, September 24",
    time: "8:15 pm - 9:15 pm",
    genre: "Electro"
  },
  {
    name: "Claudia Villela",
    place: "West End Stage Presented by Castoro Cellars",
    image: "Claudia-Villela.jpg",
    date: "Sunday, September 24",
    time: "6:30 pm - 7:30 pm",
    genre: "Electro"
  },
  {
    name: "Zach Westfall",
    place: "Courtyard Stage",
    image: "Zach-Westfall.jpg",
    date: "Friday, September 22",
    time: "8:30 pm - 9:00 pm",
    genre: "Techno"
  }
]
const pageLoaded = () => {
  console.log("Page is done loading.")
  for (currPokemon of pokemonList) {
    // generate the HTML for a single pokemon box
    const output = `
  <div class="box">
        <div class="artistsgrid">
            <img src="./assests/artist/${currPokemon.image}" alt="Zach-Westfall">
            <div class="artistdetails">${currPokemon.name}</div>
        </div>
        <div class="additonal_information">
          <p>@ ${currPokemon.place}</p>
          <p>${currPokemon.genre}</p>
          <p>${currPokemon.date} | ${currPokemon.time}</p>
          <button><a href="./purchasepage.html">Buy Tickets</a></button>
        </div>
        
    </div>
  `
    // append that html to the section element
    document.querySelector("section").innerHTML
      += output
  }


}
document.addEventListener("DOMContentLoaded", pageLoaded);