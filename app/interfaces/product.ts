export interface Product {
  id: number;
  attributes: Attributes4;
}

interface Attributes4 {
  name: string;
  description: string;
  slug: null;
  specification: string;
  stock: number;
  discount: number;
  precio_compra: number;
  price: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  status: string;
  rating: number;
  image: Image;
  subcategory: Subcategory;
  brand: Brand;
  gallery: Gallery;
}

interface Gallery {
  data: null;
}

interface Brand {
  data: Data3;
}

interface Data3 {
  id: number;
  attributes: Attributes3;
}

interface Attributes3 {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  icon: null;
  route: null;
}

interface Subcategory {
  data: Data2;
}

interface Data2 {
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
  name: string;
  description: null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Image {
  data: Data;
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: Providermetadata;
  createdAt: string;
  updatedAt: string;
}

interface Formats {
  thumbnail: Thumbnail;
}

interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: Providermetadata;
}

interface Providermetadata {
  public_id: string;
  resource_type: string;
}