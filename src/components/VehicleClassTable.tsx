import { vehicleClasses } from "@/lib/data";

export default function VehicleClassTable() {
  return (
    <div className="overflow-hidden border border-border bg-surface-raised">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-surface">
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                #
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Vehicle Class (IRC / Aspizo)
              </th>
            </tr>
          </thead>
          <tbody>
            {vehicleClasses.map((vc, i) => (
              <tr
                key={vc.id}
                className={
                  i % 2 === 0 ? "bg-surface-raised" : "bg-surface/60"
                }
              >
                <td className="px-4 py-2.5 font-medium text-accent">{vc.id}</td>
                <td className="px-4 py-2.5 text-muted">{vc.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
