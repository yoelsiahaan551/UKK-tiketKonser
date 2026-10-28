import UserHero from "@/app/components/user/UserHero";
import UpcomingConcert from "@/app/components/user/UpcomingConcert";
import PromoSection from "@/app/components/user/PromoSection";
import FavoriteArtist from "@/app/components/user/FavoriteArtist";

// ============================================================
// HOME USER — /user/home
// Hero dirender di sini (dipindah dari layout). Statistik di hero
// (500+ event, 50K+ pengguna) adalah angka promosi desain —
// bukan data backend. Data section berasal dari data contoh
// di app/lib/events.js sampai backend siap.
// ============================================================

export default function UserHome() {
  return (
    <>
      <UserHero />
      <UpcomingConcert />
      <PromoSection />
      <FavoriteArtist />
    </>
  );
}