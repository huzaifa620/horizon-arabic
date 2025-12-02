import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Platform, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Image as ExpoImage } from 'expo-image';
import DateTimePicker from '@react-native-community/datetimepicker';
import BookingSummaryModal from '../components/BookingSummaryModal';

export default function TourismTicketsScreen() {
  const [activeTab, setActiveTab] = useState('tickets'); // 'tourism' or 'tickets'
  const [showSummary, setShowSummary] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState(null);
  
  // Ticket booking state
  const [tripType, setTripType] = useState('single');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [showDepartDatePicker, setShowDepartDatePicker] = useState(false);
  const [showReturnDatePicker, setShowReturnDatePicker] = useState(false);
  
  // Tourism packages
  const tourismPackages = [
    {
      id: 1,
      title: 'جولة في مسقط',
      description: 'استكشف العاصمة العمانية بكل جمالها',
      price: 'من 50 ريال',
      image: require('@/assets/images/pic2.jpg'),
    },
    {
      id: 2,
      title: 'صحراء الشرقية',
      description: 'مغامرة في قلب الصحراء العمانية',
      price: 'من 80 ريال',
      image: require('@/assets/images/pic2.jpg'),
    },
    {
      id: 3,
      title: 'جبال الحجر',
      description: 'رحلات في أعلى قمم عمان',
      price: 'من 100 ريال',
      image: require('@/assets/images/pic2.jpg'),
    },
  ];

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

  const onDepartDateChange = (event, selectedDate) => {
    setShowDepartDatePicker(Platform.OS === 'ios');
    if (event.type === 'set' && selectedDate) {
      setDepartDate(selectedDate);
    }
  };

  const onReturnDateChange = (event, selectedDate) => {
    setShowReturnDatePicker(Platform.OS === 'ios');
    if (event.type === 'set' && selectedDate) {
      setReturnDate(selectedDate);
    }
  };

  const handleSearch = () => {
    const bookingData = {
      tripType,
      adults,
      children,
      infants,
      from,
      to,
      departDate,
      returnDate: tripType === 'return' ? returnDate : null,
    };
    setShowSummary(true);
  };

  const handlePackageSelect = (pkg) => {
    setSelectedPackageId(pkg.id);
    setShowSummary(true);
  };

  const Container = Platform.OS === 'web' ? View : SafeAreaView;
  const containerProps = Platform.OS === 'web' 
    ? { style: { flex: 1, backgroundColor: '#fff', height: '100vh' } }
    : { className: "flex-1", edges: ['top'], style: { backgroundColor: '#fff' } };
  
  return (
    <Container {...containerProps}>
      <ScrollView 
        style={Platform.OS === 'web' ? { 
          height: '100vh',
          overflowY: 'auto',
          overflowX: 'hidden',
          WebkitOverflowScrolling: 'touch',
          backgroundColor: '#fff',
        } : { flex: 1, backgroundColor: '#fff' }}
        contentContainerStyle={{ 
          direction: 'rtl', 
          paddingBottom: 100, 
          backgroundColor: '#fff',
          ...(Platform.OS === 'web' && {
            minHeight: '100vh',
          }),
        }}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}>
        
        {/* Header */}
        <LinearGradient
          colors={['#7c3aed', '#8b5cf6', '#a78bfa']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.headerWrapper}>
          <View style={styles.headerContent}>
            <View style={styles.headerIconContainer}>
              <Ionicons name="airplane" size={40} color="#fff" />
            </View>
            <Text style={styles.headerTitle}>السياحة والتذاكر</Text>
            <Text style={styles.headerSubtitle}>
              اكتشف الوجهات واحجز تذاكرك
            </Text>
          </View>
        </LinearGradient>

        {/* Tab Selector */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            onPress={() => setActiveTab('tourism')}
            activeOpacity={0.8}
            style={[styles.tab, activeTab === 'tourism' && styles.tabActive]}>
            <LinearGradient
              colors={activeTab === 'tourism' 
                ? ['#ea580c', '#f97316'] 
                : ['#f3f4f6', '#e5e7eb']}
              style={styles.tabGradient}>
              <Ionicons 
                name={activeTab === 'tourism' ? 'map' : 'map-outline'} 
                size={24} 
                color={activeTab === 'tourism' ? '#fff' : '#6b7280'} 
              />
              <Text style={[styles.tabText, activeTab === 'tourism' && styles.tabTextActive]}>
                السياحة
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab('tickets')}
            activeOpacity={0.8}
            style={[styles.tab, activeTab === 'tickets' && styles.tabActive]}>
            <LinearGradient
              colors={activeTab === 'tickets' 
                ? ['#7c3aed', '#8b5cf6'] 
                : ['#f3f4f6', '#e5e7eb']}
              style={styles.tabGradient}>
              <Ionicons 
                name={activeTab === 'tickets' ? 'airplane' : 'airplane-outline'} 
                size={24} 
                color={activeTab === 'tickets' ? '#fff' : '#6b7280'} 
              />
              <Text style={[styles.tabText, activeTab === 'tickets' && styles.tabTextActive]}>
                التذاكر
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.contentWrapper}>
          {activeTab === 'tourism' ? (
            /* Tourism Packages Section */
            <>
              <View style={styles.introCard}>
                <View style={styles.introIcon}>
                  <Ionicons name="compass" size={32} color="#ea580c" />
                </View>
                <Text style={styles.introTitle}>رحلات سياحية لا تُنسى</Text>
                <Text style={styles.introText}>
                  اكتشف عمان من خلال رحلاتنا السياحية المميزة
                </Text>
              </View>

              <View style={styles.packagesSection}>
                <View style={styles.sectionTitleRow}>
                  <View style={styles.sectionTitleLine} />
                  <Text style={styles.sectionTitleText}>الباقات السياحية</Text>
                  <View style={styles.sectionTitleLine} />
                </View>

                {tourismPackages.map((pkg) => (
                  <TouchableOpacity
                    key={pkg.id}
                    onPress={() => handlePackageSelect(pkg)}
                    activeOpacity={0.9}
                    style={styles.packageCard}>
                    <View style={styles.packageImageContainer}>
                      <ExpoImage
                        source={pkg.image}
                        style={StyleSheet.absoluteFill}
                        contentFit="cover"
                      />
                      <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,0.7)']}
                        style={StyleSheet.absoluteFill}>
                        <View style={styles.packageContent}>
                          <Text style={styles.packageTitle}>{pkg.title}</Text>
                          <Text style={styles.packageDescription}>{pkg.description}</Text>
                          <View style={styles.packagePriceRow}>
                            <Text style={styles.packagePrice}>{pkg.price}</Text>
                            <View style={styles.packageButton}>
                              <Text style={styles.packageButtonText}>احجز الآن</Text>
                              <Ionicons name="arrow-back" size={16} color="#fff" style={{ marginRight: 6 }} />
                            </View>
                          </View>
                        </View>
                      </LinearGradient>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          ) : (
            /* Ticket Booking Section */
            <View style={styles.formCard}>
              {/* Trip Type */}
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <View style={[styles.sectionIconContainer, styles.purpleIcon]}>
                    <Ionicons name="swap-horizontal" size={24} color="#7c3aed" />
                  </View>
                  <Text style={styles.sectionTitle}>نوع الرحلة</Text>
                </View>
                
                <View style={styles.tripTypeContainer}>
                  <TouchableOpacity
                    onPress={() => setTripType('single')}
                    activeOpacity={0.8}
                    style={styles.tripTypeButton}>
                    <LinearGradient
                      colors={tripType === 'single' 
                        ? ['#dc2626', '#ef4444'] 
                        : ['#f5f3ff', '#ede9fe']}
                      style={[styles.tripTypeGradient, tripType === 'single' && styles.tripTypeActive]}>
                      <View style={styles.radioContainer}>
                        <View style={[styles.radio, tripType === 'single' && styles.radioActive]}>
                          {tripType === 'single' && <View style={styles.radioDot} />}
                        </View>
                        <Text style={[styles.tripTypeText, tripType === 'single' && styles.tripTypeTextActive]}>
                          رحلة ذهاب
                        </Text>
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => setTripType('return')}
                    activeOpacity={0.8}
                    style={styles.tripTypeButton}>
                    <LinearGradient
                      colors={tripType === 'return' 
                        ? ['#dc2626', '#ef4444'] 
                        : ['#f5f3ff', '#ede9fe']}
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
                </View>
              </View>

              {/* Passengers */}
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <View style={[styles.sectionIconContainer, styles.purpleIcon]}>
                    <Ionicons name="people" size={24} color="#9333ea" />
                  </View>
                  <Text style={styles.sectionTitle}>المسافرين</Text>
                </View>

                <View style={styles.passengerCard}>
                  <Text style={styles.passengerLabel}>بالغ</Text>
                  <View style={styles.counterContainer}>
                    <TouchableOpacity
                      onPress={() => increment(setAdults, adults)}
                      activeOpacity={0.8}
                      style={[styles.counterButton, styles.purpleCounter]}>
                      <Ionicons name="add" size={26} color="#fff" />
                    </TouchableOpacity>
                    <View style={[styles.counterDisplay, styles.purpleCounterDisplay]}>
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

                <View style={styles.passengerCard}>
                  <Text style={styles.passengerLabel}>طفل (3-11 سنة)</Text>
                  <View style={styles.counterContainer}>
                    <TouchableOpacity
                      onPress={() => increment(setChildren, children)}
                      activeOpacity={0.8}
                      style={[styles.counterButton, styles.purpleCounter]}>
                      <Ionicons name="add" size={26} color="#fff" />
                    </TouchableOpacity>
                    <View style={[styles.counterDisplay, styles.purpleCounterDisplay]}>
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

                <View style={styles.passengerCard}>
                  <Text style={styles.passengerLabel}>رضيع (0-2 سنوات)</Text>
                  <View style={styles.counterContainer}>
                    <TouchableOpacity
                      onPress={() => increment(setInfants, infants)}
                      activeOpacity={0.8}
                      style={[styles.counterButton, styles.purpleCounter]}>
                      <Ionicons name="add" size={26} color="#fff" />
                    </TouchableOpacity>
                    <View style={[styles.counterDisplay, styles.purpleCounterDisplay]}>
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

              {/* Route */}
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <View style={[styles.sectionIconContainer, styles.greenIcon]}>
                    <Ionicons name="map" size={24} color="#16a34a" />
                  </View>
                  <Text style={styles.sectionTitle}>المسار</Text>
                </View>

                <View style={styles.inputGroup}>
                  <View style={styles.inputLabelRow}>
                    <Ionicons name="airplane-outline" size={20} color="#7c3aed" />
                    <Text style={styles.inputLabel}>من</Text>
                  </View>
                  <TextInput
                    style={styles.textInput}
                    placeholder="أدخل مدينة المغادرة"
                    placeholderTextColor="#9ca3af"
                    value={from}
                    onChangeText={setFrom}
                    textAlign="right"
                    autoComplete="off"
                    keyboardType="default"
                    returnKeyType="next"
                  />
                </View>

                <View style={styles.inputGroup}>
                  <View style={styles.inputLabelRow}>
                    <Ionicons name="airplane" size={20} color="#7c3aed" />
                    <Text style={styles.inputLabel}>إلى</Text>
                  </View>
                  <TextInput
                    style={styles.textInput}
                    placeholder="أدخل مدينة الوصول"
                    placeholderTextColor="#9ca3af"
                    value={to}
                    onChangeText={setTo}
                    textAlign="right"
                    autoComplete="off"
                    keyboardType="default"
                    returnKeyType="done"
                  />
                </View>

                <View style={styles.inputGroup}>
                  <View style={styles.inputLabelRow}>
                    <Ionicons name="calendar" size={20} color="#9333ea" />
                    <Text style={styles.inputLabel}>تاريخ المغادرة</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => setShowDepartDatePicker(true)}
                    style={styles.input}>
                    <Text style={[styles.dateText, !departDate && styles.datePlaceholder]}>
                      {formatDate(departDate)}
                    </Text>
                  </TouchableOpacity>
                  {showDepartDatePicker && (
                    <DateTimePicker
                      value={departDate}
                      mode="date"
                      display="default"
                      onChange={onDepartDateChange}
                      minimumDate={new Date()}
                      locale="ar"
                    />
                  )}
                </View>

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
                        minimumDate={departDate}
                        locale="ar"
                      />
                    )}
                  </View>
                )}
              </View>

              {/* Search Button */}
              <TouchableOpacity 
                onPress={handleSearch}
                activeOpacity={0.9}
                style={styles.searchButton}>
                <LinearGradient
                  colors={['#dc2626', '#ef4444']}
                  style={styles.searchButtonGradient}>
                  <Text style={styles.searchButtonText}>بحث عن الرحلات</Text>
                  <Ionicons name="search" size={26} color="#fff" style={{ marginRight: 12 }} />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>

      <BookingSummaryModal
        visible={showSummary}
        onClose={() => setShowSummary(false)}
        bookingData={activeTab === 'tourism' ? { 
          packageTitle: tourismPackages.find(p => p.id === selectedPackageId)?.title,
          packageDescription: tourismPackages.find(p => p.id === selectedPackageId)?.description 
        } : {
          tripType,
          adults,
          children,
          infants,
          from,
          to,
          departDate,
          returnDate: tripType === 'return' ? returnDate : null,
        }}
        type={activeTab === 'tourism' ? 'tourism' : 'ticket'}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    paddingTop: 20,
    paddingBottom: 40,
    minHeight: 180,
  },
  headerContent: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  headerIconContainer: {
    width: 64,
    height: 64,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.95)',
    textAlign: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginTop: -20,
    marginBottom: 20,
    gap: 12,
  },
  tab: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
  },
  tabGradient: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  tabActive: {
    shadowColor: '#7c3aed',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#6b7280',
  },
  tabTextActive: {
    color: '#fff',
  },
  contentWrapper: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  introCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 28,
    marginBottom: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  introIcon: {
    width: 64,
    height: 64,
    backgroundColor: '#fed7aa',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  introTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 12,
  },
  introText: {
    fontSize: 15,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 24,
  },
  packagesSection: {
    marginBottom: 24,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 12,
  },
  sectionTitleLine: {
    flex: 1,
    height: 2,
    backgroundColor: '#e5e7eb',
    borderRadius: 1,
  },
  sectionTitleText: {
    fontSize: 24,
    fontWeight: '900',
    color: '#111827',
    textAlign: 'center',
  },
  packageCard: {
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.2,
    shadowRadius: 24,
    elevation: 12,
    height: 220,
  },
  packageImageContainer: {
    flex: 1,
    position: 'relative',
  },
  packageContent: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 24,
  },
  packageTitle: {
    fontSize: 26,
    fontWeight: '900',
    color: '#fff',
    textAlign: 'right',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  packageDescription: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.95)',
    textAlign: 'right',
    marginBottom: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  packagePriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  packagePrice: {
    fontSize: 18,
    fontWeight: '800',
    color: '#fbbf24',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  packageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ea580c',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    shadowColor: '#ea580c',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 4,
  },
  packageButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '800',
    marginRight: 6,
  },
  formCard: {
    backgroundColor: '#fff',
    borderRadius: 32,
    padding: 28,
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
    backgroundColor: '#ede9fe',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  purpleIcon: {
    backgroundColor: '#ede9fe',
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
    borderColor: '#e9d5ff',
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
    backgroundColor: '#f5f3ff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e9d5ff',
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
  purpleCounter: {
    backgroundColor: '#7c3aed',
    shadowColor: '#7c3aed',
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
  purpleCounterDisplay: {
    borderColor: '#e9d5ff',
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
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    color: '#111827',
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

