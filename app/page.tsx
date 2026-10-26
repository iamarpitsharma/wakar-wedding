"use client";

import React, { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { DiaTextReveal } from "@/registry/magicui/dia-text-reveal";
import {
  Heart, Sparkles, MapPin, Calendar, Clock, Volume2, VolumeX,
  Share2, Check, Feather,
  Maximize2, X, CornerDownRight, PartyPopper, MailOpen, Building2,
  Compass, Mountain, Snowflake, Glasses, Waves, Ship, Bike,
  Camera, Award, Flame, Star, Music, Disc
} from "lucide-react";

// Delicate Handcrafted Floral Corner Ornament SVG (inspired by the wedding card)
const FloralCorner = ({ className = "" }) => (
  <svg
    viewBox="0 0 160 160"
    className={`w-24 h-24 sm:w-32 sm:h-32 pointer-events-none fill-none stroke-[#9e7a44] ${className}`}
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M 12 148 C 12 80, 80 12, 148 12" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
    <path d="M 22 148 C 22 90, 90 22, 148 22" strokeWidth="1.5" />

    {/* Center Blossom */}
    <g transform="translate(68, 68)">
      <circle cx="0" cy="0" r="4" fill="#c5a059" fillOpacity="0.4" />
      <path d="M 0 -4 C -4 -12, 4 -12, 0 -4 Z" fill="#b08b46" fillOpacity="0.25" />
      <path d="M 4 0 C 12 -4, 12 4, 4 0 Z" fill="#b08b46" fillOpacity="0.25" />
      <path d="M 0 4 C 4 12, -4 12, 0 4 Z" fill="#b08b46" fillOpacity="0.25" />
      <path d="M -4 0 C -12 4, -12 -4, -4 0 Z" fill="#b08b46" fillOpacity="0.25" />
      <circle cx="0" cy="0" r="1.5" fill="#7a5822" />
    </g>

    {/* Elegant Vines and Foliage */}
    <path d="M 38 122 C 34 100, 52 88, 68 68 C 88 52, 100 34, 122 38" />
    <path d="M 50 102 C 40 96, 44 84, 56 88 C 64 90, 60 100, 50 102 Z" fill="#c5a059" fillOpacity="0.15" />
    <path d="M 102 50 C 96 40, 84 44, 88 56 C 90 64, 100 60, 102 50 Z" fill="#c5a059" fillOpacity="0.15" />
    <path d="M 80 78 C 88 88, 102 88, 106 76 C 98 72, 88 74, 80 78 Z" fill="#c5a059" fillOpacity="0.15" />
    <path d="M 78 80 C 72 88, 74 98, 76 106 C 88 102, 88 88, 78 80 Z" fill="#c5a059" fillOpacity="0.15" />

    <path d="M 28 140 C 30 125, 45 125, 42 142" />
    <path d="M 140 28 C 125 30, 125 45, 142 42" />
    <circle cx="42" cy="142" r="1.5" fill="#7a5822" />
    <circle cx="142" cy="42" r="1.5" fill="#7a5822" />
  </svg>
);

// Botanical Centerpiece Divider
const BotanicalDivider = () => (
  <div className="flex items-center justify-center gap-3 my-4 opacity-80">
    <svg className="w-16 sm:w-28 h-5 text-[#b08b46]" viewBox="0 0 120 20" fill="none" stroke="currentColor">
      <path d="M 0 10 Q 30 2, 60 10 T 120 10" strokeWidth="1" />
      <path d="M 30 7 C 26 2, 38 2, 35 7" strokeWidth="1" fill="#b08b46" fillOpacity="0.3" />
      <path d="M 70 13 C 66 18, 78 18, 75 13" strokeWidth="1" fill="#b08b46" fillOpacity="0.3" />
    </svg>
    <div className="flex items-center gap-1.5 text-[#9e7a44]">
      <Sparkles className="w-4 h-4" />
      <Heart className="w-3.5 h-3.5 fill-[#b08b46]/30 text-[#9e7a44]" />
      <Sparkles className="w-4 h-4" />
    </div>
    <svg className="w-16 sm:w-28 h-5 text-[#b08b46] transform scale-x-[-1]" viewBox="0 0 120 20" fill="none" stroke="currentColor">
      <path d="M 0 10 Q 30 2, 60 10 T 120 10" strokeWidth="1" />
      <path d="M 30 7 C 26 2, 38 2, 35 7" strokeWidth="1" fill="#b08b46" fillOpacity="0.3" />
      <path d="M 70 13 C 66 18, 78 18, 75 13" strokeWidth="1" fill="#b08b46" fillOpacity="0.3" />
    </svg>
  </div>
);

// Rich Die-Cut Vinyl Sticker with 3.5px white border, vinyl gloss sheen & tactile depth
const RichDieCutSticker = ({
  icon: Icon,
  name,
  subtag,
  badgeText,
  seal,
  themeGradient,
  rotation,
  onStickerClick
}: {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  subtag: string;
  badgeText: string;
  seal?: string;
  themeGradient: string;
  rotation: string;
  onStickerClick?: (e: React.MouseEvent) => void;
}) => (
  <div
    onClick={onStickerClick}
    className={`absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-20 select-none transition-all duration-300 transform ${rotation} hover:rotate-0 hover:scale-105 active:scale-95 cursor-pointer`}
    title="Click sticker for festive sparkles!"
  >
    {/* Thick White Vinyl Die-Cut Container */}
    <div
      className={`relative flex items-center gap-2 sm:gap-2.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-2xl border-[3.5px] border-white ring-1 ring-black/20 shadow-[0_12px_24px_-4px_rgba(0,0,0,0.55),0_4px_8px_-2px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.8)] bg-gradient-to-br ${themeGradient} text-white overflow-hidden`}
    >
      {/* Vinyl Gloss Highlight Sheen */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-white/10 to-transparent pointer-events-none rounded-[12px]" />

      {/* Die-cut Circular Icon Emblem with White Outline */}
      <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 border-2 border-white shadow-md flex items-center justify-center shrink-0 backdrop-blur-xs">
        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
        {seal && (
          <span className="absolute -bottom-1 -right-1 text-[10px] sm:text-[11px] leading-none drop-shadow">
            {seal}
          </span>
        )}
      </div>

      {/* Sticker Text & Tag Layout */}
      <div className="flex flex-col leading-tight pr-1">
        <div className="flex items-center gap-1.5">
          <span className="font-sans font-black text-[11px] sm:text-[12.5px] tracking-tight uppercase text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
            {name}
          </span>
          <span className="px-1.5 py-0.5 rounded-full border border-white/60 bg-white/25 text-[8px] sm:text-[8.5px] font-mono font-bold tracking-wider uppercase text-white/95 backdrop-blur-xs">
            {badgeText}
          </span>
        </div>
        <span className="text-[8.5px] sm:text-[9.5px] font-sans font-semibold text-white/90 tracking-wide drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] mt-0.5">
          {subtag}
        </span>
      </div>

      {/* Glossy Corner Peel Accent */}
      <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-gradient-to-bl from-white/40 to-transparent pointer-events-none" />
    </div>
  </div>
);

export default function home() {
  const [isPlayingSong, setIsPlayingSong] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [petalsActive, setPetalsActive] = useState(true);

  const [letterOpen, setLetterOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null);
  const [petalsBurst, setPetalsBurst] = useState(false);

  // Bento Grid Items: 7 Photos mathematically balanced based on physical aspect ratios
  const bentoItems = [
    {
      id: "kashmir-snow-full",
      title: "Snow Kingdom",
      subtitle: "Powdered slopes, pine woods & alpine breeze",
      src: "kashmeer 2.jpeg",
      fallback: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=900",
      bentoSpan: "col-span-1 md:col-span-1 lg:col-span-1 md:row-span-2 lg:row-span-2",
      minHeight: "min-h-[440px] md:min-h-full",
      objectPos: "object-[center_18%]",
      sticker: {
        name: "GULMARG SLOPES",
        badgeText: "SUB-ZERO",
        subtag: "Alpine Explorer • -5°C",
        icon: Mountain,
        seal: "❄️",
        themeGradient: "from-sky-600 via-blue-700 to-slate-900",
        rotation: "-rotate-3"
      }
    },
    {
      id: "ain-dubai",
      title: "Ain Dubai Voyage",
      subtitle: "Cruising Arabian Gulf under the giant wheel",
      src: "ani dubai.jpeg",
      fallback: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=900",
      bentoSpan: "col-span-1 md:col-span-1 lg:col-span-1",
      minHeight: "min-h-[260px] md:min-h-full",
      objectPos: "object-[center_25%]",
      sticker: {
        name: "YACHT CRUISE",
        badgeText: "AIN DUBAI",
        subtag: "Arabian Gulf • Sunset Sail",
        icon: Ship,
        seal: "⚓",
        themeGradient: "from-cyan-600 via-teal-700 to-blue-900",
        rotation: "rotate-3"
      }
    },
    {
      id: "bike",
      title: "Apex Rider Spirit",
      subtitle: "Sports bike thrills, clip-ons & asphalt focus",
      src: "with bike.jpeg",
      fallback: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=900",
      bentoSpan: "col-span-1 md:col-span-1 lg:col-span-1",
      minHeight: "min-h-[260px] md:min-h-full",
      objectPos: "object-[center_35%]",
      sticker: {
        name: "APEX RIDER",
        badgeText: "SPEED SOUL",
        subtag: "Track Focus & Throttle",
        icon: Bike,
        seal: "⚡",
        themeGradient: "from-blue-600 via-indigo-700 to-violet-900",
        rotation: "-rotate-2"
      }
    },
    {
      id: "gentleman-selfie",
      title: "Gentleman Noir",
      subtitle: "Black turtleneck, tailored overcoat & timeless poise",
      src: "a selfi.jpeg",
      fallback: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=900",
      bentoSpan: "col-span-1 md:col-span-1 lg:col-span-1 md:row-span-2 lg:row-span-2",
      minHeight: "min-h-[440px] md:min-h-full",
      objectPos: "object-center",
      sticker: {
        name: "DAPPER NOIR",
        badgeText: "VIP CLASS",
        subtag: "Midnight Haute • Bespoke",
        icon: Glasses,
        seal: "⚜️",
        themeGradient: "from-zinc-900 via-neutral-900 to-stone-950",
        rotation: "rotate-2"
      }
    },
    {
      id: "shadow-bullet",
      title: "Sunset Nomad",
      subtitle: "Royal Enfield Bullet & sunset between palm trees",
      src: "shadow.jpeg",
      fallback: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=900",
      bentoSpan: "col-span-1 md:col-span-2 lg:col-span-2",
      minHeight: "min-h-[260px] md:min-h-full",
      objectPos: "object-[center_65%]",
      sticker: {
        name: "SUNSET NOMAD",
        badgeText: "GOLDEN HOUR",
        subtag: "Royal Enfield Bullet 350",
        icon: Flame,
        seal: "🌅",
        themeGradient: "from-amber-600 via-orange-600 to-rose-700",
        rotation: "-rotate-1"
      }
    },
    {
      id: "dubai-pool",
      title: "Skyline Infinity Oasis",
      subtitle: "Overlooking Dubai Marina towers & Palm Jumeirah",
      src: "on dubai pool.jpeg",
      fallback: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=900",
      bentoSpan: "col-span-1 md:col-span-1 lg:col-span-2",
      minHeight: "min-h-[260px] md:min-h-full",
      objectPos: "object-[center_65%]",
      sticker: {
        name: "SKYLINE OASIS",
        badgeText: "INFINITY",
        subtag: "Dubai Marina Horizon",
        icon: Waves,
        seal: "🌊",
        themeGradient: "from-teal-600 via-emerald-700 to-cyan-900",
        rotation: "rotate-1"
      }
    },
    {
      id: "kashmir-winter-swag",
      title: "Alpine Chill",
      subtitle: "Pine forest snow flurry, dark shades & gloves",
      src: "kashmeer.jpeg",
      fallback: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&q=80&w=900",
      bentoSpan: "col-span-1 md:col-span-1 lg:col-span-2",
      minHeight: "min-h-[260px] md:min-h-full",
      objectPos: "object-[center_22%]",
      sticker: {
        name: "WINTER SWAG",
        badgeText: "ALPINE",
        subtag: "Kashmir Pine Forest • Chill",
        icon: Snowflake,
        seal: "🌲",
        themeGradient: "from-slate-700 via-zinc-800 to-neutral-900",
        rotation: "-rotate-2"
      }
    }
  ];

  // Floating Petals Animation Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const petals = Array.from({ length: 26 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 7 + 4,
      speedX: Math.random() * 0.7 - 0.35,
      speedY: Math.random() * 0.75 + 0.3,
      rotation: Math.random() * 360,
      rotSpeed: Math.random() * 1.2 - 0.6,
      opacity: Math.random() * 0.3 + 0.18,
      color: Math.random() > 0.45 ? "#d4af37" : "#e6b980"
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (petalsActive) {
        petals.forEach((p) => {
          p.y += p.speedY;
          p.x += p.speedX + Math.sin(p.y * 0.01) * 0.35;
          p.rotation += p.rotSpeed;

          if (p.y > canvas.height + 20) {
            p.y = -20;
            p.x = Math.random() * canvas.width;
          }

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.globalAlpha = p.opacity;
          ctx.fillStyle = p.color;

          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, 2 * Math.PI);
          ctx.fill();
          ctx.restore();
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [petalsActive]);

  // Soft Ambient Chimes Synthesizer
  const playAmbientChime = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (!ctx) return;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const freqs = [293.66, 369.99, 440.00, 587.33, 659.25];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.26);
        gain.gain.setValueAtTime(0.03, ctx.currentTime + idx * 0.26);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.26 + 3.0);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.26);
        osc.stop(ctx.currentTime + idx * 0.26 + 3.1);
      });
    } catch (err) {
      console.log("Audio notice:", err);
    }
  };

  // Karan Aujla - Mf Gabhru Audio Controller
  const toggleSong = () => {
    try {
      if (!audioRef.current) {
        const audio = new Audio(encodeURI("/Mf Gabhru - Karan Aujla.mp3"));
        audio.loop = true;
        audio.volume = 0.75;
        audio.onended = () => setIsPlayingSong(false);
        audio.onpause = () => setIsPlayingSong(false);
        audio.onplay = () => setIsPlayingSong(true);
        audioRef.current = audio;
      }

      if (audioRef.current.paused) {
        audioRef.current.play()
          .then(() => setIsPlayingSong(true))
          .catch((err) => {
            console.warn("Audio playback notice:", err);
          });
      } else {
        audioRef.current.pause();
        setIsPlayingSong(false);
      }
    } catch (e) {
      console.warn("Audio error:", e);
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const burstCelebrationConfetti = () => {
    try {
      confetti({
        particleCount: 55,
        spread: 70,
        origin: { y: 0.65 },
        colors: ["#c5a059", "#d4af37", "#f3e6ce", "#b89146", "#ffffff"]
      });
    } catch { }
  };

  const triggerCelebration = () => {
    setPetalsBurst(true);
    burstCelebrationConfetti();
    playAmbientChime();
    setTimeout(() => setPetalsBurst(false), 3000);
  };

  const copyPageShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2c2419] font-serif relative overflow-x-hidden selection:bg-[#c5a059]/30 selection:text-[#2c2419]">
      {/* Background Petal Animation Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-10 w-full h-full"
      />

      {/* Cream & Soft Paper Micro-texture */}
      <div className="fixed inset-0 pointer-events-none opacity-30 bg-[radial-gradient(#a37d3f_0.75px,transparent_0.75px)] [background-size:24px_24px] z-0" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-b from-[#f3e6ce]/40 via-[#f8f2e7]/20 to-transparent blur-3xl pointer-events-none z-0" />

      {/* Floating Action Controls */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          onClick={triggerCelebration}
          className="p-3 rounded-full bg-[#fbf9f4] border border-[#d6be8e] text-[#8e6d34] shadow-md hover:bg-[#8e6d34] hover:text-[#fdfbf7] hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
          title="Celebration Spark"
        >
          <PartyPopper className="w-4 h-4" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 group-hover:ml-2 text-xs font-sans font-medium">
            Celebrate
          </span>
        </button>

        <button
          onClick={() => setPetalsActive(!petalsActive)}
          className={`p-3 rounded-full border shadow-md transition-all flex items-center justify-center ${petalsActive
            ? "bg-[#fbf9f4] border-[#d6be8e] text-[#8e6d34]"
            : "bg-[#e5d8c1] border-[#c4ae82] text-[#5c461e]"
            }`}
          title={petalsActive ? "Pause Petals" : "Resume Petals"}
        >
          <Sparkles className="w-4 h-4" />
        </button>

        <button
          onClick={copyPageShare}
          className="p-3 rounded-full bg-[#fbf9f4] border border-[#d6be8e] text-[#8e6d34] shadow-md hover:bg-[#8e6d34] hover:text-[#fdfbf7] hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
          title="Share Page"
        >
          {copiedLink ? <Check className="w-4 h-4 text-emerald-700" /> : <Share2 className="w-4 h-4" />}
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 group-hover:ml-2 text-xs font-sans font-medium">
            {copiedLink ? "Copied" : "Share"}
          </span>
        </button>

        {/* KARAN AUJLA - MF GABHRU SONG PLAYER */}
        <button
          onClick={toggleSong}
          className={`px-3.5 py-2.5 rounded-full border shadow-lg transition-all flex items-center gap-2 group ${isPlayingSong
            ? "bg-gradient-to-r from-[#85632b] via-[#9e7634] to-[#6d5022] text-[#fffefb] border-[#c5a059] ring-2 ring-[#c5a059]/40 shadow-xl"
            : "bg-[#fbf9f4] border-[#d6be8e] text-[#8e6d34] hover:bg-[#85632b] hover:text-[#fdfbf7]"
            }`}
          title={isPlayingSong ? "Pause Karan Aujla - Mf Gabhru" : "Play Celebration Song (Karan Aujla - Mf Gabhru)"}
        >
          {isPlayingSong ? (
            <div className="flex items-end gap-0.5 h-3.5 w-3.5 justify-center">
              <span className="w-0.5 bg-white rounded-full animate-pulse h-2" style={{ animationDuration: "0.6s" }} />
              <span className="w-0.5 bg-white rounded-full animate-pulse h-3.5" style={{ animationDuration: "0.4s" }} />
              <span className="w-0.5 bg-white rounded-full animate-pulse h-2.5" style={{ animationDuration: "0.8s" }} />
            </div>
          ) : (
            <Music className="w-4 h-4 group-hover:scale-110 transition-transform" />
          )}
          <span className="text-xs font-sans font-semibold flex items-center gap-1.5 whitespace-nowrap">
            <span className="opacity-90">{isPlayingSong ? "Playing:" : "Song:"}</span>
            <span className="font-bold underline decoration-[#d4af37]/60 underline-offset-2">Mf Gabhru</span>
          </span>
        </button>
      </div>

      {/* Extra Petal Burst Overlay */}
      {petalsBurst && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden flex items-center justify-center">
          <div className="w-full h-full relative">
            {[...Array(16)].map((_, i) => (
              <span
                key={i}
                className="absolute text-[#c5a059] animate-ping"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${15 + Math.random() * 70}%`,
                  animationDuration: `${1.1 + (i % 3) * 0.3}s`
                }}
              >
                <Sparkles className="w-5 h-5" />
              </span>
            ))}
          </div>
        </div>
      )}

      {/* TOP HEADER */}
      <header className="sticky top-0 z-30 bg-[#faf7f2]/90 backdrop-blur-md border-b border-[#e3d4b6] py-3.5 px-4 sm:px-8 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#fffefb] border border-[#ccb482] p-1 flex items-center justify-center shadow-inner overflow-hidden shrink-0">
              <img
                src="/favicon-image.jfif"
                alt="Waqar Rahman"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <DiaTextReveal
                className="tracking-[0.18em] text-xs sm:text-sm font-bold block uppercase"
                text="Waqar Rahman"
                colors={["#A97CF8", "#F38CB8", "#FDCC92"]}
                textColor="#3e2d18"
                duration={2.0}
                repeat={true}
                repeatDelay={3.5}
              />
              <span className="text-[10px] text-[#826a42] font-sans tracking-wide block">
                Wedding Reception Tribute
              </span>
            </div>
          </div>

          <button
            onClick={() => setLetterOpen(true)}
            className="px-4 py-2 rounded-full text-xs font-sans font-semibold bg-[#c5a059] text-[#241705] hover:bg-[#b89146] shadow-sm flex items-center gap-2 transition-all"
          >
            <Feather className="w-3.5 h-3.5" />
            <span>Arpit's Note</span>
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 py-8 relative z-20 space-y-16">

        {/* HERO SECTION - WARM FRIEND'S TRIBUTE */}
        <section className="text-center pt-2 sm:pt-6 pb-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d6be8e] bg-[#f5ede0]/70 text-[#735422] text-xs font-sans tracking-widest uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#b08b46]" />
            <span>A Brother's Heartfelt Wedding Tribute</span>
            <Sparkles className="w-3.5 h-3.5 text-[#b08b46]" />
          </div>

          <h2 className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] text-[#8e6e3c] font-semibold mb-2">
            To My Dearest Friend & Brother On His Big Day
          </h2>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#332514] tracking-tight mb-2">
            Mubarakbaad, Dulhe Raja!
          </h1>

          <BotanicalDivider />

          <div className="space-y-2 my-4 max-w-2xl mx-auto">
            <div className="text-[11px] sm:text-xs font-sans uppercase tracking-[0.22em] text-[#93774a] font-bold">
              Celebrating The New Beginning Of
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight py-1">
              <DiaTextReveal
                className="font-serif font-bold tracking-tight inline-block"
                text="Waqar Rahman"
                colors={["#A97CF8", "#F38CB8", "#FDCC92"]}
                textColor="#2e200e"
                duration={2.2}
                repeat={true}
                repeatDelay={3.5}
              />
            </h3>
            <p className="text-sm sm:text-base font-serif italic text-[#594429] max-w-xl mx-auto leading-relaxed pt-1">
              "Can't express how happy I am for you, mere bhai!"
            </p>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#82622f] font-sans pt-1">
              <Heart className="w-3.5 h-3.5 text-[#b08b46] fill-[#b08b46]/20" />
              <span>Wishing you & bhabhi an eternity of love, peace, and mutual happiness.</span>
            </div>
          </div>

          {/* Key Event Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-2xl mx-auto mt-8 font-sans">
            <div className="p-3.5 rounded-2xl bg-[#f7f2e8] border border-[#e2d3b6] shadow-sm flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#eee1c7] border border-[#d6be8e] flex items-center justify-center text-[#735422] shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-[#93774a] font-bold tracking-wider uppercase">The Big Day</p>
                <p className="text-xs sm:text-sm font-semibold text-[#382b19]">Sunday, 25 Oct 2026</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#f7f2e8] border border-[#e2d3b6] shadow-sm flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#eee1c7] border border-[#d6be8e] flex items-center justify-center text-[#735422] shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-[#93774a] font-bold tracking-wider uppercase">Dawat-e-Waleema</p>
                <p className="text-xs sm:text-sm font-semibold text-[#382b19]">11:00 AM Onwards</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#f7f2e8] border border-[#e2d3b6] shadow-sm flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#eee1c7] border border-[#d6be8e] flex items-center justify-center text-[#735422] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-[#93774a] font-bold tracking-wider uppercase">Celebration Venue</p>
                <p className="text-xs sm:text-sm font-semibold text-[#382b19]">Bindra Bazar, Azamgarh</p>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-3 font-sans">
            <button
              onClick={() => setLetterOpen(true)}
              className="px-5 py-2.5 rounded-full bg-[#85632b] text-[#fdfbf7] font-semibold text-xs tracking-wider uppercase shadow-md hover:bg-[#6e5021] transition-all flex items-center gap-2"
            >
              <Feather className="w-3.5 h-3.5" />
              <span>Read Letter from Arpit</span>
            </button>
            <button
              onClick={toggleSong}
              className={`px-5 py-2.5 rounded-full border font-semibold text-xs tracking-wider uppercase transition-all flex items-center gap-2 shadow-sm ${isPlayingSong
                ? "bg-[#6d5022] text-[#fdfbf7] border-[#b08b46] ring-2 ring-[#c5a059]/40 shadow-md scale-105"
                : "bg-[#fcf8f2] border-[#d6be8e] text-[#694e23] hover:bg-[#ece2ce]"
                }`}
              title={isPlayingSong ? "Pause Karan Aujla - Mf Gabhru" : "Play Karan Aujla - Mf Gabhru"}
            >
              {isPlayingSong ? (
                <Disc className="w-3.5 h-3.5 animate-spin text-[#ffd98e]" />
              ) : (
                <Music className="w-3.5 h-3.5 text-[#85632b]" />
              )}
              <span>{isPlayingSong ? "Playing 'Mf Gabhru'" : "Play 'Mf Gabhru'"}</span>
            </button>
            <a
              href="#invitation-replica"
              className="px-5 py-2.5 rounded-full bg-[#f6eee0] border border-[#d4be92] text-[#694e23] font-semibold text-xs tracking-wider uppercase hover:bg-[#ece2ce] transition-all flex items-center gap-2"
            >
              <span>View Family Card Replica</span>
              <CornerDownRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* FRIENDSHIP MESSAGE BANNER */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f6eee0] via-[#f9f4ea] to-[#f2e6d0] border border-[#d8c39b] p-6 sm:p-8 shadow-sm">
          <div className="absolute -right-6 -bottom-6 opacity-15 pointer-events-none">
            <FloralCorner className="w-48 h-48 stroke-[#7f5c24]" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-5 relative z-10">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ecddbf] text-[#664b1f] text-xs font-sans font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#85632b]" />
                <span>Dosti Ki Taraf Se Paigaam</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-[#332412] font-semibold">
                Yaari Aur Nek Duayein, Waqar Bhai Ke Naam
              </h3>
              <p className="text-[#635036] text-xs sm:text-sm max-w-xl font-serif leading-relaxed">
                Waqar bhai, work commitments ki wajah se is khaas mauke par physically shareek nahi ho pa raha hoon, par meri har shubhkaamna aur dua tumhare saath hai.
              </p>
            </div>
            <button
              onClick={() => setLetterOpen(true)}
              className="shrink-0 px-5 py-2.5 rounded-xl bg-[#c5a059] text-[#241705] font-sans font-semibold text-xs uppercase tracking-wider shadow hover:bg-[#b89146] transition-all flex items-center gap-2"
            >
              <MailOpen className="w-4 h-4" />
              <span>Open Note</span>
            </button>
          </div>
        </section>

        {/* INVITATION CARD REPLICA */}
        <section id="invitation-replica" className="space-y-5">
          <div className="text-center space-y-1">
            <span className="text-xs font-sans uppercase tracking-[0.2em] font-semibold text-[#85632b]">
              Invitation Keepsake
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#332412]">
              The Wedding Card
            </h2>
            <p className="text-xs font-sans text-[#786343]">
              Recreated faithfully with delicate engravings from the physical card.
            </p>
          </div>

          <div className="max-w-2xl mx-auto rounded-3xl p-3 sm:p-5 bg-gradient-to-b from-[#eadecb] via-[#f6f0e4] to-[#e6d8c0] shadow-md border border-[#d6be8e]">
            {/* Card Surface */}
            <div className="relative rounded-2xl bg-[#fffefb] border border-[#ccb27e] p-6 sm:p-10 text-center overflow-hidden">

              {/* Botanical Corner Ornaments */}
              <div className="absolute top-0 left-0">
                <FloralCorner />
              </div>
              <div className="absolute top-0 right-0 transform scale-x-[-1]">
                <FloralCorner />
              </div>
              <div className="absolute bottom-0 left-0 transform scale-y-[-1]">
                <FloralCorner />
              </div>
              <div className="absolute bottom-0 right-0 transform scale-x-[-1] scale-y-[-1]">
                <FloralCorner />
              </div>

              {/* Inner Framing */}
              <div className="border border-[#e2d1ae] rounded-xl p-4 sm:p-8 space-y-5 bg-[#fbf9f4]/60 relative z-10">

                {/* Inviting Parents */}
                <div className="space-y-2">
                  <p className="font-serif italic text-xs text-[#705835]">
                    With the blessings of the Almighty
                  </p>

                  <div className="text-xs sm:text-sm text-[#47361f] max-w-md mx-auto leading-relaxed font-sans">
                    <p className="font-serif text-base sm:text-lg font-bold text-[#352512]">
                      Mrs. & Mr. Haji Shaikh Abdul Rahman
                    </p>
                    <p className="italic text-[#6b5435] mt-0.5">
                      Request the pleasure of your company to bless on the occasion of the Wedding Reception Ceremony of their son
                    </p>
                  </div>
                </div>

                {/* Couple Names */}
                <div className="py-3.5 border-y border-[#deb26f]/40 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-center sm:left flex-1">
                    <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#33220d]">
                      Waqar Rahman
                    </h4>
                    <p className="text-[11px] font-sans text-[#785f39] mt-0.5">
                      S/o Haji Shaikh Abdul Rahman
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-[#c5a059] bg-[#f7eedc] flex items-center justify-center font-serif text-[#694e22] text-xs font-bold shrink-0">
                    Weds
                  </div>

                  <div className="text-center sm:text-right flex-1">
                    <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#33220d]">
                      Daughter of
                    </h4>
                    <p className="text-[11px] font-sans text-[#785f39] mt-0.5">
                      Janab Haji Shaikh Abul Kalam Sahab<br />
                      <span className="text-[10px] text-[#856d49]">Mangrawan, Raipur</span>
                    </p>
                  </div>
                </div>

                {/* Ceremony Details */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-center gap-1.5 text-[#85632b] text-[11px] font-sans uppercase tracking-widest font-semibold">
                    <Sparkles className="w-3 h-3" />
                    <span>In-sha-Allah Program</span>
                    <Sparkles className="w-3 h-3" />
                  </div>

                  <div className="text-2xl sm:text-3xl font-serif text-[#2e1f0e] italic">
                    Dawat-e-Waleema
                  </div>

                  <p className="text-xs sm:text-sm font-sans text-[#523e24]">
                    On <strong className="text-[#332310] font-serif text-sm sm:text-base">Sunday, 25th October 2026</strong> at 11:00 A.M.
                  </p>

                  {/* Venue & Business Firm Details */}
                  <div className="max-w-md mx-auto pt-2 space-y-1.5 font-sans">
                    <div className="p-2.5 rounded-xl bg-[#f5eddd] border border-[#d6be8e] text-xs text-[#4d381c] flex items-center justify-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#85632b] shrink-0" />
                      <span><strong>Venue & Residence:</strong> Bindra Bazar, Azamgarh</span>
                    </div>

                    <div className="p-2 rounded-lg bg-[#faf5eb] border border-[#dfcead] text-[11px] text-[#6b5331] flex items-center justify-center gap-1.5">
                      <Building2 className="w-3 h-3 text-[#85632b] shrink-0" />
                      <span><strong>Family Firm / Enterprise:</strong> National Industries</span>
                    </div>
                  </div>
                </div>

                {/* Elder Blessings / W.B.C.F */}
                <div className="pt-3 border-t border-[#deb26f]/30 text-xs text-[#6e5635] space-y-1 font-sans">
                  <p className="text-[10px] tracking-widest text-[#8a6831] uppercase font-bold">W.B.C.F.</p>
                  <p className="font-serif text-xs sm:text-sm text-[#3b2b17]">
                    Al-Haj Shaikh Abdullah • Late Hafizullah • Haji Shaikh Abdul Rahman
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* BENTO GRID SHOWCASE — HARMONIZED AND BALANCED BY PHYSICAL ASPECT RATIOS */}
        <section className="space-y-6">
          <div className="text-center space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2e6cb] border border-[#d6be8e] text-[#694e21] text-xs font-sans font-semibold">
              <Camera className="w-3.5 h-3.5" />
              <span>Dulhe Raja Gallery</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif text-[#2e1f0e] font-semibold">
              Waqar — The Man of the Day
            </h2>
            <p className="text-xs sm:text-sm font-sans text-[#735e40] max-w-lg mx-auto">
              From the snowy heights of Kashmir to the Dubai skyline and thrilling rides — celebrating our friend's timeless charisma!
            </p>
          </div>

          {/* Balanced 4-Column Bento Grid Layout with Physical Aspect Ratio Optimization */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 font-sans auto-rows-[270px]">
            {bentoItems.map((item) => {
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedPhoto(item)}
                  className={`group relative rounded-3xl bg-[#fdfbf7] border-2 border-[#d9c49c] overflow-hidden shadow-md hover:shadow-2xl hover:border-[#b89146] transition-all duration-300 cursor-pointer flex flex-col justify-between ${item.bentoSpan} ${item.minHeight}`}
                >
                  {/* Photo Container taking 100% of card space */}
                  <div className="relative w-full h-full min-h-full overflow-hidden bg-[#e8deca]">
                    <img
                      src={item.src}
                      alt={item.title}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== item.fallback) {
                          target.src = item.fallback;
                        }
                      }}
                      className={`w-full h-full object-cover ${item.objectPos} group-hover:scale-105 transition-transform duration-700 ease-out`}
                    />

                    {/* Gradient Overlay for bottom text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-75 group-hover:opacity-65 transition-opacity" />

                    {/* Rich Die-Cut Vinyl Sticker with Thick White Border */}
                    <RichDieCutSticker
                      icon={item.sticker.icon}
                      name={item.sticker.name}
                      subtag={item.sticker.subtag}
                      badgeText={item.sticker.badgeText}
                      seal={item.sticker.seal}
                      themeGradient={item.sticker.themeGradient}
                      rotation={item.sticker.rotation}
                      onStickerClick={(e) => {
                        e.stopPropagation();
                        burstCelebrationConfetti();
                      }}
                    />

                    {/* Enlarge Hint Button */}
                    <div className="absolute top-3.5 right-3.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="w-8 h-8 rounded-full bg-white/90 text-[#3d2c14] border-2 border-white flex items-center justify-center shadow-lg hover:bg-white hover:scale-105 transition-all">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Bottom Title & Subtitle Overlay */}
                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex items-end justify-between gap-3 z-10 pointer-events-none">
                      <div className="space-y-0.5 text-white">
                        <h4 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-[#f7e3b5] transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#f5ebd7] line-clamp-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                          {item.subtitle}
                        </p>
                      </div>

                      <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center shrink-0 border border-white/60 group-hover:bg-[#c5a059] group-hover:text-[#2c1d09] group-hover:border-white transition-all shadow-md">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* BLESSING QUOTE */}
        <section className="text-center p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#f6eee0] via-[#fbf7f0] to-[#f6eee0] border border-[#d9c49c] shadow-sm space-y-2.5">
          <Heart className="w-5 h-5 text-[#9e7a44] mx-auto fill-[#9e7a44]/20" />
          <h3 className="text-xl sm:text-2xl font-serif text-[#352512] font-semibold">
            May Your Togetherness Be Blessed with Everlasting Joy
          </h3>
          <p className="text-xs sm:text-sm text-[#665134] font-serif italic max-w-lg mx-auto leading-relaxed">
            "Wishing Waqar and his bride a lifetime filled with deep companionship, mutual understanding, prosperity, and peace."
          </p>
          <p className="text-[10px] font-sans text-[#8e6e3c] tracking-widest uppercase font-semibold">
            With warmest regards from Arpit Sharma
          </p>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="mt-28 sm:mt-36 md:mt-44 border-t border-[#dfcead] bg-[#f5ede0] pt-10 sm:py-8 pb-28 px-4 text-center text-xs font-sans text-[#735d3d] space-y-2 relative z-20">
        <div className="flex items-center justify-center gap-2 text-[#4d381c] font-serif text-sm">
          <span>Waqar Rahman</span>
          <span>•</span>
          <span>Wedding Celebration</span>
        </div>
        <p className="max-w-md mx-auto text-[#665031] text-[11px] leading-relaxed">
          Crafted with heartfelt wishes by <strong>Arpit Sharma</strong> for his brother Waqar.
        </p>
      </footer>

      {/* PERSONAL LETTER MODAL (ARPIT TO WAQAR) */}
      {letterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-xl bg-[#fffefb] border-2 border-[#ccb27e] rounded-3xl p-6 sm:p-8 shadow-2xl text-[#2e210e] max-h-[90vh] overflow-y-auto">

            <div className="absolute top-0 right-0 transform scale-x-[-1] opacity-75">
              <FloralCorner />
            </div>

            <button
              onClick={() => setLetterOpen(false)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#f2e5cb] border border-[#d6be8e] text-[#5e431a] flex items-center justify-center hover:bg-[#85632b] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Letter Header */}
            <div className="text-center space-y-1 pb-4 border-b border-[#e5d5b7] relative z-10">
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#8e6e3c] font-bold">
                Heartfelt Congratulations
              </span>
              <h3 className="text-2xl font-serif text-[#33220d] font-semibold">
                A Letter for My Friend Waqar
              </h3>
              <p className="text-xs font-sans text-[#78613d]">
                From: Arpit Sharma
              </p>
            </div>

            {/* Letter Content */}
            <div className="py-5 space-y-3.5 text-xs sm:text-sm leading-relaxed text-[#3b2d1a] font-serif relative z-10">
              <p className="font-bold text-[#5c4015] text-sm sm:text-base">
                Pyaare Bhai Waqar, bohot bohot Mubarakbaad!
              </p>

              <p>
                Ghar se jab tumhare Waleema ka card mila, toh dil khushi se bhar gaya aur puraani yaadein taaza ho gayin. Tumhe apni zindagi ke is naye aur behad khoobsurat safar mein kadam rakhte dekh kar bohot khushi ho rahi hai.
              </p>

              {/* Highlight Note */}
              <div className="p-3.5 rounded-xl bg-[#f9f3e5] border-l-4 border-[#b89146] text-[#4d371b] italic font-serif leading-relaxed">
                "Bhai, maine poori koshish ki thi ki chhutti mil sake aur main wahan tumhare saath is khushi mein khada ho sakoon. Par office ke work pressure aur unavoidable leave constraints ki wajah se aana mumkin nahi ho paya. Dil se sorry bolta hoon ki main physically wahan haazir nahi ho pa raha, par meri shubhkaamnayein har lamha tumhare saath hain."
              </div>

              <p>
                Meri dhero shubhkaamnayein hamesha tumhare aur bhabhi ke saath hain. May your married life be filled with peace, prosperity, understanding, and happiness.
              </p>

              <p>
                Aur Bhai, poore parivaar ko meri taraf se aadaab aur pranaam kehna. Jaise hi mera aana hoga, main seedhe tumse milne aaunga aur apni dawat pakka vasool karunga!
              </p>

              <div className="pt-3 text-right">
                <p className="text-[10px] font-sans text-[#8e6e3c] uppercase tracking-widest font-semibold">Hamesha tumhara dost,</p>
                <p className="text-base font-bold text-[#352512] font-serif">Arpit Sharma</p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#e5d5b7] flex justify-end font-sans relative z-10">
              <button
                onClick={() => setLetterOpen(false)}
                className="px-5 py-2 rounded-xl bg-[#85632b] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#6e5021] transition-colors"
              >
                Close Letter
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FULL-SCREEN IMAGE PREVIEW MODAL */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#FAF7F2] rounded-3xl shadow-2xl border-2 border-[#d6be8e] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-white/90 text-[#4d381c] border-2 border-white flex items-center justify-center shadow-lg hover:bg-[#85632b] hover:text-white transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Photo Container with Die-Cut Sticker directly attached to image */}
            <div className="relative max-h-[70vh] bg-black/5 flex items-center justify-center overflow-hidden">
              <div className="relative inline-block">
                <RichDieCutSticker
                  icon={selectedPhoto.sticker.icon}
                  name={selectedPhoto.sticker.name}
                  subtag={selectedPhoto.sticker.subtag}
                  badgeText={selectedPhoto.sticker.badgeText}
                  seal={selectedPhoto.sticker.seal}
                  themeGradient={selectedPhoto.sticker.themeGradient}
                  rotation={selectedPhoto.sticker.rotation}
                  onStickerClick={(e) => {
                    e.stopPropagation();
                    burstCelebrationConfetti();
                  }}
                />

                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== selectedPhoto.fallback) {
                      target.src = selectedPhoto.fallback;
                    }
                  }}
                  className="max-h-[70vh] w-auto object-contain block mx-auto"
                />
              </div>
            </div>

            <div className="p-5 sm:p-6 bg-[#fffefb] border-t border-[#e3d3b4] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-sans">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#85632b] block">
                  {selectedPhoto.sticker.badgeText} • {selectedPhoto.sticker.subtag}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#33220d]">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#735e40]">
                  {selectedPhoto.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={burstCelebrationConfetti}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#b89146] text-[#241705] font-semibold text-xs tracking-wide shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Celebrate Waqar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}