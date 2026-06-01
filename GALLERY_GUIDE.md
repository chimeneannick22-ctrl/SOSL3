# Gallery Component Documentation

## Overview
The Gallery component is a reusable Vue 3 component that displays both images and videos with an interactive lightbox/modal viewer.

## Features
✅ Responsive grid layout (1-3 columns)
✅ Support for both images and videos
✅ Interactive lightbox modal
✅ Navigation buttons (previous/next)
✅ Close button and keyboard shortcuts
✅ Type badges (🖼 IMAGE / 🎬 VIDEO)
✅ Play button overlay on videos
✅ Smooth fade transitions

## How to Use

### 1. Import in Your Component
```javascript
<script setup>
import Gallery from '../components/Gallery.vue'

const galleryItems = [
  // Your items here
]
</script>
```

### 2. Create Gallery Items Array
Each item should have this structure:

```javascript
{
  type: 'image',  // or 'video'
  src: 'url-or-path',
  title: 'Title',
  description: 'Description text'
}
```

### 3. Use in Template
```vue
<Gallery :items="galleryItems" />
```

## Item Structure Examples

### Image Item
```javascript
{
  type: 'image',
  src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
  title: 'Volcanoes National Park',
  description: 'Rwanda's most famous national park, known worldwide for mountain gorilla trekking.'
}
```

### Video Item
```javascript
{
  type: 'video',
  src: 'https://example.com/video.mp4',  // or '/videos/local-video.mp4'
  title: 'Rwanda Tour',
  description: 'An amazing tour of Rwanda\'s beautiful landscapes.'
}
```

## How to Add Local Videos

### Step 1: Create Videos Folder
Add a `videos` folder in your `public` directory:
```
project1/
├── public/
│   └── videos/
│       ├── gorilla-trekking.mp4
│       ├── lake-kivu.webm
│       └── volcanoes-tour.mp4
```

### Step 2: Reference in Gallery Items
```javascript
{
  type: 'video',
  src: '/videos/gorilla-trekking.mp4',
  title: 'Gorilla Trekking Adventure',
  description: 'Experience the thrill of seeing mountain gorillas in their natural habitat.'
}
```

## Supported Video Formats
- `.mp4` (MP4 video)
- `.webm` (WebM format)
- `.ogv` (Ogg Vorbis)
- Any HTML5 compatible video format

## Lightbox Features
- Click on any item to open fullscreen view
- Use ← → arrow buttons to navigate
- Click outside or press ✕ to close
- Video controls include play, pause, volume, fullscreen
- Display shows current position (e.g., "3 / 12")

## Example: Mixed Gallery

```javascript
const galleryItems = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    title: 'Volcanoes National Park',
    description: 'Mountain gorillas and volcanic scenery'
  },
  {
    type: 'video',
    src: '/videos/gorilla-trekking.mp4',
    title: 'Gorilla Trekking Adventure',
    description: 'Experience the thrill of gorilla trekking'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    title: 'Lake Kivu',
    description: 'Beautiful Lake Kivu sunset'
  },
  {
    type: 'video',
    src: '/videos/lake-kivu-tour.mp4',
    title: 'Lake Kivu Tour',
    description: 'Scenic boat tour of Lake Kivu'
  }
]
```

## Styling Notes
- Gallery uses Tailwind CSS utility classes
- Responsive on all screen sizes
- Dark theme with green accent color (#22c55e)
- Hover effects on cards

## Browser Compatibility
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

## Updated Pages
All region pages have been updated to use the Gallery component:
- ✅ north.vue
- ✅ south.vue
- ✅ west.vue
- ✅ east.vue
- ✅ kigali.vue

## Customization

If you want to customize the Gallery component, edit: `src/components/Gallery.vue`

### Modify Grid Columns
In the template, change:
```vue
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
```
To: `grid-cols-2 lg:grid-cols-4` for 2-4 columns

### Change Colors
Replace `text-green-400` and `bg-green-500` with your preferred Tailwind colors

## Quick Start: Add Videos to Your Gallery

1. **Add video files** to `public/videos/` folder
2. **Update your items array** to include video entries
3. **Test the lightbox** by clicking gallery items

Example quick update:
```javascript
const galleryItems = [
  // ... existing images ...
  {
    type: 'video',
    src: '/videos/my-video.mp4',
    title: 'My Video Title',
    description: 'Video description'
  }
]
```

That's it! Your gallery now supports videos. 🎬
