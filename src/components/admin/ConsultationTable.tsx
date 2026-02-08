"use client";

import { useState, useTransition } from "react";
import { format } from "date-fns";
import { Copy, Trash, CheckCircle, Mail, Phone, Calendar as CalendarIcon } from "lucide-react";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { updateConsultationStatus, deleteConsultation } from "@/actions/consultation";

interface Consultation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: Date | null;
  message: string | null;
  status: string;
  createdAt: Date;
}

interface ConsultationTableProps {
  initialData: Consultation[];
}

export default function ConsultationTable({ initialData }: ConsultationTableProps) {
  const [data, setData] = useState(initialData);
  const [, startTransition] = useTransition();

  const handleUpdateStatus = (id: string, status: string) => {
    startTransition(async () => {
      const result = await updateConsultationStatus(id, status);
      if (result.success) {
        toast.success(`Status updated to ${status}`);
        setData((prev) =>
            prev.map((item) => (item.id === id ? { ...item, status } : item))
        );
      } else {
        toast.error("Failed to update status");
      }
    });
  };

  const handleDelete = (id: string) => {
      if (!confirm("Are you sure you want to delete this record?")) return;
      
    startTransition(async () => {
      const result = await deleteConsultation(id);
      if (result.success) {
        toast.success("Consultation deleted");
        setData((prev) => prev.filter((item) => item.id !== id));
      } else {
        toast.error("Failed to delete consultation");
      }
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "CONTACTED":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "BOOKED":
        return "bg-green-100 text-green-800 border-green-200";
      case "ARCHIVED":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="rounded-2xl border border-ink-black/5 bg-white shadow-xl overflow-hidden">
      <Table>
        <TableHeader className="bg-porcelain">
          <TableRow className="border-ink-black/5">
            <TableHead className="font-bold text-ink-black uppercase tracking-wider text-[10px]">Client</TableHead>
            <TableHead className="font-bold text-ink-black uppercase tracking-wider text-[10px]">Contact Info</TableHead>
            <TableHead className="font-bold text-ink-black uppercase tracking-wider text-[10px]">Preferred Date</TableHead>
            <TableHead className="font-bold text-ink-black uppercase tracking-wider text-[10px]">Message</TableHead>
            <TableHead className="font-bold text-ink-black uppercase tracking-wider text-[10px]">Status</TableHead>
            <TableHead className="font-bold text-ink-black uppercase tracking-wider text-[10px] text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-12 text-muted-foreground italic">
                No consultation requests found in the current period.
              </TableCell>
            </TableRow>
          ) : (
            data.map((item) => (
              <TableRow key={item.id} className="hover:bg-porcelain/50 border-ink-black/5 transition-colors group">
                <TableCell className="font-medium align-middle py-4">
                  <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-pine-teal/10 flex items-center justify-center text-pine-teal font-bold border border-pine-teal/20 group-hover:bg-pine-teal group-hover:text-white transition-all duration-300">
                          {item.name[0]}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-ink-black tracking-tight">{item.name}</span>
                        <span className="text-[10px] text-muted-foreground font-semibold uppercase">{format(new Date(item.createdAt), "MMM d, yyyy")}</span>
                      </div>
                  </div>
                </TableCell>
                <TableCell className="align-middle py-4">
                   <div className="flex flex-col gap-1 text-xs">
                       <div className="flex items-center gap-2 text-ink-black/70 font-medium">
                           <Mail className="h-3 w-3 text-pine-teal" /> {item.email}
                       </div>
                       <div className="flex items-center gap-2 text-ink-black/70 font-medium">
                           <Phone className="h-3 w-3 text-pine-teal" /> {item.phone}
                       </div>
                   </div>
                </TableCell>
                <TableCell className="align-middle py-4 text-xs">
                  {item.date ? (
                      <div className="flex items-center gap-2 text-ink-black font-semibold bg-porcelain px-3 py-1.5 rounded-full border border-ink-black/5 w-fit">
                          <CalendarIcon className="h-3 w-3 text-pine-teal" />
                          {format(new Date(item.date), "PPP")}
                      </div>
                  ) : (
                    <span className="text-gray-400 italic">Unspecified</span>
                  )}
                </TableCell>
                <TableCell className="align-middle py-4 max-w-xs">
                    {item.message ? (
                        <p className="text-xs text-ink-black/60 font-medium line-clamp-1 group-hover:line-clamp-none transition-all" title={item.message}>{item.message}</p>
                    ) : (
                        <span className="text-gray-400 italic text-xs">No message</span>
                    )}
                </TableCell>
                <TableCell className="align-middle py-4">
                  <Badge variant="outline" className={`${getStatusColor(item.status)} border-0 shadow-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight`}>
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right align-top">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <div className="h-4 w-4 bg-gray-900 rounded-full flex items-center justify-center text-white text-[10px]">...</div>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => handleUpdateStatus(item.id, "CONTACTED")}>
                        <Mail className="mr-2 h-4 w-4" /> Mark as Contacted
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleUpdateStatus(item.id, "BOOKED")}>
                        <CheckCircle className="mr-2 h-4 w-4" /> Mark as Booked
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleUpdateStatus(item.id, "ARCHIVED")}>
                        <Copy className="mr-2 h-4 w-4" /> Archive
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => handleDelete(item.id)}
                        className="text-red-600 focus:text-red-600"
                      >
                        <Trash className="mr-2 h-4 w-4" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
