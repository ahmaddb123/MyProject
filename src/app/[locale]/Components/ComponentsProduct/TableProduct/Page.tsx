import React, { useState } from "react";
import "./TableProduct.css";
import { BsLayoutThreeColumns } from "react-icons/bs";
import { FaImage } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import ProductDetails from "../ProductDetails/page";

function TableProduct() {
  const [details, setDetails] = useState(false);

  return (
    <div className="TableProduct">
      <button className="btnDetails"  onClick={() => setDetails(prev => !prev)}>
        <BsLayoutThreeColumns />
      </button>
      {details ? (
        <ProductDetails />
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Code</th>
                <th>Price</th>
                <th>Orders</th>
                <th>Storage</th>
                <th>More</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <FaImage />
                </td>
                <td>Flower vase</td>
                <td>1524B</td>
                <td>$690.00</td>
                <td>300</td>
                <td>10</td>
                <td  onClick={() => setDetails(prev => !prev)}>
                  <IoIosArrowDropdown />
                </td>
              </tr>
              <tr>
                <td>
                  <FaImage />
                </td>
                <td>Flower vase</td>
                <td>1524B</td>
                <td>$690.00</td>
                <td>300</td>
                <td>10</td>
                <td  onClick={() => setDetails(prev => !prev)}>
                  <IoIosArrowDropdown />
                </td>
              </tr>
              <tr>
                <td>
                  <FaImage />
                </td>
                <td>Flower vase</td>
                <td>1524B</td>
                <td>$690.00</td>
                <td>300</td>
                <td>10</td>
                <td  onClick={() => setDetails(prev => !prev)}>
                  <IoIosArrowDropdown />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default TableProduct;
