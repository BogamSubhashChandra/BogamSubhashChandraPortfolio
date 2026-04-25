"use client";

export default function ResumeModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center">
      <div className="w-[90%] h-[90%] bg-white rounded-lg overflow-hidden relative">
        
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black text-lg"
        >
          ✕
        </button>

        <iframe
        src="/Bogam_Subhash_Chandra_Java_FullStack_Developer.pdf"
        className="w-full h-full"
        />

        {/* Download inside modal */}
        <a
        href="/Bogam_Subhash_Chandra_Java_FullStack_Developer.pdf"
        download
        className="absolute bottom-4 right-4 bg-black text-white px-4 py-2 rounded"
        >
        Download
        </a>
      </div>
    </div>
  );
}