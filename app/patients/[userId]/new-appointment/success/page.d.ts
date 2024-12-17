import { Metadata } from "next";

export interface PageProps {
  params: { userId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

declare module "*.tsx" {
  const Page: (props: PageProps) => Promise<JSX.Element>;
  export default Page;
  
  export function generateMetadata(
    props: { params: { userId: string } }
  ): Promise<Metadata>;
}
