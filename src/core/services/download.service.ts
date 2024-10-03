import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  constructor(private http: HttpClient) {}

  // Método para obtener el archivo como Blob
  downloadFile(url: string): Observable<Blob> {
    return this.http.get(url, { responseType: 'blob' });
  }

  // Método para gestionar la descarga del archivo
  downloadPortfolio(): void {
    const url = '../../../assets/documents/TechLab.pdf';

    // Llamamos a la función para obtener el archivo y crear un enlace de descarga
    this.downloadFile(url).subscribe((response: Blob) => {
      const objectUrl = URL.createObjectURL(response);
      const a = document.createElement('a');
      a.href = objectUrl;
      a.download = 'TechLab.pdf';
      a.click();
      URL.revokeObjectURL(objectUrl); // Limpiamos el object URL
    });
  }
}
