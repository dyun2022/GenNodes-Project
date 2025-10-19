import React, { useState } from 'react';
import styles from './SignUpPage.module.css';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your sign up logic here
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>

      <div className={styles.content}>
        {/* Left Side - Branding */}
        <div className={styles.brandingSide}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>{'</>'}</span>
            <span className={styles.logoText}>DevShare</span>
          </div>
          
          <h1 className={styles.brandingTitle}>
            Where Code Meets Creativity
          </h1>
          
          <p className={styles.brandingSubtitle}>
            Join thousands of developers sharing their amazing projects and getting inspired every day.
          </p>

          <div className={styles.features}>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>✨</span>
              <div className={styles.featureText}>
                <h3>Share Your Work</h3>
                <p>Showcase your projects with beautiful visuals and code snippets</p>
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>🚀</span>
              <div className={styles.featureText}>
                <h3>Get Discovered</h3>
                <p>Connect with developers and companies looking for talent</p>
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>💡</span>
              <div className={styles.featureText}>
                <h3>Stay Inspired</h3>
                <p>Explore innovative projects from the developer community</p>
              </div>
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50K+</div>
              <div className={styles.statLabel}>Developers</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>200K+</div>
              <div className={styles.statLabel}>Projects</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>1M+</div>
              <div className={styles.statLabel}>Code Snippets</div>
            </div>
          </div>
        </div>

        {/* Right Side - Sign Up Form */}
        <div className={styles.formSide}>
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>Create Your Account</h2>
              <p className={styles.formSubtitle}>Start your developer journey today</p>
            </div>

            {/* Social Sign Up */}
            <div className={styles.socialButtons}>
              <button className={styles.socialButton}>
                <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Continue with GitHub
              </button>
              
              <button className={styles.socialButton}>
                <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>
            </div>

            <div className={styles.divider}>
              <span className={styles.dividerText}>or sign up with email</span>
            </div>

            {/* Sign Up Form */}
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="username" className={styles.label}>Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="johndoe"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password" className={styles.label}>Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className={styles.checkboxGroup}>
                <input type="checkbox" id="terms" className={styles.checkbox} required />
                <label htmlFor="terms" className={styles.checkboxLabel}>
                  I agree to the <a href="#" className={styles.link}>Terms of Service</a> and <a href="#" className={styles.link}>Privacy Policy</a>
                </label>
              </div>

              <button type="submit" className={styles.submitButton}>
                Create Account
              </button>
            </form>

            <div className={styles.footer}>
              Already have an account? <a href="#" className={styles.link}>Sign In</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
