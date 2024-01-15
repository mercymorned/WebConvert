import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.griffincrescent.app',
  appName: 'Web Convert',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
