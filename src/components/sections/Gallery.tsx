import { galleryConfig } from '../../config/gallery';

export default function Gallery() {
  if (!galleryConfig.images || galleryConfig.images.length === 0) {
    return null;
  }

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
            {galleryConfig.title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {galleryConfig.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryConfig.images.map((image) => (
            <div
              key={image.id}
              className="aspect-square overflow-hidden rounded-lg bg-neutral-100"
            >
              <img
                src={image.url}
                alt={image.alt || "Gallery image"}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23f5f5f4" width="400" height="400"/%3E%3C/svg%3E';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
