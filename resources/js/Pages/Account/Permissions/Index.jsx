import React from "react";
import LayoutAccount from '../../../Layouts/Account';
import { Head, usePage } from '@inertiajs/inertia-react';
import Search from '../../../Shared/Search';
import Pagination from '../../../Shared/Pagination';
export default function PermissionIndex() {

    const { permissions } = usePage().props;

    return(
        <>
            <Head>
                <title>Hak Akses | Nide Store</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-5">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-9 col-12 mb-2">
                                <Search URL={'/account/permissions'}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2 mb-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold"><i className="fa fa-key"></i> Hak Akses</span>
                            </div>
                            <div className="card-body">
                                
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped table-hovered text-center">
                                        <thead>
                                        <tr>
                                            <th scope="col" style={{ width: '5%' }}>No.</th>
                                            <th scope="col">Nama Hak Akses</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        
                                            {permissions.data.map((permission, index) => (
                                                <tr key={index}>
                                                    <td className="text-center">{++index + (permissions.current_page-1) * permissions.per_page}</td>
                                                    <td>{permission.name}</td>
                                                </tr>
                                            ))}
                                        
                                        </tbody>
                                    </table>
                                </div>

                                <Pagination links={permissions.links} align={'end'}/>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    )

}