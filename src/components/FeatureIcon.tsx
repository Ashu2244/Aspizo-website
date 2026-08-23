import {
  Clock,
  Target,
  FileSpreadsheet,
  Scan,
  Download,
  Monitor,
  GitBranch,
  Save,
  Brain,
  FolderOpen,
  Bell,
  Camera,
  Map,
  Wifi,
  Shield,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Clock,
  Target,
  FileSpreadsheet,
  Scan,
  Download,
  Monitor,
  GitBranch,
  Save,
  Brain,
  FolderOpen,
  Bell,
  Camera,
  Map,
  Wifi,
  Shield,
};

export default function FeatureIcon({ name }: { name: string }) {
  const Icon = iconMap[name] ?? Scan;
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-surface text-accent">
      <Icon className="h-5 w-5" />
    </div>
  );
}
