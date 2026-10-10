# PhysioElite | Dr. Bansi Kansara (BPT)
### Physiotherapist, Advanced Fitness & Aerobics Instructor · Certified Antenatal & Postnatal Specialist — Surat, Gujarat

Official, production-ready web application for **PhysioElite**, featuring personalized home visit physiotherapy across Surat and structured 1-on-1 online video rehabilitation.

---

## 📦 Download Complete Final Website ZIP
You can download the complete final project archive directly:
* **`final website physio elite.zip`** *(also accessible as `final-website-physio-elite.zip`)*

---

## 📸 Complete Photo Directory & How to Edit Every Photo

Every single photograph used across this website is stored as a standard file in:
```
public/images/
```
*(In the compiled production dist folder, this maps directly to `images/`)*

You can edit or replace **ANY** photo from outside the website simply by swapping the image file with the same filename. No coding knowledge required!

---

### 1. Master Image Catalog

| Image Path / Filename | Where It Appears on Website | Aspect Ratio & Recommended Size | Description |
| :--- | :--- | :--- | :--- |
| **`public/images/dr-bansi.webp`** *(or `.jpg`)* | **Hero Clinician Card** (Top of homepage) | 4:3 (`900 x 675 px`) | Dr. Bansi's main professional portrait in medical/clinic attire |
| **`public/images/about-bansi.jpg`** | **About Dr. Bansi Section** (Philosophy Card) | 4:3 (`900 x 675 px`) | Dr. Bansi consulting or assessing a patient |
| **`public/images/home-visit.jpg`** | **Surat Home Care Banner** & **Access Modes** Card 1 | 16:9 (`1200 x 675 px`) | In-home physiotherapy treatment session in Surat living room |
| **`public/images/telehealth.jpg`** | **Online Consultation** Access Modes Card 2 | 16:9 (`1200 x 675 px`) | 1-on-1 video call rehabilitation session |
| **`public/images/logo.png`** *(optional)* | **Header & Footer** Brand Emblem | 1:1 (`512 x 512 px`, PNG) | Custom clinic logo (replaces default vector runner emblem) |

#### 🩺 Clinical Services Photos (`public/images/services/`)
| Image Path / Filename | Service Section | Recommended Size |
| :--- | :--- | :--- |
| **`public/images/services/back-neck-pain.jpg`** | Back & Neck Pain Relief | 16:10 (`800 x 500 px`) |
| **`public/images/services/sports-injury.jpg`** | Sports Injury & Return to Play | 16:10 (`800 x 500 px`) |
| **`public/images/services/joint-rehab.jpg`** | Knee, Joint & Post-Surgery Care | 16:10 (`800 x 500 px`) |
| **`public/images/services/mat-pilates.jpg`** | Clinical Mat Pilates & Core Strength | 16:10 (`800 x 500 px`) |
| **`public/images/services/yoga-movement.jpg`** | Gentle Yoga & Daily Body Mobility | 16:10 (`800 x 500 px`) |
| **`public/images/services/pregnancy-care.jpg`** | Pregnancy & Postnatal Mom Care | 16:10 (`800 x 500 px`) |

#### 🏃 The 6 Movement Screens Photos (`public/images/movement/`)
| Image Path / Filename | Movement Test | Recommended Size |
| :--- | :--- | :--- |
| **`public/images/movement/spine-twist.jpg`** | 01 Spine Flexibility & Gentle Twist | 16:9 (`800 x 450 px`) |
| **`public/images/movement/squat.jpg`** | 02 Easy Chair Squat & Standing Up | 16:9 (`800 x 450 px`) |
| **`public/images/movement/single-leg.jpg`** | 03 Single Leg Balance Test | 16:9 (`800 x 450 px`) |
| **`public/images/movement/shoulder.jpg`** | 04 Overhead Reach & Shoulder Stretch | 16:9 (`800 x 450 px`) |
| **`public/images/movement/hamstring.jpg`** | 05 Step & Stair Climbing Control | 16:9 (`800 x 450 px`) |
| **`public/images/movement/core-control.jpg`** | 06 Gentle Core & Back Support | 16:9 (`800 x 450 px`) |

#### 🗺️ Patient Recovery Journey Photos (`public/images/journey/`)
| Image Path / Filename | Journey Phase | Recommended Size |
| :--- | :--- | :--- |
| **`public/images/journey/step1.jpg`** | Step 01: Finding What Hurts | 16:10 (`600 x 375 px`) |
| **`public/images/journey/step2.jpg`** | Step 02: Gentle Hands-On Relief | 16:10 (`600 x 375 px`) |
| **`public/images/journey/step3.jpg`** | Step 03: Safe Strength & Pilates | 16:10 (`600 x 375 px`) |
| **`public/images/journey/step4.jpg`** | Step 04: Lasting Pain-Free Living | 16:10 (`600 x 375 px`) |

---

## 🐙 How to Upload & Host on GitHub

### Method A: Push Complete Source to GitHub
1. Create a new repository on [GitHub](https://github.com/new) (e.g. `physioelite-website`).
2. Unzip `physioelite-complete-source.zip` on your computer.
3. Open your terminal in the unzipped project folder and run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of PhysioElite website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/physioelite-website.git
   git push -u origin main
   ```

### Method B: How to Edit Photos Directly on GitHub
1. Go to your GitHub repository in your web browser.
2. Navigate into `public/images/` (or `public/images/services/`, etc.).
3. Click **Add file** -> **Upload files**.
4. Drag and drop your replacement photo with the **exact same filename** (e.g. `dr-bansi.jpg`).
5. Click **Commit changes**.
6. That's it! Your new photo is updated in your repository.

---

## ⚡ How to Host on Netlify (2 Easy Ways)

### Option 1: Drag-and-Drop (Instant — 60 Seconds, No Code!)
1. Download and extract **`physioelite-production-dist.zip`**.
2. Visit **[app.netlify.com/drop](https://app.netlify.com/drop)** in your browser.
3. Drag and drop the extracted `dist` folder into the drop zone.
4. Your website is live immediately with free HTTPS!
5. **How to edit photos with this option:**
   Before dropping onto Netlify, just open the `images/` folder inside the `dist` folder, replace any photo with your new photo file, and drag-and-drop again.

### Option 2: Connect Netlify to GitHub (Continuous Automatic Deploy)
1. Push your repository to GitHub (as described in the GitHub section above).
2. Go to **[app.netlify.com](https://app.netlify.com)** and log in with your GitHub account.
3. Click **Add new site** -> **Import an existing project**.
4. Select **GitHub** and pick your `physioelite-website` repository.
5. Netlify will auto-detect settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **Deploy site**.
7. **The Best Part:** Whenever you change any photo on GitHub (even directly via the GitHub website in `public/images/`), Netlify automatically rebuilds and updates the live site in ~30 seconds!

---

## 🛠️ Changing Doctor Information, Phone & WhatsApp

All clinic contact details, WhatsApp message templates, phone numbers, and Surat coverage areas are located in:
```
src/data/physioData.ts
```

Open `src/data/physioData.ts` to customize:
* **Doctor Name & Headline:** `DOCTOR_INFO.name`, `DOCTOR_INFO.headline`
* **Phone & WhatsApp Number:** `DOCTOR_INFO.phone: '9106387568'`
* **Formatted Phone:** `DOCTOR_INFO.phoneFormatted: '+91 91063 87568'`
* **Email Address:** `DOCTOR_INFO.email: 'dr.bansikansaraphysio02@gmail.com'`
* **Instagram:** `https://www.instagram.com/physioelite.health/`
* **LinkedIn:** `https://www.linkedin.com/in/bansi-kansara-71ba18251/`
* **YouTube:** `https://www.youtube.com/@bansikansara5586`
* **Surat Localities Visited:** `SURAT_AREAS` (Vesu, Adajan, Pal, Althan, City Light, Piplod, etc.)
* **Service Details:** `SERVICE_ITEMS`
* **Movement Tests:** `MOVEMENT_PATTERNS`

---

## 💻 Running Locally

1. Open terminal in the project directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open the displayed URL (e.g. `http://localhost:5173` or `http://localhost:3000`) in your browser.
