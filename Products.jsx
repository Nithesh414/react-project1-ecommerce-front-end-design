function Products(props) {
  console.log(props);
  console.log(props.data);
console.log(props.data[0].title)
  return (
    <div className="product-container">
      {props.data.map((product) => ( 
        
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.image} />
          <h3 className="product-title">Title: {product.title}</h3>
          <p className="product-price">Price: ₹{product.price}</p>
          <p className="product-price">Rating: {product.rating.rate}</p>
          <p>Description: {product.description}</p>
          <button className="add-btn">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
