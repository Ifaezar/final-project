import React from "react";
import Slider from "react-slick";
import "./home.css"
import "slick-carousel/slick/slick.css"
import Logo from "../../../assets/images/logo.png"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus, faTrain, faPlane, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"

class HomeScreen extends React.Component {
    render() {
        const settings = {
            dots: true,
            autoplay: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1
        }
        return (
            <div>
                <div>
                    <Slider {...settings}>
                        <div
                            className="text-center m-5">
                            <text>
                                Selamat Datang,
                                <br />
                                <span> <Link>Log In</Link> &nbsp;or&nbsp; <Link>Register</Link> </span>
                            </text>
                        </div>
                        <div>
                            <Link>
                                <img src="https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2019/05/30/3029692117.png"
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div>
                            <Link>
                                <img src="https://i.gadgets360cdn.com/large/How_to_book_train_tickets_1509965813536.jpg?downsize=400:*&output-quality=80"
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div>
                            <Link>
                                <img src="https://www.embarksoftware.com/common/img/online_bus_ticket_booking.gif"
                                    alt=""
                                />
                            </Link>
                        </div>

                    </Slider>
                </div>
                <div className="container mt-5">
                    <div className="row mt-3">
                        <div className="col-6">
                            <h2>Hei, Kamu</h2>
                            <h1>
                                <strong> Mau Ke Mana ?</strong>
                            </h1>
                        </div>
                        <div className="col-2">
                            <Link to="#">
                                <div className="property-card">
                                    <FontAwesomeIcon icon={faPlane} style={{ height: "60px", width: "100px" }}>
                                    </FontAwesomeIcon>
                                </div>
                            </Link>
                        </div>
                        <div className="col-2">
                            <Link to="#">
                                <div className="property-card">
                                    <FontAwesomeIcon icon={faTrain} style={{ height: "60px", width: "100px" }}>
                                    </FontAwesomeIcon>
                                </div>
                            </Link>
                        </div>
                        <div className="col-2">
                            <Link to="#">
                                <div className="property-card">
                                    <FontAwesomeIcon icon={faBus} style={{ height: "60px", width: "100px" }}>
                                    </FontAwesomeIcon>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container2 row mt-5">
                    <div className="col-2">
                        <Link to="#">
                            <img src="https://s3.amazonaws.com/ionic-marketplace/login-register-profile-firebase/icon.png"
                                alt=""
                                style={{ width: "100%", height: "200px" }}
                            />
                        </Link>
                    </div>
                    <div className="col-4">
                        <h1><strong>Simple Profile</strong></h1>
                        <br />
                        <h2>Pesan lebih cepat, isi data penumpang dengan sekali klik</h2>
                    </div>
                    <div className="col-2">
                        <Link to="#">
                            <img src="https://media.istockphoto.com/vectors/flight-tickets-online-booking-icon-vector-id1058121922"
                                alt=""
                                style={{ width: "100%", height: "200px" }} />
                        </Link>
                    </div>
                    <div className="col-4">
                        <h1><strong>Simple Booking Process</strong></h1>
                        <br />
                        <h2>Pemesanan tanpa ribet di mana pun dan kapan pun</h2>
                    </div>
                </div>
                <div className="container3 mt-5">
                    <div className="row">
                        <div className="col-6 text-center mt-5">
                            <p>
                                <img src={Logo} alt="" />
                            </p>
                            <p>
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    style={{ height: "60px", width: "100px", color: "white" }}
                                    className="mt-5">
                                </FontAwesomeIcon>
                            </p>
                            <p
                                style={{ color: "white" }}>
                                faezarilham@gmail.com
                            </p>
                            <p>
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    style={{ height: "60px", width: "100px", color: "white" }}
                                    className="mt-5">
                                </FontAwesomeIcon>
                            </p>
                            <p>
                                <Link to="https://github.com/Ifaezar"
                                    style={{ color: "white" }}>
                                    https://github.com/Ifaezar
                                    </Link>
                            </p>
                        </div>

                        <div className="col-6 text-center mt-5">
                            <h1 style={{ color: "white" }}>Produk</h1>
                            <p className="mt-5">
                                <Link
                                    
                                    style={{ color: "white", textDecoration: "none", fontSize: "16pt" }}
                                    to="#"
                                >
                                    Pesawat
                            </Link>
                            </p>
                            <p className="mt-5">
                                <Link
                                    style={{ color: "white", textDecoration: "none", fontSize: "16pt" }}
                                    to="#"
                                >
                                    Kereta Api
                            </Link>
                            </p>
                            <p className="mt-5">
                                <Link
                                    style={{ color: "white", textDecoration: "none", fontSize: "16pt" }}
                                    to="#"
                                >
                                    Bus
                            </Link>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default HomeScreen