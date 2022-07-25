import React from 'react';
import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg',
        address: '20 W 34th St., New York, NY 10001, United States',
        location: {
            lat: 40.7484405, 
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Burj Khalifa',
        description: 'The tallest sky scrapers in the world',
        imageUrl: 'https://i.ytimg.com/vi/lflCmjW7RlI/maxresdefault.jpg',
        address: '57QC+W86 - Burj Khalifa Blvd - Dubai - United Arab Emirates',
        location: {
            lat: 25.189782, 
            lng: 55.2532503
        },
        creator: 'u1'
    },
    {
        id: 'p3',
        title: 'Coliseum',
        description: 'Legendary Gladiator arena located in Roma, Italy',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg',
        address: 'Piazza del Colosseo, 1, 00184 Roma RM, Italy',
        location: {
            lat: 41.8902102, 
            lng: 12.4890371
        },
        creator: 'u2'
    },
    {
        id: 'p4',
        title: 'Zongo Park',
        description: 'Beautiful in the middle of the nature in Kinshasa, Democratic Republic Of Congo',
        imageUrl: 'https://www.kwafrikatravel.com/wp-content/uploads/2020/01/Chalet.jpg',
        address: 'located 130 kilometers (90 miles) from Kinshasa',
        location: {
            lat: -4.7776877, 
            lng: 14.9042361
        },
        creator: 'u2'
    },
    {
        id: 'p5',
        title: 'W&A waterfront Cape Town',
        description: 'A stunning place to shop, drink and eat in Cape Town',
        imageUrl: 'https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/bltedce0a1c7693acbc/6139d401402ba23dfc223db6/US_CapeTown_SA_Header.jpg?width=1680&quality=70&auto=webp',
        address: '19 Dock Rd, Cape Town, 8001, South Africa',
        location: {
            lat: -33.906689, 
            lng: 18.4207154
        },
        creator: 'u2'
    }
]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loadedPlaces} />
}

export default UserPlaces;