import React from "react";

class StepFive extends React.Component {
    render() {
        return (
            <div className="multisteps-form__panel" data-animation="slideVert">
                <div className="inner pb-100">
                    <div className="wizard-topper">
                        <div className="wizard-progress">
                            <span>5 of 10 Completed</span>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '50%' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="wizard-content-item pt-2">
                        <h2>TENSION 3: TANGIBLE ACTIONS VS. CARBON CERTIFICATES</h2>

                        <div className="centerimg">  <img className="centerimg" src={require('../../assets/img/t3.png')} alt="" /> </div>



                    </div>
                    <div className="wizard-submit-file-content wizard-content-form">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="n-summary">
                                    <div className="row">
                                        <div className="col-3"><span>Which argument do you side with?</span>
                                        </div>
                                        <div className="col-9">
                                            <img className="padded" src={require('../../assets/img/arrow.png')} alt="" />
                                            <div className="selectores treis">
                                                <label>

                                                    <input type="radio" name="radio" />
                                                    <span className="checkmark">CARBON CERTIFICATES</span>

                                                </label>
                                                <label>
                                                    <input type="radio" name="radio-carbon" />

                                                </label>
                                                <label>
                                                    <input type="radio" name="radio-carbon" />

                                                </label>
                                                <label>
                                                    <input type="radio" name="radio-carbon" />

                                                </label>
                                                <label>
                                                    <span className="checkmark">TANGIBLE ACTIONS</span>
                                                    <input type="radio" name="radio-carbon" />

                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 t3a d-none">
                                    This field is required!
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wizard-submit-file-content wizard-content-form">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="n-summary">
                                    <div className="row">
                                        <div className="col-9">




                                            <label>
                                            <input className="radio-default" value="Very relevant" name="radio-carbon-relevant" />
                                                <span className="checkmark">Very relevant</span>
                                            </label>

                                            <label>
                                                <input type="radio" name="radio-carbon-relevant" />
                                                <span className="checkmark">Relevant</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="radio-carbon-relevant" />
                                                <span className="checkmark">Neutral</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="radio-carbon-relevant" />
                                                <span className="checkmark">Irrelevant</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="radio-carbon-relevant" />
                                                <span className="checkmark">Very irrelevant
                                                </span>
                                            </label>
                                        </div>
                                        <div className="col-12 t3b d-none">
                                        This field is required!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="wizard-footer">
                        <div className="wizard-imgbg">
                            <img src={require('../../assets/img/v2.png')} alt="" />
                        </div>
                        <div className="actions">
                            <ul>
                                <li><span className="js-btn-prev" title="BACK"><i className="fa fa-arrow-left"></i> BACK</span></li>
                                <li><span className="js-btn-next" title="NEXT">NEXT <i className="fa fa-arrow-right"></i></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StepFive;