import React from 'react'
import {Spring} from 'react-spring/renderprops'

export default function Formemail() {
    return (
        
        <div className="my-5 mx-5">
            <div className="row">
                <div className="col-12">
                <Spring
  from={{ opacity: 0 ,marginTop:-5000 }}
  to={{ opacity: 1 , marginTop: 0 }}>
  {props => <div style={props}>

            <form>
           <div className="form-group">
           <input type="email" className="form-control font-lexend-deca" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
           </div>
           <div className="form-group">
             <input type="text" className="form-control font-lexend-deca " id="object" name="object" placeholder="Object"  />
           </div>
           <div className="form-group">
               <textarea className="form-control font-lexend-deca" id="body" name="body" placeholder="Ecrire ici ..." rows="10" cols="50" >

               </textarea>

           </div>
           <div className="form-group">
           <button type="submit" class="btn btn-light font-lexend-deca">Send</button>

           </div>
       </form>
       </div>}
</Spring>
                </div>

            </div>
              
        </div>
      
    )
}
