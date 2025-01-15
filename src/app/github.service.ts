import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubUser } from './githubuser';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  private readonly apiUrl = 'https://api.github.com/users/tdenniss';

  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<GithubUser> {
    return this.http.get<GithubUser>(this.apiUrl);
  }

  getRepositories(): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.apiUrl}/repos`);
  }

  getUserStats(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/stats`);
  }
}