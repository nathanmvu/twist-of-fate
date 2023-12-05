import React, { useState, useEffect } from 'react';
import './TextIdWheel.css';
import trackIds from '../../assets/track_ids.txt'
import Papa from 'papaparse';

// Papa.parse(csvText, {
//   header: false,
//   complete: (result) => {
//     console.log(result.data);
//   },
// });

const TextIdWheel = () => {
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    console.log('swag')
    console.log(process.env.PUBLIC_URL)

    const fetchData = async () => {
      try {
        const response = await fetch(trackIds); // path to your file
        const content = await response.text();
        
        Papa.parse(content,{
            header: false,
            complete:(result)=>{
                console.log(result.data);
            },
        });

        setFileContent(content);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <pre>{fileContent}</pre>
    </div>
  );
};

export default TextIdWheel;


// algorithm idea for tying music player progression to track id display
// each time the music player increments: iterate over the array of track id time stamps
// if the time stamp matches a time stamp in the list return the integer id or array position
// next time the music player progresses only check array pos +1.
// if the the time stamp does not match a time stamp in the list 
// then don't change the text being displayed