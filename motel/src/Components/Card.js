import React, { useRef } from 'react';
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const cardData = [
  {
    title: 'hotel syk inn',
    text: '$599',
    image: 'https://images.oyoroomscdn.com/uploads/hotel_image/186872/medium/gtunolffcwjl.jpg'
  },
  {
    title: 'Royal Club',
    text: '$399',
    image: 'https://images.oyoroomscdn.com/uploads/hotel_image/41008/medium/9eb1224eda1ee548.jpg'
  },
  {
    title: 'LightHouse',
    text: '$199',
    image: 'https://images.oyoroomscdn.com/uploads/hotel_image/219109/medium/hhyhyvkbiqdd.jpg'
  },
  {
    title: 'Collection O',
    text: '$499',
    image: 'https://images.oyoroomscdn.com/uploads/hotel_image/212781/medium/mycmvoofihes.jpg'
  },
  {
    title: 'FlegShip',
    text: '$200',
    image: 'https://images.oyoroomscdn.com/uploads/hotel_image/212509/medium/hagnjmryeeqt.jpg'
  },
  {
    title: 'Highway',
    text: '$2000',
    image: 'https://images.oyoroomscdn.com/uploads/hotel_image/162034/medium/ihkijrqhaesv.jpg'
  },
  {
    title: 'Hyat Regidancy',
    text: '$3343',
    image: 'https://images.oyoroomscdn.com/uploads/hotel_image/39273/medium/iuwecpluppqi.jpg'
  },
  {
    title: 'Taj',
    text: '$1200',
    image: 'https://images.oyoroomscdn.com/uploads/hotel_image/195380/medium/8cec07c2d7eea245.jpg'
  },
  // Add more cards as needed
];

const Cards = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div style={{ position: 'relative' }}>
      <Button 
        variant="light" 
        style={{ position: 'absolute', top: '50%', left: '10px', zIndex: 1 }} 
        onClick={() => sliderRef.current.slickPrev()}
      >
        <FaChevronLeft />
      </Button>
      <Button 
        variant="light" 
        style={{ position: 'absolute', top: '50%', right: '10px', zIndex: 1 }} 
        onClick={() => sliderRef.current.slickNext()}
      >
        <FaChevronRight />
      </Button>
      <Slider ref={sliderRef} {...settings}>
        {cardData.map((card, index) => (
          <div key={index}>
            <Card style={{ width: '18rem', margin: 'auto' }}>
              <Card.Img variant="top" src={card.image} />
              <Card.Body>
                <Card.Title className='text-center'>{card.title}</Card.Title>
                <Card.Text className='text-center'>
                  {card.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Cards;
