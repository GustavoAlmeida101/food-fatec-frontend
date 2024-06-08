import { Component,ViewChild  } from '@angular/core';
import { Product } from '../model/product';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  success: boolean = false;
  errors!: String[];
  displayedColumns: string[] = ['idProduct', ' nameProduct','descriptionProduct', 'skuProduct','eanProduct','costPriceProduct',' publishedProduct',
  ' dateCreateProduct','amountProduct','idCategory' ,'deleteCustomer', 'findCustomer'];
  ELEMENT_DATA: Product[] = [];
  message: string = '';
  dataSource = new MatTableDataSource<Product>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: ProductService
  ) { }

  ngOnInit(): void {
    this.listProduct();
  }

  product: Product = {
    idProduct: '',
    nameProduct:'',
    descriptionProduct: '',
    skuProduct:'',
    eanProduct:'',
    costPriceProduct:'',
    publishedProduct:false,
    dateCreateProduct:'',
    amountProduct:'',
    idCategory:'',
}

saveProduct() {
  this.service.save(this.product).subscribe((response: any) => {
    this.success = true;
    this.errors = [];
    this.product = response.result as Product;
    this.listProduct();
    
  });

}
listProduct() {
  this.service.list().subscribe((response: any) => {
    this.ELEMENT_DATA = response.result as Product[];
    this.dataSource = new MatTableDataSource<Product>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  });
}
deleteProduct(product: Product) {
  if (window.confirm('Deseja realmente excluir este Produto?')) {
    this.service.delete(product.idProduct).subscribe((response: any) => {
      this.message = response.result.result as string;
      window.alert(this.message);
      this.listProduct();
    });
  }
}

findProduct(product: Product) {
  this.service.findById(product.idProduct).subscribe((response: any) => {
    this.product = response.result as Product;
    

  });
}
}
