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
        id: 'p1',
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
        id: 'p1',
        title: 'Coliseum',
        description: 'Legendary Gladiator arena located in Roma, Italy',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg',
        address: 'Piazza del Colosseo, 1, 00184 Roma RM, Italy',
        location: {
            lat: 41.8902102, 
            lng: 12.4890371
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