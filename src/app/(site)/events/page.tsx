"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  ArrowRight,
  BookOpen,
  Code,
  Palette,
  Megaphone,
  Coffee,
  Video,
  Mic,
} from "lucide-react";
import { motion } from "framer-motion";

const upcomingEvents = [
  {
    id: 1,
    title: "Web Development Masterclass",
    description:
      "Learn modern React, Next.js, and TypeScript from industry experts",
    date: "2024-01-15",
    time: "2:00 PM - 5:00 PM",
    location: "GDFA Community Center, Dinajpur",
    category: "Workshop",
    attendees: 45,
    maxAttendees: 60,
    price: "Free",
    featured: true,
    icon: Code,
    gradient: "from-[var(--gdfa-secondary)] to-[var(--gdfa-accent)]",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    id: 2,
    title: "Monthly Networking Meetup",
    description:
      "Connect with fellow freelancers, share experiences, and build relationships",
    date: "2024-01-20",
    time: "6:00 PM - 9:00 PM",
    location: "Hotel Royal Palace, Dinajpur",
    category: "Networking",
    attendees: 78,
    maxAttendees: 100,
    price: "৳200",
    featured: false,
    icon: Coffee,
    gradient: "from-[var(--gdfa-secondary)] to-[var(--gdfa-accent)]",
    tags: ["Networking", "Community"],
  },
  {
    id: 3,
    title: "UI/UX Design Workshop",
    description:
      "Master Figma, design systems, user experience principles, and modern UI techniques.",
    date: "2024-01-25",
    time: "10:00 AM - 4:00 PM",
    location: "Online (Zoom)",
    category: "Workshop",
    attendees: 32,
    maxAttendees: 50,
    price: "৳500",
    featured: false,
    icon: Palette,
    gradient: "from-[var(--gdfa-secondary)] to-[var(--gdfa-accent)]",
    tags: ["Figma", "UI/UX", "Design"],
  },
  {
    id: 4,
    title: "Digital Marketing Bootcamp",
    description:
      "Complete guide to SEO, social media marketing, and content strategy",
    date: "2024-02-01",
    time: "9:00 AM - 6:00 PM",
    location: "GDFA Training Center, Thakurgaon",
    category: "Bootcamp",
    attendees: 28,
    maxAttendees: 40,
    price: "৳1000",
    featured: true,
    icon: Megaphone,
    gradient: "from-[var(--gdfa-secondary)] to-[var(--gdfa-accent)]",
    tags: ["SEO", "Social Media", "Marketing"],
  },
  {
    id: 5,
    title: "Freelancer Success Stories",
    description:
      "Inspiring talks from successful GDFA members about their journey",
    date: "2024-02-10",
    time: "7:00 PM - 9:00 PM",
    location: "Online (YouTube Live)",
    category: "Talk",
    attendees: 156,
    maxAttendees: 200,
    price: "Free",
    featured: false,
    icon: Mic,
    gradient: "from-[var(--gdfa-secondary)] to-[var(--gdfa-accent)]",
    tags: ["Inspiration", "Success Stories"],
  },
];

const pastEvents = [
  {
    title: "WordPress Development Workshop",
    date: "2023-12-15",
    attendees: 42,
    rating: 4.8,
    category: "Workshop",
  },
  {
    title: "Year-End Networking Gala",
    date: "2023-12-20",
    attendees: 120,
    rating: 4.9,
    category: "Networking",
  },
  {
    title: "Graphic Design Fundamentals",
    date: "2023-11-28",
    attendees: 35,
    rating: 4.7,
    category: "Workshop",
  },
  {
    title: "Freelancing Business Tips",
    date: "2023-11-15",
    attendees: 68,
    rating: 4.6,
    category: "Seminar",
  },
];

// Animation variants are no longer needed as scroll-triggered animations are removed.
// Kept here commented out for reference if needed later.
/*
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const gridContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const headerVariant = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const subHeaderVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
  },
};
*/

