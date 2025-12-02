import React from 'react';
import { Platform, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Heroicons imports for web
let HomeIcon, CalendarIcon, PhoneIcon, BusIcon, AirplaneIcon, MapIcon, BoatIcon;
let HomeIconSolid, CalendarIconSolid, PhoneIconSolid;
let SparklesIcon, ArrowLeftIcon, StarIcon, EnvelopeIcon, TicketIcon;

if (Platform.OS === 'web') {
  try {
    const outline = require('@heroicons/react/24/outline');
    const solid = require('@heroicons/react/24/solid');
    
    HomeIcon = outline.HomeIcon;
    CalendarIcon = outline.CalendarIcon;
    PhoneIcon = outline.PhoneIcon;
    BusIcon = outline.TruckIcon;
    AirplaneIcon = outline.PaperAirplaneIcon;
    MapIcon = outline.MapIcon;
    BoatIcon = outline.MapIcon;
    SparklesIcon = outline.SparklesIcon;
    ArrowLeftIcon = outline.ArrowLeftIcon;
    StarIcon = outline.StarIcon;
    EnvelopeIcon = outline.EnvelopeIcon;
    TicketIcon = outline.TicketIcon;
    
    HomeIconSolid = solid.HomeIcon;
    CalendarIconSolid = solid.CalendarIcon;
    PhoneIconSolid = solid.PhoneIcon;
  } catch (e) {
    // Fallback if heroicons not available
  }
}

const iconMap = {
  'home': HomeIcon,
  'home-outline': HomeIcon,
  'calendar': CalendarIcon,
  'calendar-outline': CalendarIcon,
  'call': PhoneIcon,
  'call-outline': PhoneIcon,
  'bus': BusIcon,
  'airplane': AirplaneIcon,
  'airplane-outline': AirplaneIcon,
  'map': MapIcon,
  'boat': BoatIcon,
  'sparkles': SparklesIcon,
  'arrow-back': ArrowLeftIcon,
  'star': StarIcon,
  'mail': EnvelopeIcon,
  'document-text': TicketIcon,
  'ticket': TicketIcon,
};

const iconMapSolid = {
  'home': HomeIconSolid,
  'calendar': CalendarIconSolid,
  'call': PhoneIconSolid,
};

export default function WebIcon({ name, size = 24, color = '#000', style, focused = false }) {
  // On web, use heroicons
  if (Platform.OS === 'web') {
    const HeroIcon = focused && iconMapSolid[name] ? iconMapSolid[name] : iconMap[name];
    
    if (HeroIcon) {
      return (
        <HeroIcon 
          style={{ 
            width: size, 
            height: size, 
            color: color,
            display: 'inline-block',
            ...style,
          }} 
        />
      );
    }
  }
  
  // On native, use Ionicons
  return <Ionicons name={name} size={size} color={color} style={style} />;
}

