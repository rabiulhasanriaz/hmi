import { Link } from 'react-router-dom';
// import Demographics from './components/Demographics';
export default function Home(){
    return (
        <div className="App hold-transition login-page">
        <div className="col-md-4">
     <div className="card card-outline card-primary">
       <div className="card-header" style={{textAlign: "left"}}>
         <h1>Survey</h1>
         <br/>
         <h3>Social Acceptability of Expressive Gestures</h3>
       </div>
       <div className="card-body" >
         <p className="login-box-msg" style={{textAlign: "left"}}>The University of Applied Sciences Frankfurt and the chair of Media Informatics of the University of Regensburg cordially invites you to participate in a survey on the social acceptability of gestures in social context. This survey is part of the research and for scientific purposes only.
   Participation in the survey is voluntary. Click here to view and print the full informed consent. The survey takes ca. 15 minutes. If you have questions or comments, feel free to send an email to Valentin Schwind (valentin.schwind[at]ur.de).</p>
             {/* <BrowserRouter>
             <div className="col-4">
               <Link to="/demographics">
               <button type="submit" className="btn btn-primary btn-block float-right">Start Survey</button>
               </Link>
             </div>
   
             <Routes>
               <Route path='/demographics' element={<Demographics/>}></Route>
             </Routes>
             </BrowserRouter> */}
             <div className="col-4" style={{float:"right"}}>
               <Link to="/demographics">
               <button type="submit" className="btn btn-primary btn-block float-right">Start Survey</button>
               </Link>
             </div>
             
       </div>
     </div>
   </div>
        
       </div>
    );
  };