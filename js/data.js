const dataModule = (() => {
const baseUrl = `http://localhost:3333/api/`;

class Report{
    constructor(report){
        this.id = report.id;
        this.candidateId = report.candidateId;
        this.candidateName = report.candidateName;
        this.companyId = report.companiId;
        this.companyName = report.companyName;
        this.interviewDate = report.interviewDate;
        this.phase = report.phase;
        this.status = report.status;
        this.note = report.note
    }
    getInterviewDate(){
        const date = new Date(this.interviewDate)
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const interviewDate = `${day}.${month}.${year}.`
        return interviewDate;
    }
} //Report constructor

class Candidate{
    constructor(candidate){
        this.id = candidate.id;
        this.name = candidate.name;
        this.birthday = candidate.birthday;
        this.email = candidate.email;
        this.education = candidate.education;
        this.avatar = candidate.avatar || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png";

    }
    getDob(){
        const date = new Date(this.birthday)
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const dob = `${day}.${month}.${year}.`
        return dob;
    }
} // candidate constructor

class Company{
    constructor(company){
        this.id = company.id;
        this.name = company.name;
        this.email = company.email;
    }
} // company constructor

const adaptCandidates = (candidates) => {
  const candidateArray = candidates.map((candidate) => {
        return new Candidate(candidate)
    })
    return candidateArray
} //function that makes candidates from http response

const adaptSingleCandidate = (candidate) => {
    return new Candidate(candidate)
} //function that returns single candidate

const adaptCompanies = (companies) => {
    const companyArray = companies.map((company) => {
        return new Company(company)
    })
    return companyArray
} // function that makes companies from http response

const adaptReports = (reports => {
    const reportsArray = reports.map((report) => {
        return new Report(report)
    })
    return reportsArray
}) //function that makes reports from http response



return {
  baseUrl,
  adaptCandidates,
  adaptSingleCandidate,
  adaptCompanies,
  adaptReports, 
}




})()