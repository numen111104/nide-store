//import hook react
import React, { useState } from "react";

//import Head, usePage and Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import inertia adapter
import { Inertia } from "@inertiajs/inertia";


export default function Login() {
    //destruct props "errors"
    const { errors } = usePage().props;

    //state user
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //function "loginHandler"
    const loginHandler = async (e) => {
        e.preventDefault();

        //login
        Inertia.post("/login", {
            email: email,
            password: password,
        });
    };

    return (
        <>
            <Head>
                <title>Masuk Akun | Nide Store</title>
            </Head>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 mt-80">
                        <div className="text-center mb-4">
                            <img src="/assets/images/logo2.png" width={"100"} />
                            <h4>
                                <strong>NIDE</strong> STORE
                            </h4>
                        </div>
                        <div className="card border-0 rounded-3 shadow-sm border-top-success">
                            <div className="card-body">
                                <div className="text-center">
                                    <h6 className="fw-bold">
                                        MASUK KE AKUN ANDA
                                    </h6>
                                    <hr />
                                </div>
                                <form onSubmit={loginHandler}>
                                    <label className="mb-1">Email</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            placeholder="Isi Email!"
                                        />
                                    </div>
                                    {errors.email && (
                                        <div className="alert alert-danger custom-alert">
                                            {errors.email}
                                        </div>
                                    )}

                                    <label className="mb-1">Password</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">
                                            <i className="fa fa-lock"></i>
                                        </span>
                                        <input
                                            type="password"
                                            className="form-control"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            placeholder="Isi Password!"
                                        />
                                    </div>
                                    {errors.password && (
                                        <div className="alert alert-danger custom-alert">
                                            {errors.password}
                                        </div>
                                    )}

                                    <button
                                        className="btn btn-success shadow-sm rounded-sm px-4 w-100"
                                        type="submit"
                                    >
                                        LOGIN
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="register text-center mt-3">
                            Belum punya akun?{" "}
                            <Link href="/register">Daftar!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
