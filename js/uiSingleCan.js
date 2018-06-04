const uiSingleModule = (() => {
    const container = document.querySelector('.containerModal');
    const containerCandidate = document.querySelector('.container-candidate');
    const tableBody = document.querySelector('.body');
   
    const $body = $('body')

    const createSingleCandidateCard = (candidate) => {
        const { avatar, name, email, birthday, education } = candidate;
        const firstParaArray = [];
        const secondParaArray = [];
        const divArray = [];
        let divFirst = document.createElement('div');
        divFirst.className = "row rowSingle";;

        let divSecond = document.createElement('div');
        divSecond.className = "col s2";
        divArray.push(divSecond);

        let img = document.createElement('img');
        img.setAttribute('src', avatar);
        divSecond.appendChild(img);

        divThird = document.createElement('div');
        divThird.className = "col s5";
        divArray.push(divThird);

        let para1 = document.createElement('p');
        para1.textContent = "Name:";
        firstParaArray.push(para1);

        let para2 = document.createElement('p');
        para2.className = "biggerText"
        para2.textContent = name;
        firstParaArray.push(para2)

        let para3 = document.createElement('p');
        para3.textContent = 'Email:';
        firstParaArray.push(para3)

        let para4 = document.createElement('p');
        para4.className = "biggerText"
        para4.textContent = email;
        firstParaArray.push(para4); 

       firstParaArray.forEach(function(element){
            divThird.appendChild(element);
       })

        divFour = document.createElement('div');
        divFour.className = "col s5";
        divArray.push(divFour);

        let para5 = document.createElement('p');
        para5.textContent = "Birthday:";
        secondParaArray.push(para5);

        let para6 = document.createElement('p');
        para6.className = "biggerText";
        para6.textContent = candidate.getDob();
        secondParaArray.push(para6);

        let para7 = document.createElement('p');
        para7.textContent = 'Education:';
        secondParaArray.push(para7);
        
        let para8 = document.createElement('p');
        para8.className = "biggerText"
        para8.textContent = education;
        secondParaArray.push(para8); 

       secondParaArray.forEach(function(element){
           divFour.appendChild(element);
       })

        divArray.forEach(function(element){
            divFirst.appendChild(element)
        })
        




        return divFirst
        
    } //function that creates single candidate card
    const createReportView = (report) => {
        const { companyName, interviewDate, status, candidateId, id } = report
      
        
        let tr = document.createElement('tr');
        
        let td1 = document.createElement('td');
        td1.textContent = companyName;
        
        let td2 = document.createElement('td');
        td2.textContent = report.getInterviewDate();
        
        let td3 = document.createElement('td');
        td3.textContent = status;
        
        let td4 =  document.createElement('td');
        td4.className = "details"
        
        let btn = document.createElement('button');
        btn.textContent = "Details"
        btn.className = "waves-effect waves-light btn modal-trigger";
        btn.setAttribute('data-report-id', id);
        td4.appendChild(btn)
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        return tr;
        
            
       
    } //function that creates report table

    const createReportDetails = (report) => {
        const { companyName, interviewDate, status, phase, note, candidateId, candidateName } = report
        const paraArray = []; 
        
        let divFirst = document.createElement('div');
        divFirst.id = "modal1";
        divFirst.className = "modal";

        let divSecond = document.createElement('div');
        divSecond.className = "modal-content" 

        let h4 = document.createElement('h4');
        h4.textContent = candidateName;
        divSecond.appendChild(h4);

        let divThird = document.createElement('div');
        divThird.className = "col-3";
        
        let para1 = document.createElement('p');
        para1.textContent = "Company:";
        paraArray.push(para1);

        let para2 = document.createElement('p');
        para2.className = "report-data";
        para2.textContent = companyName;
        paraArray.push(para2);

        let para3 = document.createElement('p');
        para3.textContent = "Interview Date:";
        paraArray.push(para3);

        let para4 = document.createElement('p');
        para4.className = "report-data";
        para4.textContent = report.getInterviewDate();
        paraArray.push(para4);

        let para5 = document.createElement('p');
        para5.textContent = "Phase:";
        paraArray.push(para5);

        let para6 = document.createElement('p');
        para6.className = "report-data";
        para6.textContent = phase;
        paraArray.push(para6);

        
        let para7 = document.createElement('p');
        para7.textContent = "Status:";
        paraArray.push(para7);

        let para8 = document.createElement('p');
        para8.className = "report-data";
        para8.textContent = status;
        paraArray.push(para8);

        paraArray.forEach(function(element){
            divThird.appendChild(element);
        })

        let divFour = document.createElement('div');
        divFour.className = "col-9";

        let para9 = document.createElement('p');
        para9.textContent = "Notes:"

        let para10 = document.createElement('p');
        para10.className = "report-data";
        para10.textContent = note;

        let img = document.createElement('img');
        img.className= "close";
        img.setAttribute('src',"https://openclipart.org/image/2400px/svg_to_png/245681/closebtn.png");

        divFour.appendChild(para9);
        divFour.appendChild(para10);
        divFour.appendChild(img);

        divFirst.appendChild(divSecond);
        divFirst.appendChild(divThird);
        divFirst.appendChild(divFour);

        return divFirst
        
    }
    const displayReportView = (reports) => {
        reports.forEach((report) => {
            if (report.candidateId == localStorage.getItem('candidateId')) {
            const reportView = createReportView(report)
            tableBody.appendChild(reportView)
            }
        });
    } //function that displays report table

    const displaySingleCandidate = (candidate) => {
        const singleCandidateCard = createSingleCandidateCard(candidate)
        containerCandidate.appendChild(singleCandidateCard)
    } //function that displays single candidate card

    const displayReportDetail = (report) => {
        const reportDetail = createReportDetails(report)
        container.appendChild(reportDetail)
    }

    const displayError = () => {
        let error = document.createElement('h3');
        error.className = "center-align #d32f2f red darken-2"
        error.textContent = "Error";
        containerCandidate.appendChild(error);
        
      }// function that displays errors



    return {
        displaySingleCandidate,
        displayReportView,
        displayReportDetail,
        displayError
    }

})()