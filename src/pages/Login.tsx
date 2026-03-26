import { useState } from "react";
import { Eye, EyeOff, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex font-[system-ui]" style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Barlow:wght@700;800;900&display=swap');

        * { box-sizing: border-box; }

        .login-root { font-family: 'Inter', sans-serif; }

        /* Left panel */
        .left-panel {
          position: relative;
          overflow: hidden;
          background: #0c1929;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        .glow-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.25;
        }
        .glow-blob-1 {
          width: 420px; height: 420px;
          background: #1d5fbb;
          top: -80px; left: -80px;
        }
        .glow-blob-2 {
          width: 300px; height: 300px;
          background: #0ea5e9;
          bottom: 80px; right: -60px;
        }

        .logo-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 999px;
          padding: 6px 14px 6px 8px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.85);
          letter-spacing: 0.01em;
        }
        .logo-chip-icon {
          width: 28px; height: 28px;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
        }

        .stat-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 12px;
          padding: 16px 20px;
          flex: 1;
        }
        .stat-value {
          font-family: 'Barlow', sans-serif;
          font-weight: 800;
          font-size: 28px;
          color: #fff;
          line-height: 1;
        }
        .stat-label {
          font-size: 11px;
          color: rgba(255,255,255,0.4);
          margin-top: 4px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .status-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 3px rgba(34,197,94,0.2);
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 3px rgba(34,197,94,0.2); }
          50% { box-shadow: 0 0 0 6px rgba(34,197,94,0.1); }
        }

        /* Right panel */
        .right-panel {
          background: #f8f9fb;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
        }

        .form-card {
          background: #fff;
          border-radius: 20px;
          padding: 44px 40px;
          width: 100%;
          max-width: 420px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05), 0 8px 32px rgba(0,0,0,0.07);
        }

        .form-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #eff6ff;
          border: 1px solid #dbeafe;
          border-radius: 999px;
          padding: 4px 12px 4px 8px;
          font-size: 12px;
          font-weight: 500;
          color: #2563eb;
          margin-bottom: 24px;
        }

        .form-title {
          font-family: 'Barlow', sans-serif;
          font-weight: 700;
          font-size: 30px;
          color: #0f172a;
          line-height: 1.1;
          margin: 0 0 6px 0;
          letter-spacing: -0.01em;
        }
        .form-subtitle {
          font-size: 14px;
          color: #94a3b8;
          margin: 0 0 32px 0;
        }

        .field-label {
          display: block;
          font-size: 13px;
          font-weight: 500;
          color: #374151;
          margin-bottom: 8px;
        }

        .field-wrap {
          position: relative;
        }

        .field-input {
          width: 100%;
          height: 46px;
          border-radius: 10px;
          border: 1.5px solid #e2e8f0;
          background: #f8fafc;
          padding: 0 14px;
          font-size: 14px;
          color: #0f172a;
          outline: none;
          transition: border-color 0.18s, background 0.18s, box-shadow 0.18s;
          font-family: inherit;
        }
        .field-input::placeholder { color: #cbd5e1; }
        .field-input:focus {
          border-color: #2563eb;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
        }
        .field-input.has-right-pad { padding-right: 42px; }

        .eye-btn {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          border-radius: 6px;
          transition: color 0.15s, background 0.15s;
        }
        .eye-btn:hover { color: #475569; background: #f1f5f9; }

        .divider-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 4px 0 2px;
        }
        .divider-line { flex: 1; height: 1px; background: #f1f5f9; }
        .forgot-link {
          font-size: 12px;
          color: #64748b;
          text-decoration: none;
          white-space: nowrap;
        }
        .forgot-link:hover { color: #2563eb; }

        .submit-btn {
          width: 100%;
          height: 46px;
          border-radius: 10px;
          border: none;
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          color: #fff;
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.01em;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 4px 12px rgba(37,99,235,0.3);
          transition: opacity 0.15s, transform 0.15s, box-shadow 0.15s;
          margin-top: 24px;
        }
        .submit-btn:hover {
          opacity: 0.93;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(37,99,235,0.35);
        }
        .submit-btn:active { transform: translateY(0); }

        .footer-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 12px;
          color: #cbd5e1;
          margin-top: 24px;
        }
        .footer-note-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #cbd5e1;
        }
      `}</style>

      <div className="login-root min-h-screen flex w-full">

        {/* ── LEFT PANEL ── */}
        <div className="hidden lg:flex w-1/2 left-panel flex-col justify-between p-12">
          <div className="grid-overlay" />
          <div className="glow-blob glow-blob-1" />
          <div className="glow-blob glow-blob-2" />

          {/* Logo */}
          <div className="relative z-10">
            <div className="logo-chip">
              <div className="logo-chip-icon">
                <Shield size={13} color="#fff" />
              </div>
              Yorindo Admin
            </div>
          </div>

          {/* Main copy */}
          <div className="relative z-10">
            <p style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 16, fontWeight: 500 }}>
              Centralized Operations
            </p>
            <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 44, color: '#fff', lineHeight: 1.1, margin: '0 0 18px' }}>
              Secure Admin<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>Access</em>
            </h1>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 340, margin: 0 }}>
              Manage systems, monitor operations, and control all services from one centralized dashboard.
            </p>

          
          </div>

          {/* Footer */}
          <div className="relative z-10" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div className="status-dot" />
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>All systems operational · Internal use only</span>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="right-panel w-full lg:w-1/2">
          <div className="form-card">

            <div className="form-badge">
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#2563eb' }} />
              Admin Portal
            </div>

            <h2 className="form-title">Welcome back</h2>
            <p className="form-subtitle">Sign in to your admin account to continue</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>

              {/* Email */}
              <div>
                <label className="field-label">Email address</label>
                <div className="field-wrap">
                  <input
                    type="email"
                    placeholder="admin@yorindo.com"
                    className="field-input"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="field-label">Password</label>
                <div className="field-wrap">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="field-input has-right-pad"
                  />
                  <button
                    type="button"
                    className="eye-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              <div className="divider-row">
                <div className="divider-line" />
                <a href="#" className="forgot-link">Forgot password?</a>
              </div>

            </div>

            <button className="submit-btn" type="button">
              Sign in to Dashboard
              <ArrowRight size={15} />
            </button>

            <div className="footer-note">
              <div className="footer-note-dot" />
              Restricted to authorized personnel only
              <div className="footer-note-dot" />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
