import { useState } from "react";
import {
  LayoutDashboard, Users, CalendarDays, BarChart3,
  Settings, Bell, Search, ChevronRight, TrendingUp,
  TrendingDown, Upload, Zap, CheckCircle2, XCircle,
  Clock, Building2, MapPin, Menu, X, ArrowUpRight,
  ScanLine, Brain, Plus
} from "lucide-react";

type NavItem = { icon: React.ElementType; label: string; active?: boolean; badge?: number };
type Stat = { label: string; value: string; sub: string; trend: "up" | "down" | "flat"; delta: string; icon: React.ElementType; accent: string };
type Activity = { user: string; action: string; status: "success" | "pending" | "failed"; time: string; industry: string };

const NAV: NavItem[] = [
  { icon: LayoutDashboard, label: "Event", active: true },
  { icon: Users,           label: "Kontak",  badge: 3 },
  { icon: CalendarDays,    label: "Dashboard" },
  { icon: ScanLine,        label: "Monitor" },
  { icon: BarChart3,       label: "Analytics" },
  { icon: Brain,           label: "YoriMind", badge: 1 },
  { icon: Settings,        label: "Settings" },
];

const STATS: Stat[] = [
  { label: "Total Kontak",       value: "18,240", sub: "dari 30k raw",          trend: "up",   delta: "+412 bulan ini",    icon: Users,        accent: "#3b6fd4" },
  { label: "Event Tahun Ini",    value: "15",     sub: "6 kota aktif",           trend: "up",   delta: "+5 vs tahun lalu",  icon: CalendarDays, accent: "#0ea5e9" },
  { label: "Response Rate",      value: "10.2%",  sub: "undangan → registrasi",  trend: "down", delta: "−1.3% vs event lalu",icon: TrendingUp,  accent: "#8b5cf6" },
  { label: "ETL Flagged",        value: "247",    sub: "pending review",         trend: "flat", delta: "perlu approval",    icon: Upload,       accent: "#f59e0b" },
];

const ACTIVITIES: Activity[] = [
  { user: "Yolanda R.",   action: "Upload Excel — 500 kontak baru",      status: "success", time: "2 mnt",  industry: "Manufaktur" },
  { user: "Admin",        action: "Blast undangan — Hospital Tech Day",   status: "success", time: "14 mnt", industry: "Kesehatan" },
  { user: "ETL Engine",   action: "Flagged 28 record — confidence <0.7", status: "pending", time: "1 jam",  industry: "Mixed" },
  { user: "Panitia",      action: "Scan check-in — 47/80 peserta",       status: "success", time: "2 jam",  industry: "IT & SaaS" },
  { user: "System",       action: "Blast WA gagal — rate limit Everpro", status: "failed",  time: "3 jam",  industry: "Keuangan" },
  { user: "YoriMind",     action: "Analisis event selesai — PDF ready",  status: "success", time: "kemarin",industry: "B2B Tech" },
];

const FUNNEL = [
  { label: "Undangan Terkirim", value: 1000, pct: 100,  color: "#3b6fd4" },
  { label: "Dibuka",            value: 420,  pct: 42,   color: "#0ea5e9" },
  { label: "Registrasi",        value: 102,  pct: 10.2, color: "#8b5cf6" },
  { label: "Approved",          value: 87,   pct: 8.7,  color: "#06b6d4" },
  { label: "Hadir",             value: 47,   pct: 4.7,  color: "#10b981" },
];

