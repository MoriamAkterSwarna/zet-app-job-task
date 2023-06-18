import React from 'react';

const DetailsForm = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold mb-8'>Provide your details</h2>

 
    <div className="">
      
      <form >
        <div>
        <label className="label">
            <span className="label-text">Organisation Name*</span>
          </label>
          <input type="text"  className="input input-bordered w-full" required />
        </div>
        <div>
        <label className="label">
            <span className="label-text">About*</span>
          </label>
          <textarea  className='input bg-blue-50 p-3 w-full h-24'  placeholder='Enter your text here' required></textarea>
        </div>
        <div className='grid grid-cols-2 gap-6'>
        <div>
        <label className="label">
            <span className="label-text">Point Of Contact*</span>
          </label>
          <input type="text"  className="input input-bordered w-full" required />
        </div>
        <div>
        <label className="label">
            <span className="label-text">Designation*</span>
          </label>
          <input type="text"  className="input input-bordered  w-full" required />
        </div>
        <div>
        <label className="label">
            <span className="label-text">Phone Number*</span>
          </label>
          <input type="number"  className="input input-bordered  w-full" required />
        </div>
        <div>
        <label className="label">
            <span className="label-text">Email ID*</span>
          </label>
          <input type="email"  className="input input-bordered  w-full" required />
        </div>
        </div>
        <hr className='mt-4' />
        <input className='btn-primary btn mt-6 mb-4 ml-96' type='submit' value="Submit"></input>
      </form>
       
    </div> 
  </div>
    );
};

export default DetailsForm;