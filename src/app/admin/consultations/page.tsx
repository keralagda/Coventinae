import { getConsultations } from "@/actions/consultation";
import ConsultationTable from "@/components/admin/ConsultationTable";

export default async function ConsultationsPage() {
  const { data: consultations, error } = await getConsultations();

  if (error || !consultations) {
    return (
        <div className="p-8 text-center text-red-500 bg-red-50 rounded-lg">
            Error loading consultations. Please try again later.
        </div>
    );
  }

  return (
    <div className="space-y-8 p-8">
      <div className="flex items-center justify-between">
        <div>
            <h2 className="text-3xl font-bold tracking-tight">Consultation Requests</h2>
            <p className="text-muted-foreground mt-2">
            Manage incoming booking inquiries and consultation requests.
            </p>
        </div>
      </div>
      
      <ConsultationTable initialData={consultations} />
    </div>
  );
}
