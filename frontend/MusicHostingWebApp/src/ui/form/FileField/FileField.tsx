 import React from 'react';
 import {IoCloseCircle} from 'react-icons/io5';
 import {MdOutlineFileUpload} from 'react-icons/md';

 import './FileField.scss';

 function FileField() {
   const [file, setFile] = React.useState<File | null>(null);
   const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);
   const ref = React.useRef<HTMLInputElement>(null);

   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setPreviewUrl(URL.createObjectURL(selectedFile));
        }
    };

   const handleRemoveFile = () => {
        setFile(null);
        setPreviewUrl(null);
        if (ref.current) {
            ref.current.value = '';
        }
    };

   return (
      <label 
         className='FileField'
         htmlFor='file-upload-input'
      >
         <input 
            type='file'
            id='file-upload-input'
            style={{display: 'none'}}
            onChange={handleFileChange}
            ref={ref}
            accept='image/*'
         />
         {file ? (
            <div className='FileField__uploaded-file'>
               {previewUrl && (
                  <div className='FileField__preview'>
                     <img 
                        src={previewUrl}
                        alt='Фото'
                        className='FileField__image-preview'
                     />
                  </div>
               )}
               <button className='FileField__remove-button'>
                  <IoCloseCircle fill='white' className='FileField__remove-icon' size={24}/>
               </button>
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
