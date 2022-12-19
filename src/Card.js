import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons"

function Card({ data }) {
    return (
        <div class="col-lg-4 d-flex justify-content-center">
            <div class="card mb-5 mb-lg-0 ">
                <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">{data.plan}</h5>
                    <h6 class="card-price text-center">{data.price}<span class="period ">/month</span></h6>
                    <hr />
                    <ul class="fa-ul">
                        {
                            data.cont.map((item) => {
                                return (
                                    <li

                                        className={`mt-10 ${item.bold ? '' : "font-weight-bold"} ${item.enable ? "" : 'text-muted'} `} >
                                        <FontAwesomeIcon
                                            icon={item.enable ? faCheck : faXmark} />
                                        {item.title}</li>
                                )
                            })
                        }
                    </ul>
                    <div class="d-grid rounded-9">
                        <a href="#" class="btn btn-primary text-uppercase ">Button</a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Card