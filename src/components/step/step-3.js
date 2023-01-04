import React from "react";

class StepThree extends React.Component {
    render() {
        return (

            <div className="multisteps-form__panel" data-animation="slideVert">
                <div className="inner pb-100 tension-1">
                    <div className="wizard-topper">
                        <div className="wizard-progress">
                            <span>3 of 10 Completed</span>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '30%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="wizard-content-item pt-2">
                        <h2>TENSION 1: TARGETS VS. COMPETENCE</h2>

                        <div className="centerimg">  <img className="centerimg" src={require('../../assets/img/t1.png')} alt="" /> </div>

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
                                            <div className="row selectores">
                                                <div className="col-6 right">
                                                    <label>
                                                        <input className="radio-default" value='5' type="radio" name="radio-competence" />
                                                        <span className="checkmark"> COMPETENCE</span>
                                                    </label>
                                                    <label>
                                                        <input className="radio-default" value='4' type="radio" name="radio-competence" />
                                                    </label>
                                                    <label>
                                                        <input className="radio-default" value='3' type="radio" name="radio-competence" />
                                                    </label>
                                                </div>

                                                <div className="col-6 left">
                                                    <label>
                                                        <input className="radio-default" value='2' type="radio" name="radio-competence" />
                                                    </label>

                                                    <label>
                                                        <span className="checkmark">TARGET</span>
                                                        <input className="radio-default" value='1' type="radio" name="radio-competence" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 t1a d-none">
                                        This field is required!
                                        </div>
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
                                                <input className="radio-default" value="Very relevant" type="radio" name="radio-relevant" />
                                                <span className="checkmark">Very relevant</span>
                                            </label>
                                            <label>
                                                <input className="radio-default" value="Relevant" type="radio" name="radio-relevant" />
                                                <span className="checkmark">Relevant</span>
                                            </label>
                                            <label>
                                                <input className="radio-default" value="Neutral" type="radio" name="radio-relevant" />
                                                <span className="checkmark">Neutral</span>
                                            </label>
                                            <label>
                                                <input className="radio-default" value="Irrelevant" type="radio" name="radio-relevant" />
                                                <span className="checkmark">Irrelevant</span>
                                            </label>
                                            <label>
                                                <input className="radio-default" value="Very irrelevant" type="radio" name="radio-relevant" />
                                                <span className="checkmark">Very irrelevant
                                                </span>
                                            </label>
                                        </div>

                                        <div className="col-12 t1b d-none">
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

export default StepThree;