import React from 'react';

const Person = ({name, age, birthday}) => {
    return (
        <p>Soy {name} y tengo {age} años. Naci en {birthday.getFullYear()}</p>
    )
}

export default Person;