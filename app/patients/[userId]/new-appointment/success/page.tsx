import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";

interface PageProps {
  params: Promise<{ userId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata(
  { params }: { params: Promise<{ userId: string }> }
): Promise<Metadata> {
  const { userId } = await params;
  return {
    title: `Appointment Success - Patient ${userId}`,
    description: "Your appointment has been successfully scheduled",
  };
}

async function getPageData(appointmentId: string) {
  return await getAppointment(appointmentId);
}

export default async function Page({ params, searchParams }: PageProps) {
  const { userId } = await params;
  const resolvedSearchParams = await searchParams;
  const appointmentId = (resolvedSearchParams?.appointmentId as string) || "";
  const appointment = await getPageData(appointmentId);

  if (!appointment) {
    return <div>Appointment not found</div>;
  }

  const doctor = Doctors.find(
    (doctor) => doctor.name === appointment.primaryPhysician
  );

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/images/success.png"
            width={250}
            height={250}
            alt="success"
            className="mx-auto"
          />

          <div className="mt-4 flex flex-col items-center gap-4">
            <h1 className="text-2xl font-bold text-primary">
              Your appointment is booked successfully!
            </h1>
            <p className="text-center text-muted-foreground">
              You will receive a confirmation email with the details of your
              appointment.
            </p>

            <div className="mt-4 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-muted-foreground">
                  Appointment Details:
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Date & Time:</span>{" "}
                  {formatDateTime(appointment.schedule).dateTime}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Doctor:</span>{" "}
                  {appointment.primaryPhysician}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Reason:</span>{" "}
                  {appointment.reason}
                </p>
              </div>

              {doctor && (
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-muted-foreground">Doctor Details:</p>
                  <p className="text-sm">
                    <span className="font-semibold">Specialty:</span>{" "}
                    {doctor.specialty}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Experience:</span>{" "}
                    {doctor.experience} years
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <Button variant="outline" className="shad-primary-btn" asChild>
          <Link href={`/patients/${userId}/new-appointment`}>
            New Appointment
          </Link>
        </Button>
      </section>
    </div>
  );
}
