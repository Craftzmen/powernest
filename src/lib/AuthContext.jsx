import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [appPublicSettings, setAppPublicSettings] = useState(null);

  useEffect(() => {
    // Initialize auth state - no authentication required for local app
    setIsLoadingAuth(false);
    setIsLoadingPublicSettings(false);
    setIsAuthenticated(false);
  }, []);

  const checkAppState = async () => {
    // No-op for local app
    setIsLoadingAuth(false);
    setIsLoadingPublicSettings(false);
  };

  const logout = (shouldRedirect = true) => {
    setUser(null);
    setIsAuthenticated(false);
    // Clear any stored tokens
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('access_token');
    }
    if (shouldRedirect) {
      window.location.href = window.location.href;
    }
  };

  const navigateToLogin = () => {
    // No-op for local app - no login required
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isLoadingAuth,
      isLoadingPublicSettings,
      authError,
      appPublicSettings,
      logout,
      navigateToLogin,
      checkAppState
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
