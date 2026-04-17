import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import LastVisited from "../components/LastVisited";
import TasksSection from "../components/TasksSection";
import CalendarSection from "../components/CalendarSection";
import Announcements from "../components/Announcements";
import Bookmarks from "../components/Bookmarks";
import Support1 from "../components/Support1";
import Support2 from "../components/Support2";

export default function Dashboard() {
  return (
    <main className="w-full flex flex-col mx-auto bg-bgSecondary min-h-screen relative" style={{ maxWidth: "1512px" }}>
      <Header />
      <HeroSection />
      <LastVisited />
      <TasksSection />
      <CalendarSection />
      <Announcements />
      <Bookmarks />
      <Support1 />
      <Support2 />
    </main>
  );
}
