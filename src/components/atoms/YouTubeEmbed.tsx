import { parseYouTubeEmbedUrl } from "@/lib/utils";

interface YouTubeEmbedProps {
  url: string;
  title?: string;
}

export function YouTubeEmbed({ url, title = "YouTube video" }: YouTubeEmbedProps) {
  const embedUrl = parseYouTubeEmbedUrl(url);
  if (!embedUrl) return null;

  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg">
      <iframe
        src={embedUrl}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}
