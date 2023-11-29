import React, { useState } from "react";
import LayoutAccount from '../../../Layouts/Account';
import { Head, usePage } from '@inertiajs/inertia-react';
import { Inertia } from "@inertiajs/inertia";
import Swal from 'sweetalert2';

export default function ColorEdit() {
    const { errors, color } = usePage().props;
    const [name, setName] = useState(color.name);
    const [image, setImage] = useState(null);
    const updateColor = async (e) => {
        e.preventDefault();
        Inertia.post(`/account/colors/${color.id}`, {
            name: name,
            image: image,
            _method: "PUT"
        }, {
            onSuccess: () => {
                Swal.fire({
                    title: 'Sukses!',
                    text: 'Data berhasil diperbarui!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        });
    }
    return (
        <>
            <Head>
                <title>Edit Warna - Nide Store</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold"><i className="fa fa-palette"></i> Edit Warna</span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={updateColor}>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Warna</label>
                                        <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} />
                                    </div>
                                    {errors.image && (
                                        <div className="alert alert-danger custom-alert">
                                            {errors.image}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Nama Warna</label>
                                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan nama warna" />
                                    </div>
                                    {errors.name && (
                                        <div className="alert alert-danger custom-alert">
                                            {errors.name}
                                        </div>
                                    )}
                                    <div>
                                        <button type="submit" className="btn btn-md btn-success me-2"><i className="fa fa-save"></i> Perbarui</button>
                                        <button type="reset" className="btn btn-md btn-warning"><i className="fa fa-redo"></i> Reset</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    )

}