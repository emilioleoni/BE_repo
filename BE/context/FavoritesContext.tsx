import React, { createContext, useContext, useState } from 'react';

type Restaurant = {
  id: string;
  name: string;
  image: string;
};

type FavoritesContextType = {
  favorites: Restaurant[];
  addFavorite: (restaurant: Restaurant) => void;
  removeFavorite: (id: string) => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Restaurant[]>([]);

  const addFavorite = (restaurant: Restaurant) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === restaurant.id);
      return exists ? prev : [...prev, restaurant];
    });
  };

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error('useFavorites must be used within FavoritesProvider');
  return context;
};
