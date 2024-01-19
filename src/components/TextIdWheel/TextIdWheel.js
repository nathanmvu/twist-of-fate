import React, { useState, useEffect, useRef } from 'react';
import './TextIdWheel.css';
import trackIds from '../../assets/track_ids.txt'
import Papa from 'papaparse';

const SelectTrackFromTimestamp = ({playerTimeStamp, timestamps, titles, artists})=> {
  useEffect(() => {
    console.log('playerTimeStamp',playerTimeStamp.current);
  }, [playerTimeStamp])
  
};


const TextIdWheel = () => {
  const [fileContent, setFileContent] = useState('');
  const [titleArray, setTitleArray] = useState([]);
  const [columnData, setColumnData] = useState({});

  useEffect(() => {
    console.log('swag')
    console.log(process.env.PUBLIC_URL)

    const fetchData = async () => {
      try {
        const response = await fetch(trackIds); // path to your file
        const content = await response.text();
        Papa.parse(content,{
            header: true,
            complete:(result)=>{
                
                console.log(result.data);
                setTitleArray((prevTitleArray) => [...prevTitleArray, ...result.data]);
                // result.data contains the parsed CSV data
                // Separate the data into columns
                const columns = Object.keys(result.data[0]);

                // Initialize an object to store column arrays
                const newData = {};
                columns.forEach((column) => {
                    newData[column] = result.data.map((row) => row[column]);
                });

                // Update the state with the new column data
                setColumnData(newData);
                
            },
        });

        setFileContent(content);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    }, []);

const titles = columnData['title'] || [];
const artists = columnData['artist'] || [];
const timeStamps = columnData['timeStamp'] || [];

  return (
    <div>
      <pre>{titles}</pre>
      <pre>{artists}</pre>
    </div>
  );
};

export {TextIdWheel, SelectTrackFromTimestamp};


// algorithm idea for tying music player progression to track id display
// each time the music player increments: iterate over the array of track id time stamps
// if the time stamp matches a time stamp in the list return the integer id or array position
// next time the music player progresses only check array pos +1.
// if the the time stamp does not match a time stamp in the list 
// then don't change the text being displayed