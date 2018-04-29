const ctrlModule = ((module1, module2) => {
  
    const init = () => {
      
        const  baseUrl = module1.baseUrl
        
        fetchShows(baseUrl)
        registerCardsEvents();
      
       
        // search()
    }


    fetchShows = (url) => {
        let request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText);
                onSuccessHandler(data)
                searchCandidates(data)
               
            } else {
                onErrorHandler()

            }
        };

        request.onerror = function () {
            onErrorHandler()
        };

        request.send();

    }

    onSuccessHandler = (response) => {
            const adaptedCandidates = module1.adaptCandidates(response);
            module2.displayCandidate(adaptedCandidates)

        }
   

    onErrorHandler = () => {
        module2.displayError
    }
    searchCandidates = (response) => {
        const 
    }
  

    
    const registerCardsEvents = () => {
           $(document).on('click', '.candidate-card', function() {
                let candidateId = $(this).attr("data-candidate-id") 
                console.log($(this));
                localStorage.setItem("candidateId", candidateId)
                // location.assign('singlePage.html')
            })
        }

  

    return{
        init
    }
    })(dataModule, uiModule)