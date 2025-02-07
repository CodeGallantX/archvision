import { Button } from "@/components/ui/button";
import { CheckCircle } from "react-icons/fa";
import { FaSearch, FaChartBar, FaCube } from "react-icons/fa";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="bg-background text-textPrimary">
      {/* Hero Section */}
      <Header />

      {/* Features Section */}
      <section className="py-20 px-6 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <FeatureCard
          icon={<FaChartBar className="text-highlight mx-auto text-4xl" />}
          title="Real-time Insights"
          description="AI-powered data analysis for architecture and urban planning."
        />
        <FeatureCard
          icon={<FaCube className="text-highlight mx-auto text-4xl" />}
          title="3D Visualizations"
          description="Generate AI-driven 3D models for architectural designs."
        />
        <FeatureCard
          icon={<FaSearch className="text-highlight mx-auto text-4xl" />}
          title="Predictive Modeling"
          description="AI-driven future projections to enhance your project workflow."
        />
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-20 text-center px-6">
        <h2 className="text-4xl font-semibold">Start Building Smarter with AI</h2>
        <p className="text-lg text-secondary mt-3 max-w-3xl mx-auto">
          Join thousands of architects and engineers leveraging AI-powered tools for smarter and more efficient designs.
        </p>
        <Button className="mt-6 px-6 py-3 text-lg">Get Started for Free</Button>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-10 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} ArchVision. All rights reserved.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-card p-8 rounded-lg shadow-md text-center">
      {icon}
      <h3 className="text-2xl font-semibold mt-4">{title}</h3>
      <p className="text-secondary mt-2">{description}</p>
    </div>
  );
}
