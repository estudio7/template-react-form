
import React from 'react';
import Step1 from './step/step-1';
import Step2 from './step/step-2';
import Step3 from './step/step-3';
import Step4 from './step/step-4';
import Step5 from './step/step-5';
import Step6 from './step/step-6';
import Step7 from './step/step-7';
import Step8 from './step/step-8';
import Step9 from './step/step-9';
import Step10 from './step/step-10';

class VersionTwo extends React.Component {
    render() {
        return (
            <div className="wrapper clearfix">
                <div className="wizard-part-title">
                    <h3> SCOPE-3 CARBON TRANSPARENCY</h3>
                    <h4> DELPHI STUDY WITH EXPERTS</h4>
                </div>
                <div className="multisteps-form">
                    <div className="row">
                        <div className="col-12 col-lg-12 ml-auto mr-auto mb-5 mt-5 d-none">
                            <div className="multisteps-form__progress">
                            <button className="multisteps-form__progress-btn js-active">1</button>
                            <button className="multisteps-form__progress-btn">2</button>
                            <button className="multisteps-form__progress-btn">3</button>
                            <button className="multisteps-form__progress-btn">4</button>
                            <button className="multisteps-form__progress-btn">5</button>
                            <button className="multisteps-form__progress-btn">6</button>
                            <button className="multisteps-form__progress-btn">7</button>
                            <button className="multisteps-form__progress-btn">8</button>
                            <button className="multisteps-form__progress-btn">9</button>
                            <button className="multisteps-form__progress-btn">10</button>
                            <button className="multisteps-form__progress-btn">11</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-12 m-auto">
                            <form className="multisteps-form__form clearfix" action="thanks.html" method="post" id="wizard">
                                <Step1 />
                                <Step2 />
                                <Step3 />
                                <Step4 />
                                <Step5 />
                                <Step6 />
                                <Step7 />
                                <Step8 />
                                <Step9 />
                                <Step10 />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};


export default VersionTwo;

