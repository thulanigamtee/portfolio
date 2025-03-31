import { Injectable } from '@angular/core';
import { Client, Databases, Storage } from 'appwrite';
import { environment } from '../../../environments/environment.development';
import { project } from './project.model';
import { Observable, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private client: Client;
  private database: Databases;
  private storage: Storage;

  constructor() {
    this.client = new Client()
      .setEndpoint(environment.appwrite.endpoint)
      .setProject(environment.appwrite.projectId);

    this.database = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  getProjects(): Observable<project[]> {
    return from(
      this.database.listDocuments(
        environment.appwrite.databaseId,
        environment.appwrite.collectionId
      )
    ).pipe(
      map((response) =>
        response.documents.map((doc: any) => ({
          image: this.getFilePreview(doc.image),
          name: doc.name,
          description: doc.description,
          technologies: doc.technologies,
          site: doc.site,
          repository: doc.repository,
        }))
      ),
      catchError((error) => {
        console.error('Error fetching projects:', error);
        return [];
      })
    );
  }

  getFilePreview(fileId: string) {
    return this.storage.getFileView(environment.appwrite.buckedId, fileId);
  }
}
