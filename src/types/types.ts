export interface Site {
  id?: string
  name: string
  title: string
  description: string
  logo: any
  pages: Page[]
  footer: Footer
  header: Header
  theme: Theme
}

export interface Page {
  title: string
  slug: string
  description: string
  sections: Section[]
  main: boolean
}

export interface Section {
  type: SectionType
  params: Param[]
  rows: Row[]
}

export interface Header {
  type: HeaderType
}

export interface Footer {
  type: string
  rows: Row[]
}

export interface Row {
  type: string
  blocks: Block[]
}

export interface Block {
  type: BlockType
  classes: string
  params: Param[]
  responsive: Responsive
  animation: Animation
}

export interface Param {
  name: string
  value: any
  type: string
}

export interface Responsive {
  sm: number
  md: number
  lg: number
  xl: number
}

export interface Animation {
  type: AnimationType
  delay: number
  left: boolean
  right: boolean
  top: boolean
  bottom: boolean
}

export interface Theme {
  color: Record<string, string>
  footer: Record<string, string>
  header: Record<string, string>
  block: Record<string, string>
  section: Record<string, string>
  font: Record<string, string>
  breakpoint: Record<string, string>
}

export interface GatsbyImage {
  originalName: string
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export enum AnimationType {
  None = 'NONE',
  Bounce = 'BOUNCE',
  Fade = 'FADE',
  Flip = 'FLIP',
  Pulse = 'PULSE',
  Reveal = 'REVEAL',
  Roll = 'ROLL',
  Rotate = 'ROTATE',
  Shake = 'SHAKE',
  Slide = 'SLIDE',
  Spin = 'SPIN',
  Zoom = 'ZOOM',
}

export enum BlockType {
  BlockSimpleContent = 'BLOCK_SIMPLE_CONTENT',
  BlockGallery = 'BLOCK_GALLERY',
  FooterSimpleContent = 'FOOTER_SIMPLE_CONTENT',
  FooterSocial = 'FOOTER_SOCIAL',
  FooterNewsletter = 'FOOTER_NEWSLETTER',
}

export enum HeaderType {
  HeaderClassic = 'HEADER_CLASSIC',
}

export enum SectionType {
  SectionCustom = 'SECTION_CUSTOM',
  SectionHero = 'SECTION_HERO',
  SectionHeadline = 'SECTION_HEADLINE',
}

export enum ParamType {
  Number = 'NUMBER',
  Text = 'TEXT',
  Image = 'IMAGE',
  Rgba = 'RGBA',
  Color = 'COLOR',
  Radio = 'Radio',
}
