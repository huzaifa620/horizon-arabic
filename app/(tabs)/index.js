import { Ionicons } from '@expo/vector-icons';
import { Image as ExpoImage } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React from 'react';
import { Dimensions, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebIcon from '../../components/WebIcon';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
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
        
        {/* Dynamic Hero with Logo */}
        <View style={styles.heroWrapper}>
          <LinearGradient
            colors={['#0a1929', '#1a365d', '#2c5282']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.heroGradient}>
            
            {/* Floating Logo with Glass Effect */}
            <View style={styles.logoFloatingContainer}>
              <View style={styles.logoGlass}>
                <ExpoImage
                  source={require('@/assets/images/pic1.jpg')}
                  style={{ width: 120, height: 120 }}
                  contentFit="contain"
                />
              </View>
            </View>

            {/* Company Branding */}
            <View style={styles.heroTextContainer}>
              <View style={styles.companyNameWrapper}>
                <Text style={styles.companyNameMain}>الأفق</Text>
                <View style={styles.accentLine} />
              </View>
              
              <View style={styles.taglineBadge}>
                <Text style={styles.taglineText}>للجولات والسياحة</Text>
              </View>
              
              <Text style={styles.heroSlogan}>
                اكتشف عمان بطريقة لم ترها من قبل
              </Text>
            </View>

            {/* Decorative Elements */}
            <View style={styles.decorativeCircle1} />
            <View style={styles.decorativeCircle2} />
          </LinearGradient>
        </View>

        {/* Welcome Card */}
        <View style={styles.welcomeSection}>
          <View style={styles.welcomeCardModern}>
            <View style={styles.welcomeHeader}>
              <View style={styles.welcomeIcon}>
                <WebIcon name="sparkles" size={24} color="#2563eb" />
              </View>
              <Text style={styles.welcomeTitleModern}>
                مرحباً بك
              </Text>
            </View>
            <Text style={styles.welcomeTextModern}>
              نحن نقدم أفضل خدمات الحجوزات للرحلات والحافلات والعبارات في سلطنة عمان. 
              احجز رحلتك بسهولة وأمان معنا.
            </Text>
          </View>
        </View>

        {/* Main Services Section */}
        <View style={styles.servicesSection}>
          <View style={styles.sectionHeaderModern}>
            <View style={styles.sectionLine} />
            <Text style={styles.sectionTitleModern}>خدماتنا</Text>
            <View style={styles.sectionLine} />
          </View>

          {/* 1. Bus Ticket Card */}
          <Link href="/bus-booking" asChild>
            <TouchableOpacity activeOpacity={0.95} style={styles.serviceCardModern}>
              <View style={styles.serviceCardInner}>
                <View style={styles.serviceIconWrapper}>
                  <LinearGradient
                    colors={['#2563eb', '#3b82f6', '#60a5fa']}
                    style={styles.serviceIconGradient}>
                    <WebIcon name="bus" size={40} color="#fff" />
                  </LinearGradient>
                </View>
                
                <View style={styles.serviceContent}>
                  <Text style={styles.serviceTitleModern}>تذكرة الحافلة</Text>
                  <Text style={styles.serviceDescModern}>
                    احجز تذكرتك للرحلات بين المدن
                  </Text>
                  
                  <View style={styles.serviceActionRow}>
                    <Text style={styles.serviceActionText}>احجز الآن</Text>
                    <View style={styles.serviceArrow}>
                      <WebIcon name="arrow-back" size={18} color="#2563eb" />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.cardAccentBlue} />
            </TouchableOpacity>
          </Link>

          {/* 2. Tourism & Tickets Card */}
          <Link href="/tourism-tickets" asChild>
            <TouchableOpacity activeOpacity={0.95} style={styles.serviceCardModern}>
              <View style={styles.serviceCardInner}>
                <View style={styles.serviceIconWrapper}>
                  <LinearGradient
                    colors={['#7c3aed', '#8b5cf6', '#a78bfa']}
                    style={styles.serviceIconGradient}>
                    <WebIcon name="airplane" size={40} color="#fff" />
                  </LinearGradient>
                </View>
                
                <View style={styles.serviceContent}>
                  <Text style={styles.serviceTitleModern}>السياحة والتذاكر</Text>
                  <Text style={styles.serviceDescModern}>
                    اكتشف الوجهات السياحية واحجز تذاكرك
                  </Text>
                  
                  <View style={styles.serviceActionRow}>
                    <Text style={[styles.serviceActionText, { color: '#7c3aed' }]}>احجز الآن</Text>
                    <View style={[styles.serviceArrow, { backgroundColor: '#ede9fe' }]}>
                      <WebIcon name="arrow-back" size={18} color="#7c3aed" />
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.cardAccentBlue, { backgroundColor: '#7c3aed' }]} />
            </TouchableOpacity>
          </Link>
        </View>

        {/* Banner Section */}
        <View style={styles.bannerSection}>
          <View style={styles.bannerWrapper}>
            <ExpoImage
              source={require('@/assets/images/pic2.jpg')}
              style={StyleSheet.absoluteFill}
              contentFit="cover"
            />
            <LinearGradient
              colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.8)']}
              style={StyleSheet.absoluteFill}>
              <View style={styles.bannerContent}>
                <View style={styles.bannerBadge}>
                  <WebIcon name="star" size={20} color="#fbbf24" />
                  <Text style={styles.bannerBadgeText}>رحلة مميزة</Text>
                </View>
                <Text style={styles.bannerTitleModern}>
                  رحلات لا تُنسى في عمان
                </Text>
                <Text style={styles.bannerSubtitleModern}>
                  استمتع بأجمل الوجهات مع أفضل الخدمات
                </Text>
              </View>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  heroWrapper: {
    height: 320,
    overflow: 'hidden',
  },
  heroGradient: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 24,
    position: 'relative',
  },
  logoFloatingContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 24,
  },
  logoGlass: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 30,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.4,
    shadowRadius: 30,
    elevation: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  heroTextContainer: {
    alignItems: 'center',
  },
  companyNameWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  companyNameMain: {
    fontSize: 48,
    fontWeight: '900',
    color: '#fff',
    letterSpacing: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 6,
    marginBottom: 12,
  },
  accentLine: {
    width: 80,
    height: 4,
    backgroundColor: '#f97316',
    borderRadius: 2,
    shadowColor: '#f97316',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 4,
  },
  taglineBadge: {
    backgroundColor: '#f97316',
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 16,
    shadowColor: '#f97316',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 8,
  },
  taglineText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  heroSlogan: {
    color: 'rgba(255, 255, 255, 0.95)',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  decorativeCircle1: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    top: -50,
    right: -50,
  },
  decorativeCircle2: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(249, 115, 22, 0.1)',
    bottom: -30,
    left: -30,
  },
  welcomeSection: {
    paddingHorizontal: 24,
    marginTop: -40,
    marginBottom: 32,
  },
  welcomeCardModern: {
    backgroundColor: '#fff',
    borderRadius: 28,
    padding: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  welcomeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  welcomeIcon: {
    width: 44,
    height: 44,
    backgroundColor: '#eff6ff',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  welcomeTitleModern: {
    fontSize: 28,
    fontWeight: '900',
    color: '#111827',
    flex: 1,
    textAlign: 'right',
  },
  welcomeTextModern: {
    fontSize: 15,
    color: '#4b5563',
    textAlign: 'right',
    lineHeight: 26,
  },
  servicesSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionHeaderModern: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 16,
  },
  sectionLine: {
    flex: 1,
    height: 2,
    backgroundColor: '#e5e7eb',
    borderRadius: 1,
  },
  sectionTitleModern: {
    fontSize: 30,
    fontWeight: '900',
    color: '#111827',
    textAlign: 'center',
  },
  serviceCardModern: {
    backgroundColor: '#fff',
    borderRadius: 24,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#f1f5f9',
    position: 'relative',
  },
  serviceCardInner: {
    flexDirection: 'row',
    padding: 24,
    alignItems: 'center',
  },
  serviceIconWrapper: {
    marginRight: 20,
  },
  serviceIconGradient: {
    width: 72,
    height: 72,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  serviceContent: {
    flex: 1,
  },
  serviceTitleModern: {
    fontSize: 22,
    fontWeight: '900',
    color: '#111827',
    textAlign: 'right',
    marginBottom: 8,
  },
  serviceDescModern: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'right',
    lineHeight: 22,
    marginBottom: 16,
  },
  serviceActionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  serviceActionText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#2563eb',
    marginRight: 10,
  },
  serviceArrow: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#dbeafe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardAccentBlue: {
    position: 'absolute',
    width: 4,
    height: '100%',
    backgroundColor: '#2563eb',
    right: 0,
    top: 0,
  },
  bannerSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  bannerWrapper: {
    height: 280,
    borderRadius: 28,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.3,
    shadowRadius: 32,
    elevation: 20,
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 28,
  },
  bannerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  bannerBadgeText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    marginRight: 6,
  },
  bannerTitleModern: {
    fontSize: 32,
    fontWeight: '900',
    color: '#fff',
    textAlign: 'right',
    marginBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  bannerSubtitleModern: {
    fontSize: 17,
    color: 'rgba(255, 255, 255, 0.95)',
    textAlign: 'right',
    lineHeight: 26,
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
});
