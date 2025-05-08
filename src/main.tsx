import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import Pages from './Pages.tsx';
import { NavProvider } from './context/NavContext';
import { ErrorBoundary } from './components/Atoms/ErrorBoundary.tsx';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("qeg1I-wwbnPdtDkAk");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <NavProvider>
          <Pages />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </NavProvider>
      </HelmetProvider>
    </ErrorBoundary>
  </StrictMode>,
)
