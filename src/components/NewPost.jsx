import React, {useState} from 'react';
import { makeNewPost } from '../API-Adapt';

const NewPost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [delivery, setDelivery] = useState(true);
 return(
    <div>
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <label>Title</label>
            <input type='text'></input>
            <label>Description</label>
            <input type='text'></input>
            <label>Price</label>
            <input type='number'></input>
            <label>Delivery</label>
            <input type='checkbox' value='Will Deliver'></input>
            <button> Submit</button>
        </form>
    </div>
 )
}

export default NewPost;