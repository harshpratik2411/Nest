import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import { useNavigate } from 'react-router';
import { GoogleLogin } from '@react-oauth/google';
import 'aos/dist/aos.css';

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { fullName, email, password };
    localStorage.setItem('user', JSON.stringify(userData));
    console.log('Manual login user:', userData);
    alert(`${isLogin ? 'Logged in' : 'Signed up'} successfully!`);
    setFullName('');
    setEmail('');
    setPassword('');
    navigate('/');
  };

  // 🔓 Decode JWT without external libraries
  const parseJwt = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (e) {
      console.error('Error decoding JWT', e);
      return null;
    }
  };

  const handleGoogleSuccess = (credentialResponse) => {
    const token = credentialResponse?.credential;
    if (!token) {
      console.error('No credential returned from Google');
      return;
    }

    const decoded = parseJwt(token);
    if (decoded) {
      localStorage.setItem('user', JSON.stringify(decoded));
      console.log('Google login user:', decoded); // ✅ Show in console
      alert(`Logged in as ${decoded.name}`);
      navigate('/');
    } else {
      alert('Google login failed to decode.');
    }
  };

  const handleGoogleError = () => {
    alert('Google Sign In was unsuccessful. Try again later.');
  };

  const floatingAnim = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-r from-green-200 via-green-300 to-green-400 overflow-hidden px-4">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [0.8, 1.4, 1.2],
            rotate: [0, 360],
          }}
          transition={{ duration: 20 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: `${150 + i * 30}px`,
            height: `${150 + i * 30}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: ['#10b981', '#6ee7b7', '#059669'][i % 3],
          }}
        />
      ))}

      <motion.div
        variants={floatingAnim}
        animate="animate"
        className="z-10 w-full max-w-md p-8 bg-white rounded-3xl shadow-2xl"
        data-aos="zoom-in"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold text-center text-custom-blue mb-6"
        >
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </motion.h2>

        <motion.form
          className="space-y-4"
          onSubmit={handleSubmit}
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {!isLogin && (
            <motion.input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
            />
          )}
          <motion.input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
          />
          <motion.input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
          />

          <motion.button
            type="submit"
            className="w-full bg-custom-green hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </motion.button>
        </motion.form>

        <motion.p
          className="mt-6 text-sm text-center text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-custom-green hover:underline font-medium"
          >
            {isLogin ? 'Sign up' : 'Login'}
          </button>
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="text-center text-gray-500 mb-4 text-sm">Or continue with</div>
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Account;
