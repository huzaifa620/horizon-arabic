import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image as ExpoImage } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function TourismScreen() {
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

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: '#fafbfc' }} edges={['top']}>
      <ScrollView 
        className="flex-1" 
        contentContainerStyle={{ direction: 'rtl', paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}>
        
        {/* Modern Header */}
        <View style={styles.headerWrapper}>
          <LinearGradient
            colors={['#7c2d12', '#ea580c', '#f97316']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.headerGradient}>
            <View style={styles.headerContent}>
              <View style={styles.headerIconModern}>
                <Ionicons name="map" size={36} color="#fff" />
              </View>
              <Text style={styles.headerTitleModern}>السياحة</Text>
              <Text style={styles.headerSubtitleModern}>
                اكتشف أجمل الوجهات في عمان
              </Text>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.contentWrapper}>
          {/* Intro Section */}
          <View style={styles.introCard}>
            <View style={styles.introIcon}>
              <Ionicons name="compass" size={32} color="#ea580c" />
            </View>
            <Text style={styles.introTitle}>
              رحلات سياحية لا تُنسى
            </Text>
            <Text style={styles.introText}>
              اكتشف عمان من خلال رحلاتنا السياحية المميزة. من الجبال الشاهقة إلى الشواطئ الخلابة، 
              نحن نقدم لك أفضل التجارب السياحية.
            </Text>
          </View>

          {/* Tourism Packages */}
          <View style={styles.packagesSection}>
            <View style={styles.sectionTitleRow}>
              <View style={styles.sectionTitleLine} />
              <Text style={styles.sectionTitleText}>الباقات السياحية</Text>
              <View style={styles.sectionTitleLine} />
            </View>

            {tourismPackages.map((pkg) => (
              <TouchableOpacity
                key={pkg.id}
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

          {/* Features Section */}
          <View style={styles.featuresCard}>
            <Text style={styles.featuresTitle}>لماذا نحن؟</Text>
            <View style={styles.featuresList}>
              <View style={styles.featureItem}>
                <View style={styles.featureIcon}>
                  <Ionicons name="shield-checkmark" size={24} color="#16a34a" />
                </View>
                <Text style={styles.featureText}>رحلات آمنة ومضمونة</Text>
              </View>
              <View style={styles.featureItem}>
                <View style={styles.featureIcon}>
                  <Ionicons name="star" size={24} color="#fbbf24" />
                </View>
                <Text style={styles.featureText}>أفضل الوجهات السياحية</Text>
              </View>
              <View style={styles.featureItem}>
                <View style={styles.featureIcon}>
                  <Ionicons name="people" size={24} color="#2563eb" />
                </View>
                <Text style={styles.featureText}>مرشدين سياحيين محترفين</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  contentWrapper: {
    paddingHorizontal: 24,
    marginTop: -30,
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
  featuresCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  featuresTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#111827',
    textAlign: 'right',
    marginBottom: 20,
  },
  featuresList: {
    gap: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#f1f5f9',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  featureText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#374151',
    textAlign: 'right',
    flex: 1,
  },
});

