 import React from 'react';
 import {MdOutlineFileUpload} from 'react-icons/md';

 import './FileField.scss';

 function FileField() {
   const [file, setFile] = React.useState<File | null>(null);
   return(
      <label 
         className='FileField'
         htmlFor='file-upload-input'
      >
         <input 
            type='file'
            id='file-upload-input'
            style={{display: 'none'}}
         />
         {file ? (
            <div>

            </div>
         ) : (
            <div className='FileField__placeholder'>
               <MdOutlineFileUpload size={20}/>
               <span>Выбирете файл</span>
            </div>
         )}
      </label>
   );
 };

 export default FileField;
