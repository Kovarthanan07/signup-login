import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import { Link, Redirect } from "react-router-dom";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    idNo: "",
    password: "",
  });

  const { idNo, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(idNo, password);
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
                <h2 className="title">Login to you account</h2>
                <form method="POST" onSubmit={(e) => onSubmit(e)}>
                  <div className="row row-space">
                    <div className="loginInput">
                      <div className="input-group">
                        <label className="label">User ID</label>
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
                  </div>

                  <div className="row row-space">
                    <div className="loginInput">
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
                  </div>
                  <div className="row row-space">
                    <div className="col-2">
                      <div className="p-t-15">
                        <button
                          className="btn btn--align1 btn--radius-2 btn--blue"
                          type="submit"
                        >
                          Login
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

Login.prototype = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
