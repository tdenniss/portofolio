import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitHubService } from '../github.service';
import { GithubUser } from '../githubuser';

@Component({
  selector: 'app-contactinfo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contactinfo.component.html',
  styleUrl: './contactinfo.component.scss'
})
export class ContactinfoComponent implements OnInit {
  githubProfile?: GithubUser;
  isLoading = true;
  error?: string;

  constructor(private githubService: GitHubService) {}

  ngOnInit() {
    this.githubService.getUserProfile().subscribe({
      next: (profile) => {
        this.githubProfile = profile;
        this.isLoading = false;
      },
      error: (error: Error) => {
        this.error = 'Failed to load GitHub profile';
        this.isLoading = false;
      }
    });
  }
}