import React from "react";
import LayoutAccount from '../../../Layouts/Account';
import { Head, usePage, Link } from '@inertiajs/inertia-react';
import hasAnyPermission from '../../../Utils/Permissions';
import Search from '../../../Shared/Search';
import Delete from '../../../Shared/Delete';
import Pagination from '../../../Shared/Pagination';

export default function ProductIndex() {
    const { products } = usePage().props;

    return(
        <>
            <Head>
                <title>Produk - Nide Store</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-5">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-3 col-12 mb-2">
                                <Link href="/account/products/create" className="btn btn-md btn-success border-0 shadow w-100" type="button">
                                    <i className="fa fa-plus-circle me-2"></i>
                                    Tambah
                                </Link>
                            </div>
                            <div className="col-md-9 col-12 mb-2">

                                <Search URL={'/account/products'}/>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2 mb-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold"><i className="fa fa-shopping-bag"></i> Produk</span>
                            </div>
                            <div className="card-body text-center">                               
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped table-hovered">
                                        <thead>
                                        <tr>
                                            <th scope="col" style={{ width: '5%' }}>No.</th>
                                            <th scope="col" style={{ width: '20%' }}>Judul Produk</th>
                                            <th scope="col" style={{ width: '20%' }}>Kategori</th>
                                            <th scope="col" style={{ width: '15%' }}>Aksi</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {products.data.map((product, index) => (
                                                <tr key={index}>
                                                    <td className="text-center">{++index + (products.current_page-1) * products.per_page}</td>
                                                    <td>{product.title}</td>
                                                    <td>{product.category.name}</td>
                                                    <td className="text-center">
                                                        {hasAnyPermission(['products.show']) &&
                                                            <Link href={`/account/products/${product.id}`} className="btn btn-dark btn-sm me-2"><i className="fa fa-plus-circle"></i></Link>
                                                        }
                                                        {hasAnyPermission(['products.edit']) &&
                                                            <Link href={`/account/products/${product.id}/edit`} className="btn btn-primary btn-sm me-2"><i className="fa fa-pencil-alt"></i></Link>
                                                        }
                                                        {hasAnyPermission(['products.delete']) &&
                                                        <Delete URL={'/account/products'} id={product.id} />
                                                        }
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <Pagination links={products.links} align={'end'}/>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    )

}