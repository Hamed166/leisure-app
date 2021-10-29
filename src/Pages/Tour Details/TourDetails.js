import React from 'react';
import { useParams } from 'react-router';

const TourDetails = () => {
    const {tourId}= useParams()
        return (
        <div>
            <h2 className="text-5xl text-red-400 mt-36">this is Tour details{tourId}</h2>
        </div>
    );
};

export default TourDetails;