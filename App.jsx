import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Product from './Product';
import './App.css';


function App() {
 //////javaScript here:
 const Products = [
{ title:'BYANDBY Kids Tablet 10 inch',
  img:'https://m.media-amazon.com/images/I/71FCkjIk46L._AC_UL400_.jpg',
  price:50000,
  discount:2.2
},
{ title:'Tablet 2023 Newest, Android 11 ',
  img:'https://m.media-amazon.com/images/I/71c9PHP1xzL._AC_UL400_.jpg',
  price:10500,
  discount:2.9
},
{ title:'kinstone 10 Inch Android 12 Gaming',
  img:'https://m.media-amazon.com/images/I/71Sp6M--UpL._AC_UL400_.jpg',
  price:4000,
  discount:3.9
},
{ title:'Acer Aspire TC-1760-UA92 Desktop |',
  img:'https://m.media-amazon.com/images/I/71gx1HNTj1L._AC_UL400_.jpg',
  price:22000,
  discount:3.9
},
{ title:'Lenovo Tab M8 (3rd Gen) 8" HD ',
  img:'https://m.media-amazon.com/images/I/61QdKIjvewL._AC_UL400_.jpg',
  price:9000,
  discount:3.9
},
{ title:'HP All-in-One PC, 23.8" FHD Micro',
  img:'https://m.media-amazon.com/images/I/71qb7Il-W4L._AC_UL400_.jpg',
  price:2000,
  discount:3.9
},
{ title:'ASUS Chromebook Flip C433 2 in 1 ',
  img:'https://m.media-amazon.com/images/I/81cpLDD+SPL._AC_UL400_.jpg',
  price:11000,
  discount:3.9
},
{ title:'Apple iPad Air 16GB WiFi Tablet',
  img:'https://m.media-amazon.com/images/I/71vFCvW6aKL._AC_UL400_.jpg',
  price:59000,
  discount:3.9
},
{ title:'MSI Pulse GL66 15.6" FHD 144Hz ',
  img:'https://m.media-amazon.com/images/I/71x-XH7oSNL._AC_UL400_.jpg',
  price:69900,
  discount:3.9
},
{ title:'RUIQIAI Kids Tablet 10 inch with',
  img:'https://m.media-amazon.com/images/I/71Ivlm+z5OL._AC_UL400_.jpg',
  price:2000,
  discount:3.9
},
{ title:'DUODUOGO Laptop Windows 10 ',
  img:'https://m.media-amazon.com/images/I/71qilUM7M4L._AC_UL400_.jpg',
  price:4500,
  discount:3.9
},
{ title:'Tablet Android 11.0 Tablet, 2 in 1 ',
  img:'https://m.media-amazon.com/images/I/61wePZaEMLL._AC_UL400_.jpg',
  price:5500,
  discount:3.9
},
 ]

  return (
   <div  className='display'>

          <h1 className='view'>SHOP VIEW</h1>

    {
      Products.map((value,index)=>{
       return(
        <div key={index}>
          
        <Product title={value.title} img={value.img} price={value.price} discount={value.discount}/>
      </div>
       )
      })
    }
   </div>
  )
}



export default App
