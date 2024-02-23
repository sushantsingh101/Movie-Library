import React from 'react'
 import ReactStar from 'react-rating-stars-component'
 import Reviews from './Reviews'


const Detail = () => {
  return (
    <div className='p-4 mt-4 flex w-full'>
      <img className='h-96' src='https://lumiere-a.akamaihd.net/v1/images/hb_disneyplus_skywalkersaga_mobile_19267_e964ed2c.jpeg?region=0,0,640,400' />
      <div className='ml-4 w-1/2'>
        <h1 className='text-2xl font-bold'>jony wick<span className='text-xl'>(2014)</span></h1>
        <ReactStar 
         size={20}
         half={true}
         value={4.5}
         edit={false}
         />
      <p className='mt-3 text-xl'>
      A space opera set “a long time ago in a galaxy far, far away,” the film centres on Luke Skywalker (played by the then relatively unknown Mark Hamill), a young man who finds himself embroiled in an interplanetary war between an authoritarian empire a (played by the then relatively unknown Mark Hamill), a young man who finds himself embroiled in an interplanetary war between an authoritarian empire and rebel forcesA space opera set “a long time ago in a galaxy far, far away,” the film centres on Luke Skywalker (played by the then relatively unknown Mark Hamill), a young man who finds himself embroiled in an interplanetary war between an authoritarian empire and rebel forcesA space opera set “a long time ago in a galaxy far, far away,” the film centres on Luke Skywalker (played by the then relatively unknown Mark Hamill), a young man who finds himself embroiled in an interplanetary war between an authoritarian empire and rebel forcesA space opera set “a long time ago in a galaxy far, far away,” the film centres on Luke Skywalker (played by the then relatively unknown Mark Hamill), a young man who finds himself embroiled in an interplanetary war between an authoritarian empire and rebel forcesA space opera set “a long time ago in a galaxy far, far away,” the film centres on Luke Skywalker (played by the then relatively unknown Mark Hamill), a young man who finds himself embroiled in an interplanetary war between an authoritarian empire and rebel forcesA space opera set “a long time ago in a galaxy far, far away,” the film centres on Luke Skywalker (played by the then relatively unknown Mark Hamill), a young man who finds himself embroiled in an interplanetary war between an authoritarian empire and rebel forcesA space opera set “a long time ago in a galaxy far, far away,” the film centres on Luke Skywalker (played by the then relatively unknown Mark Hamill), a young man who finds himself embroiled in an interplanetary war between an authoritarian empire and rebel forces
      </p>
      <Reviews />
      </div>
    </div>
  )
}

export default Detail
