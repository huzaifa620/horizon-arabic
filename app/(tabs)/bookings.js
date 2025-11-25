import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function BookingsScreen() {
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: '#fafbfc' }} edges={['top']}>
      <ScrollView 
        className="flex-1" 
        contentContainerStyle={{ direction: 'rtl', paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}>
        
        {/* Modern Header */}
        <View style={styles.headerWrapper}>
          <LinearGradient
            colors={['#0a1929', '#1a365d', '#2c5282']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.headerGradient}>
            <View style={styles.headerContent}>
              <View style={styles.headerIconModern}>
                <Ionicons name="calendar" size={32} color="#fff" />
              </View>
              <Text style={styles.headerTitleModern}>الحجوزات</Text>
              <Text style={styles.headerSubtitleModern}>
                اختر نوع الحجز الذي تريده
              </Text>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.contentWrapper}>
          {/* Bus Booking Card - Modern Design */}
          <Link href="/bus-booking" asChild>
            <TouchableOpacity activeOpacity={0.95} style={styles.bookingCardModern}>
              <View style={styles.bookingCardInner}>
                <View style={styles.bookingIconWrapper}>
                  <LinearGradient
                    colors={['#2563eb', '#3b82f6', '#60a5fa']}
                    style={styles.bookingIconGradient}>
                    <Ionicons name="bus" size={44} color="#fff" />
                  </LinearGradient>
                </View>
                
                <View style={styles.bookingContent}>
                  <Text style={styles.bookingTitleModern}>حجز رحلة حافلة</Text>
                  <Text style={styles.bookingSubtitleModern}>رحلات بين المدن</Text>
                  
                  <View style={styles.bookingDescriptionBox}>
                    <Text style={styles.bookingDescriptionText}>
                      احجز رحلتك بين المدن بسهولة وأمان مع أفضل الخدمات
                    </Text>
                  </View>
                  
                  <View style={styles.bookingActionRow}>
                    <Text style={styles.bookingActionText}>ابدأ الحجز</Text>
                    <View style={styles.bookingActionButton}>
                      <Ionicons name="arrow-back" size={20} color="#fff" />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.cardAccentBlue} />
            </TouchableOpacity>
          </Link>

          {/* Ferry Booking Card - Modern Design */}
          <Link href="/ferry-booking" asChild>
            <TouchableOpacity activeOpacity={0.95} style={styles.bookingCardModern}>
              <View style={styles.bookingCardInner}>
                <View style={styles.bookingIconWrapper}>
                  <LinearGradient
                    colors={['#ea580c', '#f97316', '#fb923c']}
                    style={styles.bookingIconGradient}>
                    <Ionicons name="boat" size={44} color="#fff" />
                  </LinearGradient>
                </View>
                
                <View style={styles.bookingContent}>
                  <Text style={styles.bookingTitleModern}>حجز رحلة عبارة</Text>
                  <Text style={styles.bookingSubtitleModern}>رحلات عبر العبارات</Text>
                  
                  <View style={[styles.bookingDescriptionBox, styles.bookingDescriptionBoxOrange]}>
                    <Text style={styles.bookingDescriptionText}>
                      احجز رحلتك عبر العبارات بكل راحة وأمان
                    </Text>
                  </View>
                  
                  <View style={styles.bookingActionRow}>
                    <Text style={[styles.bookingActionText, { color: '#ea580c' }]}>ابدأ الحجز</Text>
                    <View style={[styles.bookingActionButton, styles.bookingActionButtonOrange]}>
                      <Ionicons name="arrow-back" size={20} color="#fff" />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.cardAccentOrange} />
            </TouchableOpacity>
          </Link>

          {/* Info Card Modern */}
          <View style={styles.infoCardModern}>
            <View style={styles.infoHeader}>
              <View style={styles.infoIconCircle}>
                <Ionicons name="information-circle" size={28} color="#3b82f6" />
              </View>
              <Text style={styles.infoTitle}>معلومات مهمة</Text>
            </View>
            <Text style={styles.infoText}>
              يمكنك حجز رحلتك مسبقاً لتضمن مقعدك. جميع الحجوزات قابلة للتعديل والإلغاء حسب الشروط والأحكام.
            </Text>
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
  bookingCardModern: {
    backgroundColor: '#fff',
    borderRadius: 28,
    marginBottom: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 12,
    borderWidth: 1,
    borderColor: '#f1f5f9',
    position: 'relative',
  },
  bookingCardInner: {
    padding: 28,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bookingIconWrapper: {
    marginRight: 20,
  },
  bookingIconGradient: {
    width: 88,
    height: 88,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 12,
  },
  bookingContent: {
    flex: 1,
  },
  bookingTitleModern: {
    fontSize: 28,
    fontWeight: '900',
    color: '#111827',
    textAlign: 'right',
    marginBottom: 6,
  },
  bookingSubtitleModern: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'right',
    fontWeight: '700',
    marginBottom: 16,
  },
  bookingDescriptionBox: {
    backgroundColor: '#eff6ff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#bfdbfe',
  },
  bookingDescriptionBoxOrange: {
    backgroundColor: '#fff7ed',
    borderColor: '#fed7aa',
  },
  bookingDescriptionText: {
    fontSize: 15,
    color: '#374151',
    textAlign: 'right',
    lineHeight: 24,
  },
  bookingActionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  bookingActionText: {
    fontSize: 17,
    fontWeight: '800',
    color: '#2563eb',
    marginRight: 12,
  },
  bookingActionButton: {
    width: 44,
    height: 44,
    backgroundColor: '#2563eb',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 6,
  },
  bookingActionButtonOrange: {
    backgroundColor: '#ea580c',
    shadowColor: '#ea580c',
  },
  cardAccentBlue: {
    position: 'absolute',
    width: 5,
    height: '100%',
    backgroundColor: '#2563eb',
    right: 0,
    top: 0,
  },
  cardAccentOrange: {
    position: 'absolute',
    width: 5,
    height: '100%',
    backgroundColor: '#ea580c',
    right: 0,
    top: 0,
  },
  infoCardModern: {
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
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoIconCircle: {
    width: 48,
    height: 48,
    backgroundColor: '#dbeafe',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#111827',
    flex: 1,
    textAlign: 'right',
  },
  infoText: {
    fontSize: 15,
    color: '#475569',
    textAlign: 'right',
    lineHeight: 24,
  },
});
