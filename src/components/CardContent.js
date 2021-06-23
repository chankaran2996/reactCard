import React from "react";
function CardContent({plan,features}){
    return(
        <div className="col-lg-4">
            <div className="card md-5 md-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{plan.plan}</h5>
                    <h6 className="card-price text-center">${plan.Fee}<span className="period">/month</span></h6>
                    <hr/>
                    
                    <ul className="fa-ul">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            {/* {To Differentiate the Font-Style} */}
                            { plan.plan === "FREE"? <> {plan.user} </> : <strong> {plan.user}</strong> }
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                             <> {plan.storage} </>
                        </li>
                        {
                            features.map((feature,index)=>{
                                return (
                                    <React.Fragment key={index}>
                                        {
                                          plan.feature_flags[index] ===  0 
                                          ? 
                                           <li className="text-muted">
                                             <span className="fa-li"> <i className="fas fa-times"></i> </span>
                                                 {
                                                   feature === "Free Subdomain" && plan.plan ==="PRO" 
                                                   ?
                                                     <> <strong>Unlimited</strong> {feature} </>
                                                   :
                                                      feature  
                                                 }
                                                  </li>
                                           :
                                           <li>
                                               <span className="fa-li"> <i className="fas fa-check"></i> </span>
                                               {
                                                   feature === "Free Subdomain" && plan.plan ==="PRO" 
                                                   ?
                                                     <> <strong>Unlimited</strong> {feature} </>
                                                   :
                                                      feature  
                                                 }
                                           </li>       
                                         }
                                    </React.Fragment>
                                );
                               
                            })
                        }

                    </ul>
                    
                    <button className="btn btn-block btn-primary text-uppercase">Button</button>
                </div>
            </div>
        </div>

    );
}

export default CardContent;