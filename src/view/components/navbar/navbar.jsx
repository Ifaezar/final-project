import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../../../assets/images/logo.png"
import { Link } from "react-router-dom";
import {
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
} from "reactstrap";
import ButtonUI from "../Button/Button.tsx"

class Navbar extends React.Component {
    state = {
        dropdownOpen: false,
    };

    toggleDropdown = () => {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    };

    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-white bg-white">
                {/* To Home */}
                <Link
                    className="navbar-brand"
                    style={{ color: "inherit", textDecoration: "none", fontSize: "22pt" }}
                    to="#"
                >
                    <img src={Logo} alt="" style={{ width: "200px" }} />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center nav-item ">
                    <Link
                        className="mr-3"
                        style={{ color: "inherit", textDecoration: "none", fontSize: "16pt" }}
                        to="#"
                    >
                        Pesawat
                            </Link>
                    <Link
                        className="mr-3"
                        style={{ color: "inherit", textDecoration: "none", fontSize: "16pt" }}
                        to="#"
                    >
                        Kereta Api
                            </Link>
                    <Link
                        className="mr-3"
                        style={{ color: "inherit", textDecoration: "none", fontSize: "16pt" }}
                        to="#"
                    >
                        Bus
                            </Link>
                    <Link
                        style={{ color: "inherit", textDecoration: "none", fontSize: "16pt" }}
                        to="#"
                    >
                        event
                            </Link>
                </div>
                <div className="collapse navbar-collapse justify-content-end nav-item mr-5">
                    <Link
                        className="mr-3 "
                        style={{ color: "inherit", textDecoration: "none", fontSize: "16pt" }}
                        to="#"
                    >
                        Cek Order
                            </Link>
                    <Dropdown
                        toggle={this.toggleDropdown}
                        isOpen={this.state.dropdownOpen}
                    >
                        <DropdownToggle tag="div" className="d-flex">
                            <Link
                                className="mr-3 "
                                style={{ color: "inherit", textDecoration: "none", fontSize: "16pt" }}
                                to="#"
                            >
                                Log In
                            </Link>
                        </DropdownToggle>
                        <DropdownMenu
                            className="mt-2"
                            style={{ left: "auto", right: "0", color: "none" }}
                            onClick={this.state.dropdownOpen}
                        >
                            <DropdownItem disabled>
                                <h3>Log In to Your Account</h3>
                            </DropdownItem>
                            <DropdownItem style={{ backgroundColor: "white" }}>
                                <input
                                    className="mb-3 mt-2"
                                    style={{ width: "85%" }}
                                    type="text"
                                    placeholder="Username / Email">
                                </input>
                            </DropdownItem>
                            <DropdownItem style={{ backgroundColor: "white" }}>
                                <input
                                    className="mb-3"
                                    style={{ width: "85%" }}
                                    type="text"
                                    placeholder="Password">
                                </input>
                            </DropdownItem>
                            <DropdownItem style={{ backgroundColor: "white" }}>
                                <div className="row">
                                    <div className="col-6 text-center">
                                        <ButtonUI
                                            style={{ fontSize: "16pt" }}>
                                            Log In
                                        </ButtonUI>
                                    </div>
                                    <div className="col-6">
                                        <p>Belum punya akun?
                                            <br />
                                            <Link>Register</Link>
                                        </p>
                                    </div>
                                </div>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Link
                        className="mr-3"
                        style={{ color: "inherit", textDecoration: "none", fontSize: "16pt" }}
                        to="#"
                    >
                        <ButtonUI
                            style={{ fontSize: "15pt" }}>
                            Register
                        </ButtonUI>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar;