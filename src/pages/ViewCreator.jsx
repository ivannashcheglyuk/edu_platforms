import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';

const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <p>Loading...</p>;
  if (!creator) return <p>Creator not found.</p>;

  return (
    <div className="view-creator">
      <h2>{creator.name}</h2>
      {creator.imageURL && (
        <img src={creator.imageURL} alt={creator.name} width="200" />
      )}
      <p>{creator.description}</p>
      {creator.url && (
        <p>
          <a href={creator.url} target="_blank" rel="noopener noreferrer">
            Visit platform
          </a>
        </p>
      )}

      {/* Edit button */}
      <p>
        <Link to={`/edit/${creator.id}`} className="edit-link">
          Edit
        </Link>
      </p>
    </div>
  );
};

export default ViewCreator;


