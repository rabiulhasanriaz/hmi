import { Link } from 'react-router-dom';
export default function Demographics() {
    return(
        <div className="App hold-transition login-page">
        <div className="col-md-4">
        <div className="card card-outline card-primary">
            <div className="card-header" style={{textAlign: "left"}}>
            <h1>Demographics</h1>
            </div>
            <div className="card-body">
            <p className="login-box-msg" style={{textAlign: "left"}}>Some demographics about you:</p>

            <form action="" method="post">
                
                
            <div className="form-group row">
                <label for="inputPassword" className="col-sm-3 col-form-label">Gender</label>
                <div className="col-sm-9">
                <select className='form-control'>
                    <option>Select</option>
                </select>
                </div>
            </div>
            <div className="form-group row">
                <label for="inputPassword" className="col-sm-3 col-form-label">Occupation</label>
                <div className="col-sm-9">
                <select className='form-control'>
                    <option>Select</option>
                </select>
                </div>
            </div>
            <div className="form-group row">
                <label for="inputPassword" className="col-sm-3 col-form-label">Graduation</label>
                <div className="col-sm-9">
                <select className='form-control'>
                    <option>Select</option>
                </select>
                </div>
            </div>
            <div className="form-group row">
                <label for="inputPassword" className="col-sm-3 col-form-label">Nationality</label>
                <div className="col-sm-9">
                <select className='form-control'>
                    <option>Select</option>
                </select>
                </div>
            </div>
            <div className="form-group row">
                <label for="inputPassword" className="col-sm-3 col-form-label">Age</label>
                <div className="col-sm-9">
                <select className='form-control'>
                    <option>Select</option>
                </select>
                </div>
            </div>
            <div className="form-group row">
                <label for="inputPassword" className="col-sm-3 col-form-label">I own a smartphone</label>
                <div className="col-sm-9">
                <select className='form-control'>
                    <option>Select</option>
                </select>
                </div>
            </div>
                <div className="col-4" style={{float:"left"}}>
                <Link to="/">
                    <button type="submit" className="btn btn-danger btn-block">Going Back</button>
                </Link>
                </div>
                <div className="col-4" style={{float:"right"}}>
                <Link to="/instructions">
                    <button type="submit" className="btn btn-primary btn-block">Next</button>
                </Link>
                </div>
                
                
            </form>

           

            
            </div>
            
        </div>
        </div>
        
  
</div>
    )
}