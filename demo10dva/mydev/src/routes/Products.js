import React, { useEffect } from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';
import { NavLink } from "dva/router";

const Products = ({ dispatch, products, todoList }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  const getTodos = async () => {
    dispatch({ type: 'todoList/getTodosSaga', payload: 1 })
  }
  return (
    <div>
      <div onClick={getTodos}>请求数据</div>
      <div>{todoList.todos}</div>
      <h2>List of Products</h2>
      <NavLink activeClassName="active" to={"/"}>
        products
      </NavLink>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

// export default Products;
export default connect(({ products, todoList }) => ({
  products,
  todoList
}))(Products);