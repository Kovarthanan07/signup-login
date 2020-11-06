import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import { Redirect, Link } from "react-router-dom";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    idNo: "",
    role: "",
    email: "",
    phoneNumber: "",
    address: "",
    gender: "",
    password: "",
    conformpassword: "",
  });

  const {
    first_name,
    last_name,
    idNo,
    role,
    gender,
    email,
    phoneNumber,
    address,
    password,
    conformpassword,
  } = formData;

  const [sex, setSex] = useState("");
  formData.gender = sex;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== conformpassword) {
      setAlert("Password do not match...", "danger");
    } else {
      register({
        first_name,
        last_name,
        idNo,
        role,
        gender,
        email,
        phoneNumber,
        address,
        password,
      });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="formAlign">
        <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
          <div className="wrapper wrapper--w680">
            <div className="card card-4">
              <div className="card-body">
                <h2 className="title">Registration Form</h2>
                <form method="POST" onSubmit={(e) => onSubmit(e)}>
                  <div className="row row-space">
                    <div className="col-2">
                      <div className="input-group">
                        <label className="label">first name</label>
                        <input
                          className="input--style-4"
                          type="text"
                          name="first_name"
                          //required
                          value={first_name}
                          onChange={(e) => onChange(e)}
                        ></input>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="input-group">
                        <label className="label">last name</label>
                        <input
                          className="input--style-4"
                          type="text"
                          name="last_name"
                          //required
                          value={last_name}
                          onChange={(e) => onChange(e)}
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="row row-space">
                    <div className="col-2">
                      <div className="input-group">
                        <label className="label">ID Number</label>
                        <input
                          className="input--style-4"
                          type="text"
                          name="idNo"
                          //required
                          value={idNo}
                          onChange={(e) => onChange(e)}
                        ></input>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="input-group">
                        <label className="label">Role</label>
                        <div className="rs-select2 js-select-simple select--no-search">
                          <select
                            name="role"
                            value={role}
                            onChange={(e) => onChange(e)}
                          >
                            <option disabled="disabled" value="">
                              Choose option
                            </option>
                            <option value="employee">Employee</option>
                            <option value="manager">Manager</option>
                            <option value="admin">Admin</option>
                          </select>
                          <div className="select-dropdown"></div>
                        </div>
                      </div>
                    </div>
                    <div className="row row-space">
                      <div className="col-2">
                        <div className="input-group">
                          <label className="label">Email</label>
                          <input
                            className="input--style-4"
                            type="email"
                            name="email"
                            //required
                            value={email}
                            onChange={(e) => onChange(e)}
                          ></input>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="input-group">
                          <label className="label">Phone Number</label>
                          <input
                            className="input--style-4"
                            type="text"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => onChange(e)}
                          ></input>
                        </div>
                      </div>
                    </div>

                    <div className="row row-space">
                      <div className="col-2">
                        <div className="input-group">
                          <label className="label">Address</label>
                          <input
                            className="input--style-4"
                            type="text"
                            name="address"
                            value={address}
                            onChange={(e) => onChange(e)}
                          ></input>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="input-group">
                          <label className="label">Gender</label>
                          <div className="p-t-10">
                            <label className="radio-container m-r-45">
                              Male
                              <input
                                type="radio"
                                checked="checked"
                                name="gender"
                                value="male"
                                checked={sex === "male"}
                                onChange={(e) => setSex(e.target.value)}
                              ></input>
                              <span className="checkmark"></span>
                            </label>
                            <label className="radio-container">
                              Female
                              <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={sex === "female"}
                                onChange={(e) => setSex(e.target.value)}
                              ></input>
                              <span className="checkmark"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row row-space">
                      <div className="col-2">
                        <div className="input-group">
                          <label className="label">Password</label>
                          <input
                            className="input--style-4"
                            type="password"
                            name="password"
                            //required
                            value={password}
                            onChange={(e) => onChange(e)}
                          ></input>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="input-group">
                          <label className="label">Conform Password</label>
                          <input
                            className="input--style-4"
                            type="password"
                            name="conformpassword"
                            //required
                            value={conformpassword}
                            onChange={(e) => onChange(e)}
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="row row-space">
                      <div className="col-2">
                        <div className="p-t-15">
                          <button
                            className="btn btn--align1 btn--radius-2 btn--blue"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="p-t-15">
                          <Link to="/">
                            <button
                              className="btn btn--align2 btn--radius-2 btn--ash"
                              type="button"
                            >
                              Cancel
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Jquery JS--> */}
      <script src="vendor/jquery/jquery.min.js"></script>
      {/* <!-- Vendor JS--> */}
      <script src="vendor/select2/select2.min.js"></script>
      <script src="vendor/datepicker/moment.min.js"></script>
      <script src="vendor/datepicker/daterangepicker.js"></script>

      {/* <!-- Main JS--> */}
      <script src="js/global.js"></script>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
