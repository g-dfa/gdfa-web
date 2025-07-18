"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Target,
  Heart,
  Lightbulb,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  TrendingUp,
  DollarSign,
  Code,
  Palette,
  Megaphone,
  BookOpen,
  Video,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "Top Freelance Hub in Northern Bangladesh",
    icon: Award,
    stat: "1st Place",
    desc: "Recognized as the leading freelance community in the region",
  },
  {
    title: "Skill Development Workshops",
    icon: Code,
    stat: "50+",
    desc: "Hands-on training sessions conducted",
  },
  {
    title: "Member Satisfaction",
    icon: Heart,
    stat: "95%",
    desc: "Positive feedback from our members",
  },
  {
    title: "Media Features",
    icon: Megaphone,
    stat: "12+",
    desc: "National publications highlighting our work",
  },
  {
    title: "Global Clients",
    icon: Globe,
    stat: "100+",
    desc: "International companies worked with our members",
  },
  {
    title: "Annual Growth",
    icon: TrendingUp,
    stat: "200%",
    desc: "Increase in member earnings year-over-year",
  },
];

const memberStats = [
  { value: "2,500+", label: "Active Members", icon: Users },
  { value: "৳2 Cr+", label: "Annual Earnings", icon: DollarSign },
  { value: "15+", label: "Countries Served", icon: Globe },
  { value: "50+", label: "Workshops Conducted", icon: Code },
];

const serviceAreas = [
  { name: "Web Development", icon: Code },
  { name: "UI/UX Design", icon: Palette },
  { name: "Digital Marketing", icon: Megaphone },
  { name: "Content Writing", icon: BookOpen },
  { name: "Graphic Design", icon: Palette },
  { name: "Video Editing", icon: Video },
];

