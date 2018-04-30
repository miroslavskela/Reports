const ctrlSingleModule = ((module1, module2) => {

    const singlePageInit = () => {
        const baseUrl = module1.baseUrl
       fetchCandidate(`${baseUrl}/candidates/${localStorage.getItem('candidateId')}`)
       fetchReports(`${baseUrl}/reports`)
    }// function that is called in html file


    fetchCandidate = (url) => {
            $.get(url)
                .done(onSuccessHandlerSingle)
                .fail(onErrorHandler)
        } //http request jquery library

    fetchReports = (url) => {
        $.get(url)
        .done(onSuccessHandlerReports)
        .fail(onErrorHandler)
    }//http request jquery library

    onSuccessHandlerSingle = (response) => {
        const adaptedSingleCandidate = module1.adaptSingleCandidate(response);
        module2.displaySingleCandidate(adaptedSingleCandidate)
    }//function that is called on successful http request

    onSuccessHandlerReports = (response) => {
        const adaptedReports = module1.adaptReports(response)
        module2.displayReportView(adaptedReports)
    }//functions that is called on successfull http request for reports
    onErrorHandler = (error) => {
        module2.displayError(error)
    }// function for failed http request


 return {
     singlePageInit
 }


})(dataModule, uiSingleModule)