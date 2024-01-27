import { useState } from "react";
import { PhoneForm } from "./sms/PhoneForm";
import { OtpForm } from "./sms/OtpForm";

export function SignInFormSms() {
  const [phone, setPhone] = useState<string | null>(null);
  return (
    <>{phone ? <OtpForm phone={phone} /> : <PhoneForm setPhone={setPhone} />}</>
  );
}
