import React, { useState, useEffect } from 'react';
import './PokemonCardGenerator.css';

const PokemonCardGenerator = () => {
  // State to store current Pokemon data
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Type colors mapping
  const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };

  // Function to fetch Pokemon data
  const fetchPokemonData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Generate random ID between 1-150
      const randomId = Math.floor(Math.random() * 150) + 1;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch Pokemon data');
      }
      
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
      setError('Failed to load Pokemon. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect to load initial Pokemon on component mount
  useEffect(() => {
    fetchPokemonData();
  }, []);

  // Handle generate button click
  const handleGenerateClick = () => {
    fetchPokemonData();
  };

  // Get theme color based on Pokemon's primary type
  const getThemeColor = () => {
    if (!pokemonData || !pokemonData.types.length) return '#95afc0';
    return typeColor[pokemonData.types[0].type.name] || '#95afc0';
  };

  // Dynamic styles for card background and type colors
  const cardDynamicStyle = {
    background: `radial-gradient(circle at 50% 0%, ${getThemeColor()} 36%, #ffffff 36%)`,
  };

  const typeSpanStyle = {
    backgroundColor: getThemeColor(),
  };

  return (
    <div className="app-container">
      <div className="main-wrapper">
        {/* Pokemon Card */}
        <div className="pokemon-card" style={cardDynamicStyle}>
          {isLoading ? (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Loading Pokemon...</p>
            </div>
          ) : error ? (
            <div className="error-state">
              <p>{error}</p>
            </div>
          ) : pokemonData ? (
            <>
              {/* HP Section */}
              <div className="hp-container">
                <span className="hp-label">HP</span>
                <div className="hp-value">{pokemonData.stats[0].base_stat}</div>
              </div>

              {/* Pokemon Image */}
              <div className="image-container">
                <img 
                  src={pokemonData.sprites.other.dream_world.front_default} 
                  alt={pokemonData.name}
                  className="pokemon-image"
                  onError={(e) => {
                    e.target.src = pokemonData.sprites.front_default;
                  }}
                />
              </div>

              {/* Pokemon Name */}
              <h2 className="pokemon-name">
                {pokemonData.name}
              </h2>

              {/* Types */}
              <div className="types-container">
                {pokemonData.types.map((type, index) => (
                  <span
                    key={index}
                    className="type-badge"
                    style={typeSpanStyle}
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="stats-container">
                <div className="stat-item">
                  <h3 className="stat-value">{pokemonData.stats[1].base_stat}</h3>
                  <p className="stat-label">Attack</p>
                </div>
                <div className="stat-item">
                  <h3 className="stat-value">{pokemonData.stats[2].base_stat}</h3>
                  <p className="stat-label">Defense</p>
                </div>
                <div className="stat-item">
                  <h3 className="stat-value">{pokemonData.stats[5].base_stat}</h3>
                  <p className="stat-label">Speed</p>
                </div>
              </div>
            </>
          ) : null}
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerateClick}
          disabled={isLoading}
          className={`generate-btn ${isLoading ? 'loading' : ''}`}
        >
          {isLoading ? 'Loading...' : 'Generate'}
        </button>
      </div>
    </div>
  );
};

export default PokemonCardGenerator;