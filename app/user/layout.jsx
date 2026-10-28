import UserNavbar from "@/app/components/user/UserNavbar";
import UserFooter from "@/app/components/user/UserFooter";

// ============================================================
// USER LAYOUT
// Navbar + Footer dipasang di sini sekali untuk semua halaman
// /user/*. UserHero HANYA dirender oleh halaman /user/home —
// bukan di layout, supaya halaman event/ticket/pesanan dll
// tidak menampilkan hero besar yang tidak perlu.
// ============================================================

export default function UserLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <UserNavbar />

      <main className="flex-1">{children}</main>

      <UserFooter />
    </div>
  );
}