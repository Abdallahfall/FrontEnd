import React from 'react';
import'./App.css'

const FlightComponent = () => {
  return (
    <div className="p-10">
      <div className="max-w-full bg-white flex flex-col  shadow-lg " style={{width:'550px', borderTopLeftRadius:'20px', borderTopRightRadius:'20px'}}>
        <div className="flex flex-row items-baseline flex-nowrap bg-gray-100 p-1" style={{height:'40px' ,borderTopLeftRadius:'20px',borderTopRightRadius:'18px'}}>
          <svg viewBox="0 0 64 64" data-testid="tripDetails-bound-plane-icon" pointerEvents="all" aria-hidden="true" className="mt-2 mr-1" role="presentation" style={{ fill: 'rgb(102, 102, 102)', height: '0.9rem', width: '0.9rem' }}>
            <path d="M43.389 38.269L29.222 61.34a1.152 1.152 0 01-1.064.615H20.99a1.219 1.219 0 01-1.007-.5 1.324 1.324 0 01-.2-1.149L26.2 38.27H11.7l-3.947 6.919a1.209 1.209 0 01-1.092.644H1.285a1.234 1.234 0 01-.895-.392l-.057-.056a1.427 1.427 0 01-.308-1.036L1.789 32 .025 19.656a1.182 1.182 0 01.281-1.009 1.356 1.356 0 01.951-.448l5.4-.027a1.227 1.227 0 01.9.391.85.85 0 01.2.252L11.7 25.73h14.5L19.792 3.7a1.324 1.324 0 01.2-1.149A1.219 1.219 0 0121 2.045h7.168a1.152 1.152 0 011.064.615l14.162 23.071h8.959a17.287 17.287 0 017.839 1.791Q63.777 29.315 64 32q-.224 2.685-3.807 4.478a17.282 17.282 0 01-7.84 1.793h-9.016z"></path>
          </svg>
          <h1 className="ml-2 text-sm uppercase font-bold text-gray-500">departure</h1>
          <p className="ml-2 font-normal text-gray-500">Wednesday 18 Aug</p>
        </div>
        <div className="flex justify-start wrap" style={{height:'120px'}}>

        <div className="mt-1 flex justify-start bg-white p-1" style={{height:'40px'}}>
          <div className="flex mx-2 ml-6 h8 px-2 flex-row items-baseline rounded-full bg-gray-100 p-1">
            <svg viewBox="0 0 64 64" pointerEvents="all" aria-hidden="true" className="etiIcon css-jbc4oa" role="presentation" style={{ fill: 'rgb(102, 102, 102)', height: '10px', width: '10px' }}>
              <path d="M43.389 38.269L29.222 61.34a1.152 1.152 0 01-1.064.615H20.99a1.219 1.219 0 01-1.007-.5 1.324 1.324 0 01-.2-1.149L26.2 38.27H11.7l-3.947 6.919a1.209 1.209 0 01-1.092.644H1.285a1.234 1.234 0 01-.895-.392l-.057-.056a1.427 1.427 0 01-.308-1.036L1.789 32 .025 19.656a1.182 1.182 0 01.281-1.009 1.356 1.356 0 01.951-.448l5.4-.027a1.227 1.227 0 01.9.391.85.85 0 01.2.252L11.7 25.73h14.5L19.792 3.7a1.324 1.324 0 01.2-1.149A1.219 1.219 0 0121 2.045h7.168a1.152 1.152 0 011.064.615l14.162 23.071h8.959a17.287 17.287 0 017.839 1.791Q63.777 29.315 64 32q-.224 2.685-3.807 4.478a17.282 17.282 0 01-7.84 1.793h-9.016z"></path>
            </svg>
            <p className="font-normal text-sm ml-1 text-gray-500">Economy</p>
          </div>
        </div>
        <div class="mt-2 flex sm:flex-row mx-6 sm:justify-between flex-wrap " style={{height:'100px'}}>
      <div class="flex flex-row place-items-center p-2" >
        <img src="airsenegal.png" alt="AirSenegal" style={{height:'40px',width:'50px',marginRight:'40px'}}/>
        <div class="flex flex-col ml-2">
          <p class="text-xs text-gray-500 font-bold">Air Senegal</p>
          <p class="text-xs text-gray-500">HC145</p>
          <div class="text-xs text-gray-500">2x23kg</div>
        </div>
      </div>
        </div>

      <div class="flex flex-col p-1">
        <p class="font-bold">18:25</p>
        <p class="text-gray-500 text-sm"><span class="font-bold">DSS</span> Diass</p>
        <p class="text-gray-500 text-sm">Dakar</p>
      </div>
      <div class="flex flex-col flex-wrap p-1 ml-2">
        <p class="font-bold">01:00</p>
        <p class="text-gray-500 text-sm"><span class="font-bold text-sm">CDG</span> Paris</p>
        <p class="text-gray-500 text-sm">Paris</p>
      </div>
    </div>
    <div className='flex flex-start' style={{height:'150px'}}>

    <div class=" bg-gray-100 flex flex-row flex-wrap md:flex-nowrap justify-between items-baseline">
      <div class="flex mx-4 py-4 flex-row flex-wrap items-center">
        <svg class="w-11 h-8 p-2 mx-2 self-center bg-gray-400 rounded-full fill-current text-white" viewBox="0 0 64 64" pointer-events="all" aria-hidden="true" role="presentation"><path d="M43.389 38.269L29.222 61.34a1.152 1.152 0 01-1.064.615H20.99a1.219 1.219 0 01-1.007-.5 1.324 1.324 0 01-.2-1.149L26.2 38.27H11.7l-3.947 6.919a1.209 1.209 0 01-1.092.644H1.285a1.234 1.234 0 01-.895-.392l-.057-.056a1.427 1.427 0 01-.308-1.036L1.789 32 .025 19.656a1.182 1.182 0 01.281-1.009 1.356 1.356 0 01.951-.448l5.4-.027a1.227 1.227 0 01.9.391.85.85 0 01.2.252L11.7 25.73h14.5L19.792 3.7a1.324 1.324 0 01.2-1.149A1.219 1.219 0 0121 2.045h7.168a1.152 1.152 0 011.064.615l14.162 23.071h8.959a17.287 17.287 0 017.839 1.791Q63.777 29.315 64 32q-.224 2.685-3.807 4.478a17.282 17.282 0 01-7.84 1.793h-9.016z"></path></svg>
        <div>
        <div class="text-sm flex flex-col mx-3">
          <p class="text-sm mt-0 mb-0">Standard Ticket</p>
          <p class="font-bold text-sm mt-0 mb-0">$404.73</p>
          <p class=" text-gray-500 mt-0 mb-1">Price per adult</p>
        </div>
        <button class="w-28 h-9 rounded flex border-solid border bg-white justify-center place-items-center "><div class="">Book</div></button>
      </div>
        </div>
      <div class="md:border-l-4 md:border-dotted flex flex-wrap items-center ml-">
        <div class="text-sm mx-5 flex flex-col">
          <p class='mt-0 mb-0'>Flexible Ticket</p>
          <p class="font-bold mt-0 mb-0">$605.43</p>
          <p class="text-xs text-gray-500 mt-0 mb-0">Price per adult</p>
        </div>
        <button class="w-28 h-9 rounded flex border-solid border text-white bg-green-800 mx-2 justify-center place-items-center"><div class="">Book</div></button>
      </div>
    </div>
    </div>
  </div>
</div>
 )}
 export default FlightComponent;