export default function About() {
  return (
    <>
      <section id="about" className="py-24 relative overflow-hidden bg-white">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--gdfa-neutral-white)] via-white to-[var(--gdfa-accent-green)/5]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,var(--gdfa-secondary)/5%,transparent_40%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,var(--gdfa-accent-green)/5%,transparent_40%)]"></div>
        </div>

        <div className="container px-4 mx-auto relative z-10 space-y-28">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block bg-blue-100 text-gdfa-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Empowering Freelancers Since 2019
            </span>
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-6 text-[var(--gdfa-primary)]">
              About{" "}
              <span className="bg-gradient-to-r from-[var(--gdfa-secondary)] to-[var(--gdfa-accent)] bg-clip-text text-transparent">
                GDFA
              </span>
            </h1>
            <p className="text-xl text-[var(--gdfa-primary)/80] leading-relaxed mb-8">
              The Greater Dinajpur Freelancer Association (GDFA) is the premier
              hub for independent professionals in Northern Bangladesh.
              We&#39;re transforming local talent into global competitors
              through education, community, and opportunity.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-50">
              <Link href="/become-a-member" passHref>
                <Button
                  className="bg-gradient-to-r from-[var(--gdfa-secondary)] to-[var(--gdfa-accent)]
                                text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  Join Our Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/success-stories" passHref>
                <Button
                  variant="outline"
                  className="border-[var(--gdfa-secondary)] text-[var(--gdfa-secondary)]
                                hover:bg-[var(--gdfa-secondary)/10] px-8 py-3 rounded-full transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  Our Success Stories
                </Button>
              </Link>
            </div>
          </div>
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-50">
            {memberStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }} // Framer Motion hover animation
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-[var(--gdfa-neutral-white)] shadow-sm hover:shadow-xl hover:border-[var(--gdfa-secondary)] transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-2xl h-full">
                    <CardContent className="p-6 text-center">
                      <Icon className="w-12 h-12 mx-auto mb-4 text-[var(--gdfa-secondary)]" />
                      <div className="text-4xl font-bold text-[var(--gdfa-primary)] mb-1">
                        {stat.value}
                      </div>
                      <p className="text-sm text-[var(--gdfa-primary)/70]">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 relative z-50">
            {[
              {
                title: "Our Mission",
                icon: Target,
                content: (
                  <>
                    <p className="text-[var(--gdfa-primary)/80] leading-relaxed mb-6">
                      To nurture, connect, and empower freelancers in the
                      Greater Dinajpur region, equipping them with the skills,
                      networks, and opportunities to compete on a global scale
                      while maintaining strong local roots.
                    </p>
                    <ul className="space-y-3 text-[var(--gdfa-primary)/80]">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 mt-1 text-[var(--gdfa-secondary)] flex-shrink-0" />
                        <span>Provide cutting-edge skill development</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 mt-1 text-[var(--gdfa-secondary)] flex-shrink-0" />
                        <span>Foster meaningful professional connections</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 mt-1 text-[var(--gdfa-secondary)] flex-shrink-0" />
                        <span>
                          Bridge the gap between local talent and global
                          opportunities
                        </span>
                      </li>
                    </ul>
                  </>
                ),
              },
              {
                title: "Our Vision",
                icon: Lightbulb,
                content: (
                  <>
                    <p className="text-[var(--gdfa-primary)/80] leading-relaxed mb-6">
                      To establish Dinajpur as a recognized hub for world-class
                      freelance talent, where professionals build sustainable
                      careers without leaving their community.
                    </p>
                    <div className="bg-[var(--gdfa-secondary)/10] p-4 rounded-lg border border-gray-200 shadow-md">
                      <h4 className="font-semibold text-[var(--gdfa-secondary)] mb-2">
                        By 2025, we aim to:
                      </h4>
                      <ul className="space-y-2 text-[var(--gdfa-primary)/80]">
                        <li className="flex items-start gap-3">
                          <Zap className="w-4 h-4 mt-1 text-[var(--gdfa-secondary)] flex-shrink-0" />
                          <span>Support 5,000+ active freelancers</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Zap className="w-4 h-4 mt-1 text-[var(--gdfa-secondary)] flex-shrink-0" />
                          <span>
                            Facilitate ₹10 Crore+ in annual member earnings
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Zap className="w-4 h-4 mt-1 text-[var(--gdfa-secondary)] flex-shrink-0" />
                          <span>Establish 3 regional learning hubs</span>
                        </li>
                      </ul>
                    </div>
                  </>
                ),
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }} // Framer Motion hover animation
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white/90 backdrop-blur-sm overflow-hidden rounded-2xl h-full">
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-[var(--gdfa-secondary)/10] rounded-full">
                          <Icon className="w-8 h-8 text-[var(--gdfa-secondary)]" />
                        </div>
                        <h3 className="text-3xl font-bold text-[var(--gdfa-primary)]">
                          {item.title}
                        </h3>
                      </div>
                      {item.content}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
          {/* Key Achievements */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[var(--gdfa-primary)] mb-3">
                By The Numbers
              </h2>
              <p className="text-xl text-[var(--gdfa-primary)/70] max-w-2xl mx-auto">
                Quantifying our impact on the freelance community in Northern
                Bangladesh
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-50">
              {achievements.map((achievement, idx) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }} // Framer Motion hover animation
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="border-[var(--gdfa-neutral-white)] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden rounded-2xl h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-5">
                          <div className="p-4 rounded-xl group-hover:bg-[var(--gdfa-secondary)]/90 group-hover:text-white transition-colors duration-300 shadow-md">
                            <Icon className="w-7 h-7 text-[var(--gdfa-secondary)] group-hover:text-white transition-colors duration-300" />
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-[var(--gdfa-primary)] mb-1">
                              {achievement.stat}
                            </div>
                            <h3 className="text-lg font-semibold text-[var(--gdfa-primary)]">
                              {achievement.title}
                            </h3>
                            <p className="text-sm text-[var(--gdfa-primary)/70] mt-1">
                              {achievement.desc}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[var(--gdfa-primary)] mb-3">
                Our Focus Areas
              </h2>
              <p className="text-xl text-[var(--gdfa-primary)/70] max-w-2xl mx-auto">
                Supporting freelancers across these high-demand digital services
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto relative z-50">
              {serviceAreas.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }} // Framer Motion hover animation
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 border border-gray-100 shadow-md rounded-xl hover:border-[var(--gdfa-secondary)] hover:shadow-md hover:bg-white transition-all duration-300 flex items-center gap-4 transform hover:scale-105">
                      <Icon className="w-6 h-6 text-[var(--gdfa-secondary)]" />
                      <span className="font-semibold text-[var(--gdfa-primary)] text-lg">
                        {service.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Final CTA */}
          <motion.div
            whileHover={{ scale: 1.02 }} // Framer Motion hover animation for the whole card
            transition={{ duration: 0.3 }}
          >
            <Card className="border-0 bg-gradient-to-r from-[var(--gdfa-primary)] to-[var(--gdfa-accent)] text-white overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white/10%,transparent_70%)] opacity-50"></div>
              <CardContent className="p-12 relative text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Grow Your Freelance Career?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join 2,500+ freelancers who are building successful careers
                  with GDFA&#39;s support.
                </p>
                <Link href="/become-a-member" passHref>
                  <Button className="bg-white text-[var(--gdfa-secondary)] font-medium px-10 py-4 rounded-full text-lg shadow-lg hover:bg-[var(--gdfa-neutral-white)] transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                    Become a Member
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}
