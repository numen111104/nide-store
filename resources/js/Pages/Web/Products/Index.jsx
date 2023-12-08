import React from "react";
import LayoutWeb from "../../../Layouts/Web";
import { Head, usePage } from "@inertiajs/inertia-react";
import CardProduct from "../../../Shared/CardProduct";
import Pagination from "../../../Shared/Pagination";

export default function ProductIndex() {
    //destruct props "products"
    const { products } = usePage().props;

    return (
        <>
            <Head>
                <title>Produk - Nide Store - Tempat Belanja Online</title>
            </Head>
            <LayoutWeb>
                <div className="container mt-80 mb-5">
                    <div className="fade-in">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="row justify-content-center">
                                    <div className="col-md-12">
                                        <div className="alert alert-warning border-0 shadow-sm rounded-3">
                                            <strong>Semua Produk</strong>
                                        </div>
                                    </div>

                                    {products.data.map((product, index) => (
                                        <CardProduct
                                            product={product}
                                            key={index}
                                        />
                                    ))}

                                    <div className="col-md-12 mt-4 mb-5">
                                        <Pagination
                                            links={products.links}
                                            align={"center"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutWeb>
        </>
    );
}
