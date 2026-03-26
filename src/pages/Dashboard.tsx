import { useState } from "react";
import {
  LayoutDashboard, FolderKanban, CheckSquare, MessageSquare,
  FileText, Receipt, Settings, HelpCircle, Plus, Search,
  Bell, ChevronDown, MoreHorizontal, Users, CalendarDays,
  Clock, Zap, Brain, ScanLine, BarChart3, Share2,
  Link2, MessageCircle, Check, Circle, Upload, TrendingUp,
  TrendingDown, ArrowUpRight, Building2, MapPin
} from "lucide-react";

const NAV_MAIN = [
  { icon: LayoutDashboard, label: "Event Manager", active: true },
  { icon: FolderKanban,    label: "Kontak", badge: 3 },
  { icon: CheckSquare,     label: "Dashboard" },
  { icon: ScanLine,        label: "Live Monitor" },
  { icon: MessageSquare,   label: "Analytics" },
  { icon: Brain,           label: "YoriMind", badge: 1 },
];

const PROJECTS = [
  { color: "#e879f9", label: "Hospital Tech Day" },
  { color: "#34d399", label: "Manufacturing Summit" },
  { color: "#60a5fa", label: "Fintech Forum" },
];

const TASKS = [
  {
    icon: Users,
    name: "Upload & ETL Kontak Baru",
    comments: 7, links: 2,
    assignee: { initials: "YR", color: "#f472b6" },
    status: "In Progress", statusColor: "#d97706", statusBg: "#fef3c7",
  },
  {
    icon: CalendarDays,
    name: "Kirim Undangan Hospital Tech Day",
    comments: 10, links: 3,
    assignee: { initials: "AD", color: "#60a5fa" },
    status: "Pending", statusColor: "#7c3aed", statusBg: "#ede9fe",
  },
  {
    icon: Upload,
    name: "Review ETL Flagged Records",
    comments: 5, links: 8,
    assignee: { initials: "LJ", color: "#34d399" },
    status: "Completed", statusColor: "#059669", statusBg: "#d1fae5",
  },
];

const WEEK_DAYS = [
  { day: "Mo", num: "20" },
  { day: "Tu", num: "21" },
  { day: "We", num: "22" },
  { day: "Th", num: "23", active: true },
  { day: "Fr", num: "24" },
  { day: "Sa", num: "25" },
  { day: "Su", num: "26" },
];

const SCHEDULE = [
  { icon: Brain,        title: "YoriMind Analisis Event",         time: "09:00 AM to 10:30 AM", avatars: ["YR","AD"] },
  { icon: CalendarDays, title: "Persiapan Hospital Tech Day",      time: "01:00 PM to 02:30 PM", avatars: ["YR","LJ","AD"] },
  { icon: ScanLine,     title: "Live Scan Check-in Rehearsal",     time: "04:00 PM to 05:00 PM", avatars: ["LJ"] },
];

const NOTES = [
  { done: false, title: "Segmentasi kontak per industri",   body: "Pastikan kontak sektor Kesehatan sudah dipisah sebelum blast undangan berikutnya." },
  { done: false, title: "Perbaiki template undangan WA",    body: "Gunakan ikon sederhana dan mudah dibaca. Hindari desain terlalu kompleks." },
  { done: true,  title: "YoriMind laporan event selesai",   body: "Analisis attendance rate sudah siap — PDF tersedia di folder laporan." },
];

const FUNNEL = [
  { label: "Undangan Terkirim", value: 1000, pct: 100, color: "#3b82f6" },
  { label: "Dibuka",            value: 420,  pct: 42,  color: "#8b5cf6" },
  { label: "Registrasi",        value: 102,  pct: 10.2,color: "#ec4899" },
  { label: "Approved",          value: 87,   pct: 8.7, color: "#f59e0b" },
  { label: "Hadir",             value: 47,   pct: 4.7, color: "#10b981" },
];

const AV_COLORS = ["#f472b6","#60a5fa","#34d399","#a78bfa","#fb923c"];

function Avatar({ initials, color, size = 28 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: color || "#e2e8f0",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: size * 0.37, fontWeight: 600, color: "#fff",
      border: "2px solid #fff", flexShrink: 0, letterSpacing: "-0.01em"
    }}>{initials}</div>
  );
}

function AvatarStack({ names }) {
  return (
    <div style={{ display: "flex" }}>
      {names.map((n, i) => (
        <div key={i} style={{ marginLeft: i === 0 ? 0 : -8, zIndex: names.length - i }}>
          <Avatar initials={n} color={AV_COLORS[i % AV_COLORS.length]} size={24} />
        </div>
      ))}
    </div>
  );
}

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --font: 'Figtree', sans-serif;
          --bg: #f5f5f7;
          --surface: #ffffff;
          --border: #e8e8ec;
          --text: #1a1a2e;
          --text2: #6b7280;
          --text3: #9ca3af;
          --blue: #3b6fd4;
          --blue-light: #eff4ff;
          --radius: 12px;
        }
        body { font-family: var(--font); background: var(--bg); color: var(--text); }

        .root { display: flex; min-height: 100vh; }

        /* SIDEBAR */
        .sidebar {
          width: 220px; background: var(--surface);
          border-right: 1px solid var(--border);
          display: flex; flex-direction: column; flex-shrink: 0;
          height: 100vh; position: sticky; top: 0; overflow-y: auto;
        }
        .sidebar-logo {
          padding: 18px 16px 12px;
          display: flex; align-items: center; gap: 8px;
        }
        .logo-wordmark {
          font-size: 18px; font-weight: 700; color: var(--text); letter-spacing: -0.03em;
        }
        .sidebar-search {
          margin: 0 10px 6px;
          display: flex; align-items: center; gap: 7px;
          background: var(--bg); border: 1px solid var(--border);
          border-radius: 8px; padding: 6px 10px;
          font-size: 12px; color: var(--text3); cursor: text;
        }
        .kb { margin-left: auto; font-size: 10px; opacity: 0.6; background: var(--border); border-radius: 4px; padding: 1px 5px; }
        .nav-item {
          display: flex; align-items: center; gap: 9px;
          padding: 7px 14px; font-size: 13px; font-weight: 400;
          color: var(--text2); cursor: pointer; border-radius: 8px;
          margin: 1px 6px; transition: background 0.12s, color 0.12s; position: relative;
        }
        .nav-item:hover { background: var(--bg); color: var(--text); }
        .nav-item.active { background: var(--blue); color: #fff; font-weight: 500; }
        .nav-item.active svg { color: #fff !important; }
        .nav-badge {
          margin-left: auto; background: #ef4444; color: #fff;
          font-size: 10px; font-weight: 600; padding: 1px 6px;
          border-radius: 999px; min-width: 18px; text-align: center;
        }
        .nav-item.active .nav-badge { background: rgba(255,255,255,0.28); color: #fff; }
        .sidebar-section {
          padding: 14px 14px 4px; font-size: 10.5px; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase; color: var(--text3);
          display: flex; align-items: center; justify-content: space-between;
        }
        .sidebar-section svg { cursor: pointer; }
        .project-item {
          display: flex; align-items: center; gap: 8px;
          padding: 6px 14px; font-size: 12.5px; color: var(--text2);
          cursor: pointer; border-radius: 8px; margin: 1px 6px; transition: background 0.12s;
        }
        .project-item:hover { background: var(--bg); color: var(--text); }
        .project-dot { width: 9px; height: 9px; border-radius: 3px; flex-shrink: 0; }
        .sidebar-footer { margin-top: auto; border-top: 1px solid var(--border); padding: 8px 6px; }

        /* MAIN */
        .main { flex: 1; display: flex; flex-direction: column; min-width: 0; background: var(--bg); }

        /* TOPBAR */
        .topbar {
          background: var(--surface); border-bottom: 1px solid var(--border);
          height: 54px; display: flex; align-items: center;
          padding: 0 22px; gap: 10px; position: sticky; top: 0; z-index: 20;
        }
        .topbar-search {
          display: flex; align-items: center; gap: 8px;
          border: 1px solid var(--border); border-radius: 8px;
          padding: 6px 12px; font-size: 12.5px; color: var(--text3);
          background: var(--bg); flex: 1; max-width: 360px; cursor: text;
        }
        .topbar-spacer { flex: 1; }
        .new-btn-wrap { display: flex; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(59,111,212,0.28); }
        .new-btn-main {
          display: flex; align-items: center; gap: 6px;
          background: var(--blue); color: #fff; border: none;
          padding: 0 14px; font-size: 12.5px; font-weight: 500;
          font-family: var(--font); cursor: pointer; height: 34px; white-space: nowrap;
        }
        .new-btn-chevron {
          background: #2d5ab8; color: #fff; border: none;
          padding: 0 8px; cursor: pointer; height: 34px;
          display: flex; align-items: center;
          border-left: 1px solid rgba(255,255,255,0.15);
        }
        .icon-btn {
          width: 34px; height: 34px; border-radius: 8px;
          border: 1px solid var(--border); background: var(--surface);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: var(--text2); position: relative; transition: background 0.12s;
        }
        .icon-btn:hover { background: var(--bg); }
        .notif-dot {
          position: absolute; top: 6px; right: 6px;
          width: 7px; height: 7px; background: #ef4444;
          border-radius: 50%; border: 1.5px solid var(--surface);
        }
        .share-btn {
          display: flex; align-items: center; gap: 6px;
          border: 1px solid var(--border); background: var(--surface);
          border-radius: 8px; padding: 0 12px; height: 34px;
          font-size: 12.5px; font-weight: 500; color: var(--text2);
          font-family: var(--font); cursor: pointer; transition: background 0.12s;
        }
        .share-btn:hover { background: var(--bg); }

        /* CONTENT */
        .content { flex: 1; padding: 26px 26px 20px; overflow-y: auto; }

        .greeting-date { font-size: 12px; color: var(--text3); margin-bottom: 3px; }
        .greeting-text {
          font-size: 28px; font-weight: 700; color: var(--text);
          letter-spacing: -0.03em; margin-bottom: 18px;
        }

        /* STATS STRIP */
        .stats-strip {
          display: flex; align-items: stretch;
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius); margin-bottom: 20px; overflow: hidden;
        }
        .stat-pill {
          display: flex; align-items: center; gap: 10px;
          padding: 14px 24px; flex: 1; border-right: 1px solid var(--border);
        }
        .stat-pill:last-child { border-right: none; }
        .stat-pill-icon { color: var(--text3); flex-shrink: 0; }
        .stat-pill-val { font-size: 16px; font-weight: 700; color: var(--text); letter-spacing: -0.02em; }
        .stat-pill-val span { font-size: 11.5px; font-weight: 400; color: var(--text2); margin-left: 4px; }
        .stat-pill-label { font-size: 11px; color: var(--text3); margin-top: 1px; }

        /* MAIN GRID */
        .main-grid { display: grid; grid-template-columns: 1fr 330px; gap: 16px; }

        /* PANEL */
        .panel {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius); overflow: hidden; margin-bottom: 16px;
        }
        .panel:last-child { margin-bottom: 0; }
        .panel-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 13px 18px; border-bottom: 1px solid var(--border);
        }
        .panel-title-row { display: flex; align-items: center; gap: 8px; }
        .panel-title { font-size: 15px; font-weight: 700; color: var(--text); letter-spacing: -0.01em; }
        .week-pill {
          background: var(--bg); border: 1px solid var(--border); border-radius: 6px;
          padding: 3px 8px; font-size: 11.5px; color: var(--text2);
          display: flex; align-items: center; gap: 3px; cursor: pointer; font-weight: 500;
        }
        .see-all {
          font-size: 12.5px; color: var(--text2); cursor: pointer; font-weight: 500;
          padding: 4px 8px; border-radius: 6px; transition: background 0.12s;
          display: flex; align-items: center; gap: 4px;
        }
        .see-all:hover { background: var(--bg); }

        /* TASK TABLE */
        .task-table { width: 100%; border-collapse: collapse; }
        .task-table th {
          text-align: left; padding: 8px 18px; font-size: 11px; font-weight: 600;
          color: var(--text3); letter-spacing: 0.04em; text-transform: uppercase;
          background: #fafafa; border-bottom: 1px solid var(--border);
        }
        .task-table td {
          padding: 11px 18px; border-bottom: 1px solid #f3f3f6; vertical-align: middle;
        }
        .task-table tr:last-child td { border-bottom: none; }
        .task-table tbody tr { transition: background 0.1s; cursor: pointer; }
        .task-table tbody tr:hover td { background: #fafbff; }
        .task-name-cell { display: flex; align-items: center; gap: 10px; }
        .task-icon-wrap {
          width: 28px; height: 28px; border-radius: 7px;
          background: var(--bg); border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; color: var(--text2);
        }
        .task-name { font-size: 13px; font-weight: 500; color: var(--text); }
        .task-meta { display: flex; align-items: center; gap: 10px; margin-top: 2px; }
        .task-meta-item { display: flex; align-items: center; gap: 3px; font-size: 11px; color: var(--text3); }
        .status-chip {
          display: inline-flex; align-items: center;
          padding: 3px 10px; border-radius: 6px; font-size: 11.5px; font-weight: 600;
        }

        /* WEEK STRIP */
        .week-strip {
          display: flex; gap: 4px; padding: 11px 16px;
          border-bottom: 1px solid var(--border);
        }
        .week-day {
          flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px;
          padding: 6px 4px; border-radius: 8px; cursor: pointer; transition: background 0.12s;
        }
        .week-day:hover { background: var(--bg); }
        .week-day.active { background: var(--blue); }
        .wd-label { font-size: 10.5px; font-weight: 500; color: var(--text3); }
        .wd-num { font-size: 14px; font-weight: 600; color: var(--text); line-height: 1; }
        .week-day.active .wd-label, .week-day.active .wd-num { color: #fff; }

        /* SCHEDULE */
        .schedule-item {
          display: flex; align-items: flex-start; gap: 11px;
          padding: 10px 18px; transition: background 0.1s; cursor: pointer;
          border-bottom: 1px solid #f3f3f6;
        }
        .schedule-item:last-child { border-bottom: none; }
        .schedule-item:hover { background: #fafbff; }
        .sched-icon {
          width: 30px; height: 30px; border-radius: 8px;
          background: var(--bg); border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; color: var(--blue); margin-top: 1px;
        }
        .sched-title { font-size: 12.5px; font-weight: 500; color: var(--text); }
        .sched-time { font-size: 11px; color: var(--text3); margin-top: 2px; }
        .more-btn {
          width: 24px; height: 24px; border-radius: 5px;
          display: flex; align-items: center; justify-content: center;
          color: var(--text3); cursor: pointer; transition: background 0.12s; flex-shrink: 0;
        }
        .more-btn:hover { background: var(--bg); color: var(--text2); }

        /* NOTES */
        .note-item {
          display: flex; align-items: flex-start; gap: 11px;
          padding: 11px 18px; border-bottom: 1px solid #f3f3f6;
          cursor: pointer; transition: background 0.12s;
        }
        .note-item:last-child { border-bottom: none; }
        .note-item:hover { background: #fafbff; }
        .note-check {
          width: 18px; height: 18px; border-radius: 50%;
          border: 1.5px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 2px; transition: border-color 0.12s;
        }
        .note-item:hover .note-check { border-color: var(--blue); }
        .note-check.done { background: #10b981; border-color: #10b981; }
        .note-title { font-size: 12.5px; font-weight: 600; color: var(--text); }
        .note-title.done { text-decoration: line-through; color: var(--text3); font-weight: 400; }
        .note-body { font-size: 11.5px; color: var(--text3); line-height: 1.5; margin-top: 2px; }

        /* FUNNEL */
        .funnel-list { padding: 14px 18px; display: flex; flex-direction: column; gap: 12px; }
        .funnel-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; }
        .funnel-label { font-size: 12px; color: var(--text2); }
        .funnel-right { display: flex; align-items: center; gap: 6px; }
        .funnel-count { font-size: 12px; font-weight: 600; color: var(--text); }
        .funnel-pct { font-size: 11px; color: var(--text3); }
        .funnel-bar-bg { height: 5px; background: var(--bg); border-radius: 999px; overflow: hidden; }
        .funnel-bar-fill { height: 100%; border-radius: 999px; }

        /* MOBILE BOTTOM NAV */
        .mobile-nav {
          display: none; position: fixed; bottom: 0; left: 0; right: 0;
          background: var(--surface); border-top: 1px solid var(--border);
          padding: 6px 0 calc(6px + env(safe-area-inset-bottom));
          z-index: 50; justify-content: space-around;
        }
        .mobile-nav-item {
          display: flex; flex-direction: column; align-items: center; gap: 3px;
          padding: 5px 10px; border-radius: 8px; cursor: pointer;
          color: var(--text3); font-size: 9.5px; transition: color 0.12s; position: relative;
        }
        .mobile-nav-item.active { color: var(--blue); }
        .mob-badge {
          position: absolute; top: 3px; right: 6px;
          background: #ef4444; color: #fff; font-size: 8px;
          width: 14px; height: 14px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; font-weight: 600;
        }

        @media (max-width: 960px) {
          .main-grid { grid-template-columns: 1fr; }
          .sidebar { display: none; }
          .mobile-nav { display: flex; }
          .content { padding: 16px 16px 90px; }
          .greeting-text { font-size: 22px; }
          .topbar-search { max-width: none; }
          .share-btn { display: none; }
        }
        @media (max-width: 520px) {
          .task-table th:nth-child(2), .task-table td:nth-child(2) { display: none; }
          .stats-strip { flex-direction: column; }
          .stat-pill { border-right: none; border-bottom: 1px solid var(--border); }
          .stat-pill:last-child { border-bottom: none; }
        }
      `}</style>

      <div className="root">

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-logo">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <rect x="0"  y="10" width="11" height="11" rx="2.5" fill="#ef4444" transform="rotate(-8 5.5 15.5)"/>
              <rect x="9"  y="3"  width="11" height="11" rx="2.5" fill="#a855f7" transform="rotate(8 14.5 8.5)"/>
              <rect x="18" y="10" width="11" height="11" rx="2.5" fill="#f97316" transform="rotate(-4 23.5 15.5)"/>
            </svg>
            <span className="logo-wordmark">Yorindo</span>
          </div>

          <div className="sidebar-search">
            <Search size={13} strokeWidth={1.8} />
            Search or type a command
            <span className="kb">⌕</span>
          </div>

          {NAV_MAIN.map((item) => (
            <div
              key={item.label}
              className={`nav-item ${activeNav === item.label ? "active" : ""}`}
              onClick={() => setActiveNav(item.label)}
            >
              <item.icon size={15} strokeWidth={1.7} />
              {item.label}
              {item.badge && <span className="nav-badge">{item.badge}</span>}
            </div>
          ))}

          <div className="sidebar-section">
            Projects
            <Plus size={13} strokeWidth={2.2} style={{ color: "var(--text3)" }} />
          </div>

          {PROJECTS.map((p) => (
            <div key={p.label} className="project-item">
              <div className="project-dot" style={{ background: p.color }} />
              {p.label}
            </div>
          ))}

          <div className="sidebar-footer">
            <div className="nav-item">
              <Settings size={15} strokeWidth={1.7} />
              Pengaturan
            </div>
            <div className="nav-item">
              <HelpCircle size={15} strokeWidth={1.7} />
              Bantuan &amp; Support
              <span className="nav-badge" style={{ background: "var(--bg)", color: "var(--text2)", border: "1px solid var(--border)" }}>8</span>
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <div className="main">

          {/* TOPBAR */}
          <header className="topbar">
            <div className="topbar-search">
              <Search size={13} strokeWidth={1.8} />
              Search
              <span className="kb" style={{ marginLeft: "auto" }}>⌕</span>
            </div>

            <div className="topbar-spacer" />

            <button className="share-btn">
              <Share2 size={13} strokeWidth={1.8} />
              Share
            </button>

            <div className="new-btn-wrap">
              <button className="new-btn-main">
                <Plus size={13} strokeWidth={2.5} />
                Buat Event
              </button>
              <button className="new-btn-chevron">
                <ChevronDown size={12} strokeWidth={2.2} />
              </button>
            </div>

            <div className="icon-btn">
              <Bell size={15} strokeWidth={1.7} />
              <div className="notif-dot" />
            </div>

            <Avatar initials="YR" color="#3b6fd4" size={30} />
          </header>

          {/* CONTENT */}
          <main className="content">

            <div className="greeting-date">Thursday, 26th March</div>
            <div className="greeting-text">Selamat Pagi, User!</div>

            {/* Stats strip */}
            <div className="stats-strip">
              <div className="stat-pill">
                <Clock size={18} strokeWidth={1.6} className="stat-pill-icon" />
                <div>
                  <div className="stat-pill-val">12hrs <span>Waktu Dihemat</span></div>
                  <div className="stat-pill-label">dari otomatisasi ETL</div>
                </div>
              </div>
              <div className="stat-pill">
                <CheckSquare size={18} strokeWidth={1.6} className="stat-pill-icon" />
                <div>
                  <div className="stat-pill-val">15 <span>Event Selesai</span></div>
                  <div className="stat-pill-label">tahun ini</div>
                </div>
              </div>
              <div className="stat-pill">
                <Zap size={18} strokeWidth={1.6} className="stat-pill-icon" />
                <div>
                  <div className="stat-pill-val">7 <span>Event Aktif</span></div>
                  <div className="stat-pill-label">sedang berjalan</div>
                </div>
              </div>
            </div>

            {/* Main grid */}
            <div className="main-grid">

              {/* LEFT */}
              <div>
                {/* Tasks */}
                <div className="panel">
                  <div className="panel-header">
                    <div className="panel-title-row">
                      <span className="panel-title">Event &amp; Tugas Saya</span>
                      <div className="week-pill">
                        Minggu Ini <ChevronDown size={10} strokeWidth={2.2} />
                      </div>
                    </div>
                    <div className="see-all">Lihat Semua</div>
                  </div>

                  <table className="task-table">
                    <thead>
                      <tr>
                        <th>Nama Tugas</th>
                        <th>Assign</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TASKS.map((t, i) => (
                        <tr key={i}>
                          <td>
                            <div className="task-name-cell">
                              <div className="task-icon-wrap">
                                <t.icon size={13} strokeWidth={1.8} />
                              </div>
                              <div>
                                <div className="task-name">{t.name}</div>
                                <div className="task-meta">
                                  <span className="task-meta-item">
                                    <MessageCircle size={10} strokeWidth={2} /> {t.comments}
                                  </span>
                                  <span className="task-meta-item">
                                    <Link2 size={10} strokeWidth={2} /> {t.links}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <Avatar initials={t.assignee.initials} color={t.assignee.color} size={26} />
                          </td>
                          <td>
                            <span className="status-chip" style={{ background: t.statusBg, color: t.statusColor }}>
                              {t.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Schedule */}
                <div className="panel">
                  <div className="panel-header">
                    <div className="panel-title-row">
                      <CalendarDays size={15} strokeWidth={1.7} style={{ color: "var(--text3)" }} />
                      <span className="panel-title">Jadwal</span>
                    </div>
                    <MoreHorizontal size={16} strokeWidth={1.7} style={{ color: "var(--text3)", cursor: "pointer" }} />
                  </div>

                  <div className="week-strip">
                    {WEEK_DAYS.map((d) => (
                      <div key={d.day} className={`week-day ${d.active ? "active" : ""}`}>
                        <div className="wd-label">{d.day}</div>
                        <div className="wd-num">{d.num}</div>
                      </div>
                    ))}
                  </div>

                  {SCHEDULE.map((s, i) => (
                    <div key={i} className="schedule-item">
                      <div className="sched-icon">
                        <s.icon size={14} strokeWidth={1.8} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div className="sched-title">{s.title}</div>
                        <div className="sched-time">{s.time}</div>
                      </div>
                      <AvatarStack names={s.avatars} />
                      <div className="more-btn" style={{ marginLeft: 6 }}>
                        <MoreHorizontal size={13} strokeWidth={2} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div>
                {/* Notes */}
                <div className="panel">
                  <div className="panel-header">
                    <div className="panel-title-row">
                      <FileText size={15} strokeWidth={1.7} style={{ color: "var(--text3)" }} />
                      <span className="panel-title">Catatan</span>
                    </div>
                    <div className="see-all">
                      <Plus size={13} strokeWidth={2.2} />
                    </div>
                  </div>

                  {NOTES.map((n, i) => (
                    <div key={i} className="note-item">
                      <div className={`note-check ${n.done ? "done" : ""}`}>
                        {n.done && <Check size={10} strokeWidth={3} color="#fff" />}
                      </div>
                      <div>
                        <div className={`note-title ${n.done ? "done" : ""}`}>{n.title}</div>
                        <div className="note-body">{n.body}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Funnel */}
                <div className="panel">
                  <div className="panel-header">
                    <div className="panel-title-row">
                      <TrendingUp size={15} strokeWidth={1.7} style={{ color: "var(--text3)" }} />
                      <span className="panel-title">Funnel Konversi</span>
                    </div>
                    <div style={{ fontSize: 11, color: "var(--text3)", display: "flex", alignItems: "center", gap: 3 }}>
                      <MapPin size={10} strokeWidth={1.8} /> Hospital Tech Day
                    </div>
                  </div>
                  <div className="funnel-list">
                    {FUNNEL.map((f) => (
                      <div key={f.label}>
                        <div className="funnel-meta">
                          <span className="funnel-label">{f.label}</span>
                          <div className="funnel-right">
                            <span className="funnel-count">{f.value.toLocaleString()}</span>
                            <span className="funnel-pct">{f.pct}%</span>
                          </div>
                        </div>
                        <div className="funnel-bar-bg">
                          <div className="funnel-bar-fill" style={{ width: `${f.pct}%`, background: f.color }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </main>
        </div>

        {/* MOBILE BOTTOM NAV */}
        <nav className="mobile-nav">
          {NAV_MAIN.map((item) => (
            <div
              key={item.label}
              className={`mobile-nav-item ${activeNav === item.label ? "active" : ""}`}
              onClick={() => setActiveNav(item.label)}
            >
              {item.badge && <span className="mob-badge">{item.badge}</span>}
              <item.icon size={20} strokeWidth={1.6} />
              <span>{item.label}</span>
            </div>
          ))}
        </nav>

      </div>
    </>
  );
}
