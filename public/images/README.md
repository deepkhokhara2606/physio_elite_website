# PhysioElite - Image Directory & Photo Replacement Guide

All website imagery is organized into this folder (`public/images/`).
To replace **any** photo on the website, simply copy your new image here using the **exact filename** listed below.

---

## 📁 Image Directory Structure

```
public/images/
├── dr-bansi.webp              <- Hero Section Doctor Card (Main Portrait)
├── dr-bansi.jpg               <- Fallback / Alternative Doctor Portrait
├── about-bansi.jpg            <- About Dr. Bansi Section (Consultation Card)
├── home-visit.jpg             <- Surat Home Care Banner & Modes Section Card 1
├── telehealth.jpg             <- Online Video Physiotherapy Modes Section Card 2
├── logo.png                   <- (Optional) Custom Clinic Logo PNG
├── services/                  <- 6 Clinical Service Cards
│   ├── back-neck-pain.jpg     <- Back & Neck Pain Relief
│   ├── sports-injury.jpg      <- Sports Injury & Return to Play
│   ├── joint-rehab.jpg        <- Knee, Joint & Post-Surgery Recovery
│   ├── mat-pilates.jpg        <- Clinical Mat Pilates & Core Strength
│   ├── yoga-movement.jpg      <- Gentle Yoga & Daily Body Mobility
│   └── pregnancy-care.jpg     <- Pregnancy & Postnatal Mom Care
├── movement/                  <- The 6 Foundational Movement Screens
│   ├── spine-twist.jpg        <- 01 Spine Flexibility & Gentle Twist
│   ├── squat.jpg              <- 02 Easy Chair Squat & Standing Up
│   ├── single-leg.jpg         <- 03 Single Leg Balance Test
│   ├── shoulder.jpg           <- 04 Overhead Reach & Shoulder Stretch
│   ├── hamstring.jpg          <- 05 Step & Stair Climbing Control
│   └── core-control.jpg       <- 06 Gentle Core & Back Support
└── journey/                   <- 4 Patient Journey Steps
    ├── step1.jpg              <- Step 01: Finding What Hurts
    ├── step2.jpg              <- Step 02: Gentle Hands-On Relief
    ├── step3.jpg              <- Step 03: Safe Strength & Pilates
    └── step4.jpg              <- Step 04: Lasting Pain-Free Living
```

---

## 📐 Recommended Image Sizes & Formats

| File | Aspect Ratio | Dimensions | Format |
| :--- | :--- | :--- | :--- |
| `dr-bansi.webp` / `dr-bansi.jpg` | 4:3 | 900 x 675 px | WebP or JPG |
| `about-bansi.jpg` | 4:3 | 900 x 675 px | JPG or WebP |
| `home-visit.jpg` | 16:9 | 1200 x 675 px | JPG or WebP |
| `telehealth.jpg` | 16:9 | 1200 x 675 px | JPG or WebP |
| `services/*.jpg` | 16:10 | 800 x 500 px | JPG or WebP |
| `movement/*.jpg` | 16:9 | 800 x 450 px | JPG or WebP |
| `journey/*.jpg` | 16:10 | 600 x 375 px | JPG or WebP |
| `logo.png` *(optional)* | 1:1 | 512 x 512 px | Transparent PNG |

---

## 🚀 How to Replace Any Photo from Outside the Website

### Option 1: On Netlify (Drag-and-Drop)
1. In your extracted `dist` folder, open `images/`.
2. Replace any photo with your new photo file using the same filename.
3. Drag and drop the `dist` folder onto **[app.netlify.com/drop](https://app.netlify.com/drop)**.
4. Your website updates instantly!

### Option 2: On GitHub (With or without Netlify)
1. Open your repository on GitHub.
2. Navigate to `public/images/` (or into `services/`, `movement/`, `journey/`).
3. Click **Add file** -> **Upload files**.
4. Upload your new photo with the exact same name and commit.
5. If connected to Netlify, your site rebuilds and updates automatically in ~30 seconds!
