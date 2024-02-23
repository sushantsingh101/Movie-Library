import React, { useState } from 'react'
import ReactStar from 'react-rating-stars-component'
import { reviewsRef } from './firebase/firebase';
import { addDoc } from 'firebase/firestore';
import { TailSpin } from 'react-loader-spinner';
import swal from 'sweetalert';

const Reviews = () => {
    const [rating,setRating] = useState(0);
const [loading, setLoading] = useState(false);


const sendReviews = async () => {
    try {
        
        
     
        swal({
            title:"Reviews Sent",
            icon: "success",
            button: false,
            timer: 3000
          });


    } catch (error) {
        swal({
            title: error.message,
            icon: "errr",
            button: false,
            timer: 3000
          });
    }
}
  return (
    <div className='mt-2 py-1 border-gray-700 w-full'>
       <ReactStar 
       size={30}
       half={true}
       onChange={(rate) => setRating(rate)}
       
       
       />
       
       
        <input
        placeholder  ='share your thoughs... '
        className='w-full p-2 outline-none header color-gray'
        />
        <button className='bg-green-600 flex p-2 justify-center w-full '>{loading ? <TailSpin height={40} color='white'/> : 'Share'}</button>
      
    </div>
  )
}

export default Reviews
