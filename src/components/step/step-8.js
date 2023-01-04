import React from "react";

class StepEight extends React.Component {
    render() {
        return (
            <div className="multisteps-form__panel" data-animation="slideVert">
                <div className="inner pb-100">
                    <div className="wizard-topper">
                        <div className="wizard-progress">
                            <span>8 of 10 Completed</span>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="wizard-content-item pt-2">
                        <h2>TENSION 6: LEARNING VS. CONTROL</h2>

                        <div class="centerimg">  <img class="centerimg" src={require('../../assets/img/t6.png')} alt="" /> </div>



                    </div>
                    <div className="wizard-submit-file-content wizard-content-form">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="n-summary">
                                    <div class="row">
                                        <div class="col-3"><span>Which argument do you side with?</span>
                                        </div>
                                        <div class="col-9">
                                            <img className="padded" src={require('../../assets/img/arrow.png')} alt="" />
                                            <div class="selectores seis">
                                                <label>

                                                    <input type="radio" name="radio" />
                                                    <span className="checkmark">CONTROL</span>

                                                </label>
                                                <label>
                                                    <input type="radio" name="radio" />

                                                </label>
                                                <label>
                                                    <input type="radio" name="radio" />

                                                </label>
                                                <label>
                                                    <input type="radio" name="radio" />

                                                </label>
                                                <label>
                                                    <span className="checkmark">LEARNING</span>
                                                    <input type="radio" name="radio" />

                                                </label>
                                            </div>
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
                                    <div class="row">
                                    <div class="col-3"><span>Is this tension relevant to you?
                                        </span>
                                        </div>
                                        <div class="col-9">




                                            <label>
                                                <input type="radio" name="radio2" />
                                                <span className="checkmark">Very relevant</span>
                                            </label>

                                            <label>
                                                <input type="radio" name="radio2" />
                                                <span className="checkmark">Relevant</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="radio2" />
                                                <span className="checkmark">Neutral</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="radio2" />
                                                <span className="checkmark">Irrelevant</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="radio2" />
                                                <span className="checkmark">Very irrelevant
                                                </span>
                                            </label>


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

export default StepEight;