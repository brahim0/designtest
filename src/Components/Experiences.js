import React from 'react'
import Experience from './Experience';
export default function Experiences() {
    return (
        <div className="my-2">
            <h3>Experience</h3>
         <hr style={{ borderTop: '2px solid #e22947' }} />
         <Experience date="30 Jan 2017 - 25 Mai 2017" description="Projet de fin d'études, chez ARAB SOFT" />
         <Experience date="05 Fev 2018 - 04 Mai 2018 " description="ALLIANCE DESIGN, Secteur : Informatique
Poste occupé : Développeur Informatique (stage)" />
         <Experience date="03 Nov 2018 - 07 Jan 2019" description="Poste occupé : Développeur Informatique" />
        </div>
    )
}
