import React, { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';

import ReactStar from "react-rating-stars-component";
import {getDocs} from 'firebase/firestore';
import { moviesRef } from './firebase/firebase';
import { Link } from 'react-router-dom';

const Cards = () => {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
async function getData() {
setLoading(true);
const data = await getDocs(moviesRef);
data.forEach((doc) =>{
    setData((prv) => [...prv, {...(doc.data()), id: doc.id}])
})
setLoading(false);
}
getData();
},[])

  return (
    <div className='flex flex-warp justify-between px-3 mt-2'>
        {loading ?<div className='w-full flex justify-center items-center h-96'> <TailSpin /> </div>:
        data.map((e,i) => {
            return(

            
        <Link  to={`/detail/${e.id}`}><div key={i} className='card text-lg font-medium shadow-lg p-2 hover:translate-y-1 cursor-pointer mt-3 transition-all duration-500'>
         <img className=' h-60 md:h-72' src={e.imgae}/>
         <h1><span className='text-gray-500'>NAME</span>{e.title}</h1>
         <h1 className='flex items-center'><span className='text-gray-500 mr-1'>RATING</span>{e.rating}
         <ReactStar 
         size={20}
         half={true}
         value={e.rating}
         edit={false}
         />
         </h1>
         <h1>
            <span className='text-gray-500'>YEAR</span>{e.year}
            </h1>
         
        </div></Link>
        )
    })

}
    </div>
  )
}

export default Cards
