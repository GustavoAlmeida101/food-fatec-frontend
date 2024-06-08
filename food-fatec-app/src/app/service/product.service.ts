import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api_config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = API_CONFIG.urlApi;
  constructor(private http: HttpClient) { }

  save(product: Product): Observable<Product[]>{
    return this.http.post<Product[]>(this.url+'/products/create',product);
  }

  list():Observable<Product[]>{
    return this.http.get<Product[]>(this.url+'/products/list')
 }

 delete(idProduct: any): Observable<Product> {
  return this.http.delete<Product>(`${this.url}/products/delete/${idProduct}`);
  }

findById(idProduct:any): Observable<Product>{
  return this.http.get<any>(`${this.url}/products/findCustomer/${idProduct}`);
 }

 update(product: Product): Observable<Product[]> {
  return this.http.put<Product[]>(this.url+'/products/update/${product.idProduct}', product);
   }
}
