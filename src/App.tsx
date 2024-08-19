import './App.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';



const App = () => {

  const queryClient = new QueryClient()

  return (
    <div className="w-full min-h-screen bg-white">


      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>



    </div>
  );
}

export default App;
