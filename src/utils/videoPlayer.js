import React from 'react';

const VideoPlayer = () => {
    return (
        <div >
            <video  controls autoPlay loop className='w-52 h-52' >
      <source  src="/Step3.mp4" type="video/mp4" />
     
    </video>
        </div>
    );
};

export default VideoPlayer;