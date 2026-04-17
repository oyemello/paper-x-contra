'use client';

import HeroSection from '../components/HeroSection';
import TasksSection from '../components/TasksSection';
import AdditionalSections from '../components/AdditionalSections';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      <HeroSection />
      <TasksSection />
      <AdditionalSections />
    </main>
  );
}
