import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Example cities/zones in Oman
const LOCATIONS = [
  'مسقط', // Muscat
  'صلالة', // Salalah
  'نزوى', // Nizwa
  'صور', // Sur
  'صحار', // Sohar
  'البريمي', // Al Buraimi
  'عبري', // Ibri
  'الباطنة', // Al Batinah
  'الظاهرة', // Al Dhahirah
  'الداخلية', // Ad Dakhiliyah
  'الشرقية', // Ash Sharqiyah
  'الوسطى', // Al Wusta
  'ظفار', // Dhofar
  'مسندم', // Musandam
];

export default function LocationSelector({ 
  value, 
  onSelect, 
  placeholder, 
  iconColor = '#2563eb',
  label 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLocations = LOCATIONS.filter(location =>
    location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (location) => {
    onSelect(location);
    setIsVisible(false);
    setSearchQuery('');
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setIsVisible(true)}
        style={styles.input}>
        <View style={styles.inputContent}>
          {value ? (
            <Text style={styles.selectedText}>{value}</Text>
          ) : (
            <Text style={styles.placeholderText}>{placeholder}</Text>
          )}
          <Ionicons name="chevron-down" size={20} color="#9ca3af" />
        </View>
      </TouchableOpacity>

      <Modal
        visible={isVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Header */}
            <View style={styles.modalHeader}>
              <View style={styles.modalHeaderRow}>
                <Ionicons name="location" size={24} color={iconColor} style={{ marginLeft: 12 }} />
                <Text style={styles.modalTitle}>{label || 'اختر الموقع'}</Text>
              </View>
              <TouchableOpacity
                onPress={() => setIsVisible(false)}
                style={styles.closeButton}>
                <Ionicons name="close" size={24} color="#6b7280" />
              </TouchableOpacity>
            </View>

            {/* Search */}
            <View style={styles.searchContainer}>
              <Ionicons name="search" size={20} color="#9ca3af" style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="ابحث عن موقع..."
                placeholderTextColor="#9ca3af"
                value={searchQuery}
                onChangeText={setSearchQuery}
                textAlign="right"
              />
            </View>

            {/* List */}
            <FlatList
              data={filteredLocations}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleSelect(item)}
                  style={styles.locationItem}>
                  <Ionicons name="location-outline" size={20} color={iconColor} style={{ marginLeft: 12 }} />
                  <Text style={styles.locationText}>{item}</Text>
                  {value === item && (
                    <Ionicons name="checkmark-circle" size={20} color={iconColor} style={{ marginRight: 12 }} />
                  )}
                </TouchableOpacity>
              )}
              ListEmptyComponent={
                <View style={styles.emptyContainer}>
                  <Text style={styles.emptyText}>لا توجد نتائج</Text>
                </View>
              }
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    minHeight: 56,
    justifyContent: 'center',
  },
  inputContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedText: {
    fontSize: 16,
    color: '#111827',
    textAlign: 'right',
    flex: 1,
  },
  placeholderText: {
    fontSize: 16,
    color: '#9ca3af',
    textAlign: 'right',
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '80%',
    paddingBottom: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  modalHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'right',
  },
  closeButton: {
    padding: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  searchIcon: {
    marginLeft: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
    textAlign: 'right',
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  locationText: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
    textAlign: 'right',
  },
  emptyContainer: {
    padding: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#9ca3af',
    textAlign: 'center',
  },
});