export default function Events() {
  return (
    <>
      <section className="py-24 bg-gradient-to-br from-[var(--gdfa-neutral-white)] via-[var(--gdfa-neutral-white)] to-[var(--gdfa-secondary)]/10 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--gdfa-secondary)] rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-[var(--gdfa-accent)] rounded-full opacity-30 animate-bounce"></div>

        <div className="container px-4 mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-[var(--gdfa-secondary)] rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              <span>Community Events</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--gdfa-primary)] mb-6 leading-tight">
              Upcoming
              <span className="block bg-gradient-to-r from-[var(--gdfa-secondary)] to-[var(--gdfa-accent)] bg-clip-text text-transparent">
                Events & Workshops
              </span>
            </h1>

            <p className="text-xl text-[var(--gdfa-primary)/80] max-w-3xl mx-auto leading-relaxed">
              Join our community events to learn new skills, network with fellow
              freelancers, and grow your career in the Greater Dinajpur region.
            </p>
          </div>

          {/* Featured Events */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[var(--gdfa-primary)] mb-8">
              Featured Events
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {upcomingEvents
                .filter((event) => event.featured)
                .map((event) => (
                  <motion.div
                    key={event.id}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 15px 30px -8px rgba(0, 0, 0, 0.2)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="border-0 shadow-2xl overflow-hidden group">
                      <div
                        className={`h-2 bg-gradient-to-r ${event.gradient}`}
                      ></div>
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <motion.div
                              className={`w-16 h-16 bg-gradient-to-br ${event.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                              whileHover={{ rotate: 5 }}
                            >
                              <event.icon className="w-8 h-8 text-[var(--gdfa-neutral-white)]" />
                            </motion.div>
                            <div>
                              <Badge className="mb-2 bg-[var(--gdfa-secondary)]/20 text-[var(--gdfa-secondary)]">
                                {event.category}
                              </Badge>
                              <h3 className="text-2xl font-bold text-[var(--gdfa-primary)] group-hover:text-[var(--gdfa-accent)] transition-colors">
                                {event.title}
                              </h3>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-[var(--gdfa-secondary)]">
                              {event.price}
                            </div>
                          </div>
                        </div>

                        <p className="text-[var(--gdfa-primary)/80] mb-6 leading-relaxed">
                          {event.description}
                        </p>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3 text-[var(--gdfa-primary)/80]">
                            <Calendar className="w-5 h-5 text-[var(--gdfa-secondary)]" />
                            <span>
                              {new Date(event.date).toLocaleDateString(
                                "en-US",
                                {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-[var(--gdfa-primary)/80]">
                            <Clock className="w-5 h-5 text-[var(--gdfa-secondary)]" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-3 text-[var(--gdfa-primary)/80]">
                            <MapPin className="w-5 h-5 text-[var(--gdfa-secondary)]" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-3 text-[var(--gdfa-primary)/80]">
                            <Users className="w-5 h-5 text-[var(--gdfa-secondary)]" />
                            <span>
                              {event.attendees}/{event.maxAttendees} registered
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {event.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="outline"
                              className="text-xs text-[var(--gdfa-secondary)] border-[var(--gdfa-secondary)]"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          <Button className="flex-1 bg-gradient-to-r from-[var(--gdfa-secondary)] to-[var(--gdfa-accent)] hover:from-[var(--gdfa-primary)] hover:to-[var(--gdfa-secondary)] text-[var(--gdfa-neutral-white)] shadow-lg hover:shadow-xl transform hover:scale-103 transition-all duration-300">
                            Register Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            className="border-[var(--gdfa-secondary)] text-[var(--gdfa-secondary)] hover:bg-[var(--gdfa-secondary)]/10"
                          >
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* All Upcoming Events */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[var(--gdfa-primary)] mb-8">
              All Upcoming Events
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents
                .filter((event) => !event.featured)
                .map((event) => (
                  <motion.div
                    key={event.id}
                    whileHover={{
                      scale: 1.03,
                      boxShadow:
                        "0 8px 12px -4px rgba(0, 0, 0, 0.1), 0 3px 6px -2px rgba(0, 0, 0, 0.05)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="border-0 shadow-lg overflow-hidden group">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-4">
                          <motion.div
                            className={`w-12 h-12 bg-gradient-to-br ${event.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                            whileHover={{ rotate: -5 }}
                          >
                            <event.icon className="w-6 h-6 text-[var(--gdfa-neutral-white)]" />
                          </motion.div>
                          <Badge className="bg-[var(--gdfa-secondary)]/20 text-[var(--gdfa-secondary)]">
                            {event.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg text-[var(--gdfa-primary)] group-hover:text-[var(--gdfa-accent)] transition-colors">
                          {event.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-[var(--gdfa-primary)/80] text-sm mb-4 line-clamp-2">
                          {event.description}
                        </p>

                        <div className="space-y-2 mb-4 text-sm text-[var(--gdfa-primary)/80]">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-[var(--gdfa-secondary)]" />
                            <span>
                              {new Date(event.date).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[var(--gdfa-secondary)]" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-[var(--gdfa-secondary)]" />
                            <span>
                              {event.attendees}/{event.maxAttendees}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-lg font-bold text-[var(--gdfa-secondary)]">
                            {event.price}
                          </div>
                          <Button
                            size="sm"
                            className="bg-[var(--gdfa-secondary)] hover:bg-[var(--gdfa-secondary)]/85 text-[var(--gdfa-neutral-white)]"
                          >
                            Register
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Past Events */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[var(--gdfa-primary)] mb-8">
              Recent Past Events
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.03,
                    boxShadow:
                      "0 8px 12px -4px rgba(0, 0, 0, 0.1), 0 3px 6px -2px rgba(0, 0, 0, 0.05)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-0 shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-[var(--gdfa-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="w-6 h-6 text-[var(--gdfa-primary)]" />
                      </div>
                      <h4 className="font-semibold text-[var(--gdfa-primary)] mb-2">
                        {event.title}
                      </h4>
                      <p className="text-sm text-[var(--gdfa-primary)/80] mb-3">
                        {new Date(event.date).toLocaleDateString()}
                      </p>
                      <div className="flex items-center justify-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-[var(--gdfa-secondary)]" />
                          <span>{event.attendees}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>{event.rating}</span>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className="mt-3 text-xs text-[var(--gdfa-secondary)] border-[var(--gdfa-secondary)]"
                      >
                        {event.category}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            whileHover={{ scale: 1.02 }} // Hover animation for the CTA card
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-gradient-to-br from-[var(--gdfa-primary)] to-[var(--gdfa-accent)] text-[var(--gdfa-neutral-white)] border-0">
              <CardContent className="p-12 text-center relative z-10">
                <motion.div
                  className="w-20 h-20 bg-[var(--gdfa-neutral-white)]/20 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 10 }} // Hover animation for the icon inside CTA
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Video className="w-10 h-10 text-[var(--gdfa-neutral-white)]" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-4">
                  Want to Host an Event?
                </h3>
                <p className="text-xl text-[var(--gdfa-neutral-white)]/80 mb-8 max-w-2xl mx-auto">
                  Have an idea for a workshop, talk, or community event?
                  We&#39;d love to help you organize it and reach our amazing
                  community of freelancers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-[var(--gdfa-neutral-white)] text-[var(--gdfa-secondary)] hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Propose an Event
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[var(--gdfa-neutral-white)] hover:text-white hover:bg-[var(--gdfa-neutral-white)]/10 backdrop-blur-sm bg-transparent transition-all"
                  >
                    Event Guidelines
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}
