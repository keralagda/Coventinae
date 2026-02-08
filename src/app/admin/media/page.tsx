'use client';

import { useState, useEffect, useCallback } from 'react';
import { Image as ImageIcon, Trash2, Copy, Search, ExternalLink, HardDrive } from 'lucide-react';
import { MediaUpload } from '@/components/admin/MediaUpload';
import { getMedia, deleteMedia } from '@/actions/media';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import Image from 'next/image';

import { Media } from '@/types/media';

export default function MediaPage() {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchMedia = useCallback(async (showLoading = true) => {
    if (showLoading) setLoading(true);
    try {
      const result = await getMedia();
      if (result.success) {
        setMedia(result.data);
      } else {
        toast.error('Failed to load media gallery');
      }
    } catch {
      toast.error('An error occurred while fetching media');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // loading is true by default, so we don't need to setLoading(true) synchronously here
    fetchMedia(false); 
  }, [fetchMedia]);

  const handleDelete = async (id: string, publicId: string) => {
    if (!confirm('Are you sure you want to delete this asset? This cannot be undone.')) return;

    const result = await deleteMedia(id, publicId);
    if (result.success) {
      toast.success('Asset deleted');
      fetchMedia();
    } else {
      toast.error('Failed to delete asset');
    }
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success('URL copied to clipboard');
  };

  const filteredMedia = media.filter(item => 
    item.fileName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.publicId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 max-w-7xl mx-auto animate-fade-in space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-serif font-bold text-ink-black flex items-center gap-3">
            <HardDrive className="text-pine-teal" /> Media Gallery
          </h1>
          <p className="text-ink-black/60 mt-2">Manage and optimize your website&apos;s visual assets with Cloudinary.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <MediaUpload onSuccess={fetchMedia} />
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-4 rounded-xl border border-ink-black/5 shadow-sm flex items-center gap-4">
            <Search className="h-5 w-5 text-ink-black/40" />
            <Input 
              placeholder="Search assets..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-none focus-visible:ring-0 text-lg p-0"
            />
          </div>

          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="aspect-square bg-porcelain animate-pulse rounded-xl" />
              ))}
            </div>
          ) : filteredMedia.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {filteredMedia.map((item) => (
                <div key={item.id} className="group relative aspect-square bg-porcelain rounded-xl overflow-hidden border border-ink-black/5 shadow-sm transition-all hover:shadow-md">
                  <Image 
                    src={item.url} 
                    alt={item.fileName || 'Asset'} 
                    fill 
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-ink-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4">
                    <p className="text-white text-xs font-medium text-center truncate w-full mb-2">{item.fileName}</p>
                    <div className="flex gap-2">
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="h-8 w-8 bg-white/10 text-white hover:bg-white/20"
                        onClick={() => copyToClipboard(item.url)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="h-8 w-8 bg-white/10 text-white hover:bg-white/20"
                        asChild
                      >
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="h-8 w-8 bg-red-500/20 text-red-500 hover:bg-red-500/40"
                        onClick={() => handleDelete(item.id, item.publicId)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 bg-porcelain rounded-2xl border border-dashed border-ink-black/10">
              <ImageIcon className="h-12 w-12 text-ink-black/20 mb-4" />
              <h3 className="text-xl font-bold text-ink-black">No assets found</h3>
              <p className="text-ink-black/40">Upload your first image to get started.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
