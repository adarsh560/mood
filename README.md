# Couple Days App 💕

A private, intimate web application for couples to explore their relationship through daily challenges and activities.

## Features

- **Virtual Days**: 700-day cycle of virtual intimate tasks and conversations
- **Real Days**: 700-day cycle of physical positions and real-world activities  
- **Scratch Cards**: Daily reveal mechanism with beautiful animations
- **700-Day Cycle**: Tasks repeat every 700 days for continuous exploration
- **Private & Secure**: Designed for just two users with local database

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Database**: Prisma ORM with TiDB (MySQL)
- **UI Components**: Custom components with shadcn/ui patterns
- **Animations**: React Scratch Card component

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up the database**:
   ```bash
   npx prisma db push
   npm run db:seed
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Adding Your Own Tasks

Edit `prisma/seed-700.ts` to customize the 700 tasks for both virtual and real days:

- **Virtual Tasks**: Intimate conversations, video calls, role-playing
- **Real Tasks**: Physical positions, activities, challenges

### Adding Images

Place position images in the `public/` folder and reference them in your tasks:

```typescript
{
  title: "Your Position",
  description: "Description of the position...",
  imageUrl: "/images/position1.jpg",
  dayOffset: 0
}
```

### Styling

The app uses a modern gradient design with purple/pink themes. Customize colors in:
- `tailwind.config.ts` - Color palette
- `app/globals.css` - CSS variables and custom styles

## Database Schema

- **Users**: Store couple's login information
- **Tasks**: 700 virtual + 700 real tasks with descriptions and images
- **Logs**: Track completed tasks and dates

## Privacy & Security

- TiDB cloud database (secure and scalable)
- Designed for private use between two people
- All data stays on your device
- No external API calls for sensitive content

## Deployment

For production deployment:

1. Database already configured with TiDB
2. Update environment variables
3. Deploy to Vercel, Railway, or your preferred platform

## License

Private use only - designed for couples' personal use.

---

**Enjoy your intimate journey together! 💖**