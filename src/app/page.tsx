import { hygraphClient } from '@/lib/hygraph';
import { HygraphResponse } from '@/types/hygraph';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 py-20 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl font-poppins">
          Empowering Student Entrepreneurs at Universiti Malaya
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl">
          Join the largest startup community in UM and turn your ideas into reality
        </p>
        <Button asChild>
          <Link
            href="/join-us"
            className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Join UMSCOM
          </Link>
        </Button>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-light-surface dark:bg-dark-surface py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins">
              Upcoming Events
            </h2>
            <Link
              href="/events"
              className="text-brand-primary hover:text-brand-primary/80 font-medium transition-colors"
            >
              View all events →
            </Link>
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Event Card 1 */}
            <div className="bg-background rounded-lg p-6 shadow-1">
              <p className="text-brand-secondary font-medium mb-2">MAR 15, 2024</p>
              <h3 className="text-xl font-bold mb-2">Startup Weekend UM</h3>
              <p className="text-foreground/80 mb-4">
                54-hour event where aspiring entrepreneurs pitch ideas and work in teams
              </p>
              <Link
                href="/events/startup-weekend"
                className="text-brand-primary hover:text-brand-primary/80 font-medium"
              >
                Learn more →
              </Link>
            </div>

            {/* Event Card 2 */}
            <div className="bg-background rounded-lg p-6 shadow-1">
              <p className="text-brand-secondary font-medium mb-2">MAR 20, 2024</p>
              <h3 className="text-xl font-bold mb-2">Pitch Perfect Workshop</h3>
              <p className="text-foreground/80 mb-4">
                Learn how to pitch your startup idea effectively to investors
              </p>
              <Link
                href="/events/pitch-workshop"
                className="text-brand-primary hover:text-brand-primary/80 font-medium"
              >
                Learn more →
              </Link>
            </div>

            {/* Event Card 3 */}
            <div className="bg-background rounded-lg p-6 shadow-1">
              <p className="text-brand-secondary font-medium mb-2">MAR 25, 2024</p>
              <h3 className="text-xl font-bold mb-2">Founder Fireside Chat</h3>
              <p className="text-foreground/80 mb-4">
                Interactive session with successful startup founders from Malaysia
              </p>
              <Link
                href="/events/fireside-chat"
                className="text-brand-primary hover:text-brand-primary/80 font-medium"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}