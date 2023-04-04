

export const totalMovie = (movie) => {

  const counter1= movie.length

  return counter1;
};

export const countCharacters = (films) => {
  
  let characterCount = 0;
  films.forEach((film) => {
    characterCount += film.people.length;
  });
  return characterCount;
  
};

export const countCharactersMovie = (films) => {
  
  const characterMovie = films.people.length;
  return characterMovie;
  
};

export const filterFilms = (films, selectedProducer, selectedDirector) => {
  if (selectedDirector === "All" && selectedProducer === "All") {
    return films;
  } else {
    return films.filter(film => {
      const producerMatch = selectedProducer === "All" || film.producer === selectedProducer;
      const directorMatch = selectedDirector === "All" || film.director === selectedDirector;
      return producerMatch && directorMatch;
    });
  }
}

export const sortAsc = (films) => {

  films.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });
 
  return films
}

export const sortDes = (films) => {

  films.sort((a, b) => {
    if (a.title > b.title) return -1;
    if (a.title < b.title) return 1;
    return 0;
  });
 
  return films
}


export const filterCharacter = (character, selectedSpecies,selectedAnimations, specie, animation) => {
  let count = 0;

  if ((selectedSpecies === "All" || specie === selectedSpecies) && (selectedAnimations === "All" || animation === selectedAnimations) ){
    character.style.display = "inline-block";
    count++;
  } else {
    character.style.display = "none";
  }


  return count;
}

export const filterOrden = (charactersArray, container, order) => {
  
  charactersArray.sort((a, b) => {
    const nameA = a.querySelector("h3:nth-child(2)").textContent.toLowerCase();
    const nameB = b.querySelector("h3:nth-child(2)").textContent.toLowerCase();
    /* return nameA.localeCompare(nameB) * order; */

    if (nameA < nameB) {
      return -order;
    }
    if (nameA > nameB) {
      return order;
    }
    return 0;
  });
  charactersArray.forEach(function (ch) {
    container.appendChild(ch);
  });
}