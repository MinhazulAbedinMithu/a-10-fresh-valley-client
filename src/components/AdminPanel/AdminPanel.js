import React from "react";
import AddProduct from "../AddProduct/AddProduct";
import ManageProduct from "../ManageProduct/ManageProduct";

const AdminPanel = () => {
    
    return (
        <div className='container'>
            {/* <div className="row">
                <div className="col-md-3">
                    <h2>FRESH VALLEY</h2>
                    <br/>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link active" href="/manageProduct">Manage Product</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/addProduct">Add Product</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/editProduct">Edit Product</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-9">
                    <AddProduct/>
                </div>
            </div> */}

            <div class="d-flex align-items-start row">
                <div class="nav flex-column nav-pills col-md-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button class="nav-link active" id="v-pills-manageProduct-tab" data-bs-toggle="pill" data-bs-target="#v-pills-manageProduct" type="button" role="tab" aria-controls="v-pills-manageProduct" aria-selected="true">Manage Product</button>
                    <button class="nav-link" id="v-pills-addProduct-tab" data-bs-toggle="pill" data-bs-target="#v-pills-addProduct" type="button" role="tab" aria-controls="v-pills-addProduct" aria-selected="false">Add Product</button>
                    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
                </div>
                <div class="tab-content col-md-8" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-manageProduct" role="tabpanel" aria-labelledby="v-pills-manageProduct-tab"> <ManageProduct/> </div>
                    <div class="tab-pane fade" id="v-pills-addProduct" role="tabpanel" aria-labelledby="v-pills-addProduct-tab"> <AddProduct/> </div>
                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;