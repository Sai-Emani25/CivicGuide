import { Header, Footer } from '@/components/LayoutElements';
import { Hero } from '@/components/Hero';
import { ElectionTimeline } from '@/components/ElectionTimeline';
import { Resources } from '@/components/Resources';
import { Assistant } from '@/components/Assistant';
import { Reminders } from '@/components/Reminders';
import { Officials } from '@/components/Officials';
import { Statistics } from '@/components/Statistics';

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-red-100 selection:text-red-900">
      <Header />
      
      <Hero />
      
      <section id="timeline" className="bg-white">
        <ElectionTimeline />
      </section>

      <section id="statistics">
        <Statistics />
      </section>

      <section id="reminders">
        <Reminders />
      </section>

      <section id="officials">
        <Officials />
      </section>

      <section id="resources" className="bg-[#f8fafc]">
        <Resources />
      </section>

      <section id="assistant" className="bg-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Have specific questions?</h2>
          <p className="text-xl text-gray-600">
            Our AI-powered assistant can help you understand complex parts of the voting process.
          </p>
        </div>
        <Assistant />
      </section>

      <Footer />
    </main>
  );
}
