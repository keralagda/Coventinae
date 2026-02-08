"use client";

import { useState, useTransition } from "react";
import { format } from "date-fns";
import { Copy, Trash, CheckCircle, Mail, Phone, Calendar as CalendarIcon, MessageCircle } from "lucide-react";
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
  const [isPending, startTransition] = useTransition();

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
    <div className="rounded-md border bg-white shadow-sm overflow-hidden">
      <Table>
        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableHead className="font-bold">Client</TableHead>
            <TableHead className="font-bold">Contact Info</TableHead>
            <TableHead className="font-bold">Preferred Date</TableHead>
            <TableHead className="font-bold">Message</TableHead>
            <TableHead className="font-bold">Status</TableHead>
            <TableHead className="font-bold text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                No consultation requests found.
              </TableCell>
            </TableRow>
          ) : (
            data.map((item) => (
              <TableRow key={item.id} className="hover:bg-gray-50/50">
                <TableCell className="font-medium align-top">
                  <div className="flex flex-col">
                    <span className="text-base font-semibold text-gray-900">{item.name}</span>
                    <span className="text-xs text-gray-500">{format(new Date(item.createdAt), "MMM d, yyyy")}</span>
                  </div>
                </TableCell>
                <TableCell className="align-top">
                   <div className="flex flex-col gap-1 text-sm">
                       <div className="flex items-center gap-2 text-gray-600">
                           <Mail className="h-3 w-3" /> {item.email}
                       </div>
                       <div className="flex items-center gap-2 text-gray-600">
                           <Phone className="h-3 w-3" /> {item.phone}
                       </div>
                   </div>
                </TableCell>
                <TableCell className="align-top text-sm">
                  {item.date ? (
                      <div className="flex items-center gap-2 text-gray-700 font-medium">
                          <CalendarIcon className="h-3 w-3" />
                          {format(new Date(item.date), "PPP")}
                      </div>
                  ) : (
                    <span className="text-gray-400 italic">No date specified</span>
                  )}
                </TableCell>
                <TableCell className="align-top max-w-xs">
                    {item.message ? (
                        <p className="text-sm text-gray-600 line-clamp-3" title={item.message}>{item.message}</p>
                    ) : (
                        <span className="text-gray-400 italic text-sm">No message</span>
                    )}
                </TableCell>
                <TableCell className="align-top">
                  <Badge variant="outline" className={`${getStatusColor(item.status)} border px-2 py-0.5 rounded-full text-xs font-semibold`}>
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
