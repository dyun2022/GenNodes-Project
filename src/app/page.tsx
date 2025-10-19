"use client";
import React, { useState } from 'react';
import styles from "./page.module.css";

export default function DevShareMockups() {
  const [activeTab, setActiveTab] = useState('landing');

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.mainTitle}>
          GenNodes
        </h1>
        
        {/* Color Palette */}
        <div className={styles.colorPalette}>
          <h2 className={styles.paletteTitle}>Color Palette</h2>
          <div className={styles.colorsGrid}>
            <div className={styles.colorItem}>
              <div className={`${styles.colorBox} ${styles.colorPrimary}`}></div>
              <div className={styles.colorLabel}>Primary - Indigo</div>
              <div className={styles.colorCode}>#6366f1</div>
            </div>
            <div className={styles.colorItem}>
              <div className={`${styles.colorBox} ${styles.colorSecondary}`}></div>
              <div className={styles.colorLabel}>Secondary - Coral Pink</div>
              <div className={styles.colorCode}>#f472b6</div>
            </div>
            <div className={styles.colorItem}>
              <div className={`${styles.colorBox} ${styles.colorAccent}`}></div>
              <div className={styles.colorLabel}>Accent - Cyan</div>
              <div className={styles.colorCode}>#22d3ee</div>
            </div>
            <div className={styles.colorItem}>
              <div className={`${styles.colorBox} ${styles.colorBackground}`}></div>
              <div className={styles.colorLabel}>Background - Dark Slate</div>
              <div className={styles.colorCode}>#1e293b</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          {['landing', 'feed', 'profile', 'create'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${styles.tabButton} ${activeTab === tab ? styles.tabActive : ''}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} {tab === 'landing' && 'Page'}
              {tab === 'create' && ' Post'}
            </button>
          ))}
        </div>

        {/* Landing Page */}
        {activeTab === 'landing' && (
          <div className={styles.mockup}>
            <div className={styles.mockupHeader}>
              <div className={styles.mockupTitle}>Landing / Login Page</div>
              <div className={styles.mockupDesc}>First impression - welcoming, energetic, clear value proposition</div>
            </div>
            <div className={styles.mockupContent}>
              <div className={styles.landingHero}>
                <div className={styles.landingLogo}>DevShare</div>
                <div className={styles.landingTagline}>Where Code Meets Creativity</div>
                <div className={styles.landingButtons}>
                  <button className={styles.btnPrimary}>Sign Up Free</button>
                  <button className={styles.btnSecondary}>Log In</button>
                </div>
              </div>

              <div className={styles.featuresGrid}>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>💻</div>
                  <div className={styles.featureTitle}>Share Your Code</div>
                  <div className={styles.featureDesc}>
                    Post beautiful code snippets and project screenshots that showcase your work
                  </div>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>🌟</div>
                  <div className={styles.featureTitle}>Get Inspired</div>
                  <div className={styles.featureDesc}>
                    Discover amazing projects from developers around the world
                  </div>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>🤝</div>
                  <div className={styles.featureTitle}>Build Community</div>
                  <div className={styles.featureDesc}>
                    Connect with fellow developers and grow your network
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Feed Page */}
        {activeTab === 'feed' && (
          <div className={styles.mockup}>
            <div className={styles.mockupHeader}>
              <div className={styles.mockupTitle}>Feed Page</div>
              <div className={styles.mockupDesc}>Main scrolling experience - Instagram-style with developer focus</div>
            </div>
            <div className={styles.mockupContent}>
              <div className={styles.feedLayout}>
                {/* Sidebar */}
                <div className={styles.sidebar}>
                  <div className={styles.sidebarTitle}>Navigation</div>
                  <div className={styles.navList}>
                    <div className={`${styles.navItem} ${styles.navItemActive}`}>🏠 Home</div>
                    <div className={styles.navItem}>🔥 Trending</div>
                    <div className={styles.navItem}>👤 Profile</div>
                    <div className={styles.navItem}>➕ Create Post</div>
                    <div className={styles.navItem}>⚙️ Settings</div>
                  </div>
                </div>

                {/* Feed */}
                <div className={styles.feedMain}>
                  {/* Post 1 */}
                  <div className={styles.postCard}>
                    <div className={styles.postHeader}>
                      <div className={styles.avatar}>JS</div>
                      <div className={styles.postUserInfo}>
                        <div className={styles.postUsername}>@jane_codes</div>
                        <div className={styles.postTime}>2 hours ago</div>
                      </div>
                    </div>
                    <div className={styles.postImage}>[Project Screenshot / Code Snippet]</div>
                    <div className={styles.postContent}>
                      <div className={styles.postTitle}>AI-Powered Task Manager 🤖</div>
                      <div className={styles.postDescription}>
                        Built a task management app with natural language processing. You can just type "remind me to buy groceries tomorrow" and it handles the rest!
                      </div>
                      <div className={styles.postTags}>
                        <span className={styles.tag}>#React</span>
                        <span className={styles.tag}>#OpenAI</span>
                        <span className={styles.tag}>#TypeScript</span>
                      </div>
                      <div className={styles.postActions}>
                        <span className={styles.actionBtn}>❤️ 234 likes</span>
                        <span className={styles.actionBtn}>💬 45 comments</span>
                        <span className={styles.actionBtn}>🔗 Share</span>
                      </div>
                    </div>
                  </div>

                  {/* Post 2 */}
                  <div className={styles.postCard}>
                    <div className={styles.postHeader}>
                      <div className={styles.avatar}>MK</div>
                      <div className={styles.postUserInfo}>
                        <div className={styles.postUsername}>@mike_dev</div>
                        <div className={styles.postTime}>5 hours ago</div>
                      </div>
                    </div>
                    <div className={styles.postImage}>[Project Screenshot / Code Snippet]</div>
                    <div className={styles.postContent}>
                      <div className={styles.postTitle}>3D Portfolio with Three.js ✨</div>
                      <div className={styles.postDescription}>
                        Spent the weekend creating an interactive 3D portfolio. Each project floats in space and you can navigate through them!
                      </div>
                      <div className={styles.postTags}>
                        <span className={styles.tag}>#Three.js</span>
                        <span className={styles.tag}>#WebGL</span>
                        <span className={styles.tag}>#JavaScript</span>
                      </div>
                      <div className={styles.postActions}>
                        <span className={styles.actionBtn}>❤️ 456 likes</span>
                        <span className={styles.actionBtn}>💬 78 comments</span>
                        <span className={styles.actionBtn}>🔗 Share</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trending */}
                <div className={styles.trending}>
                  <div className={styles.trendingTitle}>Trending Topics</div>
                  <div className={styles.trendingList}>
                    {[
                      { tag: '#React', count: '1.2K posts' },
                      { tag: '#Python', count: '987 posts' },
                      { tag: '#MachineLearning', count: '756 posts' },
                      { tag: '#WebDev', count: '654 posts' },
                      { tag: '#AI', count: '543 posts' }
                    ].map((item, i) => (
                      <div key={i} className={styles.trendingItem}>
                        <div className={styles.trendingTag}>{item.tag}</div>
                        <div className={styles.trendingCount}>{item.count}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Profile Page */}
        {activeTab === 'profile' && (
          <div className={styles.mockup}>
            <div className={styles.mockupHeader}>
              <div className={styles.mockupTitle}>Profile Page</div>
              <div className={styles.mockupDesc}>User's portfolio showcase - clean, professional, project-focused</div>
            </div>
            <div className={styles.mockupContent}>
              <div className={styles.profileHeader}>
                <div className={styles.profileAvatar}>AS</div>
                <div className={styles.profileInfo}>
                  <div className={styles.profileName}>Alex Smith</div>
                  <div className={styles.profileUsername}>@alexsmith_dev</div>
                  <div className={styles.profileBio}>
                    Full-stack developer passionate about creating beautiful web experiences. 
                    Love React, Node.js, and anything that involves creative coding! 🚀
                  </div>
                  <div className={styles.profileStats}>
                    <div className={styles.stat}>
                      <div className={styles.statNumber}>42</div>
                      <div className={styles.statLabel}>Projects</div>
                    </div>
                    <div className={styles.stat}>
                      <div className={styles.statNumber}>1.2K</div>
                      <div className={styles.statLabel}>Followers</div>
                    </div>
                    <div className={styles.stat}>
                      <div className={styles.statNumber}>856</div>
                      <div className={styles.statLabel}>Following</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.projectsGrid}>
                {[
                  { title: 'Weather Dashboard', desc: 'Real-time weather app with beautiful animations' },
                  { title: 'Chat Application', desc: 'WebSocket-based real-time messaging' },
                  { title: 'E-commerce Store', desc: 'Full-stack shopping platform with Stripe' },
                  { title: 'Portfolio Site', desc: 'Personal portfolio with smooth animations' },
                  { title: 'Blog Platform', desc: 'CMS with markdown support' },
                  { title: 'Game Engine', desc: 'Canvas-based 2D game framework' }
                ].map((project, i) => (
                  <div key={i} className={styles.projectCard}>
                    <div className={styles.projectThumbnail}>[Project Screenshot]</div>
                    <div className={styles.projectInfo}>
                      <div className={styles.projectTitle}>{project.title}</div>
                      <div className={styles.projectDesc}>{project.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Create Post Page */}
        {activeTab === 'create' && (
          <div className={styles.mockup}>
            <div className={styles.mockupHeader}>
              <div className={styles.mockupTitle}>Post Creation Page</div>
              <div className={styles.mockupDesc}>Share your projects - intuitive upload flow</div>
            </div>
            <div className={styles.mockupContent}>
              <div className={styles.creationForm}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Project Title</label>
                  <input
                    type="text"
                    placeholder="Enter your project title..."
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Description</label>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={5}
                    className={`${styles.formInput} ${styles.formTextarea}`}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Upload Screenshot</label>
                  <div className={styles.uploadArea}>
                    <div className={styles.uploadIcon}>📁</div>
                    <div className={styles.uploadText}>Click to upload or drag and drop</div>
                    <div className={styles.uploadSubtext}>PNG, JPG, GIF up to 10MB</div>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Code Snippet (Optional)</label>
                  <div className={styles.codeSnippet}>
                    <span className={styles.codeKeyword}>function</span>{' '}
                    <span className={styles.codeFunctionName}>createAwesomeProject</span>() {'{'}<br />
                    &nbsp;&nbsp;<span className={styles.codeComment}>// Your amazing code here...</span><br />
                    &nbsp;&nbsp;<span className={styles.codeKeyword}>return</span>{' '}
                    <span className={styles.codeString}>"success"</span>;<br />
                    {'}'}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Tags</label>
                  <input
                    type="text"
                    placeholder="#React #TypeScript #WebDev"
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formActions}>
                  <button className={styles.btnCancel}>Cancel</button>
                  <button className={styles.btnPrimary}>Publish Project</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
