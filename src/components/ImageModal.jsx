import React from 'react';
import Modal from 'react-modal';
import Article from '../Assets/Article.png';

const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
  
    return (
     <>
      <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
    >
      <img src={Article} alt="Modal Image" />
      <button onClick={onRequestClose}>Close</button>
    </Modal>
    </>
    );  
  
 
}

export default ImageModal 