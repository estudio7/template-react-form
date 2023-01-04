import React from "react";

class StepFour extends React.Component {
    render() {
        return (
            <div className="multisteps-form__panel" data-animation="slideVert">
                <div className="inner pb-100">
                    <div className="wizard-topper">
                        <div className="wizard-progress">
                            <span>4 of 10 Completed</span>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '40%' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="wizard-content-item pt-2">
                        <h2>TENSION 2: SUPPLIER DISCLOSURE VS. EMISSION ESTIMATES</h2>

                        <div className="centerimg">  <img className="centerimg" src={require('../../assets/img/t2.png')} alt="" /> </div>



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
                                            <div className="selectores dois">
                                                <label>

                                                <input className="radio-t2" value='5' name="radio-emission" />
                                                    <span className="checkmark"> EMISSION ESTIMATES</span>

                                                </label>
                                                <label>
                                                <input className="radio-t2" value='4' name="radio-emission" />

                                                </label>
                                                <label>
                                                <input className="radio-t2" value='3' name="radio-emission" />

                                                </label>
                                                <label>
                                                <input className="radio-t2" value='2' name="radio-emission" />

                                                </label>
                                                <label>
                                                    <span className="checkmark">SUPPLIER DISCLOSURE</span>
                                                    <input className="radio-t2" value='1' name="radio-emission" />

                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 t2a d-none">
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
                                        <div className="col-3"><span>Is this tension relevant to you?
                                        </span>
                                        </div>
                                        <div className="col-9">

                                            <label>
                                                
                                            <input className="radio-t2" value="Very relevant" type="radio"  name="radio-emission-relevant" />
                                                <span className="checkmark">Very relevant</span>
                                            </label>

                                            <label>
                                            <input className="radio-t2" value="Relevant" name="radio-emission-relevant" />
                                                <span className="checkmark">Relevant</span>
                                            </label>
                                            <label>
                                            <input className="radio-t2" value="Neutral" name="radio-emission-relevant" />
                                                <span className="checkmark">Neutral</span>
                                            </label>
                                            <label>
                                            <input className="radio-t2" value="Irrelevant" name="radio-emission-relevant" />
                                                <span className="checkmark">Irrelevant</span>
                                            </label>
                                            <label>
                                            <input className="radio-t2" value="Very irrelevant" name="radio-emission-relevant" />
                                                <span className="checkmark">Very irrelevant
                                                </span>
                                            </label>
                                        </div>
                                        <div className="col-12 t2b d-none">
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

export default StepFour;