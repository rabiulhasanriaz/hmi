import { Link } from 'react-router-dom';

export default function Instructions() {
  return (
    <div className="App hold-transition login-page">
        <div className="col-md-4">
     <div className="card card-outline card-primary">
       <div className="card-header" style={{textAlign: "left"}}>
         <a href="" className="h1">Survey</a>
         <br/>
         <a href="" className="h2">Instructions</a>
       </div>
       <div className="card-body" >
         <p className="login-box-msg" style={{textAlign: "left"}}>In the following, you will see some videos of expressive gestures to control a mobile device. Please answer the questions below the video. Chose your ratings quickly and based on your feelings. It is not you or your performance that is evaluated, but the usability of the expressive gestures. So please answer honestly, there is no right or wrong. Your data will be processed anonymously and used for research purposes only. At the end of the questionnaire, you have the opportunity to leave your name and email address for receiving participation confirmation.</p>
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
             <div className="col-4" style={{float:"left"}}>
               <Link to="/demographics" >
               <button type="submit" className="btn btn-danger btn-block float-right">Going Back</button>
               </Link>
             </div>
             <div className="col-4" style={{float:"right"}}>
               <Link to="/demographics" >
               <button type="submit" className="btn btn-primary btn-block float-right">Lets Go!</button>
               </Link>
             </div>
             
       </div>
     </div>
   </div>
        
       </div>
  );
};