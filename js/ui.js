const uiModule = (() => {
  const row = document.querySelector('.row');
  const $row = $('.row');

  createCandidateCard = (candidate) => {
    const { avatar, name, email, id } = candidate;
    let divFirst = document.createElement('div');
    divFirst.className = "col s4 card candidate-card hhhh";
    
    let divSecond = document.createElement('div');
    divSecond.className = "card-image";
    
    let img = document.createElement('img');
    img.setAttribute('src', avatar);
    img.className = "candidate-image";
    img.setAttribute('data-candidate-id', id);
    divSecond.appendChild(img);

    let span = document.createElement('span');
    let spanText = document.createTextNode(name);
    span.appendChild(spanText);
    divSecond.appendChild(span);

    let divThird = document.createElement('div');
    divThird.className = "card-content";

    let paragraph = document.createElement('p');
    let paragraphText = document.createTextNode(email);
    paragraph.appendChild(paragraphText);
    divThird.appendChild(paragraph);

    divFirst.appendChild(divSecond);
    divFirst.appendChild(divThird);

    return divFirst;

  } //function that creates cards for candidates
 
  const displayCandidate = (candidates) => {
    candidates.forEach(candidate => {
      const candidateCard = createCandidateCard(candidate);
      row.appendChild(candidateCard)
    });
  } // function that displays candidates



  const displayError = () => {
    let error = document.createElement('h3');
    error.className = "center-align #d32f2f red darken-2"
   error.textContent = "Error";
    row.appendChild(error);
    
  }// function that displays errors

  return {  
    displayCandidate,
    displayError
  }

})()