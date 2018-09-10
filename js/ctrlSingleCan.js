const ctrlSingleModule = ((module1, module2) => {
    const modal = document.querySelector('.containerModal')
    const baseUrl = module1.baseUrl
    const singlePageInit = () => {
       fetchCandidate(`${baseUrl}/candidates/${localStorage.getItem('candidateId')}`)
       registerDetailsEvents()
       console.log(modal);
    }// function that is called in html file


    fetchCandidate = (url) => {
            $.get(url)
                .done(onSuccessHandlerSingleCandidate)
                .fail(onErrorHandler)
        } //http request jquery library

    fetchReports = (url) => {
        $.get(url)
        .done(onSuccessHandlerReports)
        .fail(onErrorHandler)
        console.log("test2");
    }//http request jquery library

    fetchReport = (url) => {
        $.get(url)
        .done(onSuccessHandlerSingleReport)
        .fail(onErrorHandler)
    }//http request for single report jquery library

    onSuccessHandlerSingleCandidate = (response) => {
        console.log(response);
        const adaptedSingleCandidate = module1.adaptSingleCandidate(response); 
        module2.displaySingleCandidate(adaptedSingleCandidate);
        fetchReports(`${baseUrl}/reports`)
    }//function that is called on successful http request

    onSuccessHandlerReports = (response) => {
        console.log(response);
        const adaptedReports = module1.adaptReports(response)
        module2.displayReportView(adaptedReports)
       
       
    }//functions that is called on successfull http request for reports

    onSuccessHandlerSingleReport = (response) => {
        const adaptedReport = module1.adaptReport(response)
        module2.displayReportDetail(adaptedReport)
        
        modal.className = "show";
        
    }// function that is called on succesful http request that is triggered on click on detail button

   
    const registerDetailsEvents = () => {
        const baseUrl = module1.baseUrl
        document.addEventListener('click', function(event){
            if(event.target.className === "waves-effect waves-light btn modal-trigger"){
                event.stopPropagation();
                let reportTarget = event.target;
                let reportId = reportTarget.getAttribute('data-report-id');
                console.log(reportId);
                fetchReport(`${baseUrl}/reports/${reportId}`);  

            } 
    }) 
        document.addEventListener('click', function(event){
            if(event.target.className === "close");
            event.stopPropagation();
            modal.className = "hide";
            modal.innerHTML ="";
        } 
    )} //function that register click events on detail button and on close button

    onErrorHandler = (error) => {
        module2.displayError(error)
    }// function for failed http request


 return {
     singlePageInit
 }


})(dataModule, uiSingleModule)