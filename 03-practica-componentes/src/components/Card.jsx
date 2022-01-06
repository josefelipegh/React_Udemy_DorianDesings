import React from 'react';

import { generate as id } from 'shortid';

const Card = ({author, date, children : description, img, tags, title, views}) =>
    (
        <div className='card'>
            <h2 className='card__title'>{title}</h2>
            <img className='card__img' src={img} alt={title} />
            <p className='card__description'>{description}</p>
            <p className='card__author'>{author}</p>
            <ul className='card__tags'>
              {
                tags.map( tag => {
                  return <li key={id()} className='card__tag'>
                    {tag}
                  </li>
                })
              }
            </ul>
            <p className='card__views'>{views} views</p>
            <p className='card__date'>{date}</p>
        </div>
)

export default Card;