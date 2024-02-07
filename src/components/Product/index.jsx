const Product = ({product, amount, done}) => {
  const doneClass = done ? 'item__done--tick' : '';
  return (
    <div className='item'>
      <div>{product}</div>
      <div>{amount}</div>
      <div className={doneClass}></div>
    </div>)
}

export default Product;