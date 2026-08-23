export default function ScreenshotPlaceholder({
  label = "Screenshot",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex aspect-video items-center justify-center border border-dashed border-border bg-surface-raised ${className}`}
    >
      <div className="text-center">
        <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-md border border-border bg-surface">
          <svg
            className="h-6 w-6 text-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <span className="text-sm font-medium text-muted">{label}</span>
      </div>
    </div>
  );
}
