const uiModule = (() => {
  const $row = $('.row')

  createCandidateCard = (candidate) => {
    const { avatar, name, email, id } = candidate;

    return (

      `
      <div class=" col s4 card candidate-card" data-candidate-id=${id}>
      <div class="card-image">
        <img src="${avatar}">
        <span class="card-title black-text">${name}</span>
      </div>
      <div class="card-content">
        <p>${email}</p>
      </div>
     
    </div>
  `
    )

  } //function that creates cards for candidates
  createFilterCandidateCard = (candidate) => {
    const { avatar, name, email, id } = candidate;

    return (

      `
      <div class=" col s4 card candidate-card" data-candidate-id=${id}>
      <div class="card-image">
        <img src="${avatar}">
        <span class="card-title black-text">${name}</span>
      </div>
      <div class="card-content">
        <p>${email}</p>
      </div>
     
    </div>
  `
    )
  } //function that creates cards for filtered candidates


  const displayCandidate = (candidates) => {
    candidates.forEach(candidate => {
      const candidateCard = createCandidateCard(candidate);
      $row.append(candidateCard)
    });
  } // function that displays candidates
  const displayFilteredCandidates = (candidates) => {
    candidates.forEach(candidate => {
      const candidateCard = createCandidateCard(candidate);
      $row.append(candidateCard)
    });
  }// function that displays filtered candidates

  const displayError = () => {
    row.innerHTML(`<h3>Error</h3>`)
  }// function that displays errors

  return {
    
    displayCandidate,
    displayFilteredCandidates,
    displayError
  }

})()