import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Route,
  CalendarDays,
  Smartphone,
  Users,
  Sprout,
  ArrowRight,
  Menu,
  MapPinned,
  Camera,
  ClipboardList,
  Mail,
  Phone,
  PoundSterling,
  Clock3,
  FileText,
  Truck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const navLinks = [
  { label: "Why SwardSync", href: "#why" },
  { label: "Features", href: "#features" },
  { label: "Savings", href: "#savings" },
  { label: "Contact", href: "#contact" },
];

const valuePoints = [
  {
    icon: PoundSterling,
    title: "Reduce avoidable costs",
    description:
      "Cut down on wasted admin time, missed visits, duplicated effort, and the hidden costs that build up when daily operations are not organised properly.",
  },
  {
    icon: Clock3,
    title: "Save time in the office",
    description:
      "Keep schedules, customer details, job notes, and updates in one place instead of spread across calls, texts, and spreadsheets.",
  },
  {
    icon: Truck,
    title: "Get more from each crew day",
    description:
      "Give crews better visibility of routes and jobs so they spend less time waiting, calling back, or travelling inefficiently.",
  },
  {
    icon: FileText,
    title: "Stay on top of every job",
    description:
      "Keep service records, site notes, and completion updates clear so issues are easier to spot and follow-up work is easier to manage.",
  },
];

const features = [
  {
    icon: CalendarDays,
    title: "Scheduling built for recurring work",
    description:
      "Organise one-off and repeat visits faster, keep the week structured, and reduce time spent manually juggling jobs.",
  },
  {
    icon: Route,
    title: "Route planning that reduces wasted travel",
    description:
      "Help crews move through the day more efficiently with clearer job order and less unnecessary mileage.",
  },
  {
    icon: Users,
    title: "Customer and property records in one place",
    description:
      "Keep service history, contact details, site notes, and property information easy to access when your team needs it.",
  },
  {
    icon: Smartphone,
    title: "Mobile access for crews in the field",
    description:
      "Give crews the day’s jobs, notes, and updates on the go so they can stay focused without constant calls back to the office.",
  },
  {
    icon: ClipboardList,
    title: "Clear job status and follow-up tracking",
    description:
      "See what is done, what still needs attention, and which jobs need a revisit before things slip through the cracks.",
  },
  {
    icon: Camera,
    title: "Photos and proof of service",
    description:
      "Keep better records of completed work with notes and photos that support quality control and customer communication.",
  },
];

const savingsGroups = [
  {
    title: "Where money gets lost",
    points: [
      "Office staff spending too much time chasing updates and rewriting notes",
      "Crews losing time between jobs because details are unclear or routes are inefficient",
      "Missed tasks, incomplete records, and avoidable revisit work eating into margins",
    ],
  },
  {
    title: "How SwardSync helps",
    points: [
      "Brings schedules, job details, customer info, and updates into one organised workflow",
      "Makes it easier for crews to know where they are going and what needs to be done",
      "Helps managers keep better visibility over work completed and issues needing follow-up",
    ],
  },
  {
    title: "Why the value is stronger",
    points: [
      "Focused on the features lawn care companies actually use day to day",
      "Built as a more practical alternative to bloated field service platforms",
      "Designed to give growing operators better value without unnecessary overhead",
    ],
  },
];

const stats = [
  { value: "Less admin", label: "for office teams managing schedules, jobs, and customer updates" },
  { value: "Less wasted travel", label: "through better route planning and clearer daily job flow" },
  { value: "More control", label: "over customers, crews, visits, and completed work" },
];

