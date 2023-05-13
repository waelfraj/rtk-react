import { useGetProductsQuery, useAddNewPoductMutation } from "../hooks/api.ts";
import IProducts from "./products.interface.ts";

const Products = () => {
  const [addProduct] = useAddNewPoductMutation();

  const { data: products, isLoading } = useGetProductsQuery(null);

  const handleAdd = () => {
    addProduct({ id: 5, title: "Product 5", price: 100 });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ul>
        {products.map((product: IProducts) => (
          <li key={product.id}>
            <h1>{product.title}</h1>
          </li>
        ))}
      </ul>
      <button onClick={handleAdd}>Add New Product</button>
    </>
  );
};
export default Products;
