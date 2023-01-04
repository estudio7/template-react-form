import React from "react";

class StepOne extends React.Component {
    render() {
        return (
            <div className="multisteps-form__panel js-active" data-animation="slideVert">
                <div className="inner pb-0">
                    <div className="wizard-topper">
                        <div className="wizard-progress">
                            <span>1 of 10 Completed</span>
                            <div className="progress">
                                <div className="progress-bar">
                                <div className="progress-bar" style={{ width: '10%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div className="wizard-content-item pt-2">
                        <h2><strong>DEAR MEMBER OF THE SPP SCOPE 3 CHAPTER</strong> </h2>
                        <p>We invite you to take part in our Delphi study. A Delphi study consists of bringing together a group of experts to reach consensus in a subject. Our study will have three steps, and you can take part in as many steps as desired. </p>
                        <p className="centerimg">
                            <img src={require('../../assets/img/steps.png')} alt="" /></p>
                        <p>The first step is to look at the key figures on the status quo of scope 3 disclosure (CDP 2021) and respond to a questionnaire that should take 7-9 minutes of your time. After participating in this round you will be invited to an online workshop to advance discussion on the topic. A final report will be provided by Mar 2023 at the WSPD event.
                        </p><p>
                            We kindly invite you to respond the survey by Jan 25th the latest. Responses will be treated and reported anonymously. Your contribution will be invaluable to help uncovering how to overcome challenges and advance on Scope 3 Carbon Transparency. Please do not hesitate to ask for clarifications if needed.
                        </p> <p>
                            Best regards<br></br>
                            Dr. Leonardo Marques, Dr. Dafne Morais, Dr. Lee Matthews and Prof. Mark Pagell </p>
                            <br></br>
                            <button type="button" class="btn btn-secundary" data-toggle="modal" data-target="#exampleModal">CLICK HERE FOR THE TEAM CV</button><p></p>





<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Team CV</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
  <div class="container-fluid">
    <div class="row m-3 pb-3">
      <div class="col-md-4"><img src={require('../../assets/img/leo.png')} alt="" /></div>
      <div class="col-md-8 ml-auto"><strong>Dr. Leonardo Marques </strong>is Associate Professor at Audencia Business School, in Nantes France, and holds a PhD from University of Manchester. He is an author and reviewer in leading journals and Associate Editor of the International Operations & Production Management. Leonardo serves at the Executive Committee of the International Purchasing and Supply Education & Research Association (IPSERA) since 2018 where he has been elected Vice-President in April 2021. His research has been previously funded by Coca-Cola, C&A Institute, and FAPERJ [Rio de Janeiro State Funding Programme]. Current research projects include the supply chain of B corporations, governance of alternative food supply networks and the role of blockchain for scope 3 carbon footprint disclosure and mitigation.
</div>
    </div>
    <div class="row m-3 pb-3">
    <div class="col-md-4"><img src={require('../../assets/img/dafne.png')} alt="" /></div>
      <div class="col-md-8 ml-auto"><strong>Dr. Dafne Morais </strong>is Adjunct Professor at FEI University Center, in São Paulo, Brazil. She holds a Ph.D. from FGV, one of the few business schools worldwide accredited by the top three- accrediting organizations – AACSB, EFMD and AMBA. She did postdoctoral work at COPPEAD, in Rio de Janeiro, Brazil, under the guidance of Dr. Leonardo Marques, investigating blockchain potential to track and improve working conditions in the fashion supply network. She coordinates areas of Sustainability and Operations Management in Brazilian academic events. Her research focuses on sustainability and transparency in the supply chain.
</div>
    </div>
    <div class="row m-3 pb-3">
    <div class="col-md-4"><img src={require('../../assets/img/lee.png')} alt="" /></div>
      <div class="col-md-8 ml-auto"><strong>Dr Lee Matthews</strong> is Lecturer in Business and Society at the International Centre for Corporate Social Responsibility (Nottingham University Business School). He has a PhD from the University of Manchester in Sustainable Supply Chain Management and has published in this area in journals such as Journal of Supply Chain Management and Supply Chain Management: An International Journal. Lee's main areas of research are Sustainable Supply Chain Management and Ethical Sourcing, with a focus on environmental ethics and justice. His ongoing projects include Biodiversity and ethical sourcing; Environmental justice and supply chain management; Climate change strategies in corporate supply chains.
o</div>
    </div>
    <div class="row m-3 pb-3">
    <div class="col-md-4"><img src={require('../../assets/img/mark.png')} alt="" /></div>
      <div class="col-md-8 ml-auto"><strong>Professor Mark Pagell</strong> holds a Chair in Global Leadership and is a Full Professor of Sustainable Supply Chain Management. Dr. Pagell does research on topics such as sustainable supply chain management and human resource issues - including providing decent work and protecting employee safety - in supply chain environments. Since receiving his PhD from Michigan State University in 1997 he has published over 100 peer reviewed journal articles in a number of premier outlets including: Journal of Supply Chain Management, Journal of Operations Management, Management Science, Production and Operations Management, Sloan Management Review and Journal of Management Studies. He was named a Distinguished Scholar for the OSCM Division at the Academy of Management (2020) and awarded multiple Emerald Citations of Excellence. 
</div>
    </div>
    
    
    
  </div>
</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

                    </div>
                    
                    <div className="wizard-footer">
                        <div className="wizard-imgbg">
                            <img src={require('../../assets/img/v3.png')} alt="" />
                        </div>
                        <div className="actions">
                            <ul>
                                <li><span className="js-btn-next" title="NEXT">NEXT <i className="fa fa-arrow-right"></i></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StepOne;