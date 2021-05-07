import { useEffect, useState, createContext, useContext } from 'react';
import { api } from '../services/api';
import { Button } from './Button';
import '../styles/sidebar.scss';

// VARIAVEIS

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}



// FUNÇÃO
export function SideBar(props: any) {
  // VARIAVEIS DA FUNÇÃO
  
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(()=> {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  })



  // RETURN
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}