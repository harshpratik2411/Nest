import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import { useNavigate } from 'react-router';
import 'aos/dist/aos.css'; 
const Account = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store user data in localStorage
    const userData = { fullName, email, password };
    localStorage.setItem('user', JSON.stringify(userData));

    // Alert the user about successful login/signup
    alert(`${isLogin ? 'Logged in' : 'Signed up'} successfully!`);

    // Clear form data
    setFullName('');
    setEmail('');
    setPassword('');

    // Navigate to the home page
    navigate('/');
  };

  const floatingAnim = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return ( 
   <> 
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
          transition={{
            duration: 20 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            width: `${150 + i * 30}px`,
            height: `${150 + i * 30}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: ['#10b981', '#6ee7b7', '#059669'][i % 3],
          }}
        />
      ))}

      {/* 📦 Card with Motion */}
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
          {isLogin ? 'Welcome Back ' : 'Create Account '}
        </motion.h2>

        <motion.form
          className="space-y-4"
          onSubmit={handleSubmit}
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
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

        {/* 🔐 Social Buttons */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="text-center text-gray-500 mb-4 text-sm">Or continue with</div>
          <div className="flex flex-col gap-4">
            <motion.button
              onClick={() => alert('Google login')}
              whileHover={{ scale: 1.03 }}
              className="flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition"
            >
              {/* Google SVG */}
              <svg className="w-5 h-5" viewBox="0 0 488 512" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4285F4" d="M488 261.8c0-17.7-1.6-34.8-4.6-51.3H249v97.1h135.6c-5.9 31.5-23.6 58.3-50.4 76.3v63h81.5c47.7-43.9 74.3-108.5 74.3-185.1z"/>
                <path fill="#34A853" d="M249 500c67.5 0 124.3-22.4 165.8-60.9l-81.5-63c-22.8 15.3-52 24.4-84.3 24.4-64.7 0-119.6-43.6-139.3-102.1H25v64.1C66.5 449.1 152.9 500 249 500z"/>
                <path fill="#FBBC04" d="M109.7 297.4c-9.6-28.8-9.6-59.8 0-88.6V144H25c-31.3 61.7-31.3 136.5 0 198.2l84.7-64.8z"/>
                <path fill="#EA4335" d="M249 97.6c35.2 0 66.9 12.1 91.9 35.9l68.9-68.9C373.3 24 316.5 0 249 0 152.9 0 66.5 50.9 25 144l84.7 64.8c19.7-58.5 74.6-102.1 139.3-102.1z"/>
              </svg>
              <span className="text-sm font-medium text-custom-new-gray">Continue with Google</span>
            </motion.button>

            <motion.button
              onClick={() => alert('Apple login')}
              whileHover={{ scale: 1.03 }}
              className="flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition"
            >
              {/* Apple SVG */}
              <svg className="w-5 h-5" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="black"
                  d="M259.5 81.7c13.6-16.4 22.8-39.3 20.3-61.7-19.6.8-43.2 13-57.2 29.5-12.6 14.7-23.7 38.2-20.7 60.6 21.8 1.7 43.9-11.1 57.6-28.4zM318.7 268.7c-.3-49.7 40.5-73.5 42.3-74.7-23.1-33.7-58.9-38.3-71.5-38.8-30.4-3.1-59.3 17.9-74.6 17.9-15.5 0-39.3-17.4-64.7-17-33.3.5-64.1 19.5-81.2 49.5-34.7 60.3-8.8 149.3 24.8 198.3 16.4 24 35.9 50.9 61.5 49.9 24.3-1 33.5-16 62.7-16 29.2 0 37.4 16 63 15.5 26-.4 42.4-24.5 58.3-48.7 18.3-27 25.8-53.3 26.1-54.7-.6-.3-49.7-19.1-49.9-75.9z"
                />
              </svg>
              <span className="text-sm font-medium text-custom-new-gray">Continue with Apple</span>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>  
  
    </>
  );
};

export default Account;
