import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, catchError, of } from 'rxjs';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProductById(id: number): Observable<Product> {
    return this.httpClient
      .get<Product>(`${environment.apiUrl}/api/products/${id}`)
      .pipe(catchError(this.handleError<Product>(`getProductById id=${id}`)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
