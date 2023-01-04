import React from "react";

class StepNine extends React.Component {
    render() {
        return (
            <div className="multisteps-form__panel" data-animation="slideVert">
                    <div className="inner pb-100">
                                    <div className="wizard-topper">
                                            <div className="wizard-progress">
                                                <span>9 of 10 Completed</span>
                                                <div className="progress">
                                                    <div className="progress-bar" style={{ width: '90%' }}></div>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="wizard-content-item pt-2">
                                        <h2>PROVIDE A SOLUTION TO RELEVANT TENSIONS</h2>
                                    
                                    
                                                <div className="wizard-submit-file-content wizard-content-form">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                        
                                                                <div className="n-summary">
                                                                            <span>These are the tensions that you have considered “relevant” or “very relevant”.</span>
                                                                            
                                                                </div>
                                                                <p className="justify-content-center d-flex p-5">Loading data...</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="n-summary">
                                                                <span>Provide a solution to manage the relevant tensions concerning scope 3 carbon transparency and reduction
                                                                    (please be as creative as you see fit)</span>
                                                              
                                                            </div>
                                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
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

export default StepNine;