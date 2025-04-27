import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const Counter = ({ no, plus, minus, reset }) => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow" style={{ width: "400px" }}>
                <div className="card-body text-center">
                    <h1 className="card-title mb-4">Counter App</h1>
                    <h2 className="mb-4">{no}</h2>
                    <div>
                        <button className="btn btn-primary mx-2 py-2 px-3" onClick={minus}>
                            -</button>
                        <button className="btn btn-danger mx-2 py-2 px-3" onClick={reset}>
                            Reset</button>
                        <button className="btn btn-success mx-2 py-2 px-3" onClick={plus}>
                            +</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter;