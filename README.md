# 💖 Interactive Anniversary Story — Final Version

## 🎬 Overview
This project is an animated, interactive love story website built for a special anniversary.  
It features heart animations, smooth transitions between scenes, background music, and dynamic sky effects that transition from day to night.

The experience includes:
- **Intro scene** — a secret phrase gate.
- **Main slides** — poetic messages with moving sun, moon, and hearts.
- **Ending scene** — a moonlit finale with a glowing heart.

---

## 🧱 Project Structure

| File | Purpose |
|------|----------|
| `index.html` | Contains all visual layers (intro, main, ending, backgrounds, buttons). |
| `style.css` | Controls all design elements — gradients, hearts, transitions, hidden states, responsiveness. |
| `script.js` | Handles animations, transitions, and logic for story flow and music playback. |

---

## 🧠 Key Features

### ✨ Scene Management
- Only **intro** is visible when the page loads.  
- Story scenes begin **after entering the secret phrase**.  
- **Ending scene** remains hidden until the final transition.  

### 🌙 Fixed Ending Bug
- Prevented `updateScene()` from running at load when no story is initialized.  
- Added explicit `display: none` for the ending overlay until needed.  

### 🌈 Smooth Transitions
- `fadeSwitch()` function now toggles both `.hidden` and `.display` for clean fade effects.  
- No more overlapping or early transitions between sections.

### 🌅 Background Animation
- The sky gradually shifts colors using `lerpColor()` to simulate **sunset → night**.  
- The **sun** fades as the **moon** rises — both move smoothly with each scene.

### 🎵 Music Controls
- Automatic crossfade and looping playback.  
- “Next Song” button switches to the next random track with a glow animation.  
- Mute button toggles between 🔊 and 🔇 instantly.

---

## ⚙️ Installation & Usage

1. Keep these three files together:
   - `index.html`
   - `style.css`
   - `script.js`

2. Create a folder named **`music/`** in the same directory, and add your MP3 files:
   - music/song1.mp3
   - music/song2.mp3
   - music/song3.mp3
   - You can add as many as you want — the system loops through them automatically

3. Open `index.html` in your browser.

4. Enter your **secret phrase** (for example: `251118`) to begin the journey.

---

## 💖 Summary
This version guarantees:
- Proper intro → story → ending sequence.
- Smooth sky transitions, responsive design, and bug-free animation flow.
- A romantic, immersive 30-minute interactive experience designed with love and code.

---

> 🩷 Developed and designed by Waliullah (WHJS) for a very special someone. 🌙

---