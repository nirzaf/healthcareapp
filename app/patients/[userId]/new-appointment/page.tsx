import Image from "next/image";

import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

interface PageProps {
  params: Promise<{
    userId: string;
  }>;
}

export default async function AppointmentPage({ params }: PageProps) {
  const { userId } = await params;
  const patient = await getPatient(userId);

  if (!patient) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Patient Not Found</h1>
          <p className="mt-2 text-gray-600">
            The requested patient could not be found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm 
            userId={userId}
            patientId={patient.$id}
            type="create"
          />

          <p className="copyright mt-10 py-12"> 2024 CarePluse</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1500}
        width={1500}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}
