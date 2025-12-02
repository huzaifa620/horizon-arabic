import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image as ExpoImage } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function ContactScreen() {
  const phoneNumbers = [
    { label: 'الإمارات', numbers: ['+971 50 1997 930', '+971 55 3199 739'], flag: '🇦🇪', color: '#16a34a' },
    { label: 'عمان', numbers: ['+968 9290 4239', '+968 9193 5125'], flag: '🇴🇲', color: '#ea580c' },
  ];

  const handlePhoneCall = (phone) => {
    Linking.openURL(`tel:${phone}`);
  };

  const handleEmail = () => {
    Linking.openURL('mailto:info@horizontripsoman.com');
  };

  const handleWebsite = () => {
    Linking.openURL('https://www.horizontripsoman.com');
  };

  const Container = Platform.OS === 'web' ? View : SafeAreaView;
  const containerProps = Platform.OS === 'web' 
    ? { style: { flex: 1, backgroundColor: '#fafbfc', height: '100vh' } }
    : { className: "flex-1", style: { backgroundColor: '#fafbfc' }, edges: ['top'] };
  
  return (
    <Container {...containerProps}>
      <ScrollView 
        style={Platform.OS === 'web' ? { 
          height: '100vh',
          overflowY: 'auto',
          overflowX: 'hidden',
          WebkitOverflowScrolling: 'touch',
        } : { flex: 1 }}
        contentContainerStyle={{ 
          direction: 'rtl', 
          paddingBottom: 100,
          ...(Platform.OS === 'web' && {
            minHeight: '100vh',
          }),
        }}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}>
        
        {/* Modern Header with Dynamic Design */}
        <View style={styles.headerWrapper}>
          <LinearGradient
            colors={['#0a1929', '#1a365d', '#2c5282']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.headerGradient}>
            <View style={styles.headerContent}>
              <View style={styles.headerIconModern}>
                <Ionicons name="call" size={32} color="#fff" />
              </View>
              <Text style={styles.headerTitleModern}>اتصل بنا</Text>
              <Text style={styles.headerSubtitleModern}>
                نحن هنا لمساعدتك في أي وقت
              </Text>
            </View>
            <View style={styles.headerDecorative} />
          </LinearGradient>
        </View>

        <View style={styles.contentWrapper}>
          {/* Company Card with Modern Design */}
          <View style={styles.companyCardModern}>
            <View style={styles.companyLogoContainer}>
              <View style={styles.logoGlow}>
                <ExpoImage
                  source={require('@/assets/images/pic1.jpg')}
                  style={{ width: 110, height: 110 }}
                  contentFit="contain"
                />
              </View>
            </View>
            <Text style={styles.companyNameModern}>الأفق</Text>
            <View style={styles.companyTaglineModern}>
              <Text style={styles.companyTaglineTextModern}>للجولات والسياحة</Text>
            </View>
            <Text style={styles.companySloganModern}>
              اكتشف عمان بطريقة لم ترها من قبل
            </Text>
          </View>

          {/* CEO Card with Creative Layout */}
          <View style={styles.ceoCardModern}>
            <View style={styles.ceoIconModern}>
              <LinearGradient
                colors={['#2563eb', '#3b82f6']}
                style={styles.ceoIconGradient}>
                <Ionicons name="person" size={28} color="#fff" />
              </LinearGradient>
            </View>
            <View style={styles.ceoInfo}>
              <Text style={styles.ceoLabel}>الرئيس التنفيذي</Text>
              <Text style={styles.ceoName}>محمد نسيم</Text>
            </View>
          </View>

          {/* Phone Numbers with Modern Cards */}
          <View style={styles.phoneSection}>
            <View style={styles.sectionTitleRow}>
              <View style={styles.sectionTitleLine} />
              <Ionicons name="call" size={24} color="#16a34a" />
              <Text style={styles.sectionTitleText}>أرقام الهاتف</Text>
            </View>
            
            {phoneNumbers.map((country, index) => (
              <View key={index} style={styles.countryGroup}>
                <View style={styles.countryHeader}>
                  <Text style={styles.countryFlag}>{country.flag}</Text>
                  <Text style={styles.countryName}>{country.label}</Text>
                </View>
                {country.numbers.map((phone, phoneIndex) => (
                  <TouchableOpacity
                    key={phoneIndex}
                    onPress={() => handlePhoneCall(phone)}
                    activeOpacity={0.9}
                    style={styles.phoneCard}>
                    <LinearGradient
                      colors={['#f0fdf4', '#dcfce7']}
                      style={styles.phoneCardGradient}>
                      <View style={styles.phoneCardContent}>
                        <View style={styles.phoneIconCircle}>
                          <Ionicons name="call-outline" size={22} color="#16a34a" />
                        </View>
                        <Text style={styles.phoneNumberText}>{phone}</Text>
                        <Ionicons name="chevron-back" size={20} color="#86efac" />
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>

          {/* Email Card Modern */}
          <TouchableOpacity
            onPress={handleEmail}
            activeOpacity={0.9}
            style={styles.contactCardModern}>
            <View style={styles.contactCardInner}>
              <View style={styles.contactIconModern}>
                <LinearGradient
                  colors={['#fee2e2', '#fecaca']}
                  style={styles.contactIconGradient}>
                  <Ionicons name="mail" size={26} color="#dc2626" />
                </LinearGradient>
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactLabel}>البريد الإلكتروني</Text>
                <Text style={styles.contactValue}>info@horizontripsoman.com</Text>
              </View>
              <Ionicons name="chevron-back" size={22} color="#cbd5e1" />
            </View>
          </TouchableOpacity>

          {/* Website Card Modern */}
          <TouchableOpacity
            onPress={handleWebsite}
            activeOpacity={0.9}
            style={styles.contactCardModern}>
            <View style={styles.contactCardInner}>
              <View style={styles.contactIconModern}>
                <LinearGradient
                  colors={['#f3e8ff', '#e9d5ff']}
                  style={styles.contactIconGradient}>
                  <Ionicons name="globe" size={26} color="#9333ea" />
                </LinearGradient>
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactLabel}>الموقع الإلكتروني</Text>
                <Text style={styles.contactValue}>www.horizontripsoman.com</Text>
              </View>
              <Ionicons name="chevron-back" size={22} color="#cbd5e1" />
            </View>
          </TouchableOpacity>

          {/* Address Card Modern */}
          <View style={styles.addressCardModern}>
            <View style={styles.addressHeader}>
              <View style={styles.addressIconModern}>
                <LinearGradient
                  colors={['#fed7aa', '#fdba74']}
                  style={styles.addressIconGradient}>
                  <Ionicons name="location" size={26} color="#ea580c" />
                </LinearGradient>
              </View>
              <Text style={styles.addressTitle}>العنوان</Text>
            </View>
            <Text style={styles.addressText}>
              المكتب رقم 7، الطابق الأرضي، محطة حافلات ماصلات، صحار، عمان
            </Text>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    height: 200,
    overflow: 'hidden',
  },
  headerGradient: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 24,
    position: 'relative',
  },
  headerContent: {
    alignItems: 'center',
    marginTop: 20,
  },
  headerIconModern: {
    width: 64,
    height: 64,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  headerTitleModern: {
    fontSize: 40,
    fontWeight: '900',
    color: '#fff',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  headerSubtitleModern: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
  },
  headerDecorative: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(59, 130, 246, 0.15)',
    top: -40,
    right: -40,
  },
  contentWrapper: {
    paddingHorizontal: 24,
    marginTop: -30,
    paddingBottom: 32,
  },
  companyCardModern: {
    backgroundColor: '#fff',
    borderRadius: 32,
    padding: 32,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  companyLogoContainer: {
    marginBottom: 20,
  },
  logoGlow: {
    backgroundColor: '#fff',
    borderRadius: 28,
    padding: 20,
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 12,
  },
  companyNameModern: {
    fontSize: 38,
    fontWeight: '900',
    color: '#2563eb',
    marginBottom: 12,
  },
  companyTaglineModern: {
    backgroundColor: '#f97316',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 12,
    shadowColor: '#f97316',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 6,
  },
  companyTaglineTextModern: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },
  companySloganModern: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 22,
  },
  ceoCardModern: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  ceoIconModern: {
    marginRight: 20,
  },
  ceoIconGradient: {
    width: 64,
    height: 64,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ceoInfo: {
    flex: 1,
  },
  ceoLabel: {
    fontSize: 13,
    color: '#94a3b8',
    textAlign: 'right',
    marginBottom: 6,
    fontWeight: '600',
  },
  ceoName: {
    fontSize: 22,
    fontWeight: '900',
    color: '#111827',
    textAlign: 'right',
  },
  phoneSection: {
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
    fontSize: 22,
    fontWeight: '900',
    color: '#111827',
    textAlign: 'right',
  },
  countryGroup: {
    marginBottom: 20,
  },
  countryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  countryFlag: {
    fontSize: 32,
    marginRight: 12,
  },
  countryName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#374151',
    textAlign: 'right',
  },
  phoneCard: {
    marginBottom: 12,
    borderRadius: 18,
    overflow: 'hidden',
  },
  phoneCardGradient: {
    padding: 18,
    borderWidth: 1,
    borderColor: '#bbf7d0',
  },
  phoneCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  phoneIconCircle: {
    width: 44,
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneNumberText: {
    flex: 1,
    fontSize: 17,
    fontWeight: '800',
    color: '#16a34a',
    textAlign: 'right',
    marginRight: 12,
  },
  contactCardModern: {
    backgroundColor: '#fff',
    borderRadius: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  contactCardInner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  contactIconModern: {
    marginRight: 16,
  },
  contactIconGradient: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactInfo: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 13,
    color: '#94a3b8',
    textAlign: 'right',
    marginBottom: 6,
    fontWeight: '600',
  },
  contactValue: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
    textAlign: 'right',
  },
  addressCardModern: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  addressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  addressIconModern: {
    marginRight: 16,
  },
  addressIconGradient: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addressTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#111827',
    flex: 1,
    textAlign: 'right',
  },
  addressText: {
    fontSize: 16,
    color: '#475569',
    textAlign: 'right',
    lineHeight: 26,
  },
});
