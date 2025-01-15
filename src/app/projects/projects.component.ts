import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../github.service';
import { Repository } from '../repository';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProjectsComponent implements OnInit {
  repositories: Repository[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private githubService: GitHubService) {}

  ngOnInit(): void {
    this.githubService.getRepositories().subscribe({
      next: (repos) => {
        this.repositories = repos;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load projects';
        this.isLoading = false;
      }
    });
  }
}