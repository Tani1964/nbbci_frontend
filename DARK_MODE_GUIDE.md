# Dark Mode Implementation Guide

## Overview
The app now has a fully centralized dark mode system with system preference detection and localStorage persistence.

## Architecture

### 1. **Theme Configuration** (`src/theme.js`)
- Centralized theme configuration using Chakra UI's `extendTheme`
- **System Color Mode**: Automatically respects user's OS dark/light preference
- **Semantic Tokens**: Color tokens that automatically adjust based on theme:
  - `bg.surface` - Primary background
  - `bg.muted` - Secondary/subtle background
  - `bg.emphasized` - Emphasized background
  - `text.primary` - Primary text color
  - `text.secondary` - Secondary text color
  - `text.muted` - Muted/tertiary text color
  - `border.subtle` - Subtle borders
  - `border.emphasized` - Emphasized borders

### 2. **Theme Context** (`src/context/ThemeContext.jsx`)
- Manages global theme state and persistence
- Provides `useTheme()` hook for accessing theme anywhere in the app
- **Features**:
  - localStorage persistence
  - Automatic system preference detection
  - Provides `colorMode`, `isDark`, `isLight`, `toggleColorMode`

### 3. **Dark Mode Toggle** (`src/components/DarkModeToggle.jsx`)
- Simple button component to toggle between light and dark modes
- Located in the Header (desktop and mobile)
- Uses `useTheme()` context hook

## Usage in Components

### Option 1: Use Semantic Tokens (Recommended)
```jsx
<Box bg="bg.surface" color="text.primary">
  <Text color="text.secondary">Secondary text</Text>
</Box>
```

### Option 2: Use useTheme Hook
```jsx
import { useTheme } from '../context/ThemeContext';

function MyComponent() {
  const { isDark, isLight, toggleColorMode } = useTheme();
  
  return isDark ? <DarkComponent /> : <LightComponent />;
}
```

### Option 3: Use Chakra's useColorMode (Legacy)
```jsx
import { useColorMode } from '@chakra-ui/react';

function MyComponent() {
  const { colorMode } = useColorMode();
  // ...
}
```

## localStorage Keys
- **Key**: `chakra-ui-color-mode`
- **Values**: `'light'` or `'dark'`
- Automatically persisted when theme changes

## Updated Components
All major components have been updated to use semantic tokens:
- Header, Footer
- Home, AboutUs, Ministries, Resources
- Contact, Help, PrayerRequest
- Bulletin, Announcements
- All ministry components
- Custom sliders and forms

## Browser Support
- ✅ Respects `prefers-color-scheme` CSS media query
- ✅ Persists preference in localStorage
- ✅ Works offline
- ✅ No flash of unstyled content (uses ColorModeScript)

## Configuration
To change initial color mode in `src/theme.js`:
```js
config: {
  initialColorMode: 'light', // or 'dark'
  useSystemColorMode: true,   // Enable system preference detection
}
```

## Testing
1. Click the dark mode toggle in the header (sun/moon icon)
2. Refresh the page - theme preference should persist
3. Change OS theme settings - app should respond automatically
