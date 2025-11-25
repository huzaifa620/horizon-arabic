import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import LocationSelector from '../components/LocationSelector';

export default function FerryBookingScreen() {
  const [tripType, setTripType] = useState('single');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [from, setFrom] = useState('');
  const [options, setOptions] = useState('');
  const [date, setDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showReturnDatePicker, setShowReturnDatePicker] = useState(false);

  const increment = (setter, value) => {
    setter(value + 1);
  };

  const decrement = (setter, value) => {
    if (value > 0) setter(value - 1);
  };

  const formatDate = (date) => {
    if (!date) return 'يوم-شهر-سنة';
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (event.type === 'set' && selectedDate) {
      setDate(selectedDate);
    }
  };

  const onReturnDateChange = (event, selectedDate) => {
    setShowReturnDatePicker(Platform.OS === 'ios');
    if (event.type === 'set' && selectedDate) {
      setReturnDate(selectedDate);
    }
  };

  return (
    <SafeAreaView className="flex-1" edges={['top']} style={{ backgroundColor: '#7c2d12' }}>
      <ScrollView 
        className="flex-1" 
        contentContainerStyle={{ direction: 'rtl', paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}>
        
        {/* Premium Hero Header */}
        <LinearGradient
          colors={['#7c2d12', '#ea580c', '#f97316']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroContainer}>
          <View style={styles.heroContent}>
            <View style={styles.heroIconContainer}>
              <Ionicons name="boat" size={52} color="#fff" />
            </View>
            <Text style={styles.heroTitle}>
              حجز رحلة عبارة
            </Text>
            <Text style={styles.heroSubtitle}>
              رحلات بحرية مريحة
            </Text>
          </View>
        </LinearGradient>

        <View className="px-6" style={{ marginTop: -30 }}>
          <View style={styles.formCard}>
            {/* Trip Type Section */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <View style={[styles.sectionIconContainer, styles.orangeIcon]}>
                  <Ionicons name="swap-horizontal" size={24} color="#ea580c" />
                </View>
                <Text style={styles.sectionTitle}>
                  نوع الرحلة
                </Text>
              </View>
              
              <View style={styles.tripTypeContainer}>
                <TouchableOpacity
                  onPress={() => setTripType('return')}
                  activeOpacity={0.8}
                  style={styles.tripTypeButton}>
                  <LinearGradient
                    colors={tripType === 'return' 
                      ? ['#dc2626', '#ef4444'] 
                      : ['#fff7ed', '#ffedd5']}
                    style={[styles.tripTypeGradient, tripType === 'return' && styles.tripTypeActive]}>
                    <View style={styles.radioContainer}>
                      <View style={[styles.radio, tripType === 'return' && styles.radioActive]}>
                        {tripType === 'return' && <View style={styles.radioDot} />}
                      </View>
                      <Text style={[styles.tripTypeText, tripType === 'return' && styles.tripTypeTextActive]}>
                        ذهاب وإياب
                      </Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setTripType('single')}
                  activeOpacity={0.8}
                  style={styles.tripTypeButton}>
                  <LinearGradient
                    colors={tripType === 'single' 
                      ? ['#dc2626', '#ef4444'] 
                      : ['#fff7ed', '#ffedd5']}
                    style={[styles.tripTypeGradient, tripType === 'single' && styles.tripTypeActive]}>
                    <View style={styles.radioContainer}>
                      <View style={[styles.radio, tripType === 'single' && styles.radioActive]}>
                        {tripType === 'single' && <View style={styles.radioDot} />}
                      </View>
                      <Text style={[styles.tripTypeText, tripType === 'single' && styles.tripTypeTextActive]}>
                        ذهاب
                      </Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>

            {/* Passengers Section */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <View style={[styles.sectionIconContainer, styles.purpleIcon]}>
                  <Ionicons name="people" size={24} color="#9333ea" />
                </View>
                <Text style={styles.sectionTitle}>
                  المسافرين
                </Text>
              </View>

              {/* Adults */}
              <View style={styles.passengerCard}>
                <Text style={styles.passengerLabel}>بالغ</Text>
                <View style={styles.counterContainer}>
                  <TouchableOpacity
                    onPress={() => increment(setAdults, adults)}
                    activeOpacity={0.8}
                    style={[styles.counterButton, styles.orangeCounter]}>
                    <Ionicons name="add" size={26} color="#fff" />
                  </TouchableOpacity>
                  <View style={[styles.counterDisplay, styles.orangeCounterDisplay]}>
                    <Text style={styles.counterText}>{adults}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => decrement(setAdults, adults)}
                    activeOpacity={0.8}
                    disabled={adults === 0}
                    style={[styles.counterButton, styles.counterButtonMinus, adults === 0 && styles.counterButtonDisabled]}>
                    <Ionicons name="remove" size={26} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Children */}
              <View style={styles.passengerCard}>
                <Text style={styles.passengerLabel}>طفل (3-11 سنة)</Text>
                <View style={styles.counterContainer}>
                  <TouchableOpacity
                    onPress={() => increment(setChildren, children)}
                    activeOpacity={0.8}
                    style={[styles.counterButton, styles.orangeCounter]}>
                    <Ionicons name="add" size={26} color="#fff" />
                  </TouchableOpacity>
                  <View style={[styles.counterDisplay, styles.orangeCounterDisplay]}>
                    <Text style={styles.counterText}>{children}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => decrement(setChildren, children)}
                    activeOpacity={0.8}
                    disabled={children === 0}
                    style={[styles.counterButton, styles.counterButtonMinus, children === 0 && styles.counterButtonDisabled]}>
                    <Ionicons name="remove" size={26} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Infants */}
              <View style={styles.passengerCard}>
                <Text style={styles.passengerLabel}>رضيع (0-2 سنوات)</Text>
                <View style={styles.counterContainer}>
                  <TouchableOpacity
                    onPress={() => increment(setInfants, infants)}
                    activeOpacity={0.8}
                    style={[styles.counterButton, styles.orangeCounter]}>
                    <Ionicons name="add" size={26} color="#fff" />
                  </TouchableOpacity>
                  <View style={[styles.counterDisplay, styles.orangeCounterDisplay]}>
                    <Text style={styles.counterText}>{infants}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => decrement(setInfants, infants)}
                    activeOpacity={0.8}
                    disabled={infants === 0}
                    style={[styles.counterButton, styles.counterButtonMinus, infants === 0 && styles.counterButtonDisabled]}>
                    <Ionicons name="remove" size={26} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Route Section */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <View style={[styles.sectionIconContainer, styles.greenIcon]}>
                  <Ionicons name="map" size={24} color="#16a34a" />
                </View>
                <Text style={styles.sectionTitle}>
                  المسار
                </Text>
              </View>

              {/* From */}
              <View style={styles.inputGroup}>
                <View style={styles.inputLabelRow}>
                  <Ionicons name="location" size={20} color="#ea580c" />
                  <Text style={styles.inputLabel}>من</Text>
                </View>
                <LocationSelector
                  value={from}
                  onSelect={setFrom}
                  placeholder="ابحث من (مثال: مسقط، صلالة)"
                  iconColor="#ea580c"
                  label="اختر نقطة المغادرة"
                />
              </View>

              {/* Options */}
              <View style={styles.inputGroup}>
                <View style={styles.inputLabelRow}>
                  <Ionicons name="options" size={20} color="#9333ea" />
                  <Text style={styles.inputLabel}>الخيارات</Text>
                </View>
                <TextInput
                  placeholder="الخيارات..."
                  value={options}
                  onChangeText={setOptions}
                  style={styles.input}
                  textAlign="right"
                  placeholderTextColor="#9ca3af"
                />
              </View>

              {/* Departure Date */}
              <View style={styles.inputGroup}>
                <View style={styles.inputLabelRow}>
                  <Ionicons name="calendar" size={20} color="#9333ea" />
                  <Text style={styles.inputLabel}>
                    {tripType === 'return' ? 'تاريخ المغادرة' : 'التاريخ'}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => setShowDatePicker(true)}
                  style={styles.input}>
                  <Text style={[styles.dateText, !date && styles.datePlaceholder]}>
                    {formatDate(date)}
                  </Text>
                </TouchableOpacity>
                {showDatePicker && (
                  <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onDateChange}
                    minimumDate={new Date()}
                    locale="ar"
                  />
                )}
              </View>

              {/* Return Date - Only show if round trip */}
              {tripType === 'return' && (
                <View style={styles.inputGroup}>
                  <View style={styles.inputLabelRow}>
                    <Ionicons name="calendar-outline" size={20} color="#9333ea" />
                    <Text style={styles.inputLabel}>تاريخ العودة</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => setShowReturnDatePicker(true)}
                    style={styles.input}>
                    <Text style={[styles.dateText, !returnDate && styles.datePlaceholder]}>
                      {formatDate(returnDate)}
                    </Text>
                  </TouchableOpacity>
                  {showReturnDatePicker && (
                    <DateTimePicker
                      value={returnDate}
                      mode="date"
                      display="default"
                      onChange={onReturnDateChange}
                      minimumDate={date}
                      locale="ar"
                    />
                  )}
                </View>
              )}
            </View>

            {/* Search Button */}
            <TouchableOpacity 
              activeOpacity={0.9}
              style={styles.searchButton}>
              <LinearGradient
                colors={['#dc2626', '#ef4444']}
                style={styles.searchButtonGradient}>
                <Text style={styles.searchButtonText}>
                  بحث عن الرحلات
                </Text>
                <Ionicons name="search" size={26} color="#fff" style={{ marginRight: 12 }} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heroContainer: {
    paddingTop: 20,
    paddingBottom: 50,
    minHeight: 200,
  },
  heroContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  heroIconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 28,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.3,
    shadowRadius: 24,
    elevation: 12,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  heroSubtitle: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.95)',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  formCard: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    padding: 28,
    paddingTop: 38,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.15,
    shadowRadius: 40,
    elevation: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionIconContainer: {
    width: 48,
    height: 48,
    backgroundColor: '#fed7aa',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  orangeIcon: {
    backgroundColor: '#fed7aa',
  },
  purpleIcon: {
    backgroundColor: '#f3e8ff',
  },
  greenIcon: {
    backgroundColor: '#dcfce7',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
    flex: 1,
    textAlign: 'right',
  },
  tripTypeContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  tripTypeButton: {
    flex: 1,
  },
  tripTypeGradient: {
    borderRadius: 18,
    padding: 18,
    borderWidth: 2,
    borderColor: '#fed7aa',
  },
  tripTypeActive: {
    borderColor: '#dc2626',
    shadowColor: '#dc2626',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#9ca3af',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioActive: {
    borderColor: '#fff',
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#dc2626',
  },
  tripTypeText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#374151',
  },
  tripTypeTextActive: {
    color: '#fff',
  },
  passengerCard: {
    backgroundColor: '#fff7ed',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#fed7aa',
  },
  passengerLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#374151',
    textAlign: 'right',
    marginBottom: 16,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  counterButton: {
    width: 56,
    height: 56,
    backgroundColor: '#2563eb',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
  orangeCounter: {
    backgroundColor: '#ea580c',
    shadowColor: '#ea580c',
  },
  counterButtonMinus: {
    backgroundColor: '#ef4444',
    shadowColor: '#ef4444',
  },
  counterButtonDisabled: {
    backgroundColor: '#d1d5db',
    shadowOpacity: 0,
    elevation: 0,
  },
  counterDisplay: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderWidth: 2,
    borderColor: '#dbeafe',
    minWidth: 80,
    alignItems: 'center',
  },
  orangeCounterDisplay: {
    borderColor: '#fed7aa',
  },
  counterText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#6b7280',
    marginRight: 8,
    textAlign: 'right',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    color: '#111827',
  },
  searchButton: {
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 8,
    shadowColor: '#dc2626',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 12,
  },
  searchButtonGradient: {
    paddingVertical: 20,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'right',
  },
  dateText: {
    fontSize: 16,
    color: '#111827',
    textAlign: 'right',
  },
  datePlaceholder: {
    color: '#9ca3af',
  },
});
