import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Paginator } from "primereact/paginator";
const ProductList = () => {
  const [product, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3004/products");
        if (!res.ok) {
          throw new Error("network response is not ok");
        }
        const data = await res.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchProducts();
  }, []);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const onPageChange = (e) => {
    setFirst(e.first);
    setRows(e.rows);
  };
  const paginatedProducts = product.slice(first, first + rows);
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Products</h2>
      <div className="row mb-3">
        <div className="col">
          <Link
            className="btn btn-success me-1"
            to="/admin/products/create"
            role="button"
          >
            create Product
          </Link>
          <button type="button" className="btn btn-outline-danger">
            refresh
          </button>
        </div>
      </div>
      <div className="table-responsive">
        <table
          id="locationsList"
          className="table table-info table-hover table-striped text-center"
        >
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Description</th>
              <th>Price</th>
              <th>Image</th>
              <th>Created At</th>
              {/*<th>Action</th>*/}
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((items, index) => {
                return (
                  <tr key={items.id}>
                    <td>{first + index + 1}</td>
                    <td>{items.name}</td>
                    <td>{items.brand}</td>
                    <td>{items.description}</td>
                    <td>{items.price}</td>
                    <td>{items.imageFilename}</td>
                    <td>{items.createdAt}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No Products Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {product.length > 0 && (
          <Paginator
            first={first}
            rows={rows}
            totalRecords={product.length}
            onPageChange={onPageChange}
            className="custom-paginator"
          />
        )}
      </div>
    </div>
  );
};
export default ProductList;
