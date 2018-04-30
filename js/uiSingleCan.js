const uiSingleModule = (() => {
    const $container = $('.container-candidate');
    const $tableBody = $('.body')
 
   const createSingleCandidateCard = (candidate) => {
       const {avatar, name, email, birthday, education} = candidate;

       return(
        `<div class="row rowSingle">
        <div class="col s2">
        <img class="img-responsive" src="${avatar}" alt="">
        </div>
        <div class="col s5">
        <p>Name:</p>
        <p class="biggerText">${name}</p>
        <p>Email:</p>
        <p class="biggerText">${email}</p>
        </div>
        <div class="col s5">
        <p>Date of Birth:</p>
        <p class="biggerText">${candidate.getDob()}</p>
        <p>Education:</p>
        <p class="biggerText">${education}</p>
        </div>
        </div>`
       )
   } //function that creates single candidate card
   const createReportView = (report) => {
        const {companyName, interviewDate, status, candidateId} = report
            if(candidateId == localStorage.getItem('candidateId')){

                return(
                    `<tr>
                        <td>${companyName}</td>
                        <td>${report.getInterviewDate()}</td>
                        <td>${status}</td>
                    </tr>`
                )
            }
   } //function that creates report table

   const displayReportView = (reports) =>{
       reports.forEach((report) => {
           const reportView = createReportView(report)
           $tableBody.append(reportView)
       });
   } //function that displays report table

   const displaySingleCandidate = (candidate) => {
        const singleCandidateCard = createSingleCandidateCard(candidate)
        $container.append(singleCandidateCard)
   } //function that displays single candidate card

   const displayError = (error) => {
    $container.append(`<h3>${error}</h3>`)
  }// function that displays errors



   return {
       displaySingleCandidate,
       displayReportView,
       displayError
   }

})()