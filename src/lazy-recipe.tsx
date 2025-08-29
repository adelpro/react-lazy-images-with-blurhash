import { useState } from "react";
import { BlurhashCanvas } from "react-blurhash";
import { useInViewClass } from "./useViewClass";

/*
recipe example
const recipe = {
  Short_Title: "image_title",
  imageWidth: 500,
  imageHeight: 300,
  Image_4_3_BlurHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
  imageUrl:
    "https://images.unsplash.com/photo-1739367889592-3a992e516a30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D",
};
*/
export default function LazyRecipe({ recipe }) {
  const [imageLoading, setImageLoading] = useState(true);
  const ref = useInViewClass();
  const { Image_4_3_BlurHash, imageUrl, Short_Title, imageWidth, imageHeight } =
    recipe;
  return (
    <div className="relative h-48 w-full overflow-hidden" ref={ref}>
      {imageLoading && (
        <BlurhashCanvas
          hash={Image_4_3_BlurHash}
          width={imageWidth}
          height={imageHeight}
          punch={1}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            transition: "opacity 1.2s ease-out",
            willChange: "transform, opacity",
          }}
        />
      )}

      {imageUrl && (
        <img
          src={imageUrl}
          alt={Short_Title}
          onLoad={() => setImageLoading(false)}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
            imageLoading
              ? "scale-105 opacity-60 blur-md"
              : "scale-100 opacity-100 blur-0"
          }`}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{
            willChange: "transform, opacity, filter",
          }}
        />
      )}
    </div>
  );
}
