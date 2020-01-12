// import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';

// @Injectable({
//   providedIn: 'root'
// })
// export class DatabaseConnectorService {

//   constructor(private db: AngularFirestore) { }

//   classToObject(object) {
//     return Object.assign({}, object);
//   }

//   // Get Functions

//   getAccount(product_id: string) : Promise<Item> {
//     return new Promise((resolve) => {
//       this.db.collection('products').doc(product_id).get().subscribe((value) => {
//         resolve(Item.objectToItem(value.data()));
//       })
//     })
//   }

  // getProducts() : Promise<Array<Item>> {
  //   return new Promise((resolve) => {
  //     this.db.collection('products').get().subscribe((snapshots) => {
  //       const productList = [];
  //       snapshots.docs.forEach((doc) => {
  //         productList.push(Item.objectToItem(doc.data()));
  //       })
  //       resolve(productList);
  //     })
  //   })
  // }

  // deleteProduct(product_id: string) {
  //   return new Promise((resolve) => {
  //     this.db.collection('products').doc(product_id).delete().then((value) => {
  //       resolve(value)
  //     })
  //   })
  // }
// }
