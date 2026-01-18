/**
 * Merkezi Renk Paleti
 * Uygulamada her yerden kullanılabilecek renk kodları
 */

export const colors = {
  // Base renkler
  base: {
    dark: '#000000',
    light: '#ffffff',
  },

  // Ana Tema Renkleri (Primary - Yeşil)
  primary: {
    a0: '#a0e839',
    a10: '#adeb55',
    a20: '#b8ee6d',
    a30: '#c4f083',
    a40: '#cff399',
    a50: '#d9f5ad',
  },

  // Yüzey Renkleri (Surface - Koyu Gri)
  surface: {
    a0: '#121212',
    a10: '#282828',
    a20: '#3f3f3f',
    a30: '#575757',
    a40: '#717171',
    a50: '#8b8b8b',
  },

  // Tonal Yüzey Renkleri
  surfaceTonal: {
    a0: '#1f2418',
    a10: '#34382d',
    a20: '#4a4e44',
    a30: '#61655c',
    a40: '#7a7d75',
    a50: '#93958f',
  },

  // Başarı Renkleri (Success - Yeşil)
  success: {
    a0: '#22946e',
    a10: '#47d5a6',
    a20: '#9ae8ce',
    a30:'#c8ffed'
  },

  // Uyarı Renkleri (Warning - Turuncu)
  warning: {
    a0: '#ffa220',
    a10: '#ffb651',
    a20: '#ffd190',
  },

  // Hata Renkleri (Danger - Kırmızı)
  danger: {
    a0: '#9c2121',
    a10: '#d94a4a',
    a20: '#eb9e9e',
    a30: '#f8dfdf',
  },

  // Bilgi Renkleri (Info - Mavi)
  info: {
    a0: '#21498a',
    a10: '#4077d1',
    a20: '#92b2e5',
  },

  // Metin Renkleri
  text: {
    primary: '#FFFFFF',
    secondary: '#B0B0B0',
    tertiary: '#808080',
    disabled: '#505050',
  },

  // Kenar/Border Renkleri
  border: {
    primary: '#333333',
    secondary: '#555555',
    light: '#EEEEEE',
  },

  // Durum Renkleri
  status: {
    active: '#22946e',
    inactive: '#9E9E9E',
    pending: '#a87a2a',
    completed: '#22946e',
    cancelled: '#9c2121',
  },

  // Sembolik Renkler
  action: {
    hover: 'rgba(255, 255, 255, 0.08)',
    selected: 'rgba(160, 232, 57, 0.12)',
  },
} as const;

// TypeScript için tip tanımı
export type ColorKey = typeof colors;
