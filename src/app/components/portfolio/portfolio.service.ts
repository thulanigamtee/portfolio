import { inject, Injectable } from '@angular/core';
import { Client, Databases, Storage } from 'appwrite';
import { environment } from '../../../environments/environment.development';
import { Project } from './project.model';
import { BehaviorSubject, Observable, from, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ToastService } from '../../services/toast.service';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private client: Client;
  private database: Databases;
  private storage: Storage;

  private projects = new BehaviorSubject<Project[]>([]);
  public projects$ = this.projects.asObservable();

  private toastService = inject(ToastService);

  constructor() {
    this.client = new Client()
      .setEndpoint(environment.appwrite.endpoint)
      .setProject(environment.appwrite.projectId);

    this.database = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  getProjects(): Observable<Project[]> {
    return from(
      this.database.listDocuments(
        environment.appwrite.databaseId,
        environment.appwrite.collectionId
      )
    ).pipe(
      map((response) => {
        const projects: Project[] = response.documents.map((doc: any) => ({
          image: this.getFilePreview(doc.image),
          name: doc.name,
          description: doc.description,
          technologies: doc.technologies,
          site: doc.site,
          repository: doc.repository,
        }));
        this.projects.next(projects);
        return projects;
      }),
      catchError(() => {
        this.toastService.showToast('Error fetching projects');
        this.projects.next([]);
        return of([]);
      })
    );
  }

  getFilePreview(fileId: string) {
    return this.storage.getFileView(environment.appwrite.buckedId, fileId);
  }
}
