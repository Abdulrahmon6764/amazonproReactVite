import './App.css'





function Product(props){

    return(
      <div className='allbod'>
       <div>
        <img src= {props.img} />
        <h3>Title: {props.title}</h3> 
        <h4 className='hhhtags'>Price:#<mark>{props.price}</mark></h4>
        <h5 className='hhtags'>discount: <em>{props.discount}</em></h5>
       
       </div>
       <div style={{textAlign:'center',}} className='hovery'>
       <a style={{textDecoration:'none',border:'2px solid black',padding:'15px',paddingTop:'10px',textAlign:'center'}} href="#">Shop Now</a>
       </div>
       
      </div>
    )
  }







export default Product