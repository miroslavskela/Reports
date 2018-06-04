const ctrlModule = ((module1, module2) => {

    let candidateArray = null; //array of candidates used for filtering
    const searchValue = document.querySelector('.search') //search input
    const row = document.querySelector('.row') //row element

    const init = () => {
        const baseUrl = module1.baseUrl
        fetchCandidates(baseUrl + "candidates")
        registerCardsEvents();
       
        // search()
    }// function that is called in html file


    fetchCandidates = (url) => {
        let request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText);
                onSuccessHandler(data)
                candidateArray = data;
            } else {
                onErrorHandler()
            }
        };
        request.onerror = function () {
            onErrorHandler()
        };
        request.send();
    } // http request


    onSuccessHandler = (response) => {
        row.innerHTML = "";
        const adaptedCandidates = module1.adaptCandidates(response);// function from data module that return adapted candidates
        module2.displayCandidate(adaptedCandidates) //function from ui module that creates card for each candidate
    } //function that is called on successful http request



    onErrorHandler = () => {
        module2.displayError();
    } // function for failed http request

    searchCandidates = (array) => {
        if (searchValue.value) {
            row.innerHTML = ""; //clear row
            const filterCandidates = array.filter((element) => {
                return (element.name.toLowerCase()).includes(searchValue.value.toLowerCase());
            })
            const adaptedFilteredCandidates = module1.adaptCandidates(filterCandidates)// this is where candidates that includes search value are adapted
             return adaptedFilteredCandidates

        } else if (!searchValue.value) {
            onSuccessHandler(candidateArray);
        } // if search input is empty again is called onSuccseshandlerFunction that returns all candidates

    } //function that filter candidates and return adapted candidates which includes search.value, parametar array is array of non-adapted candidates
    
    searchValue.addEventListener('keyup', function (event) {
        console.log(event); //it display error for some keys like backspace or escape bicause it is keyup event but nothing is writen in search input
        const filterCandidatesArray = searchCandidates(candidateArray);
        module2.displayCandidate(filterCandidatesArray) // function from uimodule that creates cards for filtered candidates
   
    }) //adding eventlistener on search element that is trigerred on keyup



    const registerCardsEvents = () => {
        document.addEventListener('click', function(event){
            if(event.target.className === "candidate-image"){
                event.stopPropagation();
                let eTarget = event.target;
                let candidateId = eTarget.getAttribute('data-candidate-id');
                localStorage.setItem("candidateId", candidateId)
                location.assign('singlePage.html')
            }
        })
    }


    return {
        init
    }
})(dataModule, uiModule)