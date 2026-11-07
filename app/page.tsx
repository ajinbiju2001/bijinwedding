"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const photos = [
  "/watercolor-embrace-of-love.png",
  "/watercolour-romance.png",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAB1vda8sCKHLckuiIiQHqjs9q2GBuAcDDzxm5ANofm_63s_vUNhHoSXjmRkswWMMqc_peC6eMz2LZMNtxokpUvofiRbo0HDx-vJgYlvrkjf6zimG4ONo_VSY0speXUHxI-u7pKQ1mKhD3n6xZN6vWei1zk_TKqKYpseCm68F4XiJyJfISElxDJ7FOZXGmIw1oqis6olUmLjndV7yZ8ikaGYx7KUguNAni3CS19Oy1d",
];

function Petals() {
  const petals = useMemo(() => Array.from({ length: 30 }, (_, i) => ({
    left: i % 2 === 0 ? `${(i * 11) % 20}%` : `${80 + ((i * 13) % 20)}%`, delay: `${-((i * 2.7) % 18)}s`, duration: `${10 + (i % 8)}s`, sway: i % 2 ? -1 : 1,
    color: ["#e28d95", "#c95964", "#f4b8be", "#e9c176", "#7d957e"][i % 5], size: `${18 + (i % 5) * 4}px`,
  })), []);
  return <><div className="petals" aria-hidden="true">{petals.map((p, i) => <span key={i} className={`petal petal-${i % 4}`} style={{ left: p.left, animationDelay: p.delay, animationDuration: p.duration, ["--sway" as string]: `${p.sway * (10 + i % 4 * 7)}px`, width: p.size, height: `calc(${p.size} * 1.2)` }} />)}</div><WelcomeOverlay /></>;
}

function WelcomeOverlay() {
  const [open, setOpen] = useState(false);
  const openInvitation = () => {
    const audio = document.querySelector<HTMLAudioElement>("audio");
    setOpen(true);
    audio?.play().catch(() => {});
  };
  if (open) return null;
  return <div className="welcome-screen"><div className="welcome-card"><p className="eyebrow">Bijin &amp; Devu</p><h1>Our Wedding Invitation</h1><p>Join us as we begin our auspicious journey together.</p><button onClick={openInvitation}>Open Invitation <span>↗</span></button></div></div>;
}

function Countdown() {
  const [remaining, setRemaining] = useState(0);
  const target = new Date("2027-02-07T12:00:00+05:30").getTime();
  useEffect(() => { setRemaining(target - Date.now()); const timer = window.setInterval(() => setRemaining(target - Date.now()), 1000); return () => window.clearInterval(timer); }, [target]);
  const values = remaining <= 0 ? [0, 0, 0, 0] : [Math.floor(remaining / 86400000), Math.floor(remaining / 3600000) % 24, Math.floor(remaining / 60000) % 60, Math.floor(remaining / 1000) % 60];
  return <div className="countdown">{values.map((value, i) => <div className="count-box" key={i}><strong>{String(value).padStart(2, "0")}</strong><span>{["Days", "Hours", "Mins", "Secs"][i]}</span></div>)}</div>;
}

