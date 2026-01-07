import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import Card from '../components/Card';
import './ShowCreators.css'; // New CSS for the grid

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        console.error('Error fetching creators:', error);
      } else {
        setCreators(data);
      }
      setLoading(false);
    };

    fetchCreators();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (creators.length === 0) return <p>No content creators found. Add one!</p>;

  return (
    <div className="creators-grid">
      {creators.map((creator) => (
        <Card key={creator.id} creator={creator} />
      ))}
    </div>
  );
};

export default ShowCreators;

