
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterOption {
  label: string;
  value: string;
}

interface GalleryFilterProps {
  activeFilter: string;
  onChange: (value: string) => void;
}

export function GalleryFilter({ activeFilter, onChange }: GalleryFilterProps) {
  const filters: FilterOption[] = [
    { label: "All Birds", value: "" },
    { label: "Songbirds", value: "songbirds" },
    { label: "Waterfowl", value: "waterfowl" },
    { label: "Raptors", value: "raptors" },
    { label: "Other", value: "other" },
  ];
  
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          variant="outline"
          size="sm"
          className={cn(
            "rounded-full border-bird-softblue/30",
            filter.value === activeFilter
              ? "bg-bird-skyblue text-white border-transparent hover:bg-bird-skyblue/90 hover:text-white"
              : "bg-transparent hover:bg-bird-softblue/10 hover:text-foreground"
          )}
          onClick={() => onChange(filter.value)}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}