export default function Home() {
  const [music, setMusic] = useState(false); const [toast, setToast] = useState("");
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    const startMusic = () => {
      const audio = audioRef.current;
      if (!audio || !audio.paused) return;
      audio.play().then(() => setMusic(true)).catch(() => {});
    };
    window.addEventListener("pointerdown", startMusic, { once: true });
    return () => window.removeEventListener("pointerdown", startMusic);
  }, []);
  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (audio.paused) { await audio.play(); setMusic(true); }
      else { audio.pause(); setMusic(false); }
    } catch { setMusic(false); }
  };
  const share = async () => { try { if (navigator.share) await navigator.share({ title: "Bijin & Devu — The Wedding Celebration", text: "Join us on 07 February 2027.", url: location.href }); else { await navigator.clipboard.writeText(location.href); setToast("Invitation link copied"); setTimeout(() => setToast(""), 2500); } } catch {} };
  const calendar = () => { const url = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding%3A%20Bijin%20%26%20Devu&dates=20270207T063000Z%2F20270207T123000Z&location=Mannam%20Smaraka%20Mandiram%2C%20Kerala"; window.open(url, "_blank", "noopener,noreferrer"); };
  return <><audio ref={audioRef} src="/bangalore-days-bgm-malayalam.mp3" loop preload="metadata" autoPlay onPlay={() => setMusic(true)} /><Petals /><header><div className="nav"><a className="monogram" href="#top">B<span>&amp;</span>D</a><nav className="nav-links" aria-label="Main navigation"><a className="active" href="#top">Home</a><a href="#story">Our Story</a><a href="#venues">Events</a><a href="#details">Details</a></nav><a className="brand" href="#top">Bijin &amp; Devu<small>Auspicious Union</small></a><button className="music" onClick={toggleMusic} aria-label={music ? "Pause music" : "Play music"}><i className={music ? "playing" : ""}>▮▮▮</i> <span>{music ? "Pause" : "Music"}</span></button></div></header><main id="top">
    <section className="hero"><div className="hero-card"><div className="hero-floral" aria-hidden="true"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDhuZt2RBvsXwedQ-sw9xcRj_W9ek67otv7QH5mdK8qRggo59quLJp0QqC7o8UT6MuBy0fTBDZNyGQRwgPV2JZJOBPk5BA2mxxCHOReuygN6Cq-TI7jnJ88ubTRtJh6L1SsB0ZKR0B7OLXUbv49-vrayhAhpxew-bB3LqtWjmpre2x1SIA57dws8e8zfISYGl8zlMrKaMcDoD-9ErExueBYPiZAhVr_orosUWcygDWv_cR4eyKvDFD8g" /><div /></div><div className="ornament" /><div className="hero-content"><p className="eyebrow">श्री | ഓം നമശിവായ</p><p className="kicker">Bespoke Ceremonial Union</p><p className="intro">Together with their families and with the boundless blessings of God, joyfully invite you to celebrate the marriage of</p><h1>Bijin <em>&amp;</em> Devu</h1><div className="rule">∞</div><div className="date">07 February 2027 <b>•</b> Sunday <b>•</b> Kerala, India</div><div className="actions"><a href="#details">View Muhurtham Details</a><a className="light" href="#venues">Ceremony Venues</a></div></div></div><span className="scroll">Scroll to Explore ↓</span></section>
    <section className="section soft story-section" id="story"><div className="section-head"><p className="eyebrow">Divine Confluence</p><h2>Our Story</h2><p className="section-lead">A journey that began with friendship, grew with understanding, and continues into a lifelong commitment.</p><div className="rule">∞</div></div><div className="profiles"><Profile title="The Groom" name="Bijin B" parent="Sri Biju & Smt Ajitha Kumari K.C." text="Known for his quiet grace, radiant heart, and devotion to timeless values and familial warmth." img={photos[0]} /><Profile title="The Bride" name="Devu Sunil" parent="Sri Sunil & Smt Kala" text="Admired for her infectious vivacity, gentle kindness, artistic spirit, and thoughtful elegance." img={photos[1]} /></div></section>
    <section className="section" id="details"><div className="section-head"><p className="eyebrow">Sacred Timeline &amp; Celebration</p><h2>Auspicious Countdown</h2><div className="rule">∞</div></div><div className="countdown-card"><p className="eyebrow">Auspicious Moment</p><div className="date-display" aria-label="Wedding date: February 7, 2027"><strong>07</strong><span><b>FEBRUARY</b><small>2027</small></span></div><h2>Our Wedding</h2><p>12:00 PM IST at Mannam Smaraka Mandiram, Kerala</p><Countdown /><div className="gallery">{photos.map((photo, i) => <img src={photo} alt="Wedding detail" key={i} />)}</div><p className="quote">“Two souls, one sacred path blessed by time and tradition”</p></div></section>
    <section className="section soft" id="venues"><div className="section-head"><p className="eyebrow">Destinations of Grace</p><h2>Sacred Venues</h2></div><div className="venues"><Venue title="Mannam Smaraka Mandiram" tag="Auspicious Muhurtham" time="12:00 PM – 12:45 PM" text="Witness the sacred Kanyadaanam, Thalikettu, exchange of floral garlands, and traditional Kerala Sadya feast." link="https://www.google.com/maps/search/?api=1&query=Mannam%20Smaraka%20Mandiram%2C%20Temple%20Road%2C%20Kallissery%2C%20Chengannur%2C%20Kerala%20689121" /><Venue title="Marthoma Community Hall" tag="Grand Soirée" time="Evening Felicitations & Dinner" text="An enchanting evening of camaraderie, live cultural orchestra, joyous melodies, heartfelt congratulations, and delectable feasts." link="https://maps.google.com/maps?vet=10CAAQoqAOahcKEwjg0v-_m_aXAxUAAAAAHQAAAAAQCg..i&sca_esv=bd3a8f772863d765&udm&fvr=1&pvq=Cg0vZy8xMWNzcHR2Z2JkIhkKE21hcnRob21hIGF1ZGl0b3JpdW0QAhgDiQG2ODKatUO4sA&lqi=CiBtYXJ0aG9tYSBhdWRpdG9yaXVtIGt1bGlrYW1wYWxhbUjM8vTc4quAgAhaKBAAEAEYACIgbWFydGhvbWEgYXVkaXRvcml1bSBrdWxpa2FtcGFsYW2SARBjb21tdW5pdHlfY2VudGVy&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3b06227ec220892d:0xb0b843b59a3238b6" /></div></section>
    <section className="section invitation"><p className="eyebrow">ഓം ശ്രീ ഗണേശായ നമഃ • മാംഗല്യ ക്ഷണം</p><h2>സ്നേഹപൂർവ്വം ക്ഷണിക്കുന്നു</h2><p>ഞങ്ങളുടെ പ്രിയപ്പെട്ട <b>ബിജിൻ ബി.</b>യുടെയും <b>ദേവു സുനിലിന്റെയും</b> വിവാഹ മംഗളവേളയിൽ താങ്കളുടെയും കുടുംബത്തിന്റെയും സാന്നിധ്യം സാദരം ക്ഷണിച്ചുകൊള്ളുന്നു.</p><div className="rule">∞</div><b>ഉപചാരപൂർവ്വം<br />അജിൻ ബി.</b></section>
    <section className="closing"><p className="eyebrow">Save the Auspicious Date</p><h2>Be Part of Our Journey</h2><p>Add our wedding celebration to your calendar to stay reminded of the auspicious timings and locations.</p><div className="actions"><button onClick={calendar}>＋ Add to Google Calendar</button><button className="light" onClick={share}><svg className="share-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="2.5" /><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="19" r="2.5" /><path d="m8.2 10.8 7.6-4.4M8.2 13.2l7.6 4.4" /></svg> Share Invitation</button></div>{toast && <div className="toast">{toast}</div>}</section>
  </main><footer><strong>Bijin &amp; Devu</strong><p>With The Blessings of Our Beloved Families</p><small>© 2026 Bijin &amp; Devu Wedding Celebration</small></footer></>;
}

function Profile({ title, name, parent, text, img }: { title: string; name: string; parent: string; text: string; img: string }) { return <article className="profile"><img src={img} alt={name} /><div><p className="eyebrow">{title}</p><h3>{name}</h3><p>{text}</p><div className="parent"><small>Child of</small><b>{parent}</b></div></div></article>; }
function Venue({ title, tag, time, text, link }: { title: string; tag: string; time: string; text: string; link: string }) { return <article className="venue"><div className="venue-image"><span>{tag}</span><h3>{title}</h3></div><div className="venue-body"><p>{text}</p><strong>◷ {time}</strong><a href={link} target="_blank" rel="noreferrer"><svg className="map-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.1 7-12A7 7 0 0 0 5 9c0 5.9 7 12 7 12Z" /><circle cx="12" cy="9" r="2.25" /></svg> Open in Google Maps</a></div></article>; }
