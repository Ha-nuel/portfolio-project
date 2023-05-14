import './App.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import Footer from './Footer';
import Header from './Header';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
