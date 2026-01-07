import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const EditCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [creator, setCreator] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: '',
  });
  const [loading, setLoading] = useState(true);

  // Fetch the creator info when the page loads
  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching creator:', error);
      } else {
        setCreator(data);
      }
      setLoading(false);
    };

    fetchCreator();
  }, [id]);

  // Update the creator in Supabase
  const handleUpdate = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from('creators')
      .update(creator)
      .eq('id', id);

    if (error) {
      console.error('Error updating creator:', error);
    } else {
      alert('Creator updated!');
      navigate('/'); // Go back to home page
    }
  };

  // Delete the creator from Supabase
  const handleDelete = async () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this creator?'
    );
    if (!confirmed) return;

    const { error } = await supabase
      .from('creators')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting creator:', error);
    } else {
      alert('Creator deleted!');
      navigate('/'); // Go back to home page
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="edit-creator">
      <h2>Edit Creator</h2>
      <form onSubmit={handleUpdate}>
        <label>
          Name:
          <input
            type="text"
            value={creator.name}
            onChange={(e) => setCreator({ ...creator, name: e.target.value })}
          />
        </label>
        <label>
          URL:
          <input
            type="text"
            value={creator.url}
            onChange={(e) => setCreator({ ...creator, url: e.target.value })}
          />
        </label>
        <label>
          Description:
          <textarea
            value={creator.description}
            onChange={(e) =>
              setCreator({ ...creator, description: e.target.value })
            }
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            value={creator.imageURL || ''}
            onChange={(e) =>
              setCreator({ ...creator, imageURL: e.target.value })
            }
          />
        </label>
        <button type="submit">Update Creator</button>
      </form>

     
      <button
        onClick={handleDelete}
        style={{ marginTop: '1rem', backgroundColor: 'red', color: 'white' }}
      >
        Delete Creator
      </button>
    </div>
  );
};

export default EditCreator;

