// utils/themeColors.ts
export const getThemeColors = (themeMode: 'light' | 'dark' | 'lavender') => {
  const isDark = themeMode === 'dark';
  const isLavender = themeMode === 'lavender';

  // Determine if the overall background is black
  const isBackgroundBlack = isLavender; // Lavender theme has black background for buttons
  const isBackgroundLavender = isDark;  // Dark theme uses lavender for buttons

  return {
    income: {
      backgroundColor: isDark ? '#E6E6FA' : isLavender ? '#000000' : 'green',
      textColor: isDark ? '#000000' : isLavender ? '#E6E6FA' : '#ffffff',
    },
    expense: {
      backgroundColor: 'red',
      textColor: '#ffffff',
    },
    card: {
      backgroundColor: isDark ? '#333' : isLavender ? '#E6E6FA' : '#ffffff',
      textColor: isDark ? '#ffffff' : isLavender ? '#000000' : '#000000',
    },
    editButton: {
      backgroundColor: isBackgroundBlack ? '#000000' : '#E6E6FA', // black bg -> lavender text, vice versa
      textColor: isBackgroundBlack ? '#E6E6FA' : '#000000',
    },
    deleteButton: {
      backgroundColor: isBackgroundBlack ? '#000000' : '#E6E6FA',
      textColor: isBackgroundBlack ? '#E6E6FA' : '#000000',
    },
  };
};
