import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootApp from './src/RootApp';
import { Provider } from 'react-redux';
import store from './src/state/store';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RootApp />
      </Provider>
    </SafeAreaProvider>
  );
}
