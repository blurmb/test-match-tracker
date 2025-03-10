declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.svg" {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.webp";

declare module "*.woff";
declare module "*.woff2";

declare const PUBLIC_URL: string;
