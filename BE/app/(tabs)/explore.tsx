import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { categories } from '@/constants/data';
import CategoryRow from '@/components/CategoryRow';

export default function Explore() {
  return (
    <View style={styles.screen}>
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>Home</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        {categories.map((cat) => (
          <View key={cat.id} style={styles.section}>
            <Text style={styles.sectionTitle}>{cat.title}</Text>
            <CategoryRow title={cat.title} restaurants={cat.restaurants} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'linear-gradient(180deg, #FFA726 0%, #FFCC80 100%)', // optional, use image bg or gradient lib
  },
  headerWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#FFA726',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  scroll: {
    paddingHorizontal: 16,
    paddingBottom: 100,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
});
