import './App.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import { LoginForm, SignupForm } from './Auth';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Login</h1>
        <LoginForm />
        <h1>Signup</h1>
        <SignupForm />
      </div>
    </QueryClientProvider>
  );
}

export default App;
