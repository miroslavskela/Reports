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

  }


  const displayCandidate = (candidates) => {
    candidates.forEach(candidate => {
      const candidateCard = createCandidateCard(candidate);
      $row.append(candidateCard)
    });
  }

  const displayError = () => {
    row.innerHTML(`<h3>Error</h3>`)
  }

  return {
    displayCandidate,
    displayError
  }

})()