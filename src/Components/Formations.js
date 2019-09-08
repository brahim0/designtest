import React from 'react'
import Formation from './Formation';
export default function Formations() {
    return (
        <div className="my-2">
             <h3>Education</h3>
         <hr style={{ borderTop: '3px solid #e22947' }} />
                <Formation year="2013" level ="Baccalauréat Mathématiques (Moyenne : 12.70)" />
         <Formation year="2014" level="Faculté des Sciences de Bizerte (FSB).
1ère année : (Moyenne : 11.27)" />
         <Formation year ="2016" level="Faculté des Sciences de Bizerte (FSB).
2ème année : (Moyenne : 10.87)" />
         <Formation year="2017" level="Faculté des Sciences de Bizerte (FSB).
3ème année : (Moyenne : 11.56 | Note PFE : 15.95)" />
            
        </div>
    )
}
