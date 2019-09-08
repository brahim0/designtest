import React from 'react'
import Langue from './Langue'
import {Spring} from 'react-spring/renderprops'

export default function Langues() {
    return (
        <div className="my-2 ml-2">
            <div>
            <h3>Langues</h3>
                    <hr style={{ borderTop: '2px solid #4863A0' }} />
            </div>
            <div>
            <Spring
  from={{ number: 0 }}
  to={{ number: 100 }}
  config={{
    delay: 200,
    duration: 200
}}
  >
  {props =>             <Langue langue="Arabe" progress={props.number.toFixed()} percent={props.number+"%"}/>
}
</Spring>
            </div>
  <div>
  <Spring
  from={{ number: 0 }}
  to={{ number: 60 }}
  config={{
    delay: 200,
    duration: 200
}}
  >
  {props =>             <Langue  langue="Français" progress={props.number.toFixed()} percent={props.number+"%"}/>
}
</Spring>
  </div>
  <div>
  <Spring
  from={{ number: 0 }}
  to={{ number: 70 }}
  config={{
    delay: 200,
    duration: 200
}}
  >
  {props =>             <Langue langue="Anglais" progress={props.number.toFixed()} percent={props.number+"%"}/>
}
</Spring>
  </div>


           
            <div>
            
            </div>
        </div>
    )
}
