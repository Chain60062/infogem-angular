import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, catchError, of } from 'rxjs';
import { Product } from '../../shared/models/product.model';
import { PaginatedList } from '../../shared/models/paginatedlist.model';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getProducts(pageIndex: number, pageSize: number): Observable<PaginatedList<Product>> {
    console.log("getproducts called")    
    const options = {
      params: new HttpParams()
        .set('pageIndex', pageIndex)
        .set('pageSize', pageSize),
    };
    return this.httpClient
      .get<PaginatedList<Product>>(`${environment.apiUrl}/api/products`, options)
      .pipe(catchError(this.handleError<PaginatedList<Product>>('getProducts')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
