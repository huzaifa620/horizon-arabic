import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function BookingSummaryModal({ visible, onClose, bookingData, type = 'ticket' }) {
  if (!bookingData) return null;

  const formatDateEnglish = (date) => {
    if (!date) return 'Not selected';
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const getTripTypeEnglish = (tripType) => {
    return tripType === 'single' ? 'One Way' : 'Round Trip';
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Header */}
          <View style={styles.modalHeader}>
            <View style={styles.headerIconContainer}>
              <Ionicons name="checkmark-circle" size={32} color="#16a34a" />
            </View>
            <Text style={styles.modalTitle}>Booking Summary</Text>
            <Text style={styles.modalSubtitle}>Review your booking details</Text>
          </View>

          <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
            {/* Booking Type */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="document-text" size={20} color="#7c3aed" />
                <Text style={styles.sectionTitle}>Booking Type</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.infoText}>{type === 'ticket' ? 'Ticket Booking' : type === 'bus' ? 'Bus Ticket' : type === 'ferry' ? 'Ferry Ticket' : 'Tourism Package'}</Text>
              </View>
            </View>

            {/* Trip Details */}
            {(bookingData.from || bookingData.to) && (
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <Ionicons name="map" size={20} color="#2563eb" />
                  <Text style={styles.sectionTitle}>Route</Text>
                </View>
                <View style={styles.infoBox}>
                  <View style={styles.routeRow}>
                    <Text style={styles.routeLabel}>From:</Text>
                    <Text style={styles.routeValue}>{bookingData.from || 'Not specified'}</Text>
                  </View>
                  <View style={styles.routeRow}>
                    <Text style={styles.routeLabel}>To:</Text>
                    <Text style={styles.routeValue}>{bookingData.to || 'Not specified'}</Text>
                  </View>
                </View>
              </View>
            )}

            {/* Trip Type */}
            {bookingData.tripType && (
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <Ionicons name="swap-horizontal" size={20} color="#ea580c" />
                  <Text style={styles.sectionTitle}>Trip Type</Text>
                </View>
                <View style={styles.infoBox}>
                  <Text style={styles.infoText}>{getTripTypeEnglish(bookingData.tripType)}</Text>
                </View>
              </View>
            )}

            {/* Passengers */}
            {(bookingData.adults !== undefined || bookingData.children !== undefined || bookingData.infants !== undefined) && (
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <Ionicons name="people" size={20} color="#9333ea" />
                  <Text style={styles.sectionTitle}>Passengers</Text>
                </View>
                <View style={styles.infoBox}>
                  {bookingData.adults !== undefined && (
                    <View style={styles.passengerRow}>
                      <Text style={styles.passengerLabel}>Adults:</Text>
                      <Text style={styles.passengerValue}>{bookingData.adults}</Text>
                    </View>
                  )}
                  {bookingData.children !== undefined && bookingData.children > 0 && (
                    <View style={styles.passengerRow}>
                      <Text style={styles.passengerLabel}>Children (3-11):</Text>
                      <Text style={styles.passengerValue}>{bookingData.children}</Text>
                    </View>
                  )}
                  {bookingData.infants !== undefined && bookingData.infants > 0 && (
                    <View style={styles.passengerRow}>
                      <Text style={styles.passengerLabel}>Infants (0-2):</Text>
                      <Text style={styles.passengerValue}>{bookingData.infants}</Text>
                    </View>
                  )}
                </View>
              </View>
            )}

            {/* Dates */}
            {(bookingData.departDate || bookingData.returnDate) && (
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <Ionicons name="calendar" size={20} color="#16a34a" />
                  <Text style={styles.sectionTitle}>Travel Dates</Text>
                </View>
                <View style={styles.infoBox}>
                  {bookingData.departDate && (
                    <View style={styles.dateRow}>
                      <Text style={styles.dateLabel}>Departure:</Text>
                      <Text style={styles.dateValue}>{formatDateEnglish(bookingData.departDate)}</Text>
                    </View>
                  )}
                  {bookingData.returnDate && bookingData.tripType === 'return' && (
                    <View style={styles.dateRow}>
                      <Text style={styles.dateLabel}>Return:</Text>
                      <Text style={styles.dateValue}>{formatDateEnglish(bookingData.returnDate)}</Text>
                    </View>
                  )}
                </View>
              </View>
            )}

            {/* Tourism Package */}
            {bookingData.packageTitle && (
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <Ionicons name="star" size={20} color="#fbbf24" />
                  <Text style={styles.sectionTitle}>Selected Package</Text>
                </View>
                <View style={styles.infoBox}>
                  <Text style={styles.infoText}>{bookingData.packageTitle}</Text>
                  {bookingData.packageDescription && (
                    <Text style={styles.infoSubtext}>{bookingData.packageDescription}</Text>
                  )}
                </View>
              </View>
            )}

            {/* Note */}
            <View style={styles.noteBox}>
              <Ionicons name="information-circle" size={20} color="#2563eb" style={{ marginRight: 8 }} />
              <Text style={styles.noteText}>
                This is a communication request. Our staff will contact you shortly to complete the booking.
              </Text>
            </View>
          </ScrollView>

          {/* Footer */}
          <View style={styles.modalFooter}>
            <TouchableOpacity
              onPress={onClose}
              activeOpacity={0.9}
              style={styles.closeButton}>
              <LinearGradient
                colors={['#2563eb', '#3b82f6']}
                style={styles.closeButtonGradient}>
                <Text style={styles.closeButtonText}>Close</Text>
                <Ionicons name="checkmark" size={20} color="#fff" style={{ marginRight: 8 }} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 28,
    width: '100%',
    maxWidth: 500,
    maxHeight: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.3,
    shadowRadius: 40,
    elevation: 20,
  },
  modalHeader: {
    alignItems: 'center',
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerIconContainer: {
    width: 64,
    height: 64,
    backgroundColor: '#dcfce7',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#111827',
    marginBottom: 8,
  },
  modalSubtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  scrollContent: {
    maxHeight: 400,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
    marginLeft: 8,
  },
  infoBox: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  infoText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#374151',
  },
  infoSubtext: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  routeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  routeLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
  },
  routeValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  passengerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  passengerLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
  },
  passengerValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dateLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
  },
  dateValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  noteBox: {
    flexDirection: 'row',
    backgroundColor: '#eff6ff',
    borderRadius: 12,
    padding: 16,
    margin: 20,
    borderWidth: 1,
    borderColor: '#bfdbfe',
  },
  noteText: {
    flex: 1,
    fontSize: 14,
    color: '#1e40af',
    lineHeight: 20,
  },
  modalFooter: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  closeButton: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  closeButtonGradient: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },
});

