import React from "react";

class StepTwo extends React.Component {
    render() {
        return (
            <div className="multisteps-form__panel" data-animation="slideVert">
                <div className="inner pb-100">
                    <div className="wizard-topper">
                        <div className="wizard-progress">
                            <span>2 of 10 Completed</span>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: '20%' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="wizard-content-item pt-2">
                        <h2>CARBON TRANSPARENCY STATUS QUO:  2021 CDP DATASET COMPOSED OF 5,913 COMPANIES</h2>
                        

                    </div>
                    <div class="row">
                        <div class="container d-flex text-center">
                            <div class="col-6"><h5 className="titles">43% of the companies have set their carbon target between 2019 and 2021, hence still in the beginning of the learning curve.
                            </h5>  <img src={require('../../assets/img/status-quo-1.png')} alt="" />
                                {/* <p class="legend">Most companies are setting targets for the first time in the last three years (2019-2021) thus at the beginning of the learning curve.</p> */}
                            </div>
                            <div class="col-6">
                                <h5 className="titles">Only 28% of the companies report carbon emissions AND have third-party verification in place
                                </h5><img src={require('../../assets/img/status-quo-3.png')} alt="" />
                                {/* <p class="legend">42% report on both target and progress, and a very limited number of companies unpack Scope 3 separately.</p> */}
                            </div>
                        </div>
                    </div>
                    <div class="row"> 
                        <div class="container d-flex text-center p-5">
                         <div class="col-12"> <h5 className="vermelho"> MOST IMPORTANTLY: Only 6% of the companies report target and progress including scope 3 emissions.</h5> 
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

export default StepTwo;