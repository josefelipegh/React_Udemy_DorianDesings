import React from 'react';

import { generate as id } from 'shortid';

import './App.css';

function App() {
  const cards = [
    {
      id: id(),
      title: "Card 1",
      img: '/assets/wolf.jpg',
      author: 'Felipe',
      date: new Date().toLocaleDateString(),
      tags: ['animal', 'wolf', 'snow'],
      views: 23,
      description: "A beautiful wolf in snow. Lorem ipsum dolor sit amet consectetur adipiscing elit integer, dictumst nibh sociosqu torquent tempor blandit neque habitasse, sodales mi nisl praesent rhoncus urna pharetra. Leo integer sem volutpat feugiat fusce luctus, arcu laoreet urna mauris cum mus platea, pulvinar magna mattis auctor penatibus. Laoreet cubilia duis luctus vivamus nunc pulvinar ligula porta vehicula hendrerit convallis eleifend sed, auctor proin dignissim integer vel tristique rutrum rhoncus purus ultricies curabitur."
    },
    {
      id: id(),
      title: "Card 2",
      img: '/assets/wolf.jpg',
      author: 'Felipe',
      date: new Date().toLocaleDateString(),
      tags: ['animal', 'wolf', 'snow'],
      views: 23,
      description: "A beautiful wolf in snow. Lorem ipsum dolor sit amet consectetur adipiscing elit integer, dictumst nibh sociosqu torquent tempor blandit neque habitasse, sodales mi nisl praesent rhoncus urna pharetra. Leo integer sem volutpat feugiat fusce luctus, arcu laoreet urna mauris cum mus platea, pulvinar magna mattis auctor penatibus. Laoreet cubilia duis luctus vivamus nunc pulvinar ligula porta vehicula hendrerit convallis eleifend sed, auctor proin dignissim integer vel tristique rutrum rhoncus purus ultricies curabitur."
    },
    {
      id: id(),
      title: "Card 3",
      img: '/assets/wolf.jpg',
      author: 'Felipe',
      date: new Date().toLocaleDateString(),
      tags: ['animal', 'wolf', 'snow'],
      views: 23,
      description: "A beautiful wolf in snow. Lorem ipsum dolor sit amet consectetur adipiscing elit integer, dictumst nibh sociosqu torquent tempor blandit neque habitasse, sodales mi nisl praesent rhoncus urna pharetra. Leo integer sem volutpat feugiat fusce luctus, arcu laoreet urna mauris cum mus platea, pulvinar magna mattis auctor penatibus. Laoreet cubilia duis luctus vivamus nunc pulvinar ligula porta vehicula hendrerit convallis eleifend sed, auctor proin dignissim integer vel tristique rutrum rhoncus purus ultricies curabitur."
    }
  ]

  return (
    <div className='cards'>
      { 
        cards.map( card => {
          return <div key={card.id} className='card'>
            <h2 className='card__title'>{card.title}</h2>
            <img className='card__img' src={card.img} alt={card.title} />
            <p className='card__description'>{card.description}</p>
            <p className='card__author'>{card.author}</p>
            <ul className='card__tags'>
              {
                card.tags.map( tag => {
                  return <li key={id()} className='card__tag'>
                    {tag}
                  </li>
                })
              }
            </ul>
            <p className='card__views'>{card.views} views</p>
            <p className='card__date'> </p>
          </div>
        })
      }
    </div>
  );
}

export default App;
