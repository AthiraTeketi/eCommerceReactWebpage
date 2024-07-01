import './App.css'
function ProductsItems ({category,title,price,image}){
    // console.log(props)
    return(
        <div className="items">
        <img src={image}/>
        <h6>category : {category}</h6>
        <h5> ${price}</h5>
        <p>Description : {title}</p>
        </div>
    )
}

export default ProductsItems