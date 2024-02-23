import React, { useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import { addDoc } from "firebase/firestore";
import { moviesRef } from './firebase/firebase';
import swal from 'sweetalert';

const AddMovies = () => {
    const [from, setFrome] = useState({
        title:"",
        year:"",
        description:"",
        image:"",
    });
const [loading, setLoading] = useState(false);

const AddMovies = async () => {
  setLoading(true);
  try{
  await addDoc(moviesRef, from);
  swal({
    title:"Successfully Added",
    icon: "success",
    button: false,
    timer: 3000
  });
} catch(err){
  swal({
    title:err,
    icon: "err",
    button: false,
    timer: 3000
    
  })
}
setLoading(false);
}

  return (
    <section class="text-gray-600 body-font relative">
  <div class="absolute inset-0 bg-black-500">
    
  </div>
  <div class="container px-5 py-24 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">ADD Movies</h2>
      <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Title</label>
        <input type="name" id="name" name="name" value={from.title} onChange={(e) => setFrome({...from, title: e.target.value})} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Image link</label>
        <input type="name" id="name" name="name" value={from.image} onChange={(e) => setFrome({...from, image: e.target.value})} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="year" class="leading-7 text-sm text-gray-600">YEAR</label>
        <input type="year" id="year" name="year" value={from.year} onChange={(e) => setFrome({...from, year: e.target.value})} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Description</label>
        <textarea id="message" name="message" value={from.description} onChange={(e) => setFrome({...from, description: e.target.value})} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button onClick={AddMovies} class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{loading ? <TailSpin height={25} color="white"  />: 'Submit'}
      </button>
      <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>
</section>
  )
}

export default AddMovies
