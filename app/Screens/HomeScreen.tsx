import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, Searchbar } from 'react-native-paper';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <Searchbar
          placeholder="Search for a drink..."
          style={styles.searchBar}
          value=""
        />
        <IconButton icon="filter-variant" size={28} style={styles.filterIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 32,
    backgroundColor: '#25292e',
    flex: 1,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
  },
  filterIcon: {
    marginLeft: 8,
  },
});
