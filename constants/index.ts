export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "John Green",
    specialty: "General Medicine",
    experience: 15
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Leila Cameron",
    specialty: "Cardiology",
    experience: 12
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "David Livingston",
    specialty: "Neurology",
    experience: 10
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Evan Peter",
    specialty: "Pediatrics",
    experience: 8
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Jane Powell",
    specialty: "Dermatology",
    experience: 12
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Alex Ramirez",
    specialty: "Orthopedics",
    experience: 15
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee",
    specialty: "Family Medicine",
    experience: 10
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz",
    specialty: "Gynecology",
    experience: 8
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
    specialty: "Internal Medicine",
    experience: 12
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
