import React from "react";
import "./ProductDetails.css"
import { FiEdit } from "react-icons/fi";

function ProductDetails() {
  return (
    <div className="ProductDetails">
      <h1>Product Details</h1>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Product Data</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product Name</td>
              <td>dknekfe,soq,qwdw.</td>
            </tr>
            <tr>
              <td>Sku</td>
              <td>3482869,69289</td>
            </tr>
            <tr>
              <td>Number of customers who purchased the product</td>
              <td>3244</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Product Statistics</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Number of customers who purchased the product at once</td>
              <td>33</td>
            </tr>
            <tr>
              <td>Number of customers who purchased the product more than once</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Buyback ratio</td>
              <td>22%</td>
            </tr>
            <tr>
              <td>Product cost</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1>Number of customers who purchased the product</h1>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Number of pieces</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Riri Saris</td>
              <td>r*********@gmail.com</td>
              <td>09*********</td>
              <td>50</td>
              <td><FiEdit /></td>
            </tr>
            <tr>
              <td>Riri Saris</td>
              <td>r*********@gmail.com</td>
              <td>09*********</td>
              <td>50</td>
              <td><FiEdit /></td>
            </tr>
            <tr>
              <td>Riri Saris</td>
              <td>r*********@gmail.com</td>
              <td>09*********</td>
              <td>50</td>
              <td><FiEdit /></td>
            </tr>
            <tr>
              <td>Riri Saris</td>
              <td>r*********@gmail.com</td>
              <td>09*********</td>
              <td>50</td>
              <td><FiEdit /></td>
            </tr>
            <tr>
              <td>Riri Saris</td>
              <td>r*********@gmail.com</td>
              <td>09*********</td>
              <td>50</td>
              <td><FiEdit /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductDetails;
