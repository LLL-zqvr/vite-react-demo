import { useState } from "react";
export default function Form() {
    const [person, setPerson] = useState(
        {
            name:'Niki sdfs',
            artwork: {
                title: 'sfs',
                city: 'sdfdsf',
                image: 'https://i.imgur.com/Sd1AgUOm.jpg'
            }
        }
    )
    const description = person.name + person.artwork.title + person.artwork.city;
    function handlePersonName(change:React.ChangeEvent<HTMLInputElement>) {
        setPerson(
            {...person,
            name: change.target.value}
        )
    }
    function handlePersonCity(change:React.ChangeEvent<HTMLInputElement>) {
        setPerson(
            {
                ...person,
                artwork: {
                    ...person.artwork,
                    city: change.target.value
                }
            }
        )
    }
    function handlePersonTitle(change:React.ChangeEvent<HTMLInputElement>) {
        setPerson(
            {
                ...person,
                artwork: {
                    ...person.artwork,
                    title: change.target.value
                }
            }
        )
    }
    return(
        <>  
            <input type="text" value={person.name} onChange={handlePersonName}/>
            <input type="text" value={person.artwork.city} onChange={handlePersonCity}/>
            <input type="text" value={person.artwork.title} onChange={handlePersonTitle}/>
            <p>{description}</p>
        </>
    )
}