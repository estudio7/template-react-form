import React from "react";

class StepFive extends React.Component {
    render() {
        return (
            <div className="multisteps-form__panel" data-animation="slideVert">
                <div className="inner pb-100">
                    <div className="wizard-topper">
                        <div className="wizard-progress">
                            <span>1 of 5 Completed</span>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '35%' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="wizard-content-item pt-2">
                        <h2>Tension 1: goal vs. competence</h2>
                        <p>To what side you would side with and how relevant is this tension to you?
</p>
                        <div class="">  <img src={require('../../assets/img/addressed.png')} alt="" /> </div>
<p></p>


                        

                    </div>
                    <div className="wizard-submit-file-content wizard-content-form">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="n-summary">
                                    <span>Your Answer</span>
                                    <label>
                                        <input type="radio" name="radio" />
                                        <span className="checkmark">Very irrelevant</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio" />
                                        <span className="checkmark">Irrelevant</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio" />
                                        <span className="checkmark">Neutral</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio" />
                                        <span className="checkmark">Relevant</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio" />
                                        <span className="checkmark">Very relevant</span>
                                    </label>
                                    
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