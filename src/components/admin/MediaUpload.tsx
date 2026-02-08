'use client';

import { useState } from 'react';
import { Upload, Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { uploadMedia } from '@/actions/media';

// Coventina Media Upload Interface
interface MediaUploadProps {
  onSuccess?: () => void;
}

export function MediaUpload({ onSuccess }: MediaUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    try {
      setIsUploading(true);
      const formData = new FormData();
      formData.append('file', file);

      const result = await uploadMedia(formData);

      if (result.success) {
        toast.success('Media uploaded successfully');
        setFile(null);
        if (onSuccess) onSuccess();
      } else {
        toast.error(result.error || 'Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('An unexpected error occurred during upload');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-ink-black/5 shadow-sm space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-ink-black">Upload Media</h3>
        <p className="text-sm text-ink-black/60">Drag and drop or select an image to upload to Cloudinary.</p>
      </div>

      <div 
        className={`relative border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center transition-all ${
          file ? 'border-pine-teal bg-pine-teal/5' : 'border-ink-black/10 hover:border-pine-teal'
        }`}
      >
        <input 
          type="file" 
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          accept="image/*"
        />
        
        {file ? (
          <div className="flex flex-col items-center animate-fade-in">
            <div className="h-12 w-12 bg-pine-teal/20 rounded-full flex items-center justify-center mb-3">
              <Check className="h-6 w-6 text-pine-teal" />
            </div>
            <p className="text-sm font-medium text-ink-black">{file.name}</p>
            <p className="text-xs text-ink-black/40">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            <button 
              onClick={(e) => {
                e.preventDefault();
                setFile(null);
              }}
              className="mt-2 text-xs text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 bg-ink-black/5 rounded-full flex items-center justify-center mb-3">
              <Upload className="h-6 w-6 text-ink-black/40" />
            </div>
            <p className="text-sm font-medium text-ink-black">Click or drag to upload</p>
            <p className="text-xs text-ink-black/40">PNG, JPG, WEBP up to 10MB</p>
          </div>
        )}
      </div>

      <Button 
        onClick={handleUpload}
        disabled={!file || isUploading}
        className="w-full bg-pine-teal hover:bg-pine-teal/90 text-white font-bold h-12"
      >
        {isUploading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Uploading...
          </>
        ) : (
          'Proceed to Cloud'
        )}
      </Button>
    </div>
  );
}
