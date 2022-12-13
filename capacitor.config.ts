import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'test.com',
  appName: 'testWeb',
  webDir: 'build',
  bundledWebRuntime: false,
  server:{ 
    url: "http://networkID:3000",
    cleartext: true, 
  },
  
};

export default config;
