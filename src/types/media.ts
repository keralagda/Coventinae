export interface Media {
  id: string;
  url: string;
  publicId: string;
  fileName: string | null;
  fileSize: number | null;
  format: string | null;
  width: number | null;
  height: number | null;
  type: string | null;
  folder: string | null;
  createdAt: Date;
  updatedAt: Date;
}