export default function SwardSyncSystemsWebsite() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="absolute inset-x-0 top-0 -z-10 overflow-hidden">
        <div className="mx-auto h-[420px] w-[420px] rounded-full bg-emerald-200/40 blur-3xl" />
      </div>

      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
              <Sprout className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-slate-500">SwardSync Systems</p>
              <p className="text-base font-bold">Affordable software for more efficient lawn care operations</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild className="rounded-2xl bg-slate-900 px-5">
              <a href="#contact">Book a demo</a>
            </Button>
          </div>

          <button className="rounded-xl border border-slate-200 p-2 md:hidden" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5 }} className="flex flex-col justify-center">
            <Badge className="mb-5 w-fit rounded-full bg-emerald-100 px-4 py-1 text-emerald-800 hover:bg-emerald-100">
              Built for lawn care and landscaping companies
            </Badge>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Run more efficiently, reduce wasted time, and lower operating costs.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              SwardSync Systems helps lawn care companies keep schedules tighter, routes cleaner, crews better informed, and daily operations easier to manage without paying for bloated software they do not need.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-2xl bg-emerald-600 px-6 text-base hover:bg-emerald-700">
                <a href="#contact">
                  Request a demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-2xl px-6 text-base">
                <a href="#savings">See how it saves time</a>
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <Card key={stat.label} className="rounded-3xl border-slate-200 shadow-sm">
                  <CardContent className="p-5">
                    <p className="text-2xl font-bold text-slate-950">{stat.value}</p>
                    <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-5 shadow-2xl">
              <div className="rounded-[26px] bg-white p-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card className="rounded-3xl border-emerald-200 bg-emerald-50 shadow-none">
                    <CardContent className="p-5">
                      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white">
                        <CalendarDays className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold">Faster scheduling</h3>
                      <p className="mt-2 text-sm text-slate-600">Cut time spent organising jobs and keep the week easier to manage.</p>
                    </CardContent>
                  </Card>
                  <Card className="rounded-3xl border-slate-200 shadow-none">
                    <CardContent className="p-5">
                      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
                        <Route className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold">Tighter routes</h3>
                      <p className="mt-2 text-sm text-slate-600">Reduce wasted travel time and help crews stay productive through the day.</p>
                    </CardContent>
                  </Card>
                  <Card className="rounded-3xl border-slate-200 shadow-none sm:col-span-2">
                    <CardContent className="p-5">
                      <div className="grid gap-4 md:grid-cols-3">
                        {[
                          "Keep job information organised",
                          "Give crews clearer direction",
                          "Track completed work more easily",
                        ].map((item) => (
                          <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm font-medium text-slate-700">
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                              <span>{item}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="why" className="border-y border-slate-200 bg-slate-50/80">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
            <div className="mb-8 max-w-3xl">
              <Badge className="rounded-full bg-white px-4 py-1 text-slate-700 hover:bg-white">Why SwardSync</Badge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Built around the places lawn care companies lose time, money, and margin
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Operational costs do not only come from labour and fuel. They also come from disorganised schedules, poor job visibility, unnecessary travel, and constant back-and-forth between the office and the field. SwardSync is positioned as a more affordable, more focused alternative to heavier field service platforms.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {valuePoints.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <Card className="h-full rounded-3xl border-slate-200 bg-white shadow-sm">
                      <CardContent className="p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-950">{feature.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="rounded-full bg-slate-100 px-4 py-1 text-slate-700 hover:bg-slate-100">Features</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              The features that keep lawn care operations under control
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              SwardSync Systems focuses on the practical tools that help office teams stay organised and crews stay productive throughout the day.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <Card className="h-full rounded-[28px] border-slate-200 shadow-sm">
                    <CardContent className="p-7">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-950">{feature.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="savings" className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <Badge className="rounded-full bg-white/10 px-4 py-1 text-white hover:bg-white/10">Savings and value</Badge>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Reduce waste and get better value from your software
                </h2>
                <p className="mt-4 max-w-xl text-lg text-slate-300">
                  The goal is simple: reduce wasted time, improve coordination, and give lawn care businesses more control over daily work without forcing them into the cost and complexity of heavyweight platforms.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {savingsGroups.map((group) => (
                  <Card key={group.title} className="rounded-[28px] border-white/10 bg-white/5 text-white shadow-none">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold">{group.title}</h3>
                      <div className="mt-5 space-y-3">
                        {group.points.map((point) => (
                          <div key={point} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                            <p className="text-sm leading-6 text-slate-300">{point}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <Card className="overflow-hidden rounded-[36px] border-0 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white shadow-xl">
            <CardContent className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10 lg:p-12">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">For growth-minded lawn care businesses</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Choose software that supports growth without unnecessary overhead
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-emerald-50/90">
                  SwardSync Systems is designed to help lawn care companies run more efficiently, control costs, and get the operational tools they need in a more practical, more affordable package.
                </p>
              </div>
              <Button asChild size="lg" variant="secondary" className="rounded-2xl bg-white px-6 text-base text-emerald-800 hover:bg-emerald-50">
                <a href="#contact">Book a demo</a>
              </Button>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <Badge className="rounded-full bg-slate-200 px-4 py-1 text-slate-700 hover:bg-slate-200">Contact</Badge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                See how SwardSync can support your lawn care business
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Request a demo, join the early access list, or tell us where your operation is losing time and money today.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <MapPinned className="h-5 w-5 text-emerald-700" />
                  </div>
                  <span>Leicester, United Kingdom</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Mail className="h-5 w-5 text-emerald-700" />
                  </div>
                  <span>hello@swardsyncsystems.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Phone className="h-5 w-5 text-emerald-700" />
                  </div>
                  <span>Available for demos and early access enquiries</span>
                </div>
              </div>
            </div>

            <Card className="rounded-[32px] border-slate-200 bg-white shadow-sm">
              <CardContent className="p-7">
                <form className="grid gap-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Input className="h-12 rounded-2xl border-slate-200" placeholder="Your name" />
                    <Input className="h-12 rounded-2xl border-slate-200" placeholder="Company name" />
                  </div>
                  <Input className="h-12 rounded-2xl border-slate-200" placeholder="Email address" />
                  <Input className="h-12 rounded-2xl border-slate-200" placeholder="Phone number" />
                  <Textarea
                    className="min-h-[150px] rounded-2xl border-slate-200"
                    placeholder="Tell us where your business is losing time, money, or efficiency today."
                  />
                  <Button type="button" className="h-12 rounded-2xl bg-slate-900 text-base hover:bg-slate-800">
                    Request a demo
                  </Button>
                  <p className="text-xs leading-5 text-slate-500">
                    This contact form is a demo placeholder and can be connected to your preferred form or CRM later.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
