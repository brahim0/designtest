import React from 'react'
import {Spring} from 'react-spring/renderprops'
import Skill from './Skill';
export default function Skills() {
    return (
        <div>
             <h3 className="my-2">Competences Techniques</h3>
             <hr style={{ borderTop: '2px solid #e22947' }} />
            <Spring
  from={{ opacity: 0 ,marginTop:-5000 }}
  to={{ opacity: 1 , marginTop: 0 }}>
  {props => <div style={props}>

  <Skill domaine='Langages' sousdomaine="C, VB.NET, C#, Java, php5, php7" />
            <Skill domaine='Web' sousdomaine="ASP.Net MVC, HTML, CSS, BootStrap, JavaScript , Jquery , JqueryUI, Vue.js" />
            <Skill domaine='Framework' sousdomaine="Symfony(2.5,3.2,3.4), Laravel(5.2,5.3,5.5,5.6,5.7) ,Angular(2,7), React" />
            <Skill domaine='Méthodologies' sousdomaine="UML, Scrum" />
            <Skill domaine='Outils de conception' sousdomaine="tarUML" />
            <Skill domaine='SGBD' sousdomaine="StarUML" />
            <Skill domaine='IDE' sousdomaine="Eclipse , Android Studio , Visual Studio" />
            <Skill domaine='System d’exploitation' sousdomaine="Linux ( Ubuntu 14.04 , Ubuntu 16.04) , Windows" />



  </div>}
</Spring>
           
        </div>
    )
}
