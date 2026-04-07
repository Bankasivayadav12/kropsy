"use client";

import { useEffect, useRef, useState } from "react";
import {
  UserPlus,
  IdCard,
  QrCode,
  LayoutGrid,
  Settings,
  History,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Register",
    icon: UserPlus,
    desc: "Sign up via KROPSY support or the website registration form.",
    tag: "Onboarding",
  },
  {
    id: 2,
    title: "PVP Card Creation",
    icon: IdCard,
    desc: "A PVP ID is created and linked with a QR-enabled identity card.",
    tag: "Identity",
  },
  {
    id: 3,
    title: "QR + OTP Login",
    icon: QrCode,
    desc: "Access your account securely via QR scan and OTP verification.",
    tag: "Security",
  },
  {
    id: 4,
    title: "Access Services",
    icon: LayoutGrid,
    desc: "Services unlock by user type — Farmer, Labour, Vendor, Tool Owner, Soil Vendor.",
    tag: "Roles",
  },
  {
    id: 5,
    title: "Use Platform Services",
    icon: Settings,
    desc: "Monitor crops · Book labour · Sell crops · Soil reports · Book machinery · Buy crops",
    tag: "Features",
  },
  {
    id: 6,
    title: "Track History",
    icon: History,
    desc: "Crop analysis, bookings, listings, and reports stored in your dashboard.",
    tag: "Insights",
  },
];

function StepCard({
  step,
  index,
  isVisible,
}: {
  step: (typeof steps)[0];
  index: number;
  isVisible: boolean;
}) {
  const Icon = step.icon;

  return (
    <div
      className="group relative flex flex-col"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.55s ease ${index * 0.1}s, transform 0.55s cubic-bezier(.22,1,.36,1) ${index * 0.1}s`,
      }}
    >
      {/* Step number bubble */}
      <div className="absolute -top-4 left-6 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-green-700 text-xs font-semibold text-white shadow-md shadow-green-900/30">
        {step.id}
      </div>

      {/* Card */}
      <div className="flex flex-1 flex-col rounded-2xl border border-green-100 bg-white p-6 pt-8 shadow-sm transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-green-200 group-hover:shadow-lg group-hover:shadow-green-900/10">
        {/* Tag */}
        <span className="mb-4 self-start rounded-full bg-green-50 px-3 py-1 text-[10px] font-semibold tracking-widest text-green-700 uppercase">
          {step.tag}
        </span>

        {/* Icon */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-green-100 bg-green-50 transition-colors duration-300 group-hover:bg-green-100">
          <Icon size={20} className="text-green-700" strokeWidth={1.8} />
        </div>

        {/* Content */}
        <h3 className="mb-2 text-sm font-semibold text-green-900">
          {step.title}
        </h3>
        <p className="text-xs leading-relaxed text-green-700/70">{step.desc}</p>

        {/* Bottom accent line */}
        <div className="mt-5 h-px w-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-500 group-hover:w-full" />
      </div>
    </div>
  );
}

export default function HowItWorksPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#f6faf7] font-sans">

      {/* ── HERO HEADER ── */}
      <div className="relative overflow-hidden bg-green-900 px-6 py-20 text-center">

        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-green-700/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-emerald-500/20 blur-2xl" />
        <div className="pointer-events-none absolute top-10 right-1/3 h-40 w-40 rounded-full bg-green-600/20 blur-2xl" />

        {/* Grid texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-2xl">
          <span className="mb-5 inline-block rounded-full border border-green-600 bg-green-800/60 px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-green-300 uppercase backdrop-blur-sm">
            Platform Overview
          </span>

          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            How{" "}
            <span className="bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
              KROPSY
            </span>{" "}
            Works
          </h1>

          <p className="mx-auto max-w-lg text-sm leading-relaxed text-green-300/80">
            From registration to marketplace — one seamless agricultural
            workflow connecting farmers, labourers, vendors, and tools.
          </p>

          {/* Step pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {steps.map((s) => (
              <span
                key={s.id}
                className="flex items-center gap-1.5 rounded-full bg-green-800/60 px-3 py-1 text-[11px] text-green-300 backdrop-blur-sm border border-green-700/40"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-green-700 text-[9px] font-bold text-white">
                  {s.id}
                </span>
                {s.title}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── STEPS SECTION ── */}
      <section ref={sectionRef} className="mx-auto max-w-5xl px-5 py-20">

        {/* Section label */}
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-green-200" />
          <span className="text-xs font-semibold tracking-[0.12em] text-green-700 uppercase">
            Six Simple Steps
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-green-200" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-8 pt-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <StepCard
              key={step.id}
              step={step}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Flow indicator */}
        <div className="mt-16 flex items-center justify-center gap-3">
          {steps.map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className="h-2 w-2 rounded-full bg-green-700 transition-all duration-300"
                style={{ opacity: 1 - i * 0.12 }}
              />
              {i < steps.length - 1 && (
                <div className="h-px w-8 bg-gradient-to-r from-green-700 to-green-300 opacity-40" />
              )}
            </div>
          ))}
          <span className="ml-3 text-xs text-green-600">
            Seamless end-to-end workflow
          </span>
        </div>
      </section>

      {/* ── BOTTOM CTA STRIP ── */}
      <div className="border-t border-green-100 bg-white px-6 py-10 text-center">
        <p className="mb-4 text-sm text-green-700">
          Ready to join the KROPSY ecosystem?
        </p>
        <button className="rounded-full bg-green-800 px-8 py-3 text-sm font-semibold text-white shadow-md shadow-green-900/20 transition-all duration-200 hover:bg-green-700 hover:shadow-lg hover:shadow-green-900/30 active:scale-95">
          Get Started Free
        </button>
      </div>

    </div>
  );
}