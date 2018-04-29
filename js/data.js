const dataModule = (() => {
const baseUrl = `http://localhost:3333/api/candidates`;

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
  adaptCompanies,
  adaptReports, 
}




})()