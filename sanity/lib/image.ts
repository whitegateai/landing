import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { dataset, projectId } from "../env";

const builder = createImageUrlBuilder({ projectId, dataset });

export function imageUrl(source: SanityImageSource, width = 1400) {
  return builder.image(source).width(width).fit("max").auto("format").url();
}
