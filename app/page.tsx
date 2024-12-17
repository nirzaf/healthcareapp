import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next/types";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";

export const metadata: Metadata = {
  title: "CarePulse - Home",
  description: "Welcome to CarePulse",
};

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <PasskeyModal />

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <PatientForm />

          <div className="mt-8 flex items-center justify-center gap-1">
            <p>Admin?</p>
            <Link
              href="/?admin=true"
              className="text-14-medium text-primary-500 hover:underline"
            >
              Click here
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
