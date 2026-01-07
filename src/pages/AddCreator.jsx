import React, { useState } from 'react';
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';

const AddCreator = () => {
  const navigate = useNavigate();

  const [creator, setCreator] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: '',
    youtube_url: '',
  });

  const handleChange = (e) => {
    setCreator({ ...creator, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!creator.name || !creator.url || !creator.description) {
      alert('Please fill in all required fields: Name, URL, Description.');
      return;
    }

    const { data, error } = await supabase
      .from('creators')
      .insert([
        {
          name: creator.name,
          url: creator.url,
          description: creator.description,
          imageURL: creator.imageURL,
          youtube_url: creator.youtube_url,
        },
      ]);

    if (error) {
      console.error('Error adding creator:', error);
      alert('Failed to add content creator.');
    } else {
      alert('Content creator added!');
      navigate('/'); // go back to home page
    }
  };

  return (
    <div className="add-creator-form">
      <h2>Add a New Content Creator</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={creator.name} onChange={handleChange} />

        <label>URL:</label>
        <input type="text" name="url" value={creator.url} onChange={handleChange} />

        <label>Description:</label>
        <textarea name="description" value={creator.description} onChange={handleChange} />

        <label>Image URL (optional):</label>
        <input type="text" name="imageURL" value={creator.imageURL} onChange={handleChange} />

        <label>YouTube Channel:</label>
        <input type="text" name="youtube_url" placeholder="https://www.youtube.com/@khanacademy" value={creator.youtube_url} onChange={handleChange}
/>

        <button type="submit">Add Creator</button>
      </form>
    </div>
  );
};

export default AddCreator;

