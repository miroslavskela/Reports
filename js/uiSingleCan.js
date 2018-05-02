const uiSingleModule = (() => {
    const $container = $('.container-candidate');
    const $tableBody = $('.body')
    const $body = $('body')

    const createSingleCandidateCard = (candidate) => {
        const { avatar, name, email, birthday, education } = candidate;

        return (
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
        const { companyName, interviewDate, status, candidateId, id } = report
        if (candidateId == localStorage.getItem('candidateId')) {

            return (
                `<tr>
                        <td>${companyName}</td>
                        <td>${report.getInterviewDate()}</td>
                        <td>${status}</td>
                        <td class="details"><button class="waves-effect waves-light btn modal-trigger"  data-report-id="${id}">details</button></td>
                    </tr>`
            )
        }
    } //function that creates report table

    const createReportDetails = (report) => {
        const { companyName, interviewDate, status, phase, note, candidateId, candidateName } = report
       
        return (
           `
            <div id="modal1" class="modal">
                <div class="modal-content">
                    <h4>${candidateName}</h4>
                    <div class="col-3">
                    <p>Company:</p>
                    <p class="report-data">${companyName}</p>
                    <p>Interview Date:</p>
                    <p class="report-data">${report.getInterviewDate()}</p>
                    <p>Phase:</p>
                    <p class="report-data">${phase}</p>
                    <p>Status:</p>
                    <p class="report-data">${status}</p>
                    </div>
                    <div class="col-9">
                    <p>Notes:</p>
                    <p class="report-data">${note}</p>
                    <img src="https://openclipart.org/image/2400px/svg_to_png/245681/closebtn.png" alt="close button" class="close">
                    </div>
                    </div>
                    </div>
                </div>
            </div>`
        )
    }
    const displayReportView = (reports) => {
        reports.forEach((report) => {
            const reportView = createReportView(report)
            $tableBody.append(reportView)
        });
    } //function that displays report table

    const displaySingleCandidate = (candidate) => {
        const singleCandidateCard = createSingleCandidateCard(candidate)
        $container.append(singleCandidateCard)
    } //function that displays single candidate card

    const displayReportDetail = (report) => {
        const reportDetail = createReportDetails(report)
        $container.append(reportDetail)
    }

    const displayError = (error) => {
        $container.append(`<h3>${error}</h3>`)
    }// function that displays errors



    return {
        displaySingleCandidate,
        displayReportView,
        displayReportDetail,
        displayError
    }

})()