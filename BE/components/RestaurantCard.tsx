// /app/components/RestaurantCard.tsx
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useFavorites } from '../context/FavoritesContext';

export default function RestaurantCard({ restaurant }: { restaurant: any }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorited = favorites.some((r) => r.id === restaurant.id);

  const toggleFavorite = () => {
    isFavorited ? removeFavorite(restaurant.id) : addFavorite(restaurant);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Button
        title={isFavorited ? 'Remove Favorite' : 'Add to Favorites'}
        onPress={toggleFavorite}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { marginRight: 10, width: 200 },
  image: { width: '100%', height: 120, borderRadius: 10 },
  name: { marginVertical: 8, fontWeight: 'bold' }
});