const StatusBadge = ({ status }: { status: Activity["status"] }) => {
  const map = {
    success: { color: "#10b981", label: "Sukses",  icon: CheckCircle2 },
    pending: { color: "#f59e0b", label: "Pending", icon: Clock },
    failed:  { color: "#ef4444", label: "Gagal",   icon: XCircle },
  };
  const cfg = map[status];
  const Icon = cfg.icon;
  return (
    <span style={{ color: cfg.color }} className="status-badge">
      <Icon size={12} strokeWidth={2} />
      {cfg.label}
    </span>
  );
};

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600&family=Outfit:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #f5f6fa;
          --surface: #ffffff;
          --surface2: #f9fafb;
          --border: #ebebf0;
          --text-primary: #111118;
          --text-secondary: #6b7280;
          --text-muted: #9ca3af;
          --blue: #3b6fd4;
          --blue-dim: #3b6fd412;
          --sidebar-bg: #0f1623;
          --sidebar-text: rgba(255,255,255,0.45);
          --sidebar-active-bg: rgba(59,111,212,0.15);
          --sidebar-active-text: #fff;
          --radius: 14px;
          --radius-sm: 8px;
          --shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
          --shadow-md: 0 4px 16px rgba(0,0,0,0.08);
          --font: 'Outfit', sans-serif;
          --font-display: 'Sora', sans-serif;
        }

        body { font-family: var(--font); background: var(--bg); color: var(--text-primary); }

        /* ── Layout ── */
        .root { display: flex; min-height: 100vh; }

        /* ── Sidebar ── */
        .sidebar {
          width: 220px;
          min-height: 100vh;
          background: var(--sidebar-bg);
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          z-index: 50;
        }

        .logo-wrap {
          height: 60px;
          display: flex;
          align-items: center;
          padding: 0 18px;
          gap: 10px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .logo-mark {
          width: 28px; height: 28px;
          background: var(--blue);
          border-radius: 7px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .logo-text {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 15px;
          color: #fff;
          letter-spacing: -0.02em;
        }
        .logo-sub {
          font-size: 9px;
          font-weight: 400;
          color: var(--sidebar-text);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .nav-section-label {
          padding: 20px 18px 6px;
          font-size: 9.5px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 8px 10px;
          margin: 1px 8px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-size: 13px;
          font-weight: 400;
          color: var(--sidebar-text);
          transition: all 0.15s ease;
          position: relative;
        }
        .nav-item:hover { background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.75); }
        .nav-item.active {
          background: var(--sidebar-active-bg);
          color: var(--sidebar-active-text);
        }
        .nav-item.active svg { color: #60a5fa; }
        .nav-badge {
          margin-left: auto;
          background: #ef4444;
          color: #fff;
          font-size: 10px;
          font-weight: 500;
          padding: 1px 5px;
          border-radius: 999px;
          min-width: 17px;
          text-align: center;
        }

        .sidebar-footer {
          margin-top: auto;
          padding: 14px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .user-chip {
          display: flex; align-items: center; gap: 9px;
          background: rgba(255,255,255,0.04);
          border-radius: var(--radius-sm);
          padding: 9px 10px;
        }
        .avatar {
          width: 30px; height: 30px;
          background: var(--blue);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 500; color: #fff;
          flex-shrink: 0;
        }
        .user-name { font-size: 12.5px; font-weight: 500; color: #fff; }
        .user-role { font-size: 10.5px; color: var(--sidebar-text); margin-top: 1px; }

        /* ── Main ── */
        .main { flex: 1; display: flex; flex-direction: column; min-width: 0; }

        /* ── Topbar ── */
        .topbar {
          height: 60px;
          background: var(--surface);
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          padding: 0 22px;
          gap: 12px;
          flex-shrink: 0;
          position: sticky;
          top: 0;
          z-index: 20;
        }
        .page-title {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: 16px;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          flex: 1;
        }
        .page-title span { color: var(--blue); font-weight: 400; }

        .search-wrap {
          display: flex;
          align-items: center;
          gap: 7px;
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 9px;
          padding: 0 12px;
          height: 36px;
          width: 200px;
          font-size: 12.5px;
          color: var(--text-muted);
          cursor: text;
          transition: border-color 0.15s;
        }
        .search-wrap:hover { border-color: #c0cfe8; }

        .icon-btn {
          width: 36px; height: 36px;
          border-radius: 9px;
          background: var(--surface2);
          border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: var(--text-secondary);
          transition: all 0.15s;
          position: relative;
        }
        .icon-btn:hover { border-color: #c0cfe8; color: var(--blue); }
        .notif-dot {
          position: absolute; top: 7px; right: 7px;
          width: 7px; height: 7px;
          background: #ef4444;
          border-radius: 50%;
          border: 1.5px solid var(--surface);
        }

        .create-btn {
          display: flex; align-items: center; gap: 6px;
          background: var(--blue);
          color: #fff;
          border: none;
          border-radius: 9px;
          padding: 0 14px;
          height: 36px;
          font-size: 12.5px;
          font-weight: 500;
          font-family: var(--font);
          cursor: pointer;
          transition: opacity 0.15s, transform 0.15s;
          white-space: nowrap;
        }
        .create-btn:hover { opacity: 0.9; transform: translateY(-0.5px); }

        /* ── Content ── */
        .content {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* ── Stats ── */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        .stat-card {
          background: var(--surface);
          border-radius: var(--radius);
          padding: 18px;
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: box-shadow 0.2s, transform 0.2s;
          cursor: default;
        }
        .stat-card:hover { box-shadow: var(--shadow-md); transform: translateY(-1px); }
        .stat-card-top { display: flex; align-items: flex-start; justify-content: space-between; }
        .stat-icon {
          width: 36px; height: 36px;
          border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .stat-value {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 26px;
          color: var(--text-primary);
          letter-spacing: -0.03em;
          line-height: 1;
        }
        .stat-label { font-size: 12px; font-weight: 500; color: var(--text-secondary); margin-top: 3px; }
        .stat-sub { font-size: 11px; color: var(--text-muted); margin-top: 2px; }
        .stat-delta {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 11px; font-weight: 500;
          padding: 3px 8px; border-radius: 999px;
        }
        .delta-up   { background: #ecfdf5; color: #059669; }
        .delta-down { background: #fef2f2; color: #dc2626; }
        .delta-flat { background: var(--surface2); color: var(--text-muted); }

        /* ── Grid ── */
        .bottom-grid {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 12px;
        }

        /* ── Panel ── */
        .panel {
          background: var(--surface);
          border-radius: var(--radius);
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          overflow: hidden;
        }
        .panel-header {
          padding: 14px 18px;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .panel-title {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: 13.5px;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }
        .panel-sub { font-size: 11px; color: var(--text-muted); margin-top: 1px; }
        .panel-link {
          display: flex; align-items: center; gap: 3px;
          font-size: 12px; font-weight: 400; color: var(--blue);
          cursor: pointer; padding: 4px 8px; border-radius: 6px;
          transition: background 0.15s;
        }
        .panel-link:hover { background: var(--blue-dim); }

        /* ── Table ── */
        .act-table { width: 100%; border-collapse: collapse; }
        .act-table th {
          text-align: left;
          padding: 9px 18px;
          font-size: 10.5px;
          font-weight: 500;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          background: var(--surface2);
          border-bottom: 1px solid var(--border);
        }
        .act-table td {
          padding: 11px 18px;
          font-size: 12.5px;
          color: var(--text-secondary);
          border-bottom: 1px solid #f5f5f8;
          vertical-align: middle;
        }
        .act-table tr:last-child td { border-bottom: none; }
        .act-table tbody tr { transition: background 0.1s; }
        .act-table tbody tr:hover td { background: #fafbfe; }

        .user-cell { display: flex; align-items: center; gap: 9px; }
        .user-mini {
          width: 27px; height: 27px;
          border-radius: 50%;
          background: var(--blue-dim);
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; font-weight: 500; color: var(--blue);
          flex-shrink: 0;
        }
        .action-text { font-weight: 500; color: var(--text-primary); font-size: 12.5px; }
        .action-sub  { font-size: 11px; color: var(--text-muted); margin-top: 1px; }
        .industry-tag {
          background: var(--surface2);
          color: var(--text-secondary);
          font-size: 10.5px;
          font-weight: 400;
          padding: 2px 8px;
          border-radius: 999px;
          border: 1px solid var(--border);
          white-space: nowrap;
        }
        .time-cell { font-size: 11px; color: var(--text-muted); white-space: nowrap; }

        .status-badge {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 11.5px; font-weight: 400;
        }

        /* ── Funnel ── */
        .funnel-list { padding: 14px 18px; display: flex; flex-direction: column; gap: 13px; }
        .funnel-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; }
        .funnel-label { font-size: 12px; font-weight: 400; color: var(--text-secondary); }
        .funnel-nums { display: flex; align-items: center; gap: 5px; }
        .funnel-count { font-size: 12px; font-weight: 500; color: var(--text-primary); }
        .funnel-pct   { font-size: 11px; color: var(--text-muted); }
        .funnel-bar-bg { height: 5px; background: var(--border); border-radius: 999px; overflow: hidden; }
        .funnel-bar-fill { height: 100%; border-radius: 999px; transition: width 0.6s ease; }

        /* ── YoriMind ── */
        .yori-card {
          background: var(--sidebar-bg);
          border-radius: var(--radius);
          padding: 18px;
          color: #fff;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.04);
        }
        .yori-card::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 180px; height: 180px;
          background: radial-gradient(circle, rgba(59,111,212,0.2) 0%, transparent 70%);
          pointer-events: none;
        }
        .yori-header { display: flex; align-items: center; gap: 9px; margin-bottom: 12px; position: relative; }
        .yori-icon {
          width: 32px; height: 32px;
          background: rgba(59,111,212,0.25);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
        }
        .yori-name { font-family: var(--font-display); font-weight: 500; font-size: 13.5px; }
        .yori-sub  { font-size: 10.5px; color: rgba(255,255,255,0.3); margin-top: 1px; }
        .yori-insight {
          font-size: 12.5px;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
          margin-bottom: 14px;
          position: relative;
        }
        .yori-insight strong { color: rgba(255,255,255,0.9); font-weight: 500; }
        .yori-btn {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.7);
          border-radius: 7px;
          padding: 7px 12px;
          font-size: 12px;
          font-weight: 400;
          font-family: var(--font);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          transition: background 0.15s, color 0.15s;
          position: relative;
        }
        .yori-btn:hover { background: rgba(255,255,255,0.14); color: #fff; }

        /* ── Mobile bottom nav ── */
        .mobile-nav {
          display: none;
          position: fixed;
          bottom: 0; left: 0; right: 0;
          background: var(--surface);
          border-top: 1px solid var(--border);
          padding: 6px 4px;
          padding-bottom: calc(6px + env(safe-area-inset-bottom));
          z-index: 50;
          gap: 0;
          justify-content: space-around;
        }
        .mobile-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          padding: 6px 12px;
          border-radius: 8px;
          cursor: pointer;
          color: var(--text-muted);
          font-size: 9px;
          font-weight: 400;
          transition: color 0.15s;
          position: relative;
        }
        .mobile-nav-item.active { color: var(--blue); }
        .mobile-nav-badge {
          position: absolute; top: 4px; right: 8px;
          background: #ef4444;
          color: #fff; font-size: 8px; font-weight: 500;
          width: 14px; height: 14px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
        }

        .mobile-topbar-create {
          display: none;
        }
        .hamburger { display: none !important; }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .bottom-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .sidebar { display: none; }
          .mobile-nav { display: flex; }
          .mobile-topbar-create { display: flex; }
          .desktop-create { display: none; }
          .search-wrap { display: none; }
          .content { padding: 14px; padding-bottom: 80px; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .stat-value { font-size: 22px; }
          .topbar { padding: 0 14px; }
          .page-title { font-size: 15px; }
          .act-table th:nth-child(3),
          .act-table td:nth-child(3) { display: none; }
        }

        @media (max-width: 460px) {
          .stats-grid { grid-template-columns: 1fr; }
          .act-table th:nth-child(2),
          .act-table td:nth-child(2) { display: none; }
        }
      `}</style>

      <div className="root">

        {/* ── Desktop Sidebar ── */}
        <aside className="sidebar">
          <div className="logo-wrap">
            <div className="logo-mark">
              <Zap size={14} color="#fff" strokeWidth={2} />
            </div>
            <div>
              <div className="logo-text">Yorindo</div>
              <div className="logo-sub">Admin Platform</div>
            </div>
          </div>

          <div className="nav-section-label">Main</div>
          {NAV.slice(0, 4).map((item) => (
            <div
              key={item.label}
              className={`nav-item ${activeNav === item.label ? "active" : ""}`}
              onClick={() => setActiveNav(item.label)}
            >
              <item.icon size={15} strokeWidth={1.6} />
              {item.label}
              {item.badge && <span className="nav-badge">{item.badge}</span>}
            </div>
          ))}

          <div className="nav-section-label" style={{ marginTop: 4 }}>AI & Analytics</div>
          {NAV.slice(4).map((item) => (
            <div
              key={item.label}
              className={`nav-item ${activeNav === item.label ? "active" : ""}`}
              onClick={() => setActiveNav(item.label)}
            >
              <item.icon size={15} strokeWidth={1.6} />
              {item.label}
              {item.badge && <span className="nav-badge">{item.badge}</span>}
            </div>
          ))}

          <div className="sidebar-footer">
            <div className="user-chip">
              <div className="avatar">YR</div>
              <div>
                <div className="user-name">Yolanda R.</div>
                <div className="user-role">Super Admin</div>
              </div>
            </div>
          </div>
        </aside>

        {/* ── Main area ── */}
        <div className="main">

          {/* Topbar */}
          <header className="topbar">
            <div className="page-title">
              Dashboard <span>Overview</span>
            </div>

            <div className="search-wrap">
              <Search size={13} strokeWidth={1.8} />
              Cari kontak, event...
            </div>

            {/* Mobile: create event button in topbar */}
            <button className="create-btn mobile-topbar-create">
              <Plus size={13} strokeWidth={2} />
              Buat Event
            </button>

            <div className="icon-btn">
              <Bell size={15} strokeWidth={1.6} />
              <div className="notif-dot" />
            </div>

            {/* Desktop create button */}
            <button className="create-btn desktop-create">
              <Plus size={13} strokeWidth={2} />
              Buat Event
            </button>

            <div className="avatar" style={{ cursor: "pointer" }}>YR</div>
          </header>

          {/* Content */}
          <main className="content">

            {/* Stats */}
            <div className="stats-grid">
              {STATS.map((s) => (
                <div key={s.label} className="stat-card">
                  <div className="stat-card-top">
                    <div>
                      <div className="stat-value">{s.value}</div>
                      <div className="stat-label">{s.label}</div>
                      <div className="stat-sub">{s.sub}</div>
                    </div>
                    <div className="stat-icon" style={{ background: s.accent + "14" }}>
                      <s.icon size={17} strokeWidth={1.6} style={{ color: s.accent }} />
                    </div>
                  </div>
                  <div className={`stat-delta ${s.trend === "up" ? "delta-up" : s.trend === "down" ? "delta-down" : "delta-flat"}`}>
                    {s.trend === "up"   && <TrendingUp  size={10} strokeWidth={2} />}
                    {s.trend === "down" && <TrendingDown size={10} strokeWidth={2} />}
                    {s.delta}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom grid */}
            <div className="bottom-grid">

              {/* Activity table */}
              <div className="panel">
                <div className="panel-header">
                  <div>
                    <div className="panel-title">Aktivitas Terbaru</div>
                    <div className="panel-sub">Log sistem &amp; operasional</div>
                  </div>
                  <div className="panel-link">
                    Lihat Semua <ChevronRight size={12} strokeWidth={1.8} />
                  </div>
                </div>
                <table className="act-table">
                  <thead>
                    <tr>
                      <th>Pengguna / Aksi</th>
                      <th>Industri</th>
                      <th>Status</th>
                      <th>Waktu</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ACTIVITIES.map((a, i) => (
                      <tr key={i}>
                        <td>
                          <div className="user-cell">
                            <div className="user-mini">{a.user[0]}</div>
                            <div>
                              <div className="action-text">{a.user}</div>
                              <div className="action-sub">{a.action}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="industry-tag">{a.industry}</span>
                        </td>
                        <td><StatusBadge status={a.status} /></td>
                        <td className="time-cell">{a.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Right column */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

                {/* YoriMind */}
                <div className="yori-card">
                  <div className="yori-header">
                    <div className="yori-icon">
                      <Brain size={16} color="#60a5fa" strokeWidth={1.6} />
                    </div>
                    <div>
                      <div className="yori-name">YoriMind</div>
                      <div className="yori-sub">AI Analitik — Powered by Claude</div>
                    </div>
                  </div>
                  <div className="yori-insight">
                    Response rate <strong>8%</strong> — kemungkinan tema terlalu teknis untuk segmen yang diundang, atau timing <strong>H-3 long weekend</strong>. Attendance rate 50% — peserta luar kota cenderung no-show.
                  </div>
                  <button className="yori-btn">
                    <ArrowUpRight size={12} strokeWidth={1.8} /> Lihat Analisis Lengkap
                  </button>
                </div>

                {/* Funnel */}
                <div className="panel">
                  <div className="panel-header">
                    <div>
                      <div className="panel-title">Funnel Konversi</div>
                      <div className="panel-sub" style={{ display: "flex", alignItems: "center", gap: 3 }}>
                        <MapPin size={10} strokeWidth={1.8} /> Hospital Tech Day
                      </div>
                    </div>
                  </div>
                  <div className="funnel-list">
                    {FUNNEL.map((f) => (
                      <div key={f.label}>
                        <div className="funnel-meta">
                          <span className="funnel-label">{f.label}</span>
                          <div className="funnel-nums">
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

        {/* ── Mobile Bottom Nav ── */}
        <nav className="mobile-nav">
          {NAV.map((item) => (
            <div
              key={item.label}
              className={`mobile-nav-item ${activeNav === item.label ? "active" : ""}`}
              onClick={() => setActiveNav(item.label)}
            >
              {item.badge && <span className="mobile-nav-badge">{item.badge}</span>}
              <item.icon size={18} strokeWidth={1.6} />
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
