import Image from 'next/image';

export default function ImageExample() {
  return (
    <div className="space-y-8">
      {/* Regular image with automatic optimization */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Optimized Image</h2>
        <Image
          src="/images/profile.jpg"
          alt="Profile picture"
          width={300}
          height={200}
          className="rounded-lg"
        />
      </div>

      {/* Background image example */}
      <div 
        className="h-64 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: 'url(/images/banner.jpg)' }}
      >
        <div className="flex items-center justify-center h-full">
          <h2 className="text-white text-3xl font-bold">Background Image Example</h2>
        </div>
      </div>

      {/* Responsive image grid */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Image Grid</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Image
            src="/images/gallery1.jpg"
            alt="Gallery image 1"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <Image
            src="/images/gallery2.jpg"
            alt="Gallery image 2"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <Image
            src="/images/gallery3.jpg"
            alt="Gallery image 3"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
} 