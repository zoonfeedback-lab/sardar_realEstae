import Image from "next/image";
import Link from "next/link";
import { FiMaximize2 } from "react-icons/fi";

export interface FloorPlanProps {
  id: string;
  title: string;
  specs: {
    beds: number;
    baths: number;
    kitchens: number;
  };
  area?: string;
  price?: string;
  shortDesc?: string;
  image: string;
}

export default function FloorPlanCard({ plan }: { plan: FloorPlanProps }) {
  return (
    <div className="group bg-card border border-border hover:border-foreground/20 transition-all duration-500 overflow-hidden hover:shadow-xl hover:-translate-y-2 flex flex-col h-full rounded-xl">
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden bg-card shrink-0 flex items-center justify-center p-4">
        <Image
          src={plan.image}
          alt={plan.title}
          fill
          className="object-contain p-4 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white">
            <FiMaximize2 size={24} />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow border-t border-border">
        <h3 className="text-xl font-bold mb-3">{plan.title}</h3>
        
        {/* Specs */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted font-medium mb-4">
          <span>{plan.specs.beds} Bed</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground self-center"></span>
          <span>{plan.specs.baths} Bath</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground self-center"></span>
          <span>{plan.specs.kitchens} Kitchen</span>
        </div>

        {plan.shortDesc && (
          <p className="text-muted mb-6 text-sm flex-grow leading-relaxed">
            {plan.shortDesc}
          </p>
        )}

        {(plan.area || plan.price) && (
          <div className="flex justify-between items-center mb-6 text-sm border-t border-border pt-4 mt-auto">
            {plan.area && <span className="text-foreground font-medium">{plan.area}</span>}
            {plan.price && <span className="text-muted">{plan.price}</span>}
          </div>
        )}

        <Link
          href={`/floor-plans/${plan.id}`}
          className="mt-auto inline-block w-full text-center px-6 py-3 border border-border text-foreground font-medium text-sm tracking-widest uppercase hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
