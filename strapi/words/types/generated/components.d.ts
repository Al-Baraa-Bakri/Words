import type { Struct, Schema } from '@strapi/strapi';

export interface ImageGalleryImageGallery extends Struct.ComponentSchema {
  collectionName: 'components_image_gallery_image_galleries';
  info: {
    displayName: 'ImageGallery';
  };
  attributes: {
    galleryTitle: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface HeaderSectionHeaderSection extends Struct.ComponentSchema {
  collectionName: 'components_header_section_header_sections';
  info: {
    displayName: 'HeaderSection';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface FaqItemFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_faq_item_faq_items';
  info: {
    displayName: 'FAQItem';
  };
  attributes: {
    Question: Schema.Attribute.String;
    Answer: Schema.Attribute.String;
  };
}

export interface FaQsSectionFaQsSection extends Struct.ComponentSchema {
  collectionName: 'components_fa_qs_section_fa_qs_sections';
  info: {
    displayName: 'FAQsSection';
    description: '';
  };
  attributes: {
    faqTitle: Schema.Attribute.String;
    questions: Schema.Attribute.Component<'faq-item.faq-item', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'image-gallery.image-gallery': ImageGalleryImageGallery;
      'header-section.header-section': HeaderSectionHeaderSection;
      'faq-item.faq-item': FaqItemFaqItem;
      'fa-qs-section.fa-qs-section': FaQsSectionFaQsSection;
    }
  }
}
