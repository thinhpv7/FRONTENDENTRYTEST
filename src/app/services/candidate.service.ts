import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from 'src/app/models/candidate';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  //candidatesUrl= 'https://sv-web-trac-nghiem.herokuapp.com/api/candidates';
  candidatesUrl= 'http://localhost:8080/api/candidates';
  //baseUrl = 'https://sv-web-trac-nghiem.herokuapp.com/api/false/candidates';
  baseUrl = 'http://localhost:8080/api/false/candidates';
  constructor(private http: HttpClient) { }
  getCandidates(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl);
  }
  getCandidateById(id: number): Observable<any>{
    return this.http.get(`${this.candidatesUrl}/${id}`);
  }
  createCandidate(candidate: Candidate): Observable<any>{
    return this.http.post(this.candidatesUrl, candidate).pipe(map((data: any) => data.result));
  }
  updateCandidate(candidate: Candidate): Observable<any>{
    return this.http.put(this.candidatesUrl, candidate).pipe(map((data: any) => data.result));
  }
  deleteCandidate(candidate: Candidate): Observable<any>{
    return this.http.put(this.candidatesUrl, candidate).pipe(map((data: any) => data.result));
  }
  
}
