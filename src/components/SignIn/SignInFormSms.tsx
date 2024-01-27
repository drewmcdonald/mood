import { useState } from "react";
import { PhoneForm } from "./sms/PhoneForm";
import { OtpForm } from "./sms/OtpForm";

export function SignInFormSms() {
  const [phone, setPhone] = useState<string | null>(null);

  if (phone)
    return (
      <div className="animate-in fade-in slide-in-from-right-1 ease-in">
        <OtpForm phone={phone} />
      </div>
    );

  return (
    <div>
      <PhoneForm setPhone={setPhone} />
    </div>
  );
}
