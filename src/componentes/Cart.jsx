import React from 'react'

const Cart = () => {
  return (
    <>
                <div className="container-fluid mt-5">

          <div className="row">

            <div className="col-md-9 col-lg-9">

              <div className="card">
                <div className="card-header bg-info">
                  <h5 className="mb-0 text-white">Your Cart (4 items)</h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table product-overview">
                      <thead>
      
                        <tr>
                          <th>Image</th>
                          <th>Product info</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th >Total</th>
                          <th >Action</th>
                        </tr>

                      </thead>
                      <tbody>
   
                        <tr>
                          <td width="150">
                            <img
                              src="../../assets/images/gallery/chair.jpg"
                              alt="iMac"
                              width="80"
                            />
                          </td>
                          <td width="550">
                            <h5 className="font-500">Rounded Chair</h5>
                            <p>
                              Lorem Ipsum available, but the majority have suffered alteration in
                              some form, by injected humour, or randomised words which don't look
                            </p>
                          </td>
                          <td>$153</td>
                          <td width="70">
                            <input type="number" className="form-control" placeholder="1" />
                          </td>
                          <td width="150" align="center" className="font-500">$153</td>
                          <td align="center">
                            <a
                              href="#"
                              className="text-inverse"
                              ></a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <img
                              src="../../assets/images/gallery/chair2.jpg"
                              alt="iMac"
                              width="80"
                            />
                          </td>
                          <td>
                            <h5 className="font-500">Rounded Chair</h5>
                            <p>
                              Lorem Ipsum available, but the majority have suffered alteration in
                              some form, by injected humour, or randomised words which don't look
                            </p>
                          </td>
                          <td>$153</td>
                          <td>
                            <input type="text" className="form-control" placeholder="1" />
                          </td>
                          <td className="font-500" align="center">$153</td>
                          <td align="center">
                            <a
                              href="#"
                              className="text-inverse"

                              ></a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <img
                              src="../../assets/images/gallery/chair3.jpg"
                              alt="iMac"
                              width="80">
                            </img>
                          </td>
                          <td>
                            <h5 className="font-500">Rounded Chair</h5>
                            <p>
                              Lorem Ipsum available, but the majority have suffered alteration in
                              some form, by injected humour, or randomised words which don't look
                            </p>
                          </td>
                          <td>$153</td>
                          <td>
                            <input type="text" className="form-control" placeholder="1" />
                          </td>
                          <td className="font-500" align="center">$153</td>
                          <td align="center">
                            <a
                              href="j#"
                              className="text-inverse"
                            ></a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <img
                              src="../../assets/images/gallery/chair4.jpg"
                              alt="iMac"
                              width="80"
                            ></img>
                          </td>
                          <td>
                            <h5 className="font-500">Rounded Chair</h5>
                            <p>
                              Lorem Ipsum available, but the majority have suffered alteration in
                              some form, by injected humour, or randomised words which don't look
                            </p>
                          </td>
                          <td>$153</td>
                          <td>
                            <input type="text" className="form-control" placeholder="1" />
                          </td>
                          <td className="font-500" align="center">$153</td>
                          <td align="center">
                            <a>

                            </a>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                    <hr />
                    <div className="d-flex no-block align-items-center">
                      <button className="btn btn-dark btn-outline">
                        <i data-feather="arrow-left" className="fill-white feather-sm"></i>
                        Continue shopping
                      </button>
                      <div className="ms-auto">
                        <button className="btn btn-danger">
                          <i data-feather="shopping-cart" className="fill-white feather-sm"></i>
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="col-md-3 col-lg-3">
 
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">CART SUMMARY</h5>
                  <hr />
                  <small>Total Price</small>
                  <h2>$612</h2>
                  <hr />
                  <button className="btn btn-success">Checkout</button>
                  <button className="btn btn-secondary btn-outline">Cancel</button>
                </div>
              </div>
             
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">For Any Support</h5>
                  <hr />
                  <h4 className="d-flex align-items-center">
                    <i className="ri-cellphone-line"></i> 9998979695 (Toll Free)
                  </h4>

                </div>
              </div>
             
            </div>
          </div>
   
        </div>
    </>
  )
}

export default Cart